import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Homepage() {
  const { sessionClaims, userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Retrieve user role from session publicMetadata
  let role = (sessionClaims?.metadata as { role?: string })?.role;

  if (role) {
    redirect(`/${role}`);
  } else {
    // If no role is configured, default redirect to sign-in
    redirect("/sign-in");
  }
}
