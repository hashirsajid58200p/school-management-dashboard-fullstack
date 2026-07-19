"use client";

import { useState } from "react";
import { promoteAcademicYear, generateAITimetable } from "@/lib/actions";
import { toast } from "react-toastify";
import Image from "next/image";

const AutomationPage = () => {
  const [promoteLoading, setPromoteLoading] = useState(false);
  const [scheduleLoading, setScheduleLoading] = useState(false);
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

  return (
    <div className="p-6 flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-800">AI Automation & Year-End Transition Panel</h1>
        <p className="text-sm text-gray-500">Automate complex, repetitive management tasks using AI-driven constraints and scheduling algorithms.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* CARD 1: STUDENT PROMOTIONS */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hsSkyLight rounded-lg text-hsSky">
                <Image src="/student.png" alt="" width={28} height={28} />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Year-End Student Promotions</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Simulate the passing of an academic year. Students in grades 1 through 9 are automatically promoted to the next grade class (e.g. 1B to 2B). Graduating students in Grade 10 are recycled back into Grade 1 classes (maintaining section alignment).
            </p>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-6 cursor-pointer" onClick={() => setClearHistory(!clearHistory)}>
              <input
                type="checkbox"
                checked={clearHistory}
                onChange={() => {}}
                className="accent-hsYellow h-4 w-4 cursor-pointer"
              />
              <span className="text-xs font-medium text-gray-700">Clear previous year&apos;s exam and assignment history</span>
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
              <h2 className="text-lg font-semibold text-gray-800">AI Timetable & Scheduler</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Automatically compile a complete weekly schedule containing exactly 25 lessons per class. The backtracking scheduler dynamically assigns lessons to teacher-class combinations while guaranteeing zero double-bookings or resource conflicts.
            </p>
            <div className="p-3 bg-yellow-50 text-yellow-700 border border-yellow-100 rounded-lg text-xs leading-relaxed mb-6">
              <strong>Notice:</strong> Regenerating the timetable resets all current lessons and dependent records (exams, results, and assignments) to schedule new periods.
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
      </div>
    </div>
  );
};

export default AutomationPage;
