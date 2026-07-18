"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear mock_user session cookie
    document.cookie = "mock_user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    
    // Refresh page layout & redirect to root sign-in page
    router.refresh();
    router.push("/");
  }, [router]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f8fa]">
      <div className="text-center flex flex-col items-center gap-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-hsYellow"></div>
        <p className="text-sm text-gray-500 font-medium">Signing you out...</p>
      </div>
    </div>
  );
}
