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
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* USER INFO CARD */}
          <div className="bg-hsSky py-6 px-6 rounded-2xl w-full lg:w-[calc(58%-8px)] flex gap-6 items-center shadow-sm">
            <div className="w-32 h-32 md:w-36 md:h-36 flex-shrink-0">
              <Image
                src={teacher.img || "/noAvatar.png"}
                alt=""
                width={144}
                height={144}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-sm border-2 border-white"
              />
            </div>
            <div className="flex-grow flex flex-col justify-center gap-2.5 w-full">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-slate-800">
                  {teacher.name + " " + teacher.surname}
                </h1>
                {role === "admin" && (
                  <FormContainer table="teacher" type="update" data={teacher} />
                )}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Senior educator committed to fostering a supportive, high-engagement classroom environment.
              </p>
              <div className="flex flex-col gap-2 w-full mt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-x-4 gap-y-1.5 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Image src="/blood.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                    <span>{teacher.bloodType || "-"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image src="/date.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                    <span>{new Intl.DateTimeFormat("en-GB").format(teacher.birthday)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image src="/phone.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                    <span>{teacher.phone || "-"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image src="/mail.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                  <span className="break-all select-all hover:text-indigo-600 transition-colors" title={teacher.email || ""}>
                    {teacher.email || "-"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="w-full lg:w-[calc(42%-8px)] flex gap-4 justify-between flex-wrap content-stretch">
            {/* CARD */}
            <div className="bg-white p-3 md:p-4 rounded-2xl flex gap-2 md:gap-3 w-[calc(50%-8px)] shadow-sm border border-slate-100 items-center">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <div className="overflow-hidden">
                <h1 className="text-sm md:text-base font-bold text-slate-800 leading-tight">90%</h1>
                <span className="text-[11px] text-slate-400 font-medium block truncate">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-3 md:p-4 rounded-2xl flex gap-2 md:gap-3 w-[calc(50%-8px)] shadow-sm border border-slate-100 items-center">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <div className="overflow-hidden">
                <h1 className="text-sm md:text-base font-bold text-slate-800 leading-tight">
                  {teacher.subject?.name || "-"}
                </h1>
                <span className="text-[11px] text-slate-400 font-medium block truncate">Subject</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-3 md:p-4 rounded-2xl flex gap-2 md:gap-3 w-[calc(50%-8px)] shadow-sm border border-slate-100 items-center">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <div className="overflow-hidden">
                <h1 className="text-sm md:text-base font-bold text-slate-800 leading-tight">
                  {teacher._count.lessons}
                </h1>
                <span className="text-[11px] text-slate-400 font-medium block truncate">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-3 md:p-4 rounded-2xl flex gap-2 md:gap-3 w-[calc(50%-8px)] shadow-sm border border-slate-100 items-center">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
              />
              <div className="overflow-hidden">
                <h1 className="text-sm md:text-base font-bold text-slate-800 leading-tight">
                  {teacher._count.classes}
                </h1>
                <span className="text-[11px] text-slate-400 font-medium block truncate">Classes</span>
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
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
