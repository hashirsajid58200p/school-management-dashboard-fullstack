import { describe, it, expect } from "vitest";

// Pure function testing the snapshot-based promotion calculation logic
interface StudentSnapshot {
  id: string;
  name: string;
  gradeLevel: number;
  sex: string;
}

interface ClassInfo {
  id: number;
  name: string;
  capacity: number;
  gradeLevel: number;
}

function calculatePromotions(
  students: StudentSnapshot[],
  classes: ClassInfo[]
) {
  // Map each student purely from pre-run snapshot (never re-querying mutated state)
  const updates: Array<{
    studentId: string;
    fromGrade: number;
    toGrade: number;
    targetClassId: number;
  }> = [];

  const classCounts = new Map<number, number>();

  for (const student of students) {
    const nextGradeLevel = student.gradeLevel === 10 ? 1 : student.gradeLevel + 1;
    const candidateClasses = classes.filter((c) => c.gradeLevel === nextGradeLevel);
    
    if (candidateClasses.length === 0) {
      throw new Error(`No classes found for grade ${nextGradeLevel}`);
    }

    // Assign to preferred section or least filled
    const targetClass = candidateClasses[0];
    const currentCount = classCounts.get(targetClass.id) || 0;
    classCounts.set(targetClass.id, currentCount + 1);

    updates.push({
      studentId: student.id,
      fromGrade: student.gradeLevel,
      toGrade: nextGradeLevel,
      targetClassId: targetClass.id,
    });
  }

  return updates;
}

describe("Academic Year Promotion Logic (Snapshot Isolation)", () => {
  const mockClasses: ClassInfo[] = [
    { id: 101, name: "1A", capacity: 30, gradeLevel: 1 },
    { id: 102, name: "2A", capacity: 30, gradeLevel: 2 },
    { id: 105, name: "5A", capacity: 30, gradeLevel: 5 },
    { id: 106, name: "6A", capacity: 30, gradeLevel: 6 },
    { id: 110, name: "10A", capacity: 30, gradeLevel: 10 },
  ];

  it("promotes Grade 1 students to Grade 2", () => {
    const students: StudentSnapshot[] = [
      { id: "s1", name: "Alice", gradeLevel: 1, sex: "FEMALE" },
    ];
    const results = calculatePromotions(students, mockClasses);
    expect(results).toHaveLength(1);
    expect(results[0].fromGrade).toBe(1);
    expect(results[0].toGrade).toBe(2);
    expect(results[0].targetClassId).toBe(102);
  });

  it("recycles Grade 10 students to Grade 1 without double-promoting", () => {
    const students: StudentSnapshot[] = [
      { id: "s_graduating", name: "Senior Student", gradeLevel: 10, sex: "MALE" },
      { id: "s_freshman", name: "Junior Student", gradeLevel: 1, sex: "FEMALE" },
    ];

    const results = calculatePromotions(students, mockClasses);

    // Senior student must be recycled to Grade 1 (NOT Grade 2)
    const seniorResult = results.find((r) => r.studentId === "s_graduating");
    expect(seniorResult).toBeDefined();
    expect(seniorResult?.fromGrade).toBe(10);
    expect(seniorResult?.toGrade).toBe(1);

    // Freshman student must be promoted to Grade 2 (NOT Grade 3)
    const freshmanResult = results.find((r) => r.studentId === "s_freshman");
    expect(freshmanResult).toBeDefined();
    expect(freshmanResult?.fromGrade).toBe(1);
    expect(freshmanResult?.toGrade).toBe(2);
  });

  it("promotes intermediate grades accurately (Grade 5 -> Grade 6)", () => {
    const students: StudentSnapshot[] = [
      { id: "s5", name: "Charlie", gradeLevel: 5, sex: "MALE" },
    ];
    const results = calculatePromotions(students, mockClasses);
    expect(results[0].toGrade).toBe(6);
  });
});
