import prisma from "@/lib/prisma";
import BigCalendar from "./BigCalender";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

const BigCalendarContainer = async ({
  type,
  id,
}: {
  type: "teacherId" | "classId";
  id: string | number;
}) => {
  let dataRes = [];

  if (type === "teacherId") {
    const teacher = await prisma.teacher.findUnique({
      where: { id: id as string },
      select: { classes: { select: { id: true } } }
    });
    const teacherClassIds = teacher?.classes.map(c => c.id) || [];
    dataRes = await prisma.lesson.findMany({
      where: {
        classId: { in: teacherClassIds }
      },
      include: {
        teacher: true,
      },
    });
  } else {
    dataRes = await prisma.lesson.findMany({
      where: {
        classId: id as number
      },
      include: {
        teacher: true,
      },
    });
  }

  // Create 5 virtual break events for Mon-Fri from 12 PM to 1 PM
  const baseDate = new Date(2025, 0, 6); // Monday Jan 6, 2025 is the reference week in seed
  const breakLessons = [];
  for (let i = 0; i < 5; i++) {
    const dayDate = new Date(baseDate);
    dayDate.setDate(baseDate.getDate() + i);

    const start = new Date(dayDate);
    start.setHours(12, 0, 0);
    const end = new Date(dayDate);
    end.setHours(13, 0, 0);

    breakLessons.push({
      title: "Break",
      start,
      end,
      teacherName: "",
      isBreak: true,
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
      isMyLesson: type === "teacherId" ? lesson.teacherId === id : true,
    })),
    ...breakLessons,
  ];

  const schedule = adjustScheduleToCurrentWeek(data);

  return (
    <div className="h-[800px]">
      <BigCalendar data={schedule} />
    </div>
  );
};

export default BigCalendarContainer;
