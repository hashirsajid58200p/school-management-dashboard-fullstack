import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import FormContainer from "@/components/FormContainer";
import Performance from "@/components/Performance";
import StudentAttendanceCard from "@/components/StudentAttendanceCard";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { Class, Student } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import UserAvatar from "@/components/UserAvatar";
import { Suspense } from "react";

const SingleStudentPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  const currentUserId = userId;

  const student = await prisma.student.findUnique({
    where: { id },
    include: {
      class: { include: { _count: { select: { lessons: true } } } },
    },
  });

  if (!student) {
    return notFound();
  }

  // Guard check
  let isAllowed = false;
  if (role === "admin") {
    isAllowed = true;
  } else if (role === "teacher") {
    const teacher = await prisma.teacher.findUnique({
      where: { id: currentUserId! },
      select: { classes: { select: { id: true } } }
    });
    const teacherClassIds = teacher?.classes.map(c => c.id) || [];
    isAllowed = teacherClassIds.includes(student.classId);
  } else if (role === "student") {
    const loggedInStudent = await prisma.student.findUnique({
      where: { id: currentUserId! },
      select: { classId: true }
    });
    isAllowed = loggedInStudent?.classId === student.classId;
  } else if (role === "parent") {
    isAllowed = student.parentId === currentUserId;
  }

  if (!isAllowed) {
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
            <UserAvatar
              name={`${student.name} ${student.surname}`}
              role="student"
              sex={student.sex}
              img={student.img}
              className="w-32 h-32 md:w-36 md:h-36 border-2 border-white shadow-sm"
            />
            <div className="flex-grow flex flex-col justify-center gap-2.5 w-full">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl font-bold text-slate-800">
                  {student.name + " " + student.surname}
                </h1>
                {role === "admin" && (
                  <FormContainer table="student" type="update" data={student} />
                )}
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Student enrolled and actively participating in academic curriculum activities.
              </p>
              <div className="flex flex-col gap-2 w-full mt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-x-4 gap-y-1.5 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Image src="/blood.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                    <span>{student.bloodType || "-"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image src="/date.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                    <span>{new Intl.DateTimeFormat("en-GB").format(student.birthday)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Image src="/phone.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                    <span>{student.phone || "-"}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Image src="/mail.png" alt="" width={14} height={14} className="w-3.5 h-3.5 object-contain shrink-0" />
                  <span className="break-all select-all hover:text-indigo-600 transition-colors" title={student.email || ""}>
                    {student.email || "-"}
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
              <Suspense fallback="loading...">
                <StudentAttendanceCard id={student.id} />
              </Suspense>
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
                  {student.class.name.charAt(0)}th
                </h1>
                <span className="text-[11px] text-slate-400 font-medium block truncate">Grade</span>
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
                  {student.class._count.lessons}
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
                <h1 className="text-sm md:text-base font-bold text-slate-800 leading-tight">{student.class.name}</h1>
                <span className="text-[11px] text-slate-400 font-medium block truncate">Class</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <BigCalendarContainer type="classId" id={student.class.id} title="Student's Schedule" />
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

export default SingleStudentPage;
