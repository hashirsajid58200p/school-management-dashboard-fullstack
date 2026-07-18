import {
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
} from "../src/lib/data";
import { PrismaClient, UserSex, Day } from "@prisma/client";

const prisma = new PrismaClient();

// ── helpers ──────────────────────────────────────────────────────────────────

function splitName(full: string): { name: string; surname: string } {
  const parts = full.trim().split(" ");
  const name = parts[0];
  const surname = parts.slice(1).join(" ") || "Unknown";
  return { name, surname };
}

const DAY_MAP: Record<string, { day: Day; date: string }> = {
  MONDAY:    { day: Day.MONDAY,    date: "2025-01-06" },
  TUESDAY:   { day: Day.TUESDAY,   date: "2025-01-07" },
  WEDNESDAY: { day: Day.WEDNESDAY, date: "2025-01-08" },
  THURSDAY:  { day: Day.THURSDAY,  date: "2025-01-09" },
  FRIDAY:    { day: Day.FRIDAY,    date: "2025-01-10" },
};

const SLOTS = [
  { start: "08:00:00", end: "08:45:00" },
  { start: "09:00:00", end: "09:45:00" },
  { start: "10:00:00", end: "10:45:00" },
  { start: "11:00:00", end: "11:45:00" },
  { start: "12:00:00", end: "12:45:00" },
  { start: "13:00:00", end: "13:45:00" },
];

const WEEKDAYS = [Day.MONDAY, Day.TUESDAY, Day.WEDNESDAY, Day.THURSDAY, Day.FRIDAY];

// ── main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log("🧹  Cleaning old data...");
  await prisma.attendance.deleteMany({});
  await prisma.result.deleteMany({});
  await prisma.assignment.deleteMany({});
  await prisma.exam.deleteMany({});
  await prisma.lesson.deleteMany({});
  await prisma.announcement.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.student.deleteMany({});
  await prisma.parent.deleteMany({});
  await prisma.class.deleteMany({});
  await prisma.subject.deleteMany({});
  await prisma.teacher.deleteMany({});
  await prisma.grade.deleteMany({});
  await prisma.admin.deleteMany({});
  console.log("✅  Cleanup done.\n");

  // Local static credentials for testing:
  const adminClerkId   = "admin_test";
  const teacherClerkId = "teacher_test";
  const studentClerkId = "student_test";
  const parentClerkId  = "parent_test";

  // ── 1. Admin ───────────────────────────────────────────────────────────────
  await prisma.admin.create({
    data: {
      id: adminClerkId,
      username: "admin",
      email: "admin@school.com",
      password: "password"
    }
  });
  console.log("✅  Admin seeded.");

  // ── 2. Grades 1-10 ────────────────────────────────────────────────────────
  const gradeMap = new Map<number, number>(); // level → db id
  for (let lvl = 1; lvl <= 10; lvl++) {
    const g = await prisma.grade.create({ data: { level: lvl } });
    gradeMap.set(lvl, g.id);
  }
  console.log("✅  Grades 1-10 seeded.");

  // ── 3. Subjects ───────────────────────────────────────────────────────────
  const subjectMap = new Map<string, number>(); // name → db id
  for (const sub of subjectsData) {
    const dbSub = await prisma.subject.create({ data: { name: sub.name } });
    subjectMap.set(sub.name, dbSub.id);
  }
  console.log(`✅  ${subjectsData.length} subjects seeded.`);

  // ── 4. Teachers ───────────────────────────────────────────────────────────
  const teacherMap = new Map<string, string>(); // full name → db id
  for (let i = 0; i < teachersData.length; i++) {
    const t = teachersData[i];
    const { name, surname } = splitName(t.name);
    
    const isTestTeacher = (i === 0);
    const dbId = isTestTeacher ? teacherClerkId : `teacher_data_${t.id}`;
    const email = isTestTeacher ? "teacher@school.com" : (t.email ?? `teacher${t.id}@school.com`);
    const password = "password";

    const phone = t.phone
      ? t.phone.replace(/\s+/g, "")
      : `+1-555-000-${String(i + 1).padStart(4, "0")}`;

    const subjectConnects = (t.subjects ?? [])
      .filter((s: string) => subjectMap.has(s))
      .map((s: string) => ({ id: subjectMap.get(s)! }));

    await prisma.teacher.create({
      data: {
        id:        dbId,
        username:  isTestTeacher ? "teacher_test" : `teacher_${t.id}`,
        name,
        surname,
        email,
        phone,
        address:   t.address ?? "School Address",
        img:       (t as any).photo ?? null,
        bloodType: "O+",
        sex:       i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        birthday:  new Date("1985-06-15"),
        password,
        subjects:  { connect: subjectConnects },
      },
    });
    teacherMap.set(t.name, dbId);
  }
  console.log(`✅  ${teachersData.length} teachers seeded.`);

  // ── 5. Classes ────────────────────────────────────────────────────────────
  const classMap = new Map<string, number>(); // class name → db id
  for (const cls of classesData) {
    const gradeId  = gradeMap.get(cls.grade)!;
    const supervisorId = cls.supervisor ? teacherMap.get(cls.supervisor) ?? undefined : undefined;
    const dbClass  = await prisma.class.create({
      data: {
        name:        cls.name,
        capacity:    cls.capacity,
        gradeId,
        supervisorId,
      },
    });
    classMap.set(cls.name, dbClass.id);
  }
  console.log(`✅  ${classesData.length} classes seeded.`);

  // ── 6. Parents ────────────────────────────────────────────────────────────
  const parentMap = new Map<string, string>(); // full name → db id
  for (let i = 0; i < parentsData.length; i++) {
    const p = parentsData[i];
    const { name, surname } = splitName(p.name);
    
    const isTestParent = (i === 0);
    const dbId = isTestParent ? parentClerkId : `parent_data_${p.id}`;
    const email = isTestParent ? "parent@school.com" : (p.email ?? `parent${p.id}@home.com`);
    const password = "password";

    const phone = p.phone
      ? p.phone.replace(/\s+/g, "")
      : `+1-555-100-${String(i + 1).padStart(4, "0")}`;

    await prisma.parent.create({
      data: {
        id:       dbId,
        username: isTestParent ? "parent_test" : `parent_${p.id}`,
        name,
        surname,
        email,
        phone,
        address:  p.address ?? "Home Address",
        password,
      },
    });
    parentMap.set(p.name, dbId);
  }
  console.log(`✅  ${parentsData.length} parents seeded.`);

  // Build student → parent lookup
  const studentParentMap = new Map<string, string>(); // student name → parent db id
  for (const p of parentsData) {
    const parentDbId = parentMap.get(p.name);
    if (!parentDbId) continue;
    for (const childName of (p.students ?? [])) {
      studentParentMap.set(childName, parentDbId);
    }
  }

  // ── 7. Students ───────────────────────────────────────────────────────────
  const studentMap = new Map<string, string>(); // full name → db id
  let testStudentAssigned = false;
  const fallbackParentId  = Array.from(parentMap.values())[0];

  for (let i = 0; i < studentsData.length; i++) {
    const s = studentsData[i];
    const { name, surname } = splitName(s.name);

    const classId  = classMap.get(s.class);
    const gradeId  = gradeMap.get(s.grade);
    if (!classId || !gradeId) continue;

    const parentDbId = studentParentMap.get(s.name) ?? fallbackParentId;
    if (!parentDbId) continue;

    const isTestStudent = !testStudentAssigned;
    const dbId = isTestStudent ? studentClerkId : `student_data_${s.id}`;
    const email = isTestStudent ? "student@school.com" : ((s as any).email ?? `student${s.id}@students.school.com`);
    const password = "password";
    if (isTestStudent) testStudentAssigned = true;

    const phone = (s as any).phone
      ? (s as any).phone.replace(/\s+/g, "")
      : `+1-444-000-${String(i + 1).padStart(4, "0")}`;

    let sex: UserSex;
    if (s.class.endsWith("-Blue"))  sex = UserSex.MALE;
    else if (s.class.endsWith("-White")) sex = UserSex.FEMALE;
    else sex = i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE;

    await prisma.student.create({
      data: {
        id:        dbId,
        username:  isTestStudent ? "student_test" : `student_${s.id}`,
        name,
        surname,
        email,
        phone,
        address:   (s as any).address ?? "Student Home Address",
        bloodType: "A+",
        sex,
        birthday:  new Date(`${2019 - s.grade}-06-01`),
        classId,
        gradeId,
        parentId:  parentDbId,
        password,
      },
    });
    studentMap.set(s.name, dbId);
  }
  console.log(`✅  ${studentMap.size} students seeded.`);

  // ── 8. Lessons (Non-overlapping scheduling) ──────────────────────────────
  const lessonDbMap = new Map<number, number>(); // data.ts lesson id → db lesson id

  // Group lessons by class
  const lessonsByClass = new Map<string, typeof lessonsData>();
  for (const lesson of lessonsData) {
    const arr = lessonsByClass.get(lesson.class) ?? [];
    arr.push(lesson);
    lessonsByClass.set(lesson.class, arr);
  }

  // Keep track of busy slots
  const busyClasses = new Set<string>(); // "classId-day-slotIndex"
  const busyTeachers = new Set<string>(); // "teacherId-day-slotIndex"

  let lessonDbCount = 0;
  for (const [className, classLessons] of Array.from(lessonsByClass.entries())) {
    const classId = classMap.get(className);
    if (!classId) continue;

    for (let li = 0; li < classLessons.length; li++) {
      const lesson = classLessons[li];
      const subjectId = subjectMap.get(lesson.subject);
      if (!subjectId) continue;

      const teacherId = teacherMap.get(lesson.teacher);
      if (!teacherId) continue;

      // Find the first slot (day, slot) that is free for both this class AND this teacher
      let foundSlot = false;
      let dayIndex = 0;
      let slotIndex = 0;

      for (let s = 0; s < SLOTS.length; s++) {
        for (let d = 0; d < WEEKDAYS.length; d++) {
          const classKey = `${classId}-${WEEKDAYS[d]}-${s}`;
          const teacherKey = `${teacherId}-${WEEKDAYS[d]}-${s}`;
          
          if (!busyClasses.has(classKey) && !busyTeachers.has(teacherKey)) {
            dayIndex = d;
            slotIndex = s;
            foundSlot = true;
            break;
          }
        }
        if (foundSlot) break;
      }

      // Fallback: If no slot is free for both, just find a slot free for the class
      if (!foundSlot) {
        for (let s = 0; s < SLOTS.length; s++) {
          for (let d = 0; d < WEEKDAYS.length; d++) {
            const classKey = `${classId}-${WEEKDAYS[d]}-${s}`;
            if (!busyClasses.has(classKey)) {
              dayIndex = d;
              slotIndex = s;
              foundSlot = true;
              break;
            }
          }
          if (foundSlot) break;
        }
      }

      const dayEnum = WEEKDAYS[dayIndex];
      const dayKey = Object.keys(DAY_MAP).find(k => DAY_MAP[k].day === dayEnum)!;
      const dateStr = DAY_MAP[dayKey].date;
      const slot = SLOTS[slotIndex];

      // Mark class and teacher as busy
      busyClasses.add(`${classId}-${dayEnum}-${slotIndex}`);
      busyTeachers.add(`${teacherId}-${dayEnum}-${slotIndex}`);

      const dbLesson = await prisma.lesson.create({
        data: {
          name:      lesson.subject,
          day:       dayEnum,
          startTime: new Date(`${dateStr}T${slot.start}`),
          endTime:   new Date(`${dateStr}T${slot.end}`),
          subjectId,
          classId,
          teacherId,
        },
      });
      lessonDbMap.set(lesson.id, dbLesson.id);
      lessonDbCount++;
    }
  }
  console.log(`✅  ${lessonDbCount} lessons seeded.`);

  // ── 9. Exams ─────────────────────────────────────────────────────────────
  const examDbMap = new Map<number, number>(); // data id → db id
  let examCount = 0;
  for (const exam of examsData) {
    const classId = classMap.get(exam.class);
    if (!classId) continue;

    const lesson = lessonsData.find(
      l => l.class === exam.class && l.subject === exam.subject
    );
    const lessonDbId = lesson ? lessonDbMap.get(lesson.id) : undefined;
    if (!lessonDbId) continue;

    const isMid = exam.date <= "2025-05-01";
    const startHour = isMid ? "09:00:00" : "10:00:00";
    const endHour   = isMid ? "10:30:00" : "11:30:00";

    const dbExam = await prisma.exam.create({
      data: {
        title:     `${exam.subject} ${isMid ? "Mid-Term" : "Final-Term"} Exam`,
        startTime: new Date(`${exam.date}T${startHour}`),
        endTime:   new Date(`${exam.date}T${endHour}`),
        lessonId:  lessonDbId,
      },
    });
    examDbMap.set(exam.id, dbExam.id);
    examCount++;
  }
  console.log(`✅  ${examCount} exams seeded.`);

  // ── 10. Assignments ───────────────────────────────────────────────────────
  const assignDbMap = new Map<number, number>(); // data id → db id
  let assignCount = 0;
  for (const asgn of assignmentsData) {
    const classId = classMap.get(asgn.class);
    if (!classId) continue;

    const lesson = lessonsData.find(
      l => l.class === asgn.class && l.subject === asgn.subject
    );
    const lessonDbId = lesson ? lessonDbMap.get(lesson.id) : undefined;
    if (!lessonDbId) continue;

    const dbAsgn = await prisma.assignment.create({
      data: {
        title:     `${asgn.subject} Assignment`,
        startDate: new Date("2025-01-06T08:00:00"),
        dueDate:   new Date(`${asgn.dueDate}T17:00:00`),
        lessonId:  lessonDbId,
      },
    });
    assignDbMap.set(asgn.id, dbAsgn.id);
    assignCount++;
  }
  console.log(`✅  ${assignCount} assignments seeded.`);

  // ── 11. Results ───────────────────────────────────────────────────────────
  let resultCount = 0;
  for (const result of resultsData) {
    const studentDbId = studentMap.get(result.student);
    if (!studentDbId) continue;

    let examDbId: number | undefined;
    let assignDbId: number | undefined;

    if (result.type === "exam") {
      const matchingExam = examsData.find(
        e => e.class === result.class && e.subject === result.subject && e.date === result.date
      );
      examDbId = matchingExam ? examDbMap.get(matchingExam.id) : undefined;
      if (!examDbId) continue;
    } else {
      const matchingAsgn = assignmentsData.find(
        a => a.class === result.class && a.subject === result.subject
      );
      assignDbId = matchingAsgn ? assignDbMap.get(matchingAsgn.id) : undefined;
      if (!assignDbId) continue;
    }

    await prisma.result.create({
      data: {
        score:        result.score,
        studentId:    studentDbId,
        examId:       examDbId,
        assignmentId: assignDbId,
      },
    });
    resultCount++;
  }
  console.log(`✅  ${resultCount} results seeded.`);

  // ── 12. Events ────────────────────────────────────────────────────────────
  let eventCount = 0;
  for (const ev of eventsData) {
    const classId = ev.class ? classMap.get(ev.class) : undefined;
    await prisma.event.create({
      data: {
        title:       ev.title,
        description: `${ev.title} — a school event for all participants.`,
        startTime:   new Date(`${ev.date}T${ev.startTime}:00`),
        endTime:     new Date(`${ev.date}T${ev.endTime}:00`),
        classId:     classId ?? null,
      },
    });
    eventCount++;
  }
  console.log(`✅  ${eventCount} events seeded.`);

  // ── 13. Announcements ─────────────────────────────────────────────────────
  let annCount = 0;
  for (const ann of announcementsData) {
    const classId = (ann as any).class ? classMap.get((ann as any).class) : undefined;
    await prisma.announcement.create({
      data: {
        title:       ann.title,
        description: `${ann.title}. Please check the notice board for full details.`,
        date:        new Date(`${ann.date}T08:00:00`),
        classId:     classId ?? null,
      },
    });
    annCount++;
  }
  console.log(`✅  ${annCount} announcements seeded.`);

  console.log("\n🎉  Database fully seeded from data.ts with conflict-free schedules!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("❌  Seed failed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
