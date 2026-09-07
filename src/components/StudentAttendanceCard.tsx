import prisma from "@/lib/prisma";

const StudentAttendanceCard = async ({ id }: { id: string }) => {
  const currentLogs = await prisma.attendance.findMany({
    where: {
      studentId: id,
    },
  });

  const summaries = await prisma.monthlyAttendanceSummary.findMany({
    where: {
      studentId: id,
    },
  });

  const safeLogs = currentLogs || [];
  const safeSummaries = summaries || [];

  const totalLogs = safeLogs.length;
  const presentLogs = safeLogs.filter((day) => day.present).length;

  let percentage = 0;
  if (safeSummaries.length > 0 || totalLogs > 0) {
    const sumPercentages = safeSummaries.reduce((acc, curr) => acc + curr.percentage, 0);
    const currentPercentage = totalLogs > 0 ? (presentLogs / totalLogs) * 100 : 0;
    const totalMonths = safeSummaries.length + (totalLogs > 0 ? 1 : 0);
    percentage = parseFloat(((sumPercentages + currentPercentage) / totalMonths).toFixed(1));
  }

  return (
    <div className="">
      <h1 className="text-xl font-semibold">{percentage > 0 ? `${percentage}%` : "-"}</h1>
      <span className="text-sm text-gray-400">Attendance</span>
    </div>
  );
};

export default StudentAttendanceCard;
