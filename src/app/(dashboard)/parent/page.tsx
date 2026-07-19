import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";


const ParentPage = async ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  const { userId } = auth();
  const currentUserId = userId;
  
  const students = await prisma.student.findMany({
    where: {
      parentId: currentUserId!,
    },
  });

  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        {students.length > 0 ? (
          students.map((student) => (
            <div className="bg-white p-4 rounded-md" key={student.id}>
              <BigCalendarContainer
                type="classId"
                id={student.classId}
                title={`Schedule (${student.name} ${student.surname})`}
              />
            </div>
          ))
        ) : (
          <div className="bg-white p-8 rounded-md text-center">
            <p className="text-sm text-gray-500 font-medium">No associated students found.</p>
          </div>
        )}
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
