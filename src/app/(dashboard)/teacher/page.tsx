import Announcements from "@/components/Announcements";
import TeacherScheduleView from "@/components/TeacherScheduleView";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

const TeacherPage = async () => {
  const { userId } = auth();

  // 1. Fetch all classes assigned to this teacher
  const teacher = await prisma.teacher.findUnique({
    where: { id: userId! },
    select: { classes: { select: { id: true, name: true } } }
  });
  const teacherClasses = teacher?.classes.sort((a, b) => a.name.localeCompare(b.name)) || [];
  const teacherClassIds = teacherClasses.map(c => c.id);

  // 2. Fetch all lessons for all of these classes
  const dataRes = await prisma.lesson.findMany({
    where: {
      classId: { in: teacherClassIds },
    },
    include: {
      teacher: true,
      class: true,
    },
  });

  // Create virtual break events for each weekday (Mon-Fri) 12 PM - 1 PM
  const baseDate = new Date(2025, 0, 6); // Monday Jan 6, 2025
  const breakLessons = [];
  for (let i = 0; i < 5; i++) {
    const dayDate = new Date(baseDate);
    dayDate.setDate(baseDate.getDate() + i);

    const start = new Date(dayDate);
    start.setHours(12, 0, 0, 0);
    const end = new Date(dayDate);
    end.setHours(13, 0, 0, 0);

    breakLessons.push({
      title: "Break",
      start,
      end,
      teacherName: "",
      isBreak: true,
      classId: 0,
      isMyLesson: false,
    });
  }

  const data = [
    ...dataRes.map((lesson) => ({
      title: lesson.name,
      start: lesson.startTime,
      end: lesson.endTime,
      teacherName: `${lesson.teacher.name} ${lesson.teacher.surname}`,
      isBreak: false,
      classId: lesson.classId,
      isMyLesson: lesson.teacherId === userId!,
    })),
    ...breakLessons,
  ];

  const schedule = adjustScheduleToCurrentWeek(data);

  // Serialize dates for Next.js client component boundary
  const serializedLessons = schedule.map((l) => ({
    ...l,
    start: l.start.toISOString(),
    end: l.end.toISOString(),
  }));

  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white p-4 rounded-md">
          <TeacherScheduleView classes={teacherClasses} lessons={serializedLessons} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
