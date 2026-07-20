"use client";

import { useState } from "react";
import BigCalendar from "./BigCalender";

interface ClassItem {
  id: number;
  name: string;
}

interface LessonItem {
  title: string;
  start: string;
  end: string;
  teacherName: string;
  isBreak: boolean;
  classId: number;
  isMyLesson?: boolean;
}

const TeacherScheduleView = ({
  classes,
  lessons,
}: {
  classes: ClassItem[];
  lessons: LessonItem[];
}) => {
  const [activeClassId, setActiveClassId] = useState<number | null>(
    classes.length > 0 ? classes[0].id : null
  );

  const filteredLessons = (
    activeClassId
      ? lessons.filter((l) => l.classId === activeClassId || l.isBreak)
      : lessons
  ).map((l) => ({
    ...l,
    start: new Date(l.start),
    end: new Date(l.end),
  }));

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* CLASS SELECTION TABS */}
      {classes.length > 0 ? (
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
            Select Class:
          </span>
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setActiveClassId(cls.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all border ${
                activeClassId === cls.id
                  ? "bg-hsSky text-black border-hsSky"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {cls.name}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-xs text-gray-500 italic mb-4">
          No classes assigned to this teacher.
        </div>
      )}

      <div style={{ height: "900px" }}>
        <BigCalendar data={filteredLessons} />
      </div>
    </div>
  );
};

export default TeacherScheduleView;
