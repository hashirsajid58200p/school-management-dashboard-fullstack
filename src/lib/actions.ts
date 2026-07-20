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

export const generateAttendanceSimulation = async (
  currentState: CurrentState,
  days: number = 30
) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-indexed (Jan = 0)

    // 1. Fetch all students with their classId
    const students = await prisma.student.findMany({
      select: { id: true, classId: true },
    });

    const attendanceRecords = [];

    // 2. Clear all daily attendance logs for the current month
    const startOfCurrentMonth = new Date(Date.UTC(currentYear, currentMonth, 1));
    await prisma.attendance.deleteMany({
      where: {
        date: {
          gte: startOfCurrentMonth,
        },
      },
    });

    // 3. Generate daily logs for the current month (from 1st of this month to today)
    for (let day = 1; day <= today.getDate(); day++) {
      const currentDate = new Date(Date.UTC(currentYear, currentMonth, day));
      const dayOfWeek = currentDate.getUTCDay();
      
      // Skip weekends
      if (dayOfWeek === 0 || dayOfWeek === 6) continue;

      for (const student of students) {
        // 97% present rate, 3% absent rate
        const isPresent = Math.random() > 0.03;

        attendanceRecords.push({
          date: currentDate,
          present: isPresent,
          studentId: student.id,
          classId: student.classId,
        });
      }
    }

    // Insert daily attendance records for the current month
    if (attendanceRecords.length > 0) {
      await prisma.attendance.createMany({
        data: attendanceRecords,
      });
    }

    // 4. Seed MonthlyAttendanceSummary for the previous two months
    // We will clear existing summaries first
    await prisma.monthlyAttendanceSummary.deleteMany({});

    const summaries = [];
    const prevMonths = [
      { month: currentMonth === 0 ? 12 : currentMonth, year: currentMonth === 0 ? currentYear - 1 : currentYear }, // Last Month
      { month: currentMonth <= 1 ? 11 + currentMonth : currentMonth - 1, year: currentMonth <= 1 ? currentYear - 1 : currentYear } // Two Months Ago
    ];

    for (const pm of prevMonths) {
      for (const student of students) {
        // Random overall attendance percentage between 86% and 98%
        const percentage = parseFloat((86 + Math.random() * 12).toFixed(1));

        summaries.push({
          studentId: student.id,
          month: pm.month, // 1-12 value (Jan = 0 is stored as 1, etc.)
          year: pm.year,
          percentage: percentage,
        });
      }
    }

    if (summaries.length > 0) {
      await prisma.monthlyAttendanceSummary.createMany({
        data: summaries,
      });
    }

    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
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
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || (role !== "teacher" && role !== "admin")) {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    // If user is a teacher, verify that they supervise the class
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

    for (const item of data.attendance) {
      const existing = await prisma.attendance.findFirst({
        where: {
          studentId: item.studentId,
          classId: data.classId,
          date: recordDate,
        },
      });

      if (existing) {
        await prisma.attendance.update({
          where: { id: existing.id },
          data: { present: item.present },
        });
      } else {
        await prisma.attendance.create({
          data: {
            studentId: item.studentId,
            classId: data.classId,
            date: recordDate,
            present: item.present,
          },
        });
      }
    }

    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
  }
};

export const getStudentsByClass = async (classId: number) => {
  const { userId } = auth();
  if (!userId) return [];
  try {
    return await prisma.student.findMany({
      where: { classId },
      select: { id: true, name: true, surname: true },
      orderBy: { name: "asc" },
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getAttendanceRecord = async (classId: number, date: string) => {
  const { userId } = auth();
  if (!userId) return [];
  try {
    const searchDate = new Date(date);

    return await prisma.attendance.findMany({
      where: {
        classId,
        date: searchDate,
      },
      select: { studentId: true, present: true },
    });
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const archiveMonthlyAttendanceLogs = async (currentState: CurrentState) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    const today = new Date();
    // Start of the current month in UTC
    const startOfCurrentMonth = new Date(Date.UTC(today.getFullYear(), today.getMonth(), 1));

    // 1. Fetch daily logs from past months (any record before the 1st of the current month)
    const pastLogs = await prisma.attendance.findMany({
      where: {
        date: {
          lt: startOfCurrentMonth,
        },
      },
    });

    if (pastLogs.length === 0) {
      return { success: true, error: false, message: "No past months daily logs found to archive." };
    }

    // 2. Group records by studentId, month, and year
    // Key: studentId_year_month (month is 1-indexed for summaries: 1-12)
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
      const month = logDate.getMonth() + 1; // 1-12
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

    // 3. Upsert MonthlyAttendanceSummary records
    for (const group of Object.values(groupings)) {
      const percentage = parseFloat(((group.present / group.total) * 100).toFixed(1));

      // Find if summary already exists
      const existing = await prisma.monthlyAttendanceSummary.findFirst({
        where: {
          studentId: group.studentId,
          month: group.month,
          year: group.year,
        },
      });

      if (existing) {
        await prisma.monthlyAttendanceSummary.update({
          where: { id: existing.id },
          data: { percentage },
        });
      } else {
        await prisma.monthlyAttendanceSummary.create({
          data: {
            studentId: group.studentId,
            month: group.month,
            year: group.year,
            percentage,
          },
        });
      }
    }

    // 4. Delete past daily logs that we just archived
    await prisma.attendance.deleteMany({
      where: {
        date: {
          lt: startOfCurrentMonth,
        },
      },
    });

    return { success: true, error: false, message: "Past months daily logs archived successfully!" };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
  }
};

export const createEvent = async (
  currentState: CurrentState,
  data: EventSchema
) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
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
    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
  }
};

export const updateEvent = async (
  currentState: CurrentState,
  data: EventSchema
) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
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
    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
  }
};

export const deleteEvent = async (
  currentState: CurrentState,
  data: FormData
) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  if (!userId || role !== "admin") {
    return { success: false, error: true, message: "Unauthorized" };
  }

  try {
    const id = data.get("id") as string;
    await prisma.event.delete({
      where: { id: Number(id) },
    });

    revalidatePath("/list/events");
    return { success: true, error: false };
  } catch (err) {
    console.error(err);
    return { success: false, error: true };
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
  const { userId, sessionClaims } = auth();
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
  const { userId } = auth();
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
  const { userId } = auth();
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
  const { userId } = auth();
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
  const { userId, sessionClaims } = auth();
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
  const { userId, sessionClaims } = auth();
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
    await pusherServer.trigger(`user-${receiverId}`, "new-message", message);

    return { success: true, message };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Failed to send message" };
  }
};

