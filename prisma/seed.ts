import { Day, PrismaClient, UserSex } from "@prisma/client";
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
  announcementsData
} from "../src/lib/data";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting cleanup of old table rows (preserving Admins)...");
  
  // 1. Clean up old data in reverse dependency order
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

  console.log("Cleanup complete. Seeding new data from src/lib/data.ts...");

  // 2. Seeding Grade (levels 1-12)
  for (let i = 1; i <= 12; i++) {
    await prisma.grade.create({
      data: { level: i }
    });
  }
  console.log("Grades seeded.");

  // 3. Seeding Subjects (auto-generate Subject IDs)
  for (const subject of subjectsData) {
    await prisma.subject.create({
      data: {
        name: subject.name
      }
    });
  }
  console.log("Subjects seeded.");

  // Fetch dynamic fallback subject/grade IDs
  const fallbackGrade = await prisma.grade.findFirst();
  const fallbackSubject = await prisma.subject.findFirst();

  if (!fallbackGrade || !fallbackSubject) {
    throw new Error("Failed to seed initial Grades or Subjects.");
  }

  // 4. Seeding Teachers
  for (const teacher of teachersData) {
    const nameParts = teacher.name.split(" ");
    const firstName = nameParts[0];
    const surname = nameParts.slice(1).join(" ") || "Surname";
    
    // Find subject IDs to connect
    const teacherSubjects = [];
    for (const subName of teacher.subjects) {
      const dbSub = await prisma.subject.findFirst({
        where: { name: { equals: subName, mode: "insensitive" } }
      });
      if (dbSub) {
        teacherSubjects.push({ id: dbSub.id });
      }
    }

    // Generate unique email and phone
    const uniqueEmail = teacher.email ? `teacher${teacher.id}_${teacher.email}` : null;
    const uniquePhone = teacher.phone ? `123-456-78${String(teacher.id).padStart(2, '0')}` : null;

    await prisma.teacher.create({
      data: {
        id: `teacher${teacher.id}`,
        username: `teacher${teacher.id}`,
        name: firstName,
        surname: surname,
        email: uniqueEmail,
        phone: uniquePhone,
        address: teacher.address,
        img: teacher.photo,
        bloodType: "A+",
        sex: teacher.id % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        birthday: new Date("1980-01-01"),
        subjects: {
          connect: teacherSubjects
        }
      }
    });
  }
  console.log("Teachers seeded.");

  // Fetch dynamic fallback teacher ID
  const fallbackTeacher = await prisma.teacher.findFirst();
  if (!fallbackTeacher) {
    throw new Error("Failed to seed Teachers.");
  }

  // 5. Seeding Classes (auto-generate Class IDs and connect Supervisors)
  for (const cls of classesData) {
    // Find supervisor teacher
    let supervisorId: string | undefined = undefined;
    if (cls.supervisor) {
      const parts = cls.supervisor.split(" ");
      const firstName = parts[0];
      const surname = parts.slice(1).join(" ");
      const dbTeacher = await prisma.teacher.findFirst({
        where: {
          name: { equals: firstName, mode: "insensitive" },
          surname: { equals: surname, mode: "insensitive" }
        }
      });
      if (dbTeacher) {
        supervisorId = dbTeacher.id;
      }
    }

    // Find grade ID
    const dbGrade = await prisma.grade.findUnique({
      where: { level: cls.grade }
    });

    await prisma.class.create({
      data: {
        name: cls.name,
        capacity: cls.capacity,
        gradeId: dbGrade ? dbGrade.id : fallbackGrade.id,
        supervisorId: supervisorId
      }
    });
  }
  console.log("Classes seeded.");

  // Fetch dynamic fallback class ID
  const fallbackClass = await prisma.class.findFirst();
  if (!fallbackClass) {
    throw new Error("Failed to seed Classes.");
  }

  // 6. Seeding Parents
  for (const parent of parentsData) {
    const parts = parent.name.split(" ");
    const firstName = parts[0];
    const surname = parts.slice(1).join(" ") || "Surname";

    // Generate unique email and phone
    const uniqueEmail = parent.email ? `parent${parent.id}_${parent.email}` : null;
    const uniquePhone = parent.phone ? `321-654-98${String(parent.id).padStart(2, '0')}` : `321-654-98${String(parent.id).padStart(2, '0')}`;

    await prisma.parent.create({
      data: {
        id: `parent${parent.id}`,
        username: `parent${parent.id}`,
        name: firstName,
        surname: surname,
        email: uniqueEmail,
        phone: uniquePhone,
        address: parent.address
      }
    });
  }
  console.log("Parents seeded.");

  // Fetch dynamic fallback parent ID
  const fallbackParent = await prisma.parent.findFirst();
  if (!fallbackParent) {
    throw new Error("Failed to seed Parents.");
  }

  // 7. Seeding Students
  for (const student of studentsData) {
    const parts = student.name.split(" ");
    const firstName = parts[0];
    const surname = parts.slice(1).join(" ") || "Surname";

    // Find class ID
    const dbClass = await prisma.class.findUnique({
      where: { name: student.class }
    });

    // Find grade ID
    const dbGrade = await prisma.grade.findUnique({
      where: { level: student.grade }
    });

    // Link parent sequentially
    const parentIndex = (student.id % parentsData.length) || parentsData.length;
    const parentId = `parent${parentIndex}`;

    // Generate unique email and phone
    const uniqueEmail = student.email ? `student${student.id}_${student.email}` : null;
    const uniquePhone = student.phone ? `987-654-32${String(student.id).padStart(2, '0')}` : null;

    await prisma.student.create({
      data: {
        id: `student${student.id}`,
        username: `student${student.id}`,
        name: firstName,
        surname: surname,
        email: uniqueEmail,
        phone: uniquePhone,
        address: student.address,
        img: student.photo,
        bloodType: "O-",
        sex: student.id % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        birthday: new Date("2015-01-01"),
        classId: dbClass ? dbClass.id : fallbackClass.id,
        gradeId: dbGrade ? dbGrade.id : fallbackGrade.id,
        parentId: parentId
      }
    });
  }
  console.log("Students seeded.");

  // 8. Seeding Lessons (distribute times and days)
  const dayKeys = Object.values(Day);
  for (let i = 0; i < lessonsData.length; i++) {
    const lesson = lessonsData[i];
    const dbSub = await prisma.subject.findFirst({
      where: { name: { equals: lesson.subject, mode: "insensitive" } }
    });

    const dbClass = await prisma.class.findUnique({
      where: { name: lesson.class }
    });

    let teacherId = fallbackTeacher.id;
    if (lesson.teacher) {
      const parts = lesson.teacher.split(" ");
      const firstName = parts[0];
      const surname = parts.slice(1).join(" ");
      const dbTeacher = await prisma.teacher.findFirst({
        where: {
          name: { equals: firstName, mode: "insensitive" },
          surname: { equals: surname, mode: "insensitive" }
        }
      });
      if (dbTeacher) {
        teacherId = dbTeacher.id;
      }
    }

    // Distribute hours: start between 8am and 2pm, days between Monday and Friday
    const day = dayKeys[i % dayKeys.length];
    const startHour = 8 + (i % 6);
    const startTimeStr = `2025-01-01T${String(startHour).padStart(2, '0')}:00:00Z`;
    const endTimeStr = `2025-01-01T${String(startHour + 1).padStart(2, '0')}:00:00Z`;

    await prisma.lesson.create({
      data: {
        name: lesson.subject,
        day: day,
        startTime: new Date(startTimeStr),
        endTime: new Date(endTimeStr),
        subjectId: dbSub ? dbSub.id : fallbackSubject.id,
        classId: dbClass ? dbClass.id : fallbackClass.id,
        teacherId: teacherId
      }
    });
  }
  console.log("Lessons seeded.");

  // Fetch dynamic fallback lesson ID
  const fallbackLesson = await prisma.lesson.findFirst();
  if (!fallbackLesson) {
    throw new Error("Failed to seed Lessons.");
  }

  // 9. Seeding Exams (distribute hours)
  for (let i = 0; i < examsData.length; i++) {
    const exam = examsData[i];
    const dbClass = await prisma.class.findUnique({
      where: { name: exam.class }
    });
    const dbLesson = await prisma.lesson.findFirst({
      where: { classId: dbClass ? dbClass.id : undefined }
    });

    const examHour = 9 + (i % 5); // Distribute 9am to 1pm
    const startTimeStr = `${exam.date}T${String(examHour).padStart(2, '0')}:00:00Z`;
    const endTimeStr = `${exam.date}T${String(examHour + 1).padStart(2, '0')}:00:00Z`;

    await prisma.exam.create({
      data: {
        title: `${exam.subject} Exam`,
        startTime: new Date(startTimeStr),
        endTime: new Date(endTimeStr),
        lessonId: dbLesson ? dbLesson.id : fallbackLesson.id
      }
    });
  }
  console.log("Exams seeded.");

  // 10. Seeding Assignments
  for (const assign of assignmentsData) {
    const dbClass = await prisma.class.findUnique({
      where: { name: assign.class }
    });
    const dbLesson = await prisma.lesson.findFirst({
      where: { classId: dbClass ? dbClass.id : undefined }
    });

    await prisma.assignment.create({
      data: {
        title: `${assign.subject} Assignment`,
        startDate: new Date("2025-01-01T08:00:00Z"),
        dueDate: new Date(`${assign.dueDate}T17:00:00Z`),
        lessonId: dbLesson ? dbLesson.id : fallbackLesson.id
      }
    });
  }
  console.log("Assignments seeded.");

  // Fetch created exams and assignments to map results
  const dbExams = await prisma.exam.findMany();
  const dbAssignments = await prisma.assignment.findMany();

  // 11. Seeding Results (auto-generate Result IDs)
  for (let i = 0; i < resultsData.length; i++) {
    const result = resultsData[i];
    let studentId = "student1";
    if (result.student) {
      const parts = result.student.split(" ");
      const firstName = parts[0];
      const surname = parts.slice(1).join(" ");
      const dbStudent = await prisma.student.findFirst({
        where: {
          name: { equals: firstName, mode: "insensitive" },
          surname: { equals: surname, mode: "insensitive" }
        }
      });
      if (dbStudent) {
        studentId = dbStudent.id;
      }
    }

    const examId = result.type === "exam" && dbExams.length > 0 ? dbExams[i % dbExams.length].id : undefined;
    const assignmentId = result.type === "assignment" && dbAssignments.length > 0 ? dbAssignments[i % dbAssignments.length].id : undefined;

    await prisma.result.create({
      data: {
        score: result.score,
        studentId: studentId,
        examId: examId,
        assignmentId: assignmentId
      }
    });
  }
  console.log("Results seeded.");

  // 12. Seeding Events (distribute times)
  for (const event of eventsData) {
    const dbClass = await prisma.class.findUnique({
      where: { name: event.class }
    });

    await prisma.event.create({
      data: {
        title: event.title,
        description: `Description for ${event.title}`,
        startTime: new Date(`${event.date}T${event.startTime}:00Z`),
        endTime: new Date(`${event.date}T${event.endTime}:00Z`),
        classId: dbClass ? dbClass.id : undefined
      }
    });
  }
  console.log("Events seeded.");

  // 13. Seeding Announcements (auto-generate Announcement IDs)
  for (const ann of announcementsData) {
    const dbClass = await prisma.class.findUnique({
      where: { name: ann.class }
    });

    await prisma.announcement.create({
      data: {
        title: ann.title,
        description: `Announcement description for ${ann.title}`,
        date: new Date(`${ann.date}T08:00:00Z`),
        classId: dbClass ? dbClass.id : undefined
      }
    });
  }
  console.log("Announcements seeded.");

  console.log("\n--- Reseeding completed successfully! ---");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
