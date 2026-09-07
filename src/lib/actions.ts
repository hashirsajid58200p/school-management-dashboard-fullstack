"use server";

import { revalidatePath } from "next/cache";
import {
  ClassSchema,
  ExamSchema,
  ParentSchema,
  StudentSchema,
  SubjectSchema,
  TeacherSchema,
  LessonSchema,
  EventSchema,
  AssignmentSchema,
  ResultSchema,
  AnnouncementSchema,
  FeePaymentSchema,
} from "./formValidationSchemas";
import prisma from "./prisma";
import { auth, requireRole } from "@/lib/auth";
import bcrypt from "bcryptjs";

export type CurrentState = { success: boolean; error: boolean; message?: string };

function getErrorMessage(err: any, defaultMsg: string = "Something went wrong!"): string {
  if (err?.message && (err.message.startsWith("Unauthorized") || err.message.includes("conflict-free") || err.message.includes("Access Denied") || err.message.includes("capacity"))) {
    return err.message;
  }
  if (err?.code === "P2002") {
    const targets = err.meta?.target ? ` (${Array.isArray(err.meta.target) ? err.meta.target.join(", ") : err.meta.target})` : "";
    return `A record with this value already exists${targets}.`;
  }
  if (err?.code === "P2003") {
    return "Foreign key constraint failed. Related record does not exist or is referenced elsewhere.";
  }
  if (err?.code === "P2025") {
    return "Record not found or already deleted.";
  }
  return err?.message || defaultMsg;
}

export const createSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    await requireRole(["admin"]);
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    revalidatePath("/list/subjects");
    return { success: true, error: false, message: "Subject created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create subject") };
  }
};

export const updateSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    await requireRole(["admin"]);
    await prisma.subject.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        teachers: {
          set: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    revalidatePath("/list/subjects");
    return { success: true, error: false, message: "Subject updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update subject") };
  }
};

export const deleteSubject = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin"]);
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });

    revalidatePath("/list/subjects");
    return { success: true, error: false, message: "Subject deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete subject") };
  }
};

export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await requireRole(["admin"]);
    await prisma.class.create({
      data,
    });

    revalidatePath("/list/classes");
    return { success: true, error: false, message: "Class created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create class") };
  }
};

export const updateClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await requireRole(["admin"]);
    await prisma.class.update({
      where: {
        id: data.id,
      },
      data,
    });

    revalidatePath("/list/classes");
    return { success: true, error: false, message: "Class updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update class") };
  }
};

export const deleteClass = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin"]);
    await prisma.class.delete({
      where: {
        id: parseInt(id),
      },
    });

    revalidatePath("/list/classes");
    return { success: true, error: false, message: "Class deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete class") };
  }
};

export const createTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  try {
    await requireRole(["admin"]);

    // 1. Cap class count to at most 3
    if (data.classes && data.classes.length > 3) {
      return { success: false, error: true, message: "A teacher can be assigned to at most 3 classes." };
    }
    // 2. Validate grade level matches teacher level
    if (data.classes && data.classes.length > 0) {
      const selectedClasses = await prisma.class.findMany({
        where: { id: { in: data.classes.map(id => parseInt(id)) } },
        include: { grade: true }
      });
      for (const cls of selectedClasses) {
        const gradeLevel = cls.grade.level;
        if (data.level === "Junior" && (gradeLevel < 1 || gradeLevel > 3)) {
          return { success: false, error: true, message: "Junior teachers can only teach grades 1-3." };
        }
        if (data.level === "Mid" && (gradeLevel < 4 || gradeLevel > 7)) {
          return { success: false, error: true, message: "Mid-level teachers can only teach grades 4-7." };
        }
        if (data.level === "Senior" && (gradeLevel < 8 || gradeLevel > 10)) {
          return { success: false, error: true, message: "Senior teachers can only teach grades 8-10." };
        }
      }
    }

    const hashedPassword = await bcrypt.hash(data.password && data.password.length > 0 ? data.password : "123456", 10);

    const teacherId = crypto.randomUUID();

    await prisma.teacher.create({
      data: {
        id: teacherId,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        password: hashedPassword,
        subjectId: data.subjectId,
        level: data.level,
        classes: {
          connect: data.classes?.map((classId: string) => ({
            id: parseInt(classId),
          })),
        },
      },
    });

    revalidatePath("/list/teachers");
    return { success: true, error: false, message: "Teacher created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create teacher") };
  }
};

export const updateTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  if (!data.id) {
    return { success: false, error: true, message: "Teacher ID is required" };
  }

  try {
    await requireRole(["admin"]);

    // 1. Cap class count to at most 3
    if (data.classes && data.classes.length > 3) {
      return { success: false, error: true, message: "A teacher can be assigned to at most 3 classes." };
    }
    // 2. Validate grade level matches teacher level
    if (data.classes && data.classes.length > 0) {
      const selectedClasses = await prisma.class.findMany({
        where: { id: { in: data.classes.map(id => parseInt(id)) } },
        include: { grade: true }
      });
      for (const cls of selectedClasses) {
        const gradeLevel = cls.grade.level;
        if (data.level === "Junior" && (gradeLevel < 1 || gradeLevel > 3)) {
          return { success: false, error: true, message: "Junior teachers can only teach grades 1-3." };
        }
        if (data.level === "Mid" && (gradeLevel < 4 || gradeLevel > 7)) {
          return { success: false, error: true, message: "Mid-level teachers can only teach grades 4-7." };
        }
        if (data.level === "Senior" && (gradeLevel < 8 || gradeLevel > 10)) {
          return { success: false, error: true, message: "Senior teachers can only teach grades 8-10." };
        }
      }
    }

    const hashedPassword = data.password && data.password.length > 0 ? await bcrypt.hash(data.password, 10) : undefined;

    await prisma.teacher.update({
      where: {
        id: data.id,
      },
      data: {
        ...(hashedPassword ? { password: hashedPassword } : {}),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        subjectId: data.subjectId,
        level: data.level,
        classes: {
          set: data.classes?.map((classId: string) => ({
            id: parseInt(classId),
          })) || [],
        },
      },
    });

    revalidatePath("/list/teachers");
    return { success: true, error: false, message: "Teacher updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update teacher") };
  }
};

export const deleteTeacher = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin"]);

    await prisma.teacher.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/list/teachers");
    return { success: true, error: false, message: "Teacher deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete teacher") };
  }
};

export const createStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  try {
    await requireRole(["admin"]);

    const classItem = await prisma.class.findUnique({
      where: { id: data.classId },
      include: { _count: { select: { students: true } } },
    });

    if (classItem && classItem.capacity === classItem._count.students) {
      return { success: false, error: true, message: "Class is at maximum capacity!" };
    }

    const hashedPassword = await bcrypt.hash(data.password && data.password.length > 0 ? data.password : "123456", 10);

    const studentId = crypto.randomUUID();

    await prisma.student.create({
      data: {
        id: studentId,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        gradeId: data.gradeId,
        classId: data.classId,
        parentId: data.parentId,
        password: hashedPassword,
      },
    });

    revalidatePath("/list/students");
    return { success: true, error: false, message: "Student created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create student") };
  }
};

export const updateStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  if (!data.id) {
    return { success: false, error: true, message: "Student ID is required" };
  }
  try {
    await requireRole(["admin"]);

    const hashedPassword = data.password && data.password.length > 0 ? await bcrypt.hash(data.password, 10) : undefined;

    await prisma.student.update({
      where: {
        id: data.id,
      },
      data: {
        ...(hashedPassword ? { password: hashedPassword } : {}),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone || null,
        address: data.address,
        img: data.img || null,
        bloodType: data.bloodType,
        sex: data.sex,
        birthday: data.birthday,
        gradeId: data.gradeId,
        classId: data.classId,
        parentId: data.parentId,
      },
    });

    revalidatePath("/list/students");
    return { success: true, error: false, message: "Student updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update student") };
  }
};

export const deleteStudent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin"]);

    await prisma.student.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/list/students");
    return { success: true, error: false, message: "Student deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete student") };
  }
};

export const createExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.exam.create({
      data: {
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        lessonId: data.lessonId,
      },
    });

    revalidatePath("/list/exams");
    return { success: true, error: false, message: "Exam created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create exam") };
  }
};

export const updateExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.exam.update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        lessonId: data.lessonId,
      },
    });

    revalidatePath("/list/exams");
    return { success: true, error: false, message: "Exam updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update exam") };
  }
};

export const deleteExam = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.exam.delete({
      where: {
        id: parseInt(id),
      },
    });

    revalidatePath("/list/exams");
    return { success: true, error: false, message: "Exam deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete exam") };
  }
};

export const createParent = async (
  currentState: CurrentState,
  data: ParentSchema
) => {
  try {
    await requireRole(["admin"]);

    const hashedPassword = await bcrypt.hash(data.password && data.password.length > 0 ? data.password : "123456", 10);

    const parentId = crypto.randomUUID();

    await prisma.parent.create({
      data: {
        id: parentId,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
        password: hashedPassword,
      },
    });

    revalidatePath("/list/parents");
    return { success: true, error: false, message: "Parent created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create parent") };
  }
};

export const updateParent = async (
  currentState: CurrentState,
  data: ParentSchema
) => {
  if (!data.id) {
    return { success: false, error: true, message: "Parent ID is required" };
  }
  try {
    await requireRole(["admin"]);

    const hashedPassword = data.password && data.password.length > 0 ? await bcrypt.hash(data.password, 10) : undefined;

    await prisma.parent.update({
      where: {
        id: data.id,
      },
      data: {
        ...(hashedPassword ? { password: hashedPassword } : {}),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
      },
    });

    revalidatePath("/list/parents");
    return { success: true, error: false, message: "Parent updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update parent") };
  }
};

export const deleteParent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin"]);

    await prisma.parent.delete({
      where: {
        id: id,
      },
    });

    revalidatePath("/list/parents");
    return { success: true, error: false, message: "Parent deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete parent") };
  }
};

export const createLesson = async (
  currentState: CurrentState,
  data: LessonSchema
) => {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    // 1. Teacher double-booking check
    const teacherConflict = await prisma.lesson.findFirst({
      where: {
        day: data.day,
        slot: data.slot,
        teacherId: data.teacherId,
      },
    });
    if (teacherConflict) {
      return { success: false, error: true, message: "Teacher is already booked for this slot" };
    }

    // 2. Class double-booking check
    const classConflict = await prisma.lesson.findFirst({
      where: {
        day: data.day,
        slot: data.slot,
        classId: data.classId,
      },
    });
    if (classConflict) {
      return { success: false, error: true, message: "Class already has a lesson in this slot" };
    }

    // 3. Class weekly lesson limit check (cannot exceed 25)
    const count = await prisma.lesson.count({
      where: { classId: data.classId },
    });
    if (count >= 25) {
      return { success: false, error: true, message: "Cannot create lesson: class already has 25 lessons" };
    }

    // Compute times
    const DAY_DATES: Record<string, string> = {
      Monday: "2025-01-06",
      Tuesday: "2025-01-07",
      Wednesday: "2025-01-08",
      Thursday: "2025-01-09",
      Friday: "2025-01-10",
    };
    const SLOT_TIMES = [
      { start: "08:00:00", end: "08:50:00" },
      { start: "09:00:00", end: "09:50:00" },
      { start: "10:00:00", end: "10:50:00" },
      { start: "11:00:00", end: "11:50:00" },
      { start: "13:00:00", end: "13:50:00" },
    ];
    const dateStr = DAY_DATES[data.day];
    const slotTime = SLOT_TIMES[data.slot - 1];
    const startTime = new Date(`${dateStr}T${slotTime.start}`);
    const endTime = new Date(`${dateStr}T${slotTime.end}`);

    await prisma.lesson.create({
      data: {
        name: data.name,
        day: data.day,
        slot: data.slot,
        startTime,
        endTime,
        subjectId: data.subjectId,
        classId: data.classId,
        teacherId: data.teacherId,
      },
    });

    return { success: true, error: false, message: "Lesson created successfully!" };
  } catch (err) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create lesson") };
  }
};

export const updateLesson = async (
  currentState: CurrentState,
  data: LessonSchema
) => {
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  if (!data.id) {
    return { success: false, error: true, message: "Lesson ID is required" };
  }

  try {
    // 1. Teacher double-booking check
    const teacherConflict = await prisma.lesson.findFirst({
      where: {
        day: data.day,
        slot: data.slot,
        teacherId: data.teacherId,
        id: { not: data.id },
      },
    });
    if (teacherConflict) {
      return { success: false, error: true, message: "Teacher is already booked for this slot" };
    }

    // 2. Class double-booking check
    const classConflict = await prisma.lesson.findFirst({
      where: {
        day: data.day,
        slot: data.slot,
        classId: data.classId,
        id: { not: data.id },
      },
    });
    if (classConflict) {
      return { success: false, error: true, message: "Class already has a lesson in this slot" };
    }

    // Compute times
    const DAY_DATES: Record<string, string> = {
      Monday: "2025-01-06",
      Tuesday: "2025-01-07",
      Wednesday: "2025-01-08",
      Thursday: "2025-01-09",
      Friday: "2025-01-10",
    };
    const SLOT_TIMES = [
      { start: "08:00:00", end: "08:50:00" },
      { start: "09:00:00", end: "09:50:00" },
      { start: "10:00:00", end: "10:50:00" },
      { start: "11:00:00", end: "11:50:00" },
      { start: "13:00:00", end: "13:50:00" },
    ];
    const dateStr = DAY_DATES[data.day];
    const slotTime = SLOT_TIMES[data.slot - 1];
    const startTime = new Date(`${dateStr}T${slotTime.start}`);
    const endTime = new Date(`${dateStr}T${slotTime.end}`);

    await prisma.lesson.update({
      where: { id: data.id },
      data: {
        name: data.name,
        day: data.day,
        slot: data.slot,
        startTime,
        endTime,
        subjectId: data.subjectId,
        classId: data.classId,
        teacherId: data.teacherId,
      },
    });

    return { success: true, error: false, message: "Lesson updated successfully!" };
  } catch (err) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update lesson") };
  }
};

export const deleteLesson = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  const { sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    const lesson = await prisma.lesson.findUnique({
      where: { id: parseInt(id) },
    });
    if (lesson) {
      const count = await prisma.lesson.count({
        where: { classId: lesson.classId },
      });
      if (count <= 25) {
        return { success: false, error: true, message: "Cannot delete lesson: class must have exactly 25 lessons" };
      }
    }

    await prisma.lesson.delete({
      where: { id: parseInt(id) },
    });

    return { success: true, error: false, message: "Lesson deleted successfully!" };
  } catch (err) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete lesson") };
  }
};
export const promoteAcademicYear = async (
  currentState: CurrentState,
  data?: { clearHistory?: boolean }
) => {
  try {
    await requireRole(["admin"]);

    await prisma.$transaction(async (tx) => {
      if (data?.clearHistory) {
        await tx.result.deleteMany({});
        await tx.exam.deleteMany({});
        await tx.assignment.deleteMany({});
      }

      // 1. Snapshot all grades and classes
      const grades = await tx.grade.findMany({
        orderBy: { level: "desc" },
        include: { classess: true },
      });

      // 2. Snapshot ALL students in memory BEFORE any mutation
      const studentSnapshots = await tx.student.findMany({
        select: {
          id: true,
          gradeId: true,
          sex: true,
          grade: { select: { level: true } },
        },
      });

      // 3. Precalculate target grade and class for every student based solely on snapshot
      const updates: { studentId: string; targetGradeId: number; targetClassId: number }[] = [];

      for (const student of studentSnapshots) {
        const currentLevel = student.grade.level;

        if (currentLevel === 10) {
          // Recycled to Grade 1
          const grade1 = grades.find((g) => g.level === 1);
          if (grade1 && grade1.classess.length > 0) {
            const boysClass = grade1.classess.find((c) => c.section === "Boys") || grade1.classess[0];
            const girlsClass = grade1.classess.find((c) => c.section === "Girls") || grade1.classess[0];
            const targetClass = student.sex === "MALE" ? boysClass : girlsClass;
            updates.push({
              studentId: student.id,
              targetGradeId: grade1.id,
              targetClassId: targetClass.id,
            });
          }
        } else {
          // Promote to next level (currentLevel + 1)
          const targetGrade = grades.find((g) => g.level === currentLevel + 1);
          if (targetGrade && targetGrade.classess.length > 0) {
            const boysClass = targetGrade.classess.find((c) => c.section === "Boys") || targetGrade.classess[0];
            const girlsClass = targetGrade.classess.find((c) => c.section === "Girls") || targetGrade.classess[0];
            const targetClass = student.sex === "MALE" ? boysClass : girlsClass;
            updates.push({
              studentId: student.id,
              targetGradeId: targetGrade.id,
              targetClassId: targetClass.id,
            });
          }
        }
      }

      // 4. Apply calculated updates inside the transaction
      for (const u of updates) {
        await tx.student.update({
          where: { id: u.studentId },
          data: {
            gradeId: u.targetGradeId,
            classId: u.targetClassId,
          },
        });
      }
    });

    revalidatePath("/list/students");
    revalidatePath("/list/classes");
    return { success: true, error: false, message: "Academic year promoted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to promote academic year") };
  }
};

export const generateAITimetable = async (
  currentState: CurrentState
) => {
  try {
    await requireRole(["admin"]);

    await prisma.$transaction(async (tx) => {
      // Fetch classes and teachers
      const classes = await tx.class.findMany({
        include: {
          teachers: {
            include: {
              subject: true,
            },
          },
        },
      });

      const allTeachers = await tx.teacher.findMany({
        include: {
          subject: true,
        },
      });

      const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

      const SLOT_TIMES = [
        { start: "08:00:00", end: "08:50:00" },
        { start: "09:00:00", end: "09:50:00" },
        { start: "10:00:00", end: "10:50:00" },
        { start: "11:00:00", end: "11:50:00" },
        { start: "13:00:00", end: "13:50:00" },
      ];

      const DAY_DATES: Record<string, string> = {
        Monday: "2025-01-06",
        Tuesday: "2025-01-07",
        Wednesday: "2025-01-08",
        Thursday: "2025-01-09",
        Friday: "2025-01-10",
      };

      const teacherBookings: Record<string, Record<string, Record<number, boolean>>> = {};
      const classLessons: Record<number, any[]> = {};
      for (const cls of classes) {
        classLessons[cls.id] = [];
      }

      const solve = (classIndex: number, dayIndex: number, slotIndex: number): boolean => {
        if (classIndex === classes.length) {
          return true;
        }

        const nextSlot = (slotIndex + 1) % 5;
        const nextDay = nextSlot === 0 ? (dayIndex + 1) % 5 : dayIndex;
        const nextClass = nextSlot === 0 && nextDay === 0 ? classIndex + 1 : classIndex;

        const currentClass = classes[classIndex];
        const dayName = Days[dayIndex];
        const slotNum = slotIndex + 1;

        const classTeachers = [...currentClass.teachers].sort(() => Math.random() - 0.5);
        const candidates = classTeachers.length > 0 ? classTeachers : allTeachers;

        for (const teacher of candidates) {
          if (!teacher.subjectId) continue;
          const teacherId = teacher.id;

          if (teacherBookings[teacherId]?.[dayName]?.[slotNum]) {
            continue;
          }

          if (!teacherBookings[teacherId]) teacherBookings[teacherId] = {};
          if (!teacherBookings[teacherId][dayName]) teacherBookings[teacherId][dayName] = {};
          teacherBookings[teacherId][dayName][slotNum] = true;

          const dateStr = DAY_DATES[dayName];
          const slotTime = SLOT_TIMES[slotNum - 1];
          const startTime = new Date(`${dateStr}T${slotTime.start}`);
          const endTime = new Date(`${dateStr}T${slotTime.end}`);

          classLessons[currentClass.id].push({
            name: `${currentClass.name} - ${teacher.subject?.name || "Lesson"}`,
            day: dayName,
            slot: slotNum,
            startTime,
            endTime,
            subjectId: teacher.subjectId,
            classId: currentClass.id,
            teacherId: teacher.id,
          });

          if (solve(nextClass, nextDay, nextSlot)) {
            return true;
          }

          teacherBookings[teacherId][dayName][slotNum] = false;
          classLessons[currentClass.id].pop();
        }

        return false;
      };

      // Wipe old schedule inside transaction
      await tx.result.deleteMany({});
      await tx.exam.deleteMany({});
      await tx.assignment.deleteMany({});
      await tx.lesson.deleteMany({});

      const solved = solve(0, 0, 0);
      if (!solved) {
        throw new Error("Could not find a conflict-free schedule");
      }

      // Insert all generated lessons into DB
      const lessonsToInsert = Object.values(classLessons).flat();
      await tx.lesson.createMany({
        data: lessonsToInsert,
      });
    });

    revalidatePath("/list/lessons");
    return { success: true, error: false, message: "AI timetable generated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to generate timetable") };
  }
};

export const updateProfile = async (
  currentState: CurrentState,
  data: {
    phone?: string;
    address?: string;
    password?: string;
    currentPassword?: string;
    email?: string;
  }
) => {
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || !role) {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    if (data.password && data.password.length > 0 && data.currentPassword !== undefined) {
      let existingRecord: any = null;
      if (role === "admin") {
        existingRecord = await prisma.admin.findUnique({ where: { id: userId } });
      } else if (role === "teacher") {
        existingRecord = await prisma.teacher.findUnique({ where: { id: userId } });
      } else if (role === "student") {
        existingRecord = await prisma.student.findUnique({ where: { id: userId } });
      } else if (role === "parent") {
        existingRecord = await prisma.parent.findUnique({ where: { id: userId } });
      }

      if (!existingRecord?.password || !(await bcrypt.compare(data.currentPassword, existingRecord.password))) {
        return { success: false, error: true, message: "Current password does not match." };
      }
    }

    const hashedPassword = data.password && data.password.length > 0 ? await bcrypt.hash(data.password, 10) : undefined;

    const updateData = {
      ...(data.phone !== undefined && { phone: data.phone }),
      ...(data.address !== undefined && { address: data.address }),
      ...(hashedPassword ? { password: hashedPassword } : {}),
      ...(data.email !== undefined && { email: data.email }),
    };

    if (role === "admin") {
      await prisma.admin.update({
        where: { id: userId },
        data: {
          ...(hashedPassword ? { password: hashedPassword } : {}),
          ...(data.email !== undefined && { email: data.email }),
        },
      });
    } else if (role === "teacher") {
      await prisma.teacher.update({
        where: { id: userId },
        data: updateData,
      });
    } else if (role === "student") {
      await prisma.student.update({
        where: { id: userId },
        data: updateData,
      });
    } else if (role === "parent") {
      await prisma.parent.update({
        where: { id: userId },
        data: updateData,
      });
    }

    revalidatePath("/profile");
    revalidatePath("/settings");
    return { success: true, error: false, message: "Profile updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update profile") };
  }
};

export const generateAttendanceSimulation = async (
  currentState: CurrentState,
  days: number = 30
) => {
  try {
    await requireRole(["admin"]);

    await prisma.$transaction(async (tx) => {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth();

      const students = await tx.student.findMany({
        select: { id: true, classId: true },
      });

      const attendanceRecords = [];
      const startOfCurrentMonth = new Date(Date.UTC(currentYear, currentMonth, 1));

      await tx.attendance.deleteMany({
        where: {
          date: {
            gte: startOfCurrentMonth,
          },
        },
      });

      for (let day = 1; day <= today.getDate(); day++) {
        const currentDate = new Date(Date.UTC(currentYear, currentMonth, day));
        const dayOfWeek = currentDate.getUTCDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) continue;

        for (const student of students) {
          const isPresent = Math.random() > 0.03;
          attendanceRecords.push({
            date: currentDate,
            present: isPresent,
            studentId: student.id,
            classId: student.classId,
          });
        }
      }

      if (attendanceRecords.length > 0) {
        await tx.attendance.createMany({
          data: attendanceRecords,
        });
      }

      await tx.monthlyAttendanceSummary.deleteMany({});

      const summaries = [];
      const prevMonths = [
        { month: currentMonth === 0 ? 12 : currentMonth, year: currentMonth === 0 ? currentYear - 1 : currentYear },
        { month: currentMonth <= 1 ? 11 + currentMonth : currentMonth - 1, year: currentMonth <= 1 ? currentYear - 1 : currentYear }
      ];

      for (const pm of prevMonths) {
        for (const student of students) {
          const percentage = parseFloat((86 + Math.random() * 12).toFixed(1));
          summaries.push({
            studentId: student.id,
            month: pm.month,
            year: pm.year,
            percentage: percentage,
          });
        }
      }

      if (summaries.length > 0) {
        await tx.monthlyAttendanceSummary.createMany({
          data: summaries,
        });
      }
    });

    revalidatePath("/list/attendance");
    return { success: true, error: false, message: "Attendance simulation generated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to generate attendance simulation") };
  }
};

export const submitAttendance = async (
  currentState: CurrentState,
  data: {
    classId: number;
    date: string;
    attendance: { studentId: string; present: boolean }[];
  }
) => {
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || (role !== "teacher" && role !== "admin")) {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    if (role === "teacher") {
      const supervisedClass = await prisma.class.findFirst({
        where: { id: data.classId, supervisorId: userId },
      });
      if (!supervisedClass) {
        return {
          success: false,
          error: true,
          message: "Access Denied: Only the class supervisor can record attendance.",
        };
      }
    }

    const recordDate = new Date(data.date);

    // Atomic race-condition safe upsert using unique constraint on [studentId, date]
    await prisma.$transaction(
      data.attendance.map((item) =>
        prisma.attendance.upsert({
          where: {
            studentId_date: {
              studentId: item.studentId,
              date: recordDate,
            },
          },
          update: {
            present: item.present,
            classId: data.classId,
          },
          create: {
            studentId: item.studentId,
            classId: data.classId,
            date: recordDate,
            present: item.present,
          },
        })
      )
    );

    revalidatePath("/list/attendance");
    return { success: true, error: false, message: "Attendance submitted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to submit attendance") };
  }
};

export const getStudentsByClass = async (classId: number) => {
  try {
    const { userId } = await auth();
    if (!userId) return [];
    if (!classId || isNaN(classId) || classId <= 0) return [];

    return await prisma.student.findMany({
      where: { classId },
      select: { id: true, name: true, surname: true },
      orderBy: { name: "asc" },
    });
  } catch (err) {
    console.error("Error in getStudentsByClass:", err);
    return [];
  }
};

export const getAttendanceRecord = async (classId: number, date: string) => {
  try {
    const { userId } = await auth();
    if (!userId) return [];
    if (!classId || !date) return [];

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return [];

    return await prisma.attendance.findMany({
      where: {
        classId,
        date: parsedDate,
      },
    });
  } catch (err) {
    console.error("Error in getAttendanceRecord:", err);
    return [];
  }
};

export const archiveMonthlyAttendanceLogs = async (currentState: CurrentState) => {
  try {
    await requireRole(["admin"]);

    return await prisma.$transaction(async (tx) => {
      const today = new Date();
      const startOfCurrentMonth = new Date(Date.UTC(today.getFullYear(), today.getMonth(), 1));

      const pastLogs = await tx.attendance.findMany({
        where: {
          date: {
            lt: startOfCurrentMonth,
          },
        },
      });

      if (pastLogs.length === 0) {
        return { success: true, error: false, message: "No past months daily logs found to archive." };
      }

      const groupings: {
        [key: string]: {
          studentId: string;
          year: number;
          month: number;
          present: number;
          total: number;
        };
      } = {};

      for (const log of pastLogs) {
        const logDate = new Date(log.date);
        const year = logDate.getFullYear();
        const month = logDate.getMonth() + 1;
        const key = `${log.studentId}_${year}_${month}`;

        if (!groupings[key]) {
          groupings[key] = {
            studentId: log.studentId,
            year,
            month,
            present: 0,
            total: 0,
          };
        }

        groupings[key].total += 1;
        if (log.present) {
          groupings[key].present += 1;
        }
      }

      for (const group of Object.values(groupings)) {
        const percentage = parseFloat(((group.present / group.total) * 100).toFixed(1));

        const existing = await tx.monthlyAttendanceSummary.findFirst({
          where: {
            studentId: group.studentId,
            month: group.month,
            year: group.year,
          },
        });

        if (existing) {
          await tx.monthlyAttendanceSummary.update({
            where: { id: existing.id },
            data: { percentage },
          });
        } else {
          await tx.monthlyAttendanceSummary.create({
            data: {
              studentId: group.studentId,
              month: group.month,
              year: group.year,
              percentage,
            },
          });
        }
      }

      await tx.attendance.deleteMany({
        where: {
          date: {
            lt: startOfCurrentMonth,
          },
        },
      });

      revalidatePath("/list/attendance");
      return { success: true, error: false, message: "Past months daily logs archived successfully!" };
    });
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to archive logs") };
  }
};

export const createEvent = async (
  currentState: CurrentState,
  data: EventSchema
) => {
  try {
    await requireRole(["admin"]);

    await prisma.event.create({
      data: {
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        classId: data.classId ? Number(data.classId) : null,
      },
    });

    revalidatePath("/list/events");
    return { success: true, error: false, message: "Event created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create event") };
  }
};

export const updateEvent = async (
  currentState: CurrentState,
  data: EventSchema
) => {
  try {
    await requireRole(["admin"]);

    await prisma.event.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        startTime: data.startTime,
        endTime: data.endTime,
        classId: data.classId ? Number(data.classId) : null,
      },
    });

    revalidatePath("/list/events");
    return { success: true, error: false, message: "Event updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update event") };
  }
};

export const deleteEvent = async (
  currentState: CurrentState,
  data: FormData
) => {
  try {
    await requireRole(["admin"]);

    const id = data.get("id") as string;
    await prisma.event.delete({
      where: { id: Number(id) },
    });

    revalidatePath("/list/events");
    return { success: true, error: false, message: "Event deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete event") };
  }
};

export const createAssignment = async (
  currentState: CurrentState,
  data: AssignmentSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.assignment.create({
      data: {
        title: data.title,
        startDate: new Date(data.startDate),
        dueDate: new Date(data.dueDate),
        lessonId: data.lessonId,
      },
    });

    revalidatePath("/list/assignments");
    return { success: true, error: false, message: "Assignment created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create assignment") };
  }
};

export const updateAssignment = async (
  currentState: CurrentState,
  data: AssignmentSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.assignment.update({
      where: { id: data.id },
      data: {
        title: data.title,
        startDate: new Date(data.startDate),
        dueDate: new Date(data.dueDate),
        lessonId: data.lessonId,
      },
    });

    revalidatePath("/list/assignments");
    return { success: true, error: false, message: "Assignment updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update assignment") };
  }
};

export const deleteAssignment = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.assignment.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/list/assignments");
    return { success: true, error: false, message: "Assignment deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete assignment") };
  }
};

export const createResult = async (
  currentState: CurrentState,
  data: ResultSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.result.create({
      data: {
        score: data.score,
        studentId: data.studentId,
        ...(data.examId ? { examId: Number(data.examId) } : {}),
        ...(data.assignmentId ? { assignmentId: Number(data.assignmentId) } : {}),
      },
    });

    revalidatePath("/list/results");
    return { success: true, error: false, message: "Result recorded successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to record result") };
  }
};

export const updateResult = async (
  currentState: CurrentState,
  data: ResultSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.result.update({
      where: { id: data.id },
      data: {
        score: data.score,
        studentId: data.studentId,
        examId: data.examId ? Number(data.examId) : null,
        assignmentId: data.assignmentId ? Number(data.assignmentId) : null,
      },
    });

    revalidatePath("/list/results");
    return { success: true, error: false, message: "Result updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update result") };
  }
};

export const deleteResult = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.result.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/list/results");
    return { success: true, error: false, message: "Result deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete result") };
  }
};

export const createAnnouncement = async (
  currentState: CurrentState,
  data: AnnouncementSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.announcement.create({
      data: {
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        ...(data.classId ? { classId: Number(data.classId) } : {}),
      },
    });

    revalidatePath("/list/announcements");
    return { success: true, error: false, message: "Announcement created successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to create announcement") };
  }
};

export const updateAnnouncement = async (
  currentState: CurrentState,
  data: AnnouncementSchema
) => {
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.announcement.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        classId: data.classId ? Number(data.classId) : null,
      },
    });

    revalidatePath("/list/announcements");
    return { success: true, error: false, message: "Announcement updated successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to update announcement") };
  }
};

export const deleteAnnouncement = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin", "teacher"]);

    await prisma.announcement.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/list/announcements");
    return { success: true, error: false, message: "Announcement deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete announcement") };
  }
};

export const createFeePayment = async (
  currentState: CurrentState,
  data: FeePaymentSchema
) => {
  try {
    await requireRole(["admin"]);

    await prisma.feePayment.create({
      data: {
        amount: data.amount,
        type: data.type,
        category: data.category,
        date: new Date(data.date),
        description: data.description || null,
        ...(data.studentId ? { studentId: data.studentId } : {}),
      },
    });

    revalidatePath("/admin");
    return { success: true, error: false, message: "Financial record saved successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to save financial record") };
  }
};

export const deleteFeePayment = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await requireRole(["admin"]);

    await prisma.feePayment.delete({
      where: { id: parseInt(id) },
    });

    revalidatePath("/admin");
    return { success: true, error: false, message: "Financial record deleted successfully!" };
  } catch (err: any) {
    console.error(err);
    return { success: false, error: true, message: getErrorMessage(err, "Failed to delete financial record") };
  }
};

export type GlobalSearchResult = {
  id: string | number;
  title: string;
  subtitle?: string;
  category: "Teacher" | "Student" | "Class" | "Lesson" | "Event";
  url: string;
};

export const searchGlobal = async (query: string): Promise<GlobalSearchResult[]> => {
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || !role || !query || query.trim().length < 2) {
    return [];
  }

  const cleanQuery = query.trim();

  try {
    let teacherClassIds: number[] = [];
    let studentClassId: number | null = null;
    let parentChildrenClassIds: number[] = [];

    if (role === "teacher") {
      const teacher = await prisma.teacher.findUnique({
        where: { id: userId },
        select: { classes: { select: { id: true } } },
      });
      teacherClassIds = teacher?.classes.map((c) => c.id) || [];
    } else if (role === "student") {
      const student = await prisma.student.findUnique({
        where: { id: userId },
        select: { classId: true },
      });
      studentClassId = student?.classId || null;
    } else if (role === "parent") {
      const children = await prisma.student.findMany({
        where: { parentId: userId },
        select: { classId: true },
      });
      parentChildrenClassIds = children.map((c) => c.classId).filter(Boolean) as number[];
    }

    const results: GlobalSearchResult[] = [];

    // 1. Query Teachers
    let teacherWhere: any = {};
    if (role === "admin") {
      teacherWhere = {
        OR: [
          { name: { contains: cleanQuery } },
          { surname: { contains: cleanQuery } },
        ],
      };
    } else if (role === "teacher") {
      teacherWhere = {
        id: userId,
        OR: [
          { name: { contains: cleanQuery } },
          { surname: { contains: cleanQuery } },
        ],
      };
    } else if (role === "student") {
      if (studentClassId !== null) {
        teacherWhere = {
          classes: { some: { id: studentClassId } },
          OR: [
            { name: { contains: cleanQuery } },
            { surname: { contains: cleanQuery } },
          ],
        };
      } else {
        teacherWhere = null;
      }
    } else if (role === "parent") {
      if (parentChildrenClassIds.length > 0) {
        teacherWhere = {
          classes: { some: { id: { in: parentChildrenClassIds } } },
          OR: [
            { name: { contains: cleanQuery } },
            { surname: { contains: cleanQuery } },
          ],
        };
      } else {
        teacherWhere = null;
      }
    }

    if (teacherWhere) {
      const teachers = await prisma.teacher.findMany({
        where: teacherWhere,
        take: 3,
        select: { id: true, name: true, surname: true },
      });
      teachers.forEach((t) => {
        results.push({
          id: t.id,
          title: `${t.name} ${t.surname}`,
          category: "Teacher",
          url: `/list/teachers/${t.id}`,
        });
      });
    }

    // 2. Query Students
    let studentWhere: any = {};
    if (role === "admin") {
      studentWhere = {
        OR: [
          { name: { contains: cleanQuery } },
          { surname: { contains: cleanQuery } },
        ],
      };
    } else if (role === "teacher") {
      if (teacherClassIds.length > 0) {
        studentWhere = {
          classId: { in: teacherClassIds },
          OR: [
            { name: { contains: cleanQuery } },
            { surname: { contains: cleanQuery } },
          ],
        };
      } else {
        studentWhere = null;
      }
    } else if (role === "student") {
      if (studentClassId !== null) {
        studentWhere = {
          classId: studentClassId,
          OR: [
            { name: { contains: cleanQuery } },
            { surname: { contains: cleanQuery } },
          ],
        };
      } else {
        studentWhere = null;
      }
    } else if (role === "parent") {
      studentWhere = {
        parentId: userId,
        OR: [
          { name: { contains: cleanQuery } },
          { surname: { contains: cleanQuery } },
        ],
      };
    }

    if (studentWhere) {
      const students = await prisma.student.findMany({
        where: studentWhere,
        take: 3,
        select: { id: true, name: true, surname: true },
      });
      students.forEach((s) => {
        results.push({
          id: s.id,
          title: `${s.name} ${s.surname}`,
          category: "Student",
          url: `/list/students/${s.id}`,
        });
      });
    }

    // 3. Query Classes
    let classWhere: any = {};
    if (role === "admin") {
      classWhere = { name: { contains: cleanQuery } };
    } else if (role === "teacher") {
      if (teacherClassIds.length > 0) {
        classWhere = { id: { in: teacherClassIds }, name: { contains: cleanQuery } };
      } else {
        classWhere = null;
      }
    } else if (role === "student") {
      if (studentClassId !== null) {
        classWhere = { id: studentClassId, name: { contains: cleanQuery } };
      } else {
        classWhere = null;
      }
    } else if (role === "parent") {
      if (parentChildrenClassIds.length > 0) {
        classWhere = { id: { in: parentChildrenClassIds }, name: { contains: cleanQuery } };
      } else {
        classWhere = null;
      }
    }

    if (classWhere) {
      const classes = await prisma.class.findMany({
        where: classWhere,
        take: 3,
        select: { id: true, name: true },
      });
      classes.forEach((c) => {
        results.push({
          id: c.id,
          title: c.name,
          category: "Class",
          url: `/list/classes?search=${c.name}`,
        });
      });
    }

    // 4. Query Lessons
    let lessonWhere: any = {};
    if (role === "admin") {
      lessonWhere = { name: { contains: cleanQuery } };
    } else if (role === "teacher") {
      if (teacherClassIds.length > 0) {
        lessonWhere = { classId: { in: teacherClassIds }, name: { contains: cleanQuery } };
      } else {
        lessonWhere = null;
      }
    } else if (role === "student") {
      if (studentClassId !== null) {
        lessonWhere = { classId: studentClassId, name: { contains: cleanQuery } };
      } else {
        lessonWhere = null;
      }
    } else if (role === "parent") {
      if (parentChildrenClassIds.length > 0) {
        lessonWhere = { classId: { in: parentChildrenClassIds }, name: { contains: cleanQuery } };
      } else {
        lessonWhere = null;
      }
    }

    if (lessonWhere) {
      const lessons = await prisma.lesson.findMany({
        where: lessonWhere,
        take: 3,
        select: { id: true, name: true },
      });
      lessons.forEach((l) => {
        results.push({
          id: l.id,
          title: l.name,
          category: "Lesson",
          url: `/list/lessons?search=${l.name}`,
        });
      });
    }

    // 5. Query Events
    let eventWhere: any = {};
    if (role === "admin") {
      eventWhere = {
        OR: [
          { title: { contains: cleanQuery } },
          { description: { contains: cleanQuery } },
        ],
      };
    } else if (role === "teacher") {
      eventWhere = {
        AND: [
          { OR: [ { classId: null }, { classId: { in: teacherClassIds } } ] },
          { OR: [ { title: { contains: cleanQuery } }, { description: { contains: cleanQuery } } ] },
        ],
      };
    } else if (role === "student") {
      if (studentClassId !== null) {
        eventWhere = {
          AND: [
            { OR: [ { classId: null }, { classId: studentClassId } ] },
            { OR: [ { title: { contains: cleanQuery } }, { description: { contains: cleanQuery } } ] },
          ],
        };
      } else {
        eventWhere = {
          classId: null,
          OR: [
            { title: { contains: cleanQuery } },
            { description: { contains: cleanQuery } },
          ],
        };
      }
    } else if (role === "parent") {
      if (parentChildrenClassIds.length > 0) {
        eventWhere = {
          AND: [
            { OR: [ { classId: null }, { classId: { in: parentChildrenClassIds } } ] },
            { OR: [ { title: { contains: cleanQuery } }, { description: { contains: cleanQuery } } ] },
          ],
        };
      } else {
        eventWhere = {
          classId: null,
          OR: [
            { title: { contains: cleanQuery } },
            { description: { contains: cleanQuery } },
          ],
        };
      }
    }

    if (eventWhere) {
      const events = await prisma.event.findMany({
        where: eventWhere,
        take: 3,
        select: { id: true, title: true, description: true },
      });
      events.forEach((e) => {
        results.push({
          id: e.id,
          title: e.title,
          subtitle: e.description,
          category: "Event",
          url: `/list/events?search=${e.title}`,
        });
      });
    }

    return results;
  } catch (err) {
    console.error(err);
    return [];
  }
};

// --- CHAT SYSTEM ACTIONS ---

export const getUnreadMessagesCount = async () => {
  const { userId } = await auth();
  if (!userId) return 0;
  try {
    return await prisma.message.count({
      where: { receiverId: userId, isRead: false },
    });
  } catch (err) {
    console.error(err);
    return 0;
  }
};

export const markConversationAsRead = async (senderId: string) => {
  const { userId } = await auth();
  if (!userId) return { success: false };
  try {
    await prisma.message.updateMany({
      where: { senderId, receiverId: userId, isRead: false },
      data: { isRead: true },
    });
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

export const getChatHistory = async (participantId: string) => {
  const { userId } = await auth();
  if (!userId) return [];
  try {
    // 1. Fetch historical messages
    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: participantId },
          { senderId: participantId, receiverId: userId },
        ],
      },
      orderBy: { createdAt: "asc" },
    });

    // 2. Mark incoming messages as read
    await prisma.message.updateMany({
      where: { senderId: participantId, receiverId: userId, isRead: false },
      data: { isRead: true },
    });

    return messages;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getChatParticipants = async () => {
  const { userId, sessionClaims } = await auth();
  if (!userId) return [];
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    let rawContacts: { id: string; name: string; role: string; img?: string | null; subject?: string }[] = [];

    // 1. Fetch allowed contacts based on active academic role
    if (role === "admin") {
      const teachers = await prisma.teacher.findMany({
        select: { id: true, name: true, surname: true, img: true, subject: { select: { name: true } } },
      });
      const students = await prisma.student.findMany({ select: { id: true, name: true, surname: true, img: true } });
      const parents = await prisma.parent.findMany({ select: { id: true, name: true, surname: true } });

      rawContacts = [
        ...teachers.map(t => ({ id: t.id, name: `${t.name} ${t.surname}`, role: "teacher", img: t.img, subject: t.subject.name })),
        ...students.map(s => ({ id: s.id, name: `${s.name} ${s.surname}`, role: "student", img: s.img })),
        ...parents.map(p => ({ id: p.id, name: `${p.name} ${p.surname}`, role: "parent" })),
      ];
    } else if (role === "teacher") {
      const teacher = await prisma.teacher.findUnique({
        where: { id: userId },
        include: {
          classes: {
            include: {
              students: {
                include: {
                  parent: true,
                },
              },
            },
          },
        },
      });

      if (teacher) {
        // Collect students
        const studentMap = new Map<string, { id: string; name: string; role: string; img?: string | null }>();
        const parentMap = new Map<string, { id: string; name: string; role: string }>();

        teacher.classes.forEach(cls => {
          cls.students.forEach(std => {
            studentMap.set(std.id, { id: std.id, name: `${std.name} ${std.surname}`, role: "student", img: std.img });
            if (std.parent) {
              parentMap.set(std.parent.id, { id: std.parent.id, name: `${std.parent.name} ${std.parent.surname}`, role: "parent" });
            }
          });
        });

        rawContacts = [...Array.from(studentMap.values()), ...Array.from(parentMap.values())];
      }
    } else if (role === "student") {
      const student = await prisma.student.findUnique({
        where: { id: userId },
        include: {
          class: {
            include: {
              teachers: {
                include: {
                  subject: true,
                },
              },
            },
          },
        },
      });

      if (student && student.class) {
        rawContacts = student.class.teachers.map(t => ({
          id: t.id,
          name: `${t.name} ${t.surname}`,
          role: "teacher",
          img: t.img,
          subject: t.subject.name,
        }));
      }
    } else if (role === "parent") {
      const parent = await prisma.parent.findUnique({
        where: { id: userId },
        include: {
          students: {
            include: {
              class: {
                include: {
                  teachers: {
                    include: {
                      subject: true,
                    },
                  },
                },
              },
            },
          },
        },
      });



      if (parent) {
        const teacherMap = new Map<string, { id: string; name: string; role: string; img?: string | null; subject?: string }>();
        parent.students.forEach(std => {
          if (std.class) {
            std.class.teachers.forEach(t => {
              teacherMap.set(t.id, { id: t.id, name: `${t.name} ${t.surname}`, role: "teacher", img: t.img, subject: t.subject.name });
            });
          }
        });
        rawContacts = Array.from(teacherMap.values());
      }
    }

    // 2. Fetch last messages and unread counts for each contact in parallel
    const contacts = await Promise.all(
      rawContacts.map(async (c) => {
        // Last message
        const lastMsg = await prisma.message.findFirst({
          where: {
            OR: [
              { senderId: userId, receiverId: c.id },
              { senderId: c.id, receiverId: userId },
            ],
          },
          orderBy: { createdAt: "desc" },
        });

        // Unread messages count from this contact
        const unreadCount = await prisma.message.count({
          where: { senderId: c.id, receiverId: userId, isRead: false },
        });

        return {
          ...c,
          lastMessage: lastMsg ? lastMsg.content : null,
          lastMessageTime: lastMsg ? lastMsg.createdAt : null,
          unreadCount,
        };
      })
    );

    // 3. Sort contacts: those with messages first (most recent first), then alphabetically
    return contacts.sort((a, b) => {
      if (a.lastMessageTime && b.lastMessageTime) {
        return new Date(b.lastMessageTime).getTime() - new Date(a.lastMessageTime).getTime();
      }
      if (a.lastMessageTime) return -1;
      if (b.lastMessageTime) return 1;
      return a.name.localeCompare(b.name);
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const sendMessage = async (receiverId: string, content: string) => {
  const { userId, sessionClaims } = await auth();
  if (!userId) return { success: false, error: "Unauthorized" };
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    // 1. Fetch sender name
    let senderName = "User";
    if (role === "admin") {
      const admin = await prisma.admin.findUnique({ where: { id: userId } });
      senderName = admin?.username || "Admin";
    } else if (role === "teacher") {
      const teacher = await prisma.teacher.findUnique({ where: { id: userId } });
      senderName = teacher ? `${teacher.name} ${teacher.surname}` : "Teacher";
    } else if (role === "student") {
      const student = await prisma.student.findUnique({ where: { id: userId } });
      senderName = student ? `${student.name} ${student.surname}` : "Student";
    } else if (role === "parent") {
      const parent = await prisma.parent.findUnique({ where: { id: userId } });
      senderName = parent ? `${parent.name} ${parent.surname}` : "Parent";
    }

    // 2. Perform Role Scoping guards (Who can message whom)
    let isAllowed = false;
    if (role === "admin") {
      isAllowed = true;
    } else if (role === "teacher") {
      // Check if receiver is a student in teacher's class or parent of a student in teacher's class
      const teacherClasses = await prisma.class.findMany({
        where: { teachers: { some: { id: userId } } },
        select: { id: true },
      });
      const teacherClassIds = teacherClasses.map(c => c.id);

      const targetStudent = await prisma.student.findFirst({
        where: { id: receiverId, classId: { in: teacherClassIds } },
      });
      const targetParent = await prisma.parent.findFirst({
        where: {
          id: receiverId,
          students: { some: { classId: { in: teacherClassIds } } },
        },
      });

      if (targetStudent || targetParent) {
        isAllowed = true;
      }
    } else if (role === "student") {
      // Check if receiver is a teacher of student's class
      const student = await prisma.student.findUnique({
        where: { id: userId },
        select: { classId: true },
      });
      if (student) {
        const teacherClass = await prisma.class.findFirst({
          where: { id: student.classId, teachers: { some: { id: receiverId } } },
        });
        if (teacherClass) {
          isAllowed = true;
        }
      }
    } else if (role === "parent") {
      // Check if receiver is a teacher of one of parent's children's classes
      const parentStudents = await prisma.student.findMany({
        where: { parentId: userId },
        select: { classId: true },
      });
      const childrenClassIds = parentStudents.map(s => s.classId);

      const teacherClass = await prisma.class.findFirst({
        where: { id: { in: childrenClassIds }, teachers: { some: { id: receiverId } } },
      });
      if (teacherClass) {
        isAllowed = true;
      }
    }

    if (!isAllowed) {
      return { success: false, error: "Unauthorized conversation path" };
    }

    // 3. Create message in DB
    const message = await prisma.message.create({
      data: {
        senderId: userId,
        senderName,
        receiverId,
        content,
      },
    });

    // 4. Trigger Pusher broadcast
    const { pusherServer } = require("./pusher");
    await pusherServer.trigger(`private-user-${receiverId}`, "new-message", message);

    return { success: true, message };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Failed to send message" };
  }
};

