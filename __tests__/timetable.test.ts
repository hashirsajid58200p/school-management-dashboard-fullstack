import { describe, it, expect } from "vitest";

// Solver and validation logic extracted from actions.ts generateAITimetable
interface LessonAssignment {
  lessonId: number;
  day: string;
  slot: number;
  classId: number;
  teacherId: string;
}

function validateTimetableConflictFreedom(assignments: LessonAssignment[]): {
  isValid: boolean;
  conflicts: string[];
} {
  const teacherTimeMap = new Set<string>(); // `${teacherId}-${day}-${slot}`
  const classTimeMap = new Set<string>();   // `${classId}-${day}-${slot}`
  const conflicts: string[] = [];

  for (const item of assignments) {
    const teacherKey = `${item.teacherId}-${item.day}-${item.slot}`;
    const classKey = `${item.classId}-${item.day}-${item.slot}`;

    if (teacherTimeMap.has(teacherKey)) {
      conflicts.push(
        `Teacher ${item.teacherId} is double-booked on ${item.day} slot ${item.slot}`
      );
    }
    if (classTimeMap.has(classKey)) {
      conflicts.push(
        `Class ${item.classId} has overlapping lessons on ${item.day} slot ${item.slot}`
      );
    }

    teacherTimeMap.add(teacherKey);
    classTimeMap.add(classKey);
  }

  return {
    isValid: conflicts.length === 0,
    conflicts,
  };
}

describe("AI Timetable Solver Conflict-Freedom", () => {
  it("passes when schedule has no teacher or class conflicts", () => {
    const validSchedule: LessonAssignment[] = [
      { lessonId: 1, day: "Monday", slot: 1, classId: 101, teacherId: "t1" },
      { lessonId: 2, day: "Monday", slot: 1, classId: 102, teacherId: "t2" },
      { lessonId: 3, day: "Monday", slot: 2, classId: 101, teacherId: "t2" },
      { lessonId: 4, day: "Monday", slot: 2, classId: 102, teacherId: "t1" },
    ];

    const result = validateTimetableConflictFreedom(validSchedule);
    expect(result.isValid).toBe(true);
    expect(result.conflicts).toHaveLength(0);
  });

  it("detects when a teacher is double-booked for two different classes at the same time", () => {
    const conflictingSchedule: LessonAssignment[] = [
      { lessonId: 1, day: "Monday", slot: 1, classId: 101, teacherId: "t1" },
      { lessonId: 2, day: "Monday", slot: 1, classId: 102, teacherId: "t1" }, // Teacher t1 double-booked!
    ];

    const result = validateTimetableConflictFreedom(conflictingSchedule);
    expect(result.isValid).toBe(false);
    expect(result.conflicts[0]).toContain("Teacher t1 is double-booked on Monday slot 1");
  });

  it("detects when a class has two different lessons assigned at the same slot", () => {
    const conflictingSchedule: LessonAssignment[] = [
      { lessonId: 1, day: "Tuesday", slot: 3, classId: 101, teacherId: "t1" },
      { lessonId: 2, day: "Tuesday", slot: 3, classId: 101, teacherId: "t2" }, // Class 101 double-booked!
    ];

    const result = validateTimetableConflictFreedom(conflictingSchedule);
    expect(result.isValid).toBe(false);
    expect(result.conflicts[0]).toContain("Class 101 has overlapping lessons on Tuesday slot 3");
  });
});
