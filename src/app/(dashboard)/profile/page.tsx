import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import ProfileForm from "@/components/ProfileForm";

const ProfilePage = async () => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  if (!userId || !role) {
    return notFound();
  }

  let profileData: any = null;

  if (role === "admin") {
    profileData = await prisma.admin.findUnique({ where: { id: userId } });
  } else if (role === "teacher") {
    profileData = await prisma.teacher.findUnique({
      where: { id: userId },
      include: { subject: true },
    });
  } else if (role === "student") {
    profileData = await prisma.student.findUnique({
      where: { id: userId },
      include: { class: true },
    });
  } else if (role === "parent") {
    profileData = await prisma.parent.findUnique({ where: { id: userId } });
  }

  if (!profileData) {
    return notFound();
  }

  // Convert dates to string so they pass safely to the Client Component
  const serializedData = {
    ...profileData,
    ...(profileData.birthday && { birthday: profileData.birthday.toISOString().split("T")[0] }),
  };

  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <p className="text-sm text-gray-500">View and update your personal dashboard information.</p>
      </div>
      <ProfileForm initialData={serializedData} role={role} />
    </div>
  );
};

export default ProfilePage;
