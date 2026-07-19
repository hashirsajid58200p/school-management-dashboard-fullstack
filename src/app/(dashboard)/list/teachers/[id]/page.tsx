import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import BigCalendar from "@/components/BigCalender";
import FormContainer from "@/components/FormContainer";
import Performance from "@/components/Performance";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleTeacherPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  const currentUserId = userId;

  // 1. Guard check
  let isAllowed = false;
  if (role === "admin") {
    isAllowed = true;
  } else if (role === "teacher") {
    isAllowed = id === currentUserId;
  } else if (role === "student") {
    const student = await prisma.student.findUnique({
      where: { id: currentUserId! },
      select: { classId: true }
    });
    if (student) {
      const teachesInClass = await prisma.lesson.findFirst({
        where: { teacherId: id, classId: student.classId }
      });
      isAllowed = !!teachesInClass;
    }
  } else if (role === "parent") {
    const parent = await prisma.parent.findUnique({
      where: { id: currentUserId! },
      select: { students: { select: { classId: true } } }
    });
    if (parent) {
      const childrenClassIds = parent.students.map(s => s.classId);
      const teachesInChildrenClass = await prisma.lesson.findFirst({
        where: { teacherId: id, classId: { in: childrenClassIds } }
      });
      isAllowed = !!teachesInChildrenClass;
    }
  }

  if (!isAllowed) {
    return notFound();
  }

  const teacher = await prisma.teacher.findUnique({
    where: { id },
    include: {
      subject: true,
      _count: {
        select: {
          lessons: true,
          classes: true,
        },
      },
    },
  });

  if (!teacher) {
    return notFound();
  }
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4 items-start w-full">
          {/* USER INFO CARD */}
          <div className="bg-hsSky py-6 px-6 rounded-2xl w-full lg:w-[calc(50%-8px)] flex gap-6 items-start">
            <div className="w-36 h-36 flex-shrink-0">
              <Image
                src={teacher.img || "/noAvatar.png"}
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover shadow-sm border-2 border-white"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between gap-3 w-full">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-slate-800">
                  {teacher.name + " " + teacher.surname}
                </h1>
                {role === "admin" && (
                  <FormContainer table="teacher" type="update" data={teacher} />
                )}
              </div>
              <p className="text-xs text-slate-500 italic leading-relaxed">
                Senior educator committed to fostering a supportive, high-engagement classroom environment.
              </p>
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-x-4 gap-y-2.5 text-xs font-semibold text-slate-700 w-full mt-2">
                <div className="flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>Blood Type: {teacher.bloodType || "-"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>
                    DOB: {new Intl.DateTimeFormat("en-GB").format(teacher.birthday)}
                  </span>
                </div>
                <div className="flex items-center gap-2 col-span-1 min-[450px]:col-span-2">
                  <Image src="/mail.png" alt="" width={14} height={14} className="shrink-0" />
                  <span className="break-all select-all hover:text-indigo-600 transition-colors" title={teacher.email || ""}>
                    {teacher.email || "-"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>Phone: {teacher.phone || "-"}</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="w-full lg:w-[calc(50%-8px)] flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">
                  {teacher.subject?.name || "-"}
                </h1>
                <span className="text-sm text-gray-400">Subject</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">
                  {teacher._count.lessons}
                </h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">
                  {teacher._count.classes}
                </h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <BigCalendarContainer type="teacherId" id={teacher.id} title="Teacher's Schedule" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
           <Link
              className="p-3 rounded-md bg-hsSkyLight"
              href={`/list/classes?supervisorId=${teacher.id}`}
            >
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-hsPurpleLight"
              href={`/list/students?teacherId=${teacher.id}`}
            >
              Teacher&apos;s Students
            </Link>
            <Link
              className="p-3 rounded-md bg-hsYellowLight"
              href={`/list/lessons?teacherId=${teacher.id}`}
            >
              Teacher&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50"
              href={`/list/exams?teacherId=${teacher.id}`}
            >
              Teacher&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-hsSkyLight"
              href={`/list/assignments?teacherId=${teacher.id}`}
            >
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
