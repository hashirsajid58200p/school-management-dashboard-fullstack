"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getStudentsByClass, getAttendanceRecord, submitAttendance } from "@/lib/actions";
import { toast } from "react-toastify";

interface AttendanceClientProps {
  role: string;
  classes: any[];
  lessons?: any[];
  parentChildren: any[];
  initialRecords: any[];
  monthlySummaries: any[];
}

const AttendanceClient = ({
  role,
  classes,
  parentChildren,
  initialRecords,
  monthlySummaries,
}: AttendanceClientProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // --- TEACHER / ADMIN STATE ---
  const [selectedClassId, setSelectedClassId] = useState<string>(
    role === "teacher" && classes.length > 0 ? String(classes[0].id) : ""
  );
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [students, setStudents] = useState<any[]>([]);
  const [checklist, setChecklist] = useState<{ [studentId: string]: boolean }>({});
  const [saving, setSaving] = useState(false);
  const [loadingStudents, setLoadingStudents] = useState(false);

  // --- PARENT / STUDENT STATE ---
  const [activeStudentId, setActiveStudentId] = useState<string>(
    role === "parent" ? parentChildren[0]?.id || "" : ""
  );

  // --- TRIGGER DATA LOAD FOR TEACHER/ADMIN ---
  useEffect(() => {
    if (role !== "teacher" && role !== "admin") return;
    if (!selectedClassId || !selectedDate) {
      setStudents([]);
      setChecklist({});
      return;
    }

    const loadRollCall = async () => {
      setLoadingStudents(true);
      try {
        const fetchedStudents = await getStudentsByClass(Number(selectedClassId));
        setStudents(fetchedStudents);

        const existingRecords = await getAttendanceRecord(
          Number(selectedClassId),
          selectedDate
        );

        const initialChecklist: { [studentId: string]: boolean } = {};
        fetchedStudents.forEach((student: any) => {
          const record = existingRecords.find((r) => r.studentId === student.id);
          initialChecklist[student.id] = record ? record.present : true;
        });

        setChecklist(initialChecklist);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load class roster.");
      } finally {
        setLoadingStudents(false);
      }
    };

    loadRollCall();
  }, [selectedClassId, selectedDate, role]);

  const handleTogglePresent = (studentId: string) => {
    setChecklist((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }));
  };

  const handleMarkAll = (present: boolean) => {
    const updated: { [studentId: string]: boolean } = {};
    students.forEach((s) => {
      updated[s.id] = present;
    });
    setChecklist(updated);
  };

  const handleRandomize = () => {
    const updated: { [studentId: string]: boolean } = {};
    students.forEach((s) => {
      updated[s.id] = Math.random() > 0.03;
    });
    setChecklist(updated);
    toast.info("Roster randomized! (97% present / 3% absent probability)");
  };

  const handleSaveRollCall = async () => {
    if (!selectedClassId || !selectedDate) return;
    setSaving(true);
    try {
      const attendanceList = Object.entries(checklist).map(([studentId, present]) => ({
        studentId,
        present,
      }));

      const res = await submitAttendance(
        { success: false, error: false },
        {
          classId: Number(selectedClassId),
          date: selectedDate,
          attendance: attendanceList,
        }
      );

      if (res.success) {
        toast.success("Attendance sheet saved successfully!");
      } else {
        toast.error(res.message || "Failed to submit attendance sheet.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while saving the attendance.");
    } finally {
      setSaving(false);
    }
  };

  const handleParentChildChange = (studentId: string) => {
    setActiveStudentId(studentId);
    const params = new URLSearchParams(searchParams);
    params.set("studentId", studentId);
    router.replace(`${pathname}?${params.toString()}`);
  };

  const getPercentageColor = (percentage: number) => {
    if (percentage >= 90) return "text-emerald-700 bg-emerald-50 border border-emerald-100";
    if (percentage >= 75) return "text-amber-700 bg-amber-50 border border-amber-100";
    return "text-rose-700 bg-rose-50 border border-rose-100";
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // --- CALENDAR GENERATION LOGIC ---
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthIdx = today.getMonth();

  // Get total days in the current month
  const totalDaysInMonth = new Date(currentYear, currentMonthIdx + 1, 0).getDate();
  // Get day of the week of the 1st day of the month (0 = Sun, 1 = Mon, ..., 6 = Sat)
  const firstDayIndex = new Date(currentYear, currentMonthIdx, 1).getDay();
  // Shift firstDayIndex so Monday is 0 index, Sunday is 6 index
  const shiftedFirstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const calendarDays = [];
  // Fill leading empty cells for calendar alignment
  for (let i = 0; i < shiftedFirstDayIndex; i++) {
    calendarDays.push({ empty: true, dateNum: 0 });
  }
  // Fill actual month days
  for (let d = 1; d <= totalDaysInMonth; d++) {
    calendarDays.push({ empty: false, dateNum: d });
  }

  // ==========================================
  // RENDER TEACHER & ADMIN SHEET VIEW
  // ==========================================
  if (role === "teacher" || role === "admin") {
    // Supervisor Guard Check
    if (role === "teacher" && classes.length === 0) {
      return (
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-12 text-center text-sm font-medium text-slate-500 shadow-inner">
          Access Denied: You are not assigned as a supervisor for any class, so you cannot mark daily attendance.
        </div>
      );
    }

    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold text-slate-800">Class Attendance Sheet</h1>
        </div>

        {/* SELECT FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex flex-wrap gap-4 items-center w-full">
            <select
              value={selectedClassId}
              onChange={(e) => setSelectedClassId(e.target.value)}
              className="ring-[1.5px] ring-slate-200 px-3 py-1.5 rounded-lg text-xs bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow shadow-sm"
            >
              <option value="">Select Class...</option>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="ring-[1.5px] ring-slate-200 px-3 py-1.5 rounded-lg text-xs bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow shadow-sm font-sans"
            />
          </div>
        </div>

        {selectedClassId ? (
          <div className="flex flex-col gap-4">
            {/* SUB BUTTON CONTROLS */}
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleMarkAll(true)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Mark All Present
                </button>
                <button
                  type="button"
                  onClick={() => handleMarkAll(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Mark All Absent
                </button>
                <button
                  type="button"
                  onClick={handleRandomize}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-slate-800 bg-hsYellow hover:bg-[#ebd05b] shadow-sm transition-all"
                >
                  Randomize Checklist
                </button>
              </div>
            </div>

            {/* CHECKLIST TABLE */}
            <div className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm">
              <table className="w-full mt-0 text-left text-sm">
                <thead>
                  <tr className="text-left text-gray-500 text-sm bg-slate-50">
                    <th className="p-4 font-semibold">Student Name</th>
                    <th className="p-4 font-semibold">Student ID</th>
                    <th className="p-4 font-semibold text-right">Presence Switch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {loadingStudents ? (
                    <tr>
                      <td colSpan={3} className="p-12 text-center text-slate-400 font-medium">
                        Loading student checklists...
                      </td>
                    </tr>
                  ) : students.length > 0 ? (
                    students.map((student) => (
                      <tr key={student.id} className="border-b border-gray-100 even:bg-slate-50/30 text-sm hover:bg-hsPurpleLight/40 transition-all">
                        <td className="p-4 font-semibold text-slate-800">
                          {student.name} {student.surname}
                        </td>
                        <td className="p-4 font-mono text-xs text-slate-400">
                          {student.id}
                        </td>
                        <td className="p-4 text-right flex justify-end items-center gap-3">
                          <span className={`text-xs font-bold uppercase tracking-wider ${checklist[student.id] ? "text-emerald-600" : "text-rose-600"}`}>
                            {checklist[student.id] ? "Present" : "Absent"}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleTogglePresent(student.id)}
                            className={`w-12 h-6 rounded-full p-1 transition-all ${
                              checklist[student.id] ? "bg-emerald-500" : "bg-slate-300"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 bg-white rounded-full transition-all ${
                                checklist[student.id] ? "translate-x-6" : "translate-x-0"
                              }`}
                            />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="p-12 text-center text-slate-400 font-medium">
                        No students enrolled in this class section.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* SAVE BUTTON */}
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={handleSaveRollCall}
                disabled={saving || students.length === 0}
                className={`px-8 py-3 rounded-lg text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all ${
                  saving || students.length === 0
                    ? "bg-slate-300 cursor-not-allowed text-slate-500 shadow-none"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {saving ? "Saving Changes..." : "Save Attendance Sheet"}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50/50 rounded-xl p-12 border border-slate-100 text-center text-sm text-slate-500 font-medium leading-relaxed shadow-inner">
            Please choose a class section to record attendance.
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // RENDER PARENT & STUDENT METRICS, CALENDAR & ARCHIVES
  // ==========================================
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-slate-800">Attendance Logs</h1>
      </div>

      {/* PARENT DROPDOWN FOR SELECTING CHILD */}
      {role === "parent" && parentChildren.length > 0 && (
        <div className="flex flex-col gap-2 max-w-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Select Student</label>
          <select
            value={activeStudentId}
            onChange={(e) => handleParentChildChange(e.target.value)}
            className="ring-[1.5px] ring-slate-200 p-2 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow"
          >
            {parentChildren.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name} {child.surname}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* ACTIVE MONTH CALENDAR VIEW */}
      <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm flex flex-col gap-4">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <h2 className="text-md font-bold text-slate-800">
            Active Month Attendance Calendar ({monthNames[currentMonthIdx]} {currentYear})
          </h2>
          <div className="flex gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-[#d1f7e3] border border-emerald-300 flex items-center justify-center text-[9px] font-bold text-emerald-800">P</div> Present</span>
            <span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-[#ffdce0] border border-rose-300 flex items-center justify-center text-[9px] font-bold text-rose-800">A</div> Absent</span>
          </div>
        </div>

        {/* CALENDAR GRID */}
        <div className="grid grid-cols-7 gap-2 text-center text-xs mt-2">
          {/* Weekday headers */}
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="font-semibold text-slate-400 uppercase py-1">
              {day}
            </div>
          ))}

          {/* Alignment empty cells and actual days */}
          {calendarDays.map((cell, idx) => {
            if (cell.empty) {
              return <div key={`empty-${idx}`} className="p-2 bg-slate-50/20 rounded-md" />;
            }

            // Find if there is an attendance record for this day
            const targetDateStr = `${currentYear}-${String(currentMonthIdx + 1).padStart(2, "0")}-${String(cell.dateNum).padStart(2, "0")}`;
            const record = initialRecords.find((r) => r.date === targetDateStr);
            const isWeekend = new Date(currentYear, currentMonthIdx, cell.dateNum).getDay() === 0 || 
                              new Date(currentYear, currentMonthIdx, cell.dateNum).getDay() === 6;

            let badgeElement = null;

            if (isWeekend) {
              badgeElement = (
                <div className="text-slate-300 font-medium select-none bg-slate-50/50 py-3 rounded-lg border border-dashed border-slate-200">
                  {cell.dateNum}
                </div>
              );
            } else if (record) {
              if (record.present) {
                badgeElement = (
                  <div className="bg-[#d1f7e3] text-emerald-800 border border-emerald-200 font-bold py-3 rounded-lg shadow-sm flex flex-col items-center justify-center relative hover:scale-105 transition-all">
                    <span>{cell.dateNum}</span>
                    <span className="text-[9px] uppercase tracking-wide opacity-90 mt-0.5">P</span>
                  </div>
                );
              } else {
                badgeElement = (
                  <div className="bg-[#ffdce0] text-rose-800 border border-rose-200 font-bold py-3 rounded-lg shadow-sm flex flex-col items-center justify-center relative hover:scale-105 transition-all">
                    <span>{cell.dateNum}</span>
                    <span className="text-[9px] uppercase tracking-wide opacity-90 mt-0.5">A</span>
                  </div>
                );
              }
            } else {
              // No record yet (weekend, future, or not logged)
              const cellDate = new Date(currentYear, currentMonthIdx, cell.dateNum);
              const isFuture = cellDate > today;
              badgeElement = (
                <div className={`py-3 rounded-lg border text-slate-400 font-medium ${isFuture ? "border-slate-100 bg-slate-50/30 opacity-40" : "border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all"}`}>
                  {cell.dateNum}
                </div>
              );
            }

            return <div key={`day-${cell.dateNum}`}>{badgeElement}</div>;
          })}
        </div>
      </div>

      {/* HISTORICAL SUMMARIES SECTION */}
      <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm flex flex-col gap-4">
        <h2 className="text-md font-bold text-slate-800">Historical Monthly Attendance Summaries</h2>
        <p className="text-xs text-slate-400 leading-relaxed mt-0">
          Daily logs for past months are archived and cleared from the database, retaining only monthly overall presence ratios.
        </p>

        <div className="border border-gray-100 rounded-lg overflow-hidden bg-white mt-2">
          <table className="w-full mt-0 text-left text-sm">
            <thead>
              <tr className="text-left text-gray-500 text-sm bg-slate-50">
                <th className="p-4 font-semibold">Academic Month</th>
                <th className="p-4 font-semibold text-right">Attendance Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {monthlySummaries.length > 0 ? (
                monthlySummaries.map((summary) => (
                  <tr key={summary.id} className="border-b border-gray-100 text-sm hover:bg-slate-50/50 transition-all">
                    <td className="p-4 font-semibold text-slate-800">
                      {monthNames[summary.month - 1]} {summary.year}
                    </td>
                    <td className="p-4 text-right">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${getPercentageColor(summary.percentage)}`}>
                        {summary.percentage}% Presence
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="p-8 text-center text-slate-400 font-medium">
                    No historical monthly summary archives found in database.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceClient;
