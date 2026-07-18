const { PrismaClient, UserSex, Day } = require("@prisma/client");

const prisma = new PrismaClient();

function getTeacherForSubject(subjectName: string, lessonIndex: number, seededTeachers: any[]): any {
  const subjectTeacherIndices: { [key: string]: number[] } = {
    "Mathematics": [0, 5, 10], // Jane (index 0 is test teacher), Diana (index 5), Ian (index 10)
    "English Language": [1, 7, 10],
    "Science": [0, 9, 11],
    "History": [1, 8, 12],
    "Geography": [3, 8, 13],
    "Physics": [2, 5, 12],
    "Chemistry": [2, 6, 14],
    "Biology": [3, 6, 13],
    "Fine Arts": [4, 7, 11],
    "Music": [4, 9, 14]
  };

  const indices = subjectTeacherIndices[subjectName] || [0];
  const selectedIndex = indices[lessonIndex % indices.length];
  return seededTeachers[selectedIndex];
}

async function main() {
  console.log("Starting database cleanup...");
  
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
  await prisma.admin.deleteMany({});

  console.log("Cleanup complete. Resolving Clerk test accounts...");

  // 2. Fetch real Clerk test user IDs
  let adminClerkId = "admin1";
  let teacherClerkId = "teacher1";
  let studentClerkId = "student1";
  let parentClerkId = "parent1";

  const secretKey = process.env.CLERK_SECRET_KEY;
  if (secretKey) {
    try {
      console.log("Fetching test user IDs from Clerk API...");
      const response = await fetch("https://api.clerk.com/v1/users?limit=100", {
        headers: {
          "Authorization": `Bearer ${secretKey}`,
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        const users = (await response.json()) as any[];
        const adminUser = users.find((u: any) => u.email_addresses?.some((e: any) => e.email_address === "admin+clerk_test@school.com"));
        const teacherUser = users.find((u: any) => u.email_addresses?.some((e: any) => e.email_address === "teacher+clerk_test@school.com"));
        const studentUser = users.find((u: any) => u.email_addresses?.some((e: any) => e.email_address === "student+clerk_test@school.com"));
        const parentUser = users.find((u: any) => u.email_addresses?.some((e: any) => e.email_address === "parent+clerk_test@school.com"));

        if (adminUser) {
          adminClerkId = adminUser.id;
          console.log(`- Found Admin ID: ${adminClerkId}`);
        }
        if (teacherUser) {
          teacherClerkId = teacherUser.id;
          console.log(`- Found Teacher ID: ${teacherClerkId}`);
        }
        if (studentUser) {
          studentClerkId = studentUser.id;
          console.log(`- Found Student ID: ${studentClerkId}`);
        }
        if (parentUser) {
          parentClerkId = parentUser.id;
          console.log(`- Found Parent ID: ${parentClerkId}`);
        }
      } else {
        console.warn("Failed to fetch user list from Clerk API (status:", response.status, ")");
      }
    } catch (e: any) {
      console.warn("Could not connect to Clerk API to retrieve test user IDs:", e.message);
    }
  } else {
    console.warn("CLERK_SECRET_KEY not found in env, using fallbacks.");
  }

  // 3. Seed Admin
  await prisma.admin.create({
    data: {
      id: adminClerkId,
      username: "admin"
    }
  });
  console.log("Admin seeded.");

  // 4. Seed Grades (Levels 1-10)
  const grades = [];
  for (let i = 1; i <= 10; i++) {
    const grade = await prisma.grade.create({
      data: { level: i }
    });
    grades.push(grade);
  }
  console.log("Grades 1-10 seeded.");

  // 5. Seed Subjects
  const subjectNames = [
    "Mathematics",
    "English Language",
    "Science",
    "History",
    "Geography",
    "Physics",
    "Chemistry",
    "Biology",
    "Fine Arts",
    "Music"
  ];
  const subjects = [];
  for (const name of subjectNames) {
    const sub = await prisma.subject.create({
      data: { name }
    });
    subjects.push(sub);
  }
  console.log("Subjects seeded.");

  // 6. Seed Teachers
  const teacherNames = [
    { name: "Jane", surname: "Doe", email: "teacher+clerk_test@school.com", subjects: ["Mathematics", "Science"] },
    { name: "John", surname: "Smith", email: "john.smith@school.com", subjects: ["English Language", "History"] },
    { name: "Alice", surname: "Johnson", email: "alice.j@school.com", subjects: ["Physics", "Chemistry"] },
    { name: "Bob", surname: "Brown", email: "bob.b@school.com", subjects: ["Biology", "Geography"] },
    { name: "Charlie", surname: "Davis", email: "charlie.d@school.com", subjects: ["Fine Arts", "Music"] },
    { name: "Diana", surname: "Miller", email: "diana.m@school.com", subjects: ["Mathematics", "Physics"] },
    { name: "Ethan", surname: "Wilson", email: "ethan.w@school.com", subjects: ["Chemistry", "Biology"] },
    { name: "Fiona", surname: "Moore", email: "fiona.m@school.com", subjects: ["English Language", "Fine Arts"] },
    { name: "George", surname: "Taylor", email: "george.t@school.com", subjects: ["History", "Geography"] },
    { name: "Hannah", surname: "Anderson", email: "hannah.a@school.com", subjects: ["Science", "Music"] },
    { name: "Ian", surname: "Thomas", email: "ian.t@school.com", subjects: ["Mathematics", "English Language"] },
    { name: "Julia", surname: "Jackson", email: "julia.j@school.com", subjects: ["Science", "Fine Arts"] },
    { name: "Kevin", surname: "White", email: "kevin.w@school.com", subjects: ["Physics", "History"] },
    { name: "Laura", surname: "Harris", email: "laura.h@school.com", subjects: ["Geography", "Biology"] },
    { name: "Marcus", surname: "Martin", email: "marcus.m@school.com", subjects: ["Chemistry", "Music"] }
  ];

  const teachers = [];
  for (let i = 0; i < teacherNames.length; i++) {
    const t = teacherNames[i];
    const teacherSubjects = subjects.filter(s => t.subjects.includes(s.name)).map(s => ({ id: s.id }));
    
    const dbTeacher = await prisma.teacher.create({
      data: {
        id: i === 0 ? teacherClerkId : `teacher_${i + 1}`,
        username: i === 0 ? `teacher_test` : `teacher_${i + 1}`,
        name: t.name,
        surname: t.surname,
        email: t.email,
        phone: `123-456-78${String(i + 1).padStart(2, "0")}`,
        address: `${100 + i * 15} Academic Way, Scholastic City`,
        bloodType: "O+",
        sex: i % 2 === 0 ? UserSex.FEMALE : UserSex.MALE,
        birthday: new Date("1980-01-01"),
        subjects: {
          connect: teacherSubjects
        }
      }
    });
    teachers.push(dbTeacher);
  }
  console.log("Teachers seeded.");

  // 7. Seed Classes ("1A" through "10A")
  const classes = [];
  for (let i = 0; i < 10; i++) {
    const grade = grades[i];
    const supervisor = teachers[i % teachers.length];
    const dbClass = await prisma.class.create({
      data: {
        name: `${i + 1}A`,
        capacity: 30,
        gradeId: grade.id,
        supervisorId: supervisor.id
      }
    });
    classes.push(dbClass);
  }
  console.log("Classes seeded.");

  // 8. Seed Parents
  const parents = [];
  for (let i = 0; i < 15; i++) {
    const dbParent = await prisma.parent.create({
      data: {
        id: i === 0 ? parentClerkId : `parent_${i + 1}`,
        username: i === 0 ? `parent_test` : `parent_${i + 1}`,
        name: i === 0 ? "Robert (Test)" : `ParentName_${i + 1}`,
        surname: i === 0 ? "Doe" : `ParentSurname_${i + 1}`,
        email: i === 0 ? "parent+clerk_test@school.com" : `parent_${i + 1}@example.com`,
        phone: `321-654-98${String(i + 1).padStart(2, "0")}`,
        address: `${200 + i * 20} Family Blvd, Residential Zone`
      }
    });
    parents.push(dbParent);
  }
  console.log("Parents seeded.");

  // 9. Seed Students (3 students per class, 30 students total)
  const students = [];
  let studentCounter = 0;
  for (let i = 0; i < classes.length; i++) {
    const cls = classes[i];
    const grade = grades[i];
    
    for (let sIdx = 0; sIdx < 3; sIdx++) {
      studentCounter++;
      const isTestStudent = (cls.name === "4A" && sIdx === 0);
      
      const parent = isTestStudent ? parents[0] : parents[studentCounter % parents.length];
      const dbStudent = await prisma.student.create({
        data: {
          id: isTestStudent ? studentClerkId : `student_${studentCounter}`,
          username: isTestStudent ? `student_test` : `student_${studentCounter}`,
          name: isTestStudent ? "John (Test)" : `StudentName_${studentCounter}`,
          surname: isTestStudent ? "Doe" : `StudentSurname_${studentCounter}`,
          email: isTestStudent ? "student+clerk_test@school.com" : `student_${studentCounter}@example.com`,
          phone: `987-654-32${String(studentCounter).padStart(2, "0")}`,
          address: `${300 + studentCounter * 10} Student Lane, School Suburbs`,
          bloodType: "A-",
          sex: studentCounter % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
          birthday: new Date("2012-05-15"),
          classId: cls.id,
          gradeId: grade.id,
          parentId: parent.id
        }
      });
      students.push(dbStudent);
    }
  }
  console.log("Students seeded.");

  // 10. Seed Lessons (Monday to Friday, 4 slots per day)
  const weekdays = [
    { day: Day.MONDAY, dateStr: "2025-01-06" },
    { day: Day.TUESDAY, dateStr: "2025-01-07" },
    { day: Day.WEDNESDAY, dateStr: "2025-01-08" },
    { day: Day.THURSDAY, dateStr: "2025-01-09" },
    { day: Day.FRIDAY, dateStr: "2025-01-10" }
  ];

  const slots = [
    { start: "08:30:00", end: "09:15:00" },
    { start: "09:30:00", end: "10:15:00" },
    { start: "10:30:00", end: "11:15:00" },
    { start: "11:30:00", end: "12:15:00" }
  ];

  const lessons = [];
  let lessonCounter = 0;

  for (const cls of classes) {
    for (let d = 0; d < weekdays.length; d++) {
      const wk = weekdays[d];
      
      for (let s = 0; s < slots.length; s++) {
        lessonCounter++;
        const slot = slots[s];
        const subject = subjects[(lessonCounter + cls.id) % subjects.length];
        
        // Dynamic subject-teacher lookup
        const teacher = getTeacherForSubject(subject.name, lessonCounter, teachers);

        const startTimeStr = `${wk.dateStr}T${slot.start}`;
        const endTimeStr = `${wk.dateStr}T${slot.end}`;

        const dbLesson = await prisma.lesson.create({
          data: {
            name: subject.name,
            day: wk.day,
            startTime: new Date(startTimeStr),
            endTime: new Date(endTimeStr),
            subjectId: subject.id,
            classId: cls.id,
            teacherId: teacher.id
          }
        });
        lessons.push(dbLesson);
      }
    }
  }
  console.log(`Successfully seeded ${lessons.length} lessons across all classes.`);

  // 11. Seed Exams (Mid-term in January, Final-term in June)
  const exams = [];
  const testStudentId = studentClerkId;

  const testStudentObj = await prisma.student.findUnique({
    where: { id: testStudentId }
  });
  
  if (testStudentObj) {
    const classLessons = await prisma.lesson.findMany({
      where: { classId: testStudentObj.classId }
    });

    for (let i = 0; i < classLessons.length; i++) {
      const lesson = classLessons[i];
      
      const midExam = await prisma.exam.create({
        data: {
          title: `${lesson.name} Mid-Term`,
          startTime: new Date(`2025-01-22T${i % 2 === 0 ? "09:00:00" : "11:00:00"}`),
          endTime: new Date(`2025-01-22T${i % 2 === 0 ? "10:30:00" : "12:30:00"}`),
          lessonId: lesson.id
        }
      });
      exams.push(midExam);

      const finalExam = await prisma.exam.create({
        data: {
          title: `${lesson.name} Final-Term`,
          startTime: new Date(`2025-06-18T${i % 2 === 0 ? "09:00:00" : "11:00:00"}`),
          endTime: new Date(`2025-06-18T${i % 2 === 0 ? "10:30:00" : "12:30:00"}`),
          lessonId: lesson.id
        }
      });
      exams.push(finalExam);
    }
    console.log(`Seeded ${exams.length} exams for Class 4A.`);
  }

  // 12. Seed Assignments
  const assignments = [];
  if (testStudentObj) {
    const classLessons = await prisma.lesson.findMany({
      where: { classId: testStudentObj.classId }
    });

    for (let i = 0; i < classLessons.length; i++) {
      const lesson = classLessons[i];
      const assign = await prisma.assignment.create({
        data: {
          title: `${lesson.name} Assignment`,
          startDate: new Date("2025-01-06T08:00:00"),
          dueDate: new Date("2025-01-13T17:00:00"),
          lessonId: lesson.id
        }
      });
      assignments.push(assign);
    }
    console.log(`Seeded ${assignments.length} assignments for Class 4A.`);
  }

  // 13. Seed Results for Exams and Assignments
  if (testStudentObj) {
    const class4AStudents = await prisma.student.findMany({
      where: { classId: testStudentObj.classId }
    });

    for (const st of class4AStudents) {
      for (const ex of exams) {
        await prisma.result.create({
          data: {
            score: Math.floor(Math.random() * (99 - 65 + 1)) + 65,
            studentId: st.id,
            examId: ex.id
          }
        });
      }

      for (const asgn of assignments) {
        await prisma.result.create({
          data: {
            score: Math.floor(Math.random() * (100 - 70 + 1)) + 70,
            studentId: st.id,
            assignmentId: asgn.id
          }
        });
      }
    }
    console.log("Seeded results scores for Class 4A students.");
  }

  // 14. Seed School Events
  const events = [
    { title: "Science Fair", dateStr: "2025-01-15", start: "09:00:00", end: "14:00:00" },
    { title: "Annual Sports Day", dateStr: "2025-02-12", start: "08:00:00", end: "16:00:00" },
    { title: "Parent Teacher Meeting", dateStr: "2025-01-24", start: "14:00:00", end: "17:00:00" },
    { title: "Art & Craft Exhibition", dateStr: "2025-03-05", start: "10:00:00", end: "15:00:00" }
  ];

  for (const ev of events) {
    await prisma.event.create({
      data: {
        title: ev.title,
        description: `Join us for our school's annual ${ev.title}.`,
        startTime: new Date(`${ev.dateStr}T${ev.start}`),
        endTime: new Date(`${ev.dateStr}T${ev.end}`)
      }
    });
  }
  console.log("Seeded school-wide events.");

  // 15. Seed Announcements
  const announcements = [
    { title: "Mid-Term Exam Dates Announced", dateStr: "2025-01-05" },
    { title: "School Picnic Scheduled for February", dateStr: "2025-01-12" },
    { title: "New Library Books Collection Available", dateStr: "2025-01-20" },
    { title: "Winter Sports Registration Open", dateStr: "2025-01-08" }
  ];

  for (const ann of announcements) {
    await prisma.announcement.create({
      data: {
        title: ann.title,
        description: `${ann.title} details are available on the notice board. Please contact administration for queries.`,
        date: new Date(`${ann.dateStr}T08:00:00`)
      }
    });
  }
  console.log("Seeded announcements.");

  console.log("\n--- Reseeding completed successfully! ---");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: any) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
