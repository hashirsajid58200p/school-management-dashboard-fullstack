import { currentUser } from "@/lib/auth";
import Image from "next/image";
import GlobalSearch from "./GlobalSearch";

const Navbar = async () => {
  const user = await currentUser();
  
  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:block">
        <GlobalSearch />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">
            {user ? `${user.firstName} ${user.lastName}` : "Guest User"}
          </span>
          <span className="text-[10px] text-gray-500 text-right capitalize">
            {user?.publicMetadata?.role as string || "Guest"}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={user?.img || "/noAvatar.png"}
            alt="Avatar"
            width={36}
            height={36}
            className="rounded-full w-9 h-9 object-cover border border-gray-200"
          />
          <a
            href="/logout"
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
