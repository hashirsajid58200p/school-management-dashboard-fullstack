import seedData from "./seedData.json";

const {
  teachersData,
  studentsData,
  parentsData,
  subjectsData,
  classesData,
  lessonsData,
  examsData,
  assignmentsData,
  resultsData,
  eventsData,
  announcementsData,
} = seedData;
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

function splitName(full: string): { name: string; surname: string } {
  const parts = full.trim().split(" ");
  const name = parts[0];
  const surname = parts.slice(1).join(" ") || "Unknown";
  return { name, surname };
}

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

async function main() {
  console.log("🧹  Cleaning old data...");
  await prisma.feePayment.deleteMany({});
  await prisma.monthlyAttendanceSummary.deleteMany({});
  await prisma.attendance.deleteMany({});
  await prisma.result.deleteMany({});
  await prisma.assignment.deleteMany({});
  await prisma.exam.deleteMany({});
  await prisma.lesson.deleteMany({});
  await prisma.announcement.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.student.deleteMany({});
  await prisma.parent.deleteMany({});
  await prisma.teacher.deleteMany({});
  await prisma.class.deleteMany({});
  await prisma.subject.deleteMany({});
  await prisma.grade.deleteMany({});
  await prisma.admin.deleteMany({});
  console.log("✅  Cleanup done.\n");

  const defaultHashedPassword = await bcrypt.hash("password", 10);

  // 1. Admin
  await prisma.admin.create({
    data: {
      id: "admin_test",
      username: "admin",
      email: "admin@school.com",
      password: defaultHashedPassword
    }
  });
  console.log("✅  Admin seeded.");

  // 2. Grades
  const gradeMap = new Map<number, number>();
  for (let lvl = 1; lvl <= 10; lvl++) {
    const g = await prisma.grade.create({ data: { level: lvl } });
    gradeMap.set(lvl, g.id);
  }
  console.log("✅  Grades 1-10 seeded.");

  // 3. Subjects
  const subjectMap = new Map<string, number>();
  for (const sub of subjectsData) {
    const dbSub = await prisma.subject.create({
      data: {
        id: sub.id,
        name: sub.name,
      }
    });
    subjectMap.set(sub.name, dbSub.id);
  }
  console.log(`✅  ${subjectsData.length} subjects seeded.`);

  // 4. Teachers (Create without classes first)
  const teacherMap = new Map<string, string>();
  for (let i = 0; i < teachersData.length; i++) {
    const t = teachersData[i];
    const { name, surname } = splitName(t.name);
    const dbId = i === 0 ? "teacher_test" : `teacher_${t.id}`;
    const email = i === 0 ? "teacher@school.com" : t.email;

    await prisma.teacher.create({
      data: {
        id: dbId,
        username: i === 0 ? "teacher_test" : `teacher_${t.id}`,
        name,
        surname,
        email,
        phone: t.phone,
        address: t.address,
        img: t.photo || null,
        bloodType: "O+",
        sex: i % 2 === 0 ? "MALE" : "FEMALE",
        birthday: new Date("1985-06-15"),
        password: defaultHashedPassword,
        level: t.level,
        subjectId: subjectMap.get(t.subject)!,
      }
    });
    teacherMap.set(t.name, dbId);
  }
  console.log(`✅  ${teachersData.length} teachers seeded.`);

  // 5. Classes
  const classMap = new Map<string, number>();
  for (const cls of classesData) {
    const gradeId = gradeMap.get(cls.grade)!;
    const supervisorId = cls.supervisor ? teacherMap.get(cls.supervisor) || null : null;
    const dbClass = await prisma.class.create({
      data: {
        id: cls.id,
        name: cls.name,
        capacity: cls.capacity,
        gradeId,
        supervisorId,
        section: cls.section,
      }
    });
    classMap.set(cls.name, dbClass.id);
  }
  console.log(`✅  ${classesData.length} classes seeded.`);

  // 6. Connect Teachers to their assigned Classes
  for (const t of teachersData) {
    const tId = teacherMap.get(t.name)!;
    const clsConnects = t.classes.map((clsName: string) => ({ id: classMap.get(clsName)! }));
    await prisma.teacher.update({
      where: { id: tId },
      data: {
        classes: {
          connect: clsConnects,
        }
      }
    });
  }
  console.log("✅  Teacher classes connections seeded.");

  // 7. Parents
  const parentMap = new Map<string, string>();
  for (let i = 0; i < parentsData.length; i++) {
    const p = parentsData[i];
    const { name, surname } = splitName(p.name);
    const dbId = i === 0 ? "parent_test" : `parent_${p.id}`;
    const email = i === 0 ? "parent@school.com" : p.email;

    await prisma.parent.create({
      data: {
        id: dbId,
        username: i === 0 ? "parent_test" : `parent_${p.id}`,
        name,
        surname,
        email,
        phone: p.phone,
        address: p.address,
        password: defaultHashedPassword,
      }
    });
    parentMap.set(p.name, dbId);
  }
  console.log(`✅  ${parentsData.length} parents seeded.`);

  // Student parent mapping lookup
  const studentParentMap = new Map<string, string>();
  for (const p of parentsData) {
    const pDbId = parentMap.get(p.name)!;
    for (const childName of p.students) {
      studentParentMap.set(childName, pDbId);
    }
  }

  // 8. Students
  const studentMap = new Map<string, string>();
  for (let i = 0; i < studentsData.length; i++) {
    const s = studentsData[i];
    const { name, surname } = splitName(s.name);
    const dbId = i === 0 ? "student_test" : `student_${s.id}`;
    const email = i === 0 ? "student@school.com" : s.email;
    const classId = classMap.get(s.class)!;
    const gradeId = gradeMap.get(s.grade)!;
    const parentId = studentParentMap.get(s.name)!;

    await prisma.student.create({
      data: {
        id: dbId,
        username: i === 0 ? "student_test" : `student_${s.id}`,
        name,
        surname,
        email,
        phone: s.phone,
        address: s.address,
        bloodType: "O+",
        sex: s.class.includes("B") ? "MALE" : "FEMALE",
        birthday: new Date(2019 - s.grade, 5, 1),
        password: defaultHashedPassword,
        classId,
        gradeId,
        parentId,
      }
    });
    studentMap.set(s.name, dbId);
  }
  console.log(`✅  ${studentsData.length} students seeded.`);

  // 9. Lessons
  for (const lesson of lessonsData) {
    const dateStr = DAY_DATES[lesson.day];
    const slotTime = SLOT_TIMES[lesson.slot - 1];
    const startTime = new Date(`${dateStr}T${slotTime.start}`);
    const endTime = new Date(`${dateStr}T${slotTime.end}`);

    await prisma.lesson.create({
      data: {
        id: lesson.id,
        name: lesson.subject,
        day: lesson.day,
        slot: lesson.slot,
        startTime,
        endTime,
        subjectId: subjectMap.get(lesson.subject)!,
        classId: classMap.get(lesson.class)!,
        teacherId: teacherMap.get(lesson.teacher)!,
      }
    });
  }
  console.log(`✅  ${lessonsData.length} lessons seeded.`);

  // 10. Exams
  const examDbMap = new Map<number, number>();
  for (const exam of examsData) {
    const matchingLesson = lessonsData.find((l: any) => l.class === exam.class && l.subject === exam.subject)!;
    
    const dbExam = await prisma.exam.create({
      data: {
        id: exam.id,
        title: `${exam.subject} Exam`,
        startTime: new Date(`${exam.date}T09:00:00`),
        endTime: new Date(`${exam.date}T10:30:00`),
        lessonId: matchingLesson.id,
      }
    });
    examDbMap.set(exam.id, dbExam.id);
  }
  console.log(`✅  ${examsData.length} exams seeded.`);

  // 11. Assignments
  const assignDbMap = new Map<number, number>();
  for (const asgn of assignmentsData) {
    const matchingLesson = lessonsData.find((l: any) => l.class === asgn.class && l.subject === asgn.subject)!;

    const dbAsgn = await prisma.assignment.create({
      data: {
        id: asgn.id,
        title: `${asgn.subject} Assignment`,
        startDate: new Date("2025-01-06T08:00:00"),
        dueDate: new Date(`${asgn.dueDate}T17:00:00`),
        lessonId: matchingLesson.id,
      }
    });
    assignDbMap.set(asgn.id, dbAsgn.id);
  }
  console.log(`✅  ${assignmentsData.length} assignments seeded.`);

  // 12. Results
  for (const result of resultsData) {
    let examId: number | null = null;
    let assignmentId: number | null = null;

    if (result.type === "exam") {
      const matchingExam = examsData.find((e: any) => e.class === result.class && e.subject === result.subject && e.date === result.date)!;
      examId = matchingExam.id;
    } else {
      const matchingAsgn = assignmentsData.find((a: any) => a.class === result.class && a.subject === result.subject)!;
      assignmentId = matchingAsgn.id;
    }

    await prisma.result.create({
      data: {
        id: result.id,
        score: result.score,
        studentId: studentMap.get(result.student)!,
        examId,
        assignmentId,
      }
    });
  }
  console.log(`✅  ${resultsData.length} results seeded.`);

  // 13. Events
  for (const ev of eventsData) {
    await prisma.event.create({
      data: {
        id: ev.id,
        title: ev.title,
        description: `${ev.title} Event`,
        startTime: new Date(`${ev.date}T${ev.startTime}:00`),
        endTime: new Date(`${ev.date}T${ev.endTime}:00`),
        classId: ev.class ? classMap.get(ev.class)! : null,
      }
    });
  }
  console.log(`✅  ${eventsData.length} events seeded.`);

  // 14. Announcements
  for (const ann of announcementsData) {
    await prisma.announcement.create({
      data: {
        id: ann.id,
        title: ann.title,
        description: `${ann.title} Announcement`,
        date: new Date(`${ann.date}T08:00:00`),
        classId: ann.class ? classMap.get(ann.class)! : null,
      }
    });
  }
  console.log(`✅  ${announcementsData.length} announcements seeded.`);

  // 15. Fee Payments (Income & Expenses across months)
  const allStudents = await prisma.student.findMany({ select: { id: true } });
  const currentYear = new Date().getFullYear();
  const feePayments = [
    { month: 0, income: 4500, expense: 2100 },
    { month: 1, income: 3800, expense: 1900 },
    { month: 2, income: 5200, expense: 2800 },
    { month: 3, income: 4100, expense: 2300 },
    { month: 4, income: 4800, expense: 3100 },
    { month: 5, income: 3500, expense: 2500 },
    { month: 6, income: 6000, expense: 3400 },
    { month: 7, income: 5500, expense: 3200 },
    { month: 8, income: 4900, expense: 2900 },
    { month: 9, income: 5100, expense: 3000 },
    { month: 10, income: 4700, expense: 2700 },
    { month: 11, income: 5300, expense: 3300 },
  ];

  for (let i = 0; i < feePayments.length; i++) {
    const fp = feePayments[i];
    const studentId = allStudents[i % allStudents.length]?.id || "student_test";
    await prisma.feePayment.create({
      data: {
        studentId,
        amount: fp.income,
        type: "income",
        category: "Tuition",
        description: `Tuition & Term Fees (Month ${fp.month + 1})`,
        date: new Date(currentYear, fp.month, 10),
      },
    });
    await prisma.feePayment.create({
      data: {
        studentId,
        amount: fp.expense,
        type: "expense",
        category: "Operations",
        description: `Operations & Maintenance (Month ${fp.month + 1})`,
        date: new Date(currentYear, fp.month, 20),
      },
    });
  }
  console.log(`✅  Fee payments seeded.`);

  console.log("\n🎉  Database fully seeded from data.ts with conflict-free schedules and finance data!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("❌  Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
