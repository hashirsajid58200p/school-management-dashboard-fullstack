import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Homepage() {
  const { sessionClaims, userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Retrieve user role from Clerk session publicMetadata
  let role = (sessionClaims?.metadata as { role?: string })?.role;

  // Fallback: If role is not in session claims, fetch it directly from the Clerk API
  if (!role) {
    try {
      const user = await clerkClient.users.getUser(userId);
      role = (user.publicMetadata as { role?: string })?.role;
    } catch (e) {
      console.error("Failed to fetch user role in Homepage:", e);
    }
  }

  if (role) {
    redirect(`/${role}`);
  } else {
    // If no role is configured, default redirect to sign-in
    redirect("/sign-in");
  }
}
