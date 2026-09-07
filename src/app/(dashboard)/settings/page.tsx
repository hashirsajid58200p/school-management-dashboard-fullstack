import { currentUser, auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import SettingsClientPage from "./SettingsClientPage";

const SettingsPage = async () => {
  const user = await currentUser();
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  let profileRecord: any = null;
  if (userId && role) {
    if (role === "admin") {
      profileRecord = await prisma.admin.findUnique({ where: { id: userId } });
    } else if (role === "teacher") {
      profileRecord = await prisma.teacher.findUnique({ where: { id: userId } });
    } else if (role === "student") {
      profileRecord = await prisma.student.findUnique({ where: { id: userId } });
    } else if (role === "parent") {
      profileRecord = await prisma.parent.findUnique({ where: { id: userId } });
    }
  }

  const initialProfile = {
    email: profileRecord?.email || (user ? `${user.username}@school.com` : ""),
    phone: profileRecord?.phone || "",
    address: profileRecord?.address || "",
    role: role || (user?.publicMetadata?.role as string) || "admin",
  };

  return <SettingsClientPage initialUser={user} initialProfile={initialProfile} />;
};

export default SettingsPage;
