import { auth } from "@/lib/auth";
import { getChatParticipants } from "@/lib/actions";
import ChatClientPage from "./ChatClientPage";
import { redirect } from "next/navigation";

const MessagesPage = async () => {
  const { userId, sessionClaims } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const role = (sessionClaims?.metadata as { role?: string })?.role || "student";
  const initialContacts = await getChatParticipants();

  return (
    <div className="flex-1 p-4 flex flex-col h-[calc(100vh-100px)]">
      <div className="bg-white rounded-2xl flex-1 flex overflow-hidden border border-slate-100 shadow-sm">
        <ChatClientPage
          currentUserId={userId}
          currentUserRole={role}
          initialContacts={initialContacts}
        />
      </div>
    </div>
  );
};

export default MessagesPage;
