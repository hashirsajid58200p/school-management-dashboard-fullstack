"use client";

import { useState } from "react";
import { promoteAcademicYear, generateAITimetable, generateAttendanceSimulation, archiveMonthlyAttendanceLogs } from "@/lib/actions";
import { toast } from "react-toastify";
import Image from "next/image";

const AutomationPage = () => {
  const [promoteLoading, setPromoteLoading] = useState(false);
  const [scheduleLoading, setScheduleLoading] = useState(false);
  const [attendanceLoading, setAttendanceLoading] = useState(false);
  const [archiveLoading, setArchiveLoading] = useState(false);
  const [clearHistory, setClearHistory] = useState(true);

  const handlePromote = async () => {
    if (!window.confirm("Are you sure you want to run the year-end student promotions? This will modify student grade and class records.")) {
      return;
    }
    setPromoteLoading(true);
    try {
      const res = await promoteAcademicYear({ success: false, error: false }, { clearHistory });
      if (res.success) {
        toast.success("Academic year transition completed successfully! Students promoted.");
      } else {
        toast.error(res.message || "Failed to complete promotions.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during promotion.");
    } finally {
      setPromoteLoading(false);
    }
  };

  const handleGenerateSchedule = async () => {
    if (!window.confirm("Are you sure you want to regenerate the timetable? This will wipe out all existing lessons, exams, assignments, and results, and generate a new conflict-free schedule.")) {
      return;
    }
    setScheduleLoading(true);
    try {
      const res = await generateAITimetable({ success: false, error: false });
      if (res.success) {
        toast.success("Conflict-free AI timetable generated successfully!");
      } else {
        toast.error(res.message || "Failed to generate schedule.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during schedule generation.");
    } finally {
      setScheduleLoading(false);
    }
  };

  const handleGenerateAttendance = async () => {
    if (!window.confirm("Are you sure you want to simulate daily attendance? This will overwrite daily attendance logs for the current month with randomly generated records.")) {
      return;
    }
    setAttendanceLoading(true);
    try {
      const res = await generateAttendanceSimulation({ success: false, error: false }, 30);
      if (res.success) {
        toast.success("Daily attendance data generated successfully!");
      } else {
        toast.error(res.message || "Failed to simulate attendance.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during attendance simulation.");
    } finally {
      setAttendanceLoading(false);
    }
  };

  const handleArchiveAttendance = async () => {
    if (!window.confirm("Are you sure you want to archive past months' daily attendance logs? This will calculate each student's monthly presence percentage, save it, and purge daily rows for past months.")) {
      return;
    }
    setArchiveLoading(true);
    try {
      const res = await archiveMonthlyAttendanceLogs({ success: false, error: false });
      if (res.success) {
        toast.success(res.message || "Past months daily logs archived successfully!");
      } else {
        toast.error(res.message || "Failed to archive attendance logs.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during archiving.");
    } finally {
      setArchiveLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-800">AI Automation & Year-End Transition Panel</h1>
        <p className="text-sm text-gray-500">Automate complex, repetitive management tasks using AI-driven constraints and scheduling algorithms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* CARD 1: STUDENT PROMOTIONS */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hsSkyLight rounded-lg text-hsSky">
                <Image src="/student.png" alt="" width={28} height={28} />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Year-End Promotions</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Simulate the passing of an academic year. Students in grades 1 through 9 are automatically promoted to the next grade class (e.g. 1B to 2B). Graduating students in Grade 10 are recycled back into Grade 1.
            </p>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-6 cursor-pointer" onClick={() => setClearHistory(!clearHistory)}>
              <input
                type="checkbox"
                checked={clearHistory}
                onChange={() => {}}
                className="accent-hsYellow h-4 w-4 cursor-pointer"
              />
              <span className="text-xs font-medium text-gray-700">Clear exam and assignment history</span>
            </div>
          </div>

          <button
            onClick={handlePromote}
            disabled={promoteLoading}
            className={`w-full py-3 rounded-lg text-sm font-semibold text-white transition-all ${
              promoteLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-hsSky hover:bg-sky-600 shadow-md hover:shadow-lg"
            }`}
          >
            {promoteLoading ? "Simulating Year Transition..." : "Run Year Transition"}
          </button>
        </div>

        {/* CARD 2: AI TIMETABLE GENERATOR */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hsPurpleLight rounded-lg text-hsPurple">
                <Image src="/class.png" alt="" width={28} height={28} />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">AI Timetable Generator</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Automatically compile a complete weekly schedule containing exactly 25 lessons per class. The backtracking scheduler dynamically assigns lessons to teacher-class combinations while guaranteeing zero conflicts.
            </p>
            <div className="p-3 bg-yellow-50 text-yellow-700 border border-yellow-100 rounded-lg text-xs leading-relaxed mb-6">
              <strong>Notice:</strong> Regenerating the timetable resets all current lessons and dependent records (exams, results, and assignments).
            </div>
          </div>

          <button
            onClick={handleGenerateSchedule}
            disabled={scheduleLoading}
            className={`w-full py-3 rounded-lg text-sm font-semibold text-white transition-all ${
              scheduleLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-hsPurple hover:bg-purple-600 shadow-md hover:shadow-lg"
            }`}
          >
            {scheduleLoading ? "Generating Conflict-Free Timetable..." : "Generate AI Timetable"}
          </button>
        </div>

        {/* CARD 3: DAILY ATTENDANCE SIMULATOR & ARCHIVER */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hsYellowLight rounded-lg text-hsYellow">
                <Image src="/attendance.png" alt="" width={28} height={28} />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Attendance Manager</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Populate real-time daily attendance logs for the active month, and compress history by archiving past daily logs into monthly summary percentages to optimize database storage.
            </p>
            <div className="p-3 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs leading-relaxed mb-6">
              <strong>Note:</strong> Archiving monthly attendance retains long-term overall percentages while clearing raw daily tables.
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleGenerateAttendance}
              disabled={attendanceLoading}
              className={`w-full py-3 rounded-lg text-sm font-semibold text-slate-800 transition-all ${
                attendanceLoading
                  ? "bg-gray-400 cursor-not-allowed text-white shadow-none"
                  : "bg-hsYellow hover:bg-[#ebd05b] shadow-md hover:shadow-lg"
              }`}
            >
              {attendanceLoading ? "Simulating Current Month..." : "Simulate Active Month"}
            </button>
            <button
              onClick={handleArchiveAttendance}
              disabled={archiveLoading}
              className={`w-full py-3 rounded-lg text-sm font-semibold text-white transition-all ${
                archiveLoading
                  ? "bg-gray-400 cursor-not-allowed shadow-none"
                  : "bg-slate-700 hover:bg-slate-800 shadow-md hover:shadow-lg"
              }`}
            >
              {archiveLoading ? "Archiving Daily Logs..." : "Archive Past Months"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
