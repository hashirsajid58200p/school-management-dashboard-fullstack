import { currentUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/prisma";
import GlobalSearch from "./GlobalSearch";
import NavbarMessageIcon from "./NavbarMessageIcon";
import { getUnreadMessagesCount } from "@/lib/actions";
import UserAvatar from "./UserAvatar";

const Navbar = async () => {
  const user = await currentUser();
  const unreadCount = user ? await getUnreadMessagesCount() : 0;
  
  const role = (user?.publicMetadata?.role as string) || "admin";
  const roleConditions = {
    teacher: user?.id ? { lessons: { some: { teacherId: user.id } } } : {},
    student: user?.id ? { students: { some: { id: user.id } } } : {},
    parent: user?.id ? { students: { some: { parentId: user.id } } } : {},
  };

  const announcementCount = user
    ? await prisma.announcement.count({
        where: {
          ...(role !== "admin" && {
            OR: [
              { classId: null },
              { class: roleConditions[role as keyof typeof roleConditions] || {} },
            ],
          }),
        },
      })
    : 0;
  
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:block">
        <GlobalSearch />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <NavbarMessageIcon initialCount={unreadCount} currentUserId={user?.id || ""} />
        <Link
          href="/list/announcements"
          className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative hover:bg-gray-100 transition-colors"
          title="Announcements"
        >
          <Image src="/announcement.png" alt="Announcements" width={20} height={20} />
          {announcementCount > 0 && (
            <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs font-semibold">
              {announcementCount > 9 ? "9+" : announcementCount}
            </div>
          )}
        </Link>
        <div className="flex flex-col gap-0.5">
          <span className="text-xs font-semibold text-slate-800">
            {user ? `${user.firstName} ${user.lastName}` : "Guest User"}
          </span>
          <span className="text-[10px] text-gray-500 text-right capitalize">
            {user?.publicMetadata?.role as string || "Guest"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <UserAvatar
            name={user ? `${user.firstName} ${user.lastName}` : "Guest"}
            role={user?.publicMetadata?.role as string || "guest"}
            img={user?.img}
            className="w-9 h-9"
          />
          <a
            href="/api/logout"
            className="p-1.5 hover:bg-gray-100 rounded-full transition-all flex items-center justify-center"
            title="Log Out"
          >
            <Image src="/logout.png" alt="Logout" width={18} height={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
