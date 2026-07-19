import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import AttendanceClient from "@/components/AttendanceClient";

const AttendancePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role || "student";

  let classes: any[] = [];
  let attendanceRecords: any[] = [];
  let monthlySummaries: any[] = [];
  let parentChildren: any[] = [];

  if (role === "teacher") {
    // Teachers can only mark attendance for the class they supervise
    const supervisedClass = await prisma.class.findFirst({
      where: { supervisorId: userId! },
      select: { id: true, name: true },
    });
    if (supervisedClass) {
      classes = [supervisedClass];
    } else {
      classes = [];
    }
  } else if (role === "admin") {
    classes = await prisma.class.findMany({
      select: { id: true, name: true },
    });
  } else if (role === "parent") {
    parentChildren = await prisma.student.findMany({
      where: { parentId: userId! },
      select: { id: true, name: true, surname: true, classId: true },
    });

    const activeStudentId = searchParams.studentId || parentChildren[0]?.id;

    if (activeStudentId) {
      attendanceRecords = await prisma.attendance.findMany({
        where: { studentId: activeStudentId },
        include: {
          student: {
            select: { name: true, surname: true, class: { select: { name: true } } },
          },
        },
        orderBy: { date: "desc" },
      });

      monthlySummaries = await prisma.monthlyAttendanceSummary.findMany({
        where: { studentId: activeStudentId },
        orderBy: [{ year: "desc" }, { month: "desc" }],
      });
    }
  } else if (role === "student") {
    attendanceRecords = await prisma.attendance.findMany({
      where: { studentId: userId! },
      include: {
        student: {
          select: { name: true, surname: true, class: { select: { name: true } } },
        },
      },
      orderBy: { date: "desc" },
    });

    monthlySummaries = await prisma.monthlyAttendanceSummary.findMany({
      where: { studentId: userId! },
      orderBy: [{ year: "desc" }, { month: "desc" }],
    });
  }

  // Serialize dates cleanly
  const serializedRecords = attendanceRecords.map((rec) => ({
    ...rec,
    date: rec.date.toISOString().split("T")[0],
  }));

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <AttendanceClient
        role={role}
        classes={classes}
        lessons={[]} // Removed lessons select
        parentChildren={parentChildren}
        initialRecords={serializedRecords}
        monthlySummaries={monthlySummaries}
      />
    </div>
  );
};

export default AttendancePage;
