import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Homepage() {
  const { sessionClaims, userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Retrieve user role from Clerk session publicMetadata
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  if (role) {
    redirect(`/${role}`);
  } else {
    // If no role is configured, default redirect to sign-in or a profile setup
    redirect("/sign-in");
  }
}
