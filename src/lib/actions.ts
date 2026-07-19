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
} from "./formValidationSchemas";
import prisma from "./prisma";
import { clerkClient, auth } from "@/lib/auth";

type CurrentState = { success: boolean; error: boolean };

export const createSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateSubject = async (
  currentState: CurrentState,
  data: SubjectSchema
) => {
  try {
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

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteSubject = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.subject.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.create({
      data,
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateClass = async (
  currentState: CurrentState,
  data: ClassSchema
) => {
  try {
    await prisma.class.update({
      where: {
        id: data.id,
      },
      data,
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteClass = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await prisma.class.delete({
      where: {
        id: parseInt(id),
      },
    });

    // revalidatePath("/list/class");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true };
  }

  try {
    // 1. Cap class count to at most 3
    if (data.classes && data.classes.length > 3) {
      return { success: false, error: true };
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
          return { success: false, error: true };
        }
        if (data.level === "Mid" && (gradeLevel < 4 || gradeLevel > 7)) {
          return { success: false, error: true };
        }
        if (data.level === "Senior" && (gradeLevel < 8 || gradeLevel > 10)) {
          return { success: false, error: true };
        }
      }
    }

    const user = await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata:{role:"teacher"}
    });

    await prisma.teacher.create({
      data: {
        id: user.id,
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
        password: data.password || "123456",
        subjectId: data.subjectId,
        level: data.level,
        classes: {
          connect: data.classes?.map((classId: string) => ({
            id: parseInt(classId),
          })),
        },
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateTeacher = async (
  currentState: CurrentState,
  data: TeacherSchema
) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true };
  }

  if (!data.id) {
    return { success: false, error: true };
  }

  try {
    // 1. Cap class count to at most 3
    if (data.classes && data.classes.length > 3) {
      return { success: false, error: true };
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
          return { success: false, error: true };
        }
        if (data.level === "Mid" && (gradeLevel < 4 || gradeLevel > 7)) {
          return { success: false, error: true };
        }
        if (data.level === "Senior" && (gradeLevel < 8 || gradeLevel > 10)) {
          return { success: false, error: true };
        }
      }
    }

    await clerkClient.users.updateUser(data.id, {
      username: data.username,
      ...(data.password !== "" && { password: data.password }),
      firstName: data.name,
      lastName: data.surname,
    });

    await prisma.teacher.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.password !== "" && { password: data.password }),
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
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteTeacher = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await clerkClient.users.deleteUser(id);

    await prisma.teacher.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/teachers");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  console.log(data);
  try {
    const classItem = await prisma.class.findUnique({
      where: { id: data.classId },
      include: { _count: { select: { students: true } } },
    });

    if (classItem && classItem.capacity === classItem._count.students) {
      return { success: false, error: true };
    }

    const user = await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata:{role:"student"}
    });

    await prisma.student.create({
      data: {
        id: user.id,
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
        password: data.password || "123456",
      },
    });

    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateStudent = async (
  currentState: CurrentState,
  data: StudentSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    const user = await clerkClient.users.updateUser(data.id, {
      username: data.username,
      ...(data.password !== "" && { password: data.password }),
      firstName: data.name,
      lastName: data.surname,
    });

    await prisma.student.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.password !== "" && { password: data.password }),
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
    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteStudent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await clerkClient.users.deleteUser(id);

    await prisma.student.delete({
      where: {
        id: id,
      },
    });

    // revalidatePath("/list/students");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  // const { userId, sessionClaims } = auth();
  // const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    // if (role === "teacher") {
    //   const teacherLesson = await prisma.lesson.findFirst({
    //     where: {
    //       teacherId: userId!,
    //       id: data.lessonId,
    //     },
    //   });

    //   if (!teacherLesson) {
    //     return { success: false, error: true };
    //   }
    // }

    await prisma.exam.create({
      data: {
        title: data.title,
        startTime: data.startTime,
        endTime: data.endTime,
        lessonId: data.lessonId,
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateExam = async (
  currentState: CurrentState,
  data: ExamSchema
) => {
  // const { userId, sessionClaims } = auth();
  // const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    // if (role === "teacher") {
    //   const teacherLesson = await prisma.lesson.findFirst({
    //     where: {
    //       teacherId: userId!,
    //       id: data.lessonId,
    //     },
    //   });

    //   if (!teacherLesson) {
    //     return { success: false, error: true };
    //   }
    // }

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

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteExam = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;

  // const { userId, sessionClaims } = auth();
  // const role = (sessionClaims?.metadata as { role?: string })?.role;

  try {
    await prisma.exam.delete({
      where: {
        id: parseInt(id),
        // ...(role === "teacher" ? { lesson: { teacherId: userId! } } : {}),
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createParent = async (
  currentState: CurrentState,
  data: ParentSchema
) => {
  try {
    const user = await clerkClient.users.createUser({
      username: data.username,
      password: data.password,
      firstName: data.name,
      lastName: data.surname,
      publicMetadata: { role: "parent" },
    });

    await prisma.parent.create({
      data: {
        id: user.id,
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
        password: data.password || "123456",
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateParent = async (
  currentState: CurrentState,
  data: ParentSchema
) => {
  if (!data.id) {
    return { success: false, error: true };
  }
  try {
    await clerkClient.users.updateUser(data.id, {
      username: data.username,
      ...(data.password !== "" && { password: data.password }),
      firstName: data.name,
      lastName: data.surname,
    });

    await prisma.parent.update({
      where: {
        id: data.id,
      },
      data: {
        ...(data.password !== "" && { password: data.password }),
        username: data.username,
        name: data.name,
        surname: data.surname,
        email: data.email || null,
        phone: data.phone,
        address: data.address,
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteParent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  try {
    await clerkClient.users.deleteUser(id);

    await prisma.parent.delete({
      where: {
        id: id,
      },
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const createLesson = async (
  currentState: CurrentState,
  data: LessonSchema
) => {
  const { sessionClaims } = auth();
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

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateLesson = async (
  currentState: CurrentState,
  data: LessonSchema
) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  if (!data.id) {
    return { success: false, error: true };
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

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteLesson = async (
  currentState: CurrentState,
  data: FormData
) => {
  const id = data.get("id") as string;
  const { sessionClaims } = auth();
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

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const promoteAcademicYear = async (
  currentState: CurrentState,
  data?: { clearHistory?: boolean }
) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    if (data?.clearHistory) {
      await prisma.result.deleteMany({});
      await prisma.exam.deleteMany({});
      await prisma.assignment.deleteMany({});
    }

    const grades = await prisma.grade.findMany({
      orderBy: { level: "desc" },
    });

    for (const grade of grades) {
      const students = await prisma.student.findMany({
        where: { gradeId: grade.id },
      });

      if (grade.level === 10) {
        const grade1 = grades.find((g) => g.level === 1);
        if (grade1) {
          const g1Classes = await prisma.class.findMany({
            where: { gradeId: grade1.id },
          });
          const boysClass = g1Classes.find((c) => c.section === "Boys") || g1Classes[0];
          const girlsClass = g1Classes.find((c) => c.section === "Girls") || g1Classes[0];

          for (const student of students) {
            const targetClass = student.sex === "MALE" ? boysClass : girlsClass;
            if (targetClass) {
              await prisma.student.update({
                where: { id: student.id },
                data: {
                  gradeId: grade1.id,
                  classId: targetClass.id,
                },
              });
            }
          }
        }
      } else {
        const targetGrade = grades.find((g) => g.level === grade.level + 1);
        if (targetGrade) {
          const targetClasses = await prisma.class.findMany({
            where: { gradeId: targetGrade.id },
          });
          const boysClass = targetClasses.find((c) => c.section === "Boys") || targetClasses[0];
          const girlsClass = targetClasses.find((c) => c.section === "Girls") || targetClasses[0];

          for (const student of students) {
            const targetClass = student.sex === "MALE" ? boysClass : girlsClass;
            if (targetClass) {
              await prisma.student.update({
                where: { id: student.id },
                data: {
                  gradeId: targetGrade.id,
                  classId: targetClass.id,
                },
              });
            }
          }
        }
      }
    }

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const generateAITimetable = async (
  currentState: CurrentState
) => {
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    // Delete existing dependencies first
    await prisma.result.deleteMany({});
    await prisma.exam.deleteMany({});
    await prisma.assignment.deleteMany({});
    await prisma.lesson.deleteMany({});

    // Fetch classes and teachers
    const classes = await prisma.class.findMany({
      include: {
        teachers: {
          include: {
            subject: true,
          },
        },
      },
    });

    const allTeachers = await prisma.teacher.findMany({
      include: {
        subject: true,
      },
    });

    const Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;
    type DayType = typeof Days[number];

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

    // Bookings index: teacherBookings[teacherId][day][slot] = boolean
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

      // Try teachers assigned to this class first, shuffled to make it dynamic
      const classTeachers = [...currentClass.teachers].sort(() => Math.random() - 0.5);
      const candidates = classTeachers.length > 0 ? classTeachers : allTeachers;

      for (const teacher of candidates) {
        if (!teacher.subjectId) continue;
        const teacherId = teacher.id;

        // Check if teacher is double-booked
        if (teacherBookings[teacherId]?.[dayName]?.[slotNum]) {
          continue;
        }

        // Apply booking
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

        // Backtrack
        teacherBookings[teacherId][dayName][slotNum] = false;
        classLessons[currentClass.id].pop();
      }

      return false;
    };

    const solved = solve(0, 0, 0);
    if (!solved) {
      return { success: false, error: true, message: "Could not find a conflict-free schedule" };
    }

    // Insert all generated lessons into DB
    const lessonsToInsert = Object.values(classLessons).flat();
    await prisma.lesson.createMany({
      data: lessonsToInsert,
    });

    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateProfile = async (
  currentState: CurrentState,
  data: {
    phone?: string;
    address?: string;
    password?: string;
    email?: string;
  }
) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || !role) {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    const updateData = {
      ...(data.phone !== undefined && { phone: data.phone }),
      ...(data.address !== undefined && { address: data.address }),
      ...(data.password && { password: data.password }),
      ...(data.email !== undefined && { email: data.email }),
    };

    if (role === "admin") {
      await prisma.admin.update({
        where: { id: userId },
        data: updateData,
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

    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
  }
};

