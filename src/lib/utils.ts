// IT APPEARS THAT BIG CALENDAR SHOWS THE LAST WEEK WHEN THE CURRENT DAY IS A WEEKEND.
// FOR THIS REASON WE'LL GET THE LAST WEEK AS THE REFERENCE WEEK.
// IN THE TUTORIAL WE'RE TAKING THE NEXT WEEK AS THE REFERENCE WEEK.

const getLatestMonday = (): Date => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const latestMonday = new Date(today);
  if (dayOfWeek === 0) {
    // Sunday: calendar shows next week, so set reference Monday to tomorrow
    latestMonday.setDate(today.getDate() + 1);
  } else {
    // Mon-Sat: set reference Monday to current week's Monday
    const daysSinceMonday = dayOfWeek - 1;
    latestMonday.setDate(today.getDate() - daysSinceMonday);
  }
  latestMonday.setHours(0, 0, 0, 0);
  return latestMonday;
};

export const adjustScheduleToCurrentWeek = <T extends { title: string; start: Date; end: Date }>(
  lessons: T[]
): T[] => {
  const latestMonday = getLatestMonday();

  return lessons.map((lesson) => {
    const lessonDayOfWeek = lesson.start.getDay();

    const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;

    const adjustedStartDate = new Date(latestMonday);

    adjustedStartDate.setDate(latestMonday.getDate() + daysFromMonday);
    adjustedStartDate.setHours(
      lesson.start.getHours(),
      lesson.start.getMinutes(),
      lesson.start.getSeconds()
    );
    const adjustedEndDate = new Date(adjustedStartDate);
    adjustedEndDate.setHours(
      lesson.end.getHours(),
      lesson.end.getMinutes(),
      lesson.end.getSeconds()
    );

    return {
      ...lesson,
      start: adjustedStartDate,
      end: adjustedEndDate,
    };
  });
};
