import prisma from "@/lib/prisma";
import BigCalendar from "./BigCalender";
import { adjustScheduleToCurrentWeek } from "@/lib/utils";

const BigCalendarContainer = async ({
  type,
  id,
  title,
}: {
  type: "teacherId" | "classId";
  id: string | number;
  title?: string;
}) => {
  let dataRes: any[] = [];
  let eventsRes: any[] = [];

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

    eventsRes = await prisma.event.findMany({
      where: {
        OR: [
          { classId: null },
          { classId: { in: teacherClassIds } }
        ]
      }
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

    eventsRes = await prisma.event.findMany({
      where: {
        OR: [
          { classId: null },
          { classId: id as number }
        ]
      }
    });
  }

  // Create 5 virtual break events for Mon-Fri from 12 PM to 1 PM
  const baseDate = new Date(2025, 0, 6); // Monday Jan 6, 2025
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
      isSchoolEvent: false,
      isPtm: false,
      isMyLesson: false,
    });
  }

  // Adjust lessons and breaks to current week
  let schedule = adjustScheduleToCurrentWeek([
    ...dataRes.map((lesson) => ({
      title: lesson.name,
      start: lesson.startTime,
      end: lesson.endTime,
      teacherName: `${lesson.teacher.name} ${lesson.teacher.surname}`,
      isBreak: false,
      isSchoolEvent: false,
      isPtm: false,
      isMyLesson: type === "teacherId" ? lesson.teacherId === id : true,
    })),
    ...breakLessons,
  ]);

  // --- FILTER EVENTS FOR CURRENT DISPLAYED WEEK ---
  const getLatestMonday = (): Date => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const latestMonday = new Date(today);
    if (dayOfWeek === 0) {
      latestMonday.setDate(today.getDate() + 1);
    } else {
      const daysSinceMonday = dayOfWeek - 1;
      latestMonday.setDate(today.getDate() - daysSinceMonday);
    }
    latestMonday.setHours(0, 0, 0, 0);
    return latestMonday;
  };

  const latestMonday = getLatestMonday();
  const weekStart = new Date(latestMonday);
  weekStart.setHours(0, 0, 0, 0);
  const weekEnd = new Date(latestMonday);
  weekEnd.setDate(latestMonday.getDate() + 7);
  weekEnd.setHours(0, 0, 0, 0);

  const currentWeekEvents = eventsRes.filter((event) => {
    const eventDate = new Date(event.startTime);
    return eventDate >= weekStart && eventDate < weekEnd;
  });

  const mappedEvents = currentWeekEvents.map((event) => ({
    title: event.title,
    description: event.description,
    start: new Date(event.startTime),
    end: new Date(event.endTime),
    teacherName: "",
    isBreak: false,
    isSchoolEvent: true,
    isPtm: false,
    isMyLesson: true,
  }));

  // Combine schedule with mapped actual events of this week
  schedule = [...schedule, ...mappedEvents];

  // --- PARENT-TEACHER MEETING HOLIDAY DETECTOR ---
  const isLastSchoolDayOfMonth = (date: Date): boolean => {
    const d = new Date(date);
    const month = d.getMonth();
    const year = d.getFullYear();
    
    // Find the last weekday (Mon-Fri) of the month
    let lastDay = new Date(year, month + 1, 0);
    while (lastDay.getDay() === 0 || lastDay.getDay() === 6) {
      lastDay.setDate(lastDay.getDate() - 1);
    }
    
    return d.getDate() === lastDay.getDate() && 
           d.getMonth() === lastDay.getMonth() && 
           d.getFullYear() === lastDay.getFullYear();
  };

  const ptmDays: { [dateStr: string]: Date } = {};
  for (let i = 0; i < 5; i++) {
    const checkDay = new Date(latestMonday);
    checkDay.setDate(latestMonday.getDate() + i);
    if (isLastSchoolDayOfMonth(checkDay)) {
      ptmDays[checkDay.toISOString().split("T")[0]] = checkDay;
    }
  }

  // If the active week has a PTM, filter out other items and inject the full-day PTM holiday block
  const ptmKeys = Object.keys(ptmDays);
  if (ptmKeys.length > 0) {
    // Filter out standard lessons/breaks/events on PTM days
    schedule = schedule.filter((item) => {
      const itemDateStr = item.start.toISOString().split("T")[0];
      return !ptmDays[itemDateStr];
    });

    // Inject a full-day block for PTM (8:00 AM to 2:00 PM) on the PTM day
    ptmKeys.forEach((key) => {
      const ptmDay = ptmDays[key];
      const start = new Date(ptmDay);
      start.setHours(8, 0, 0);
      const end = new Date(ptmDay);
      end.setHours(14, 0, 0);

      schedule.push({
        title: "Parent-Teacher Meeting (Holiday)",
        start,
        end,
        teacherName: "",
        isBreak: false,
        isSchoolEvent: true,
        isPtm: true,
        isMyLesson: true,
      });
    });
  }

  // --- ENTIRE DAY HOLIDAY FILTER: If a day has any event, hide all lessons and breaks on that day ---
  const eventItems = schedule.filter((item) => item.isSchoolEvent || item.isPtm);
  const regularItems = schedule.filter((item) => !item.isSchoolEvent && !item.isPtm);

  const eventDates = new Set(
    eventItems.map((item) => item.start.toISOString().split("T")[0])
  );

  const nonOverlappingRegularItems = regularItems.filter((regular) => {
    const regularDateStr = regular.start.toISOString().split("T")[0];
    return !eventDates.has(regularDateStr);
  });

  const finalSchedule = [...nonOverlappingRegularItems, ...eventItems];

  return (
    <div className="h-[800px]">
      <BigCalendar data={finalSchedule} title={title} />
    </div>
  );
};

export default BigCalendarContainer;
