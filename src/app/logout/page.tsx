"use client";

import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";

export default function LogoutPage() {
  const { signOut } = useClerk();

  useEffect(() => {
    // Perform Clerk sign out and redirect to home
    signOut(() => {
      window.location.href = "/";
    });
  }, [signOut]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f8fa]">
      <div className="text-center flex flex-col items-center gap-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-hsYellow"></div>
        <p className="text-sm text-gray-500 font-medium">Signing you out...</p>
      </div>
    </div>
  );
}
