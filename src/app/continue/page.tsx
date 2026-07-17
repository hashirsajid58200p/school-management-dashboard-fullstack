"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContinuePage() {
  const router = useRouter();

  useEffect(() => {
    // Immediately redirect to admin dashboard
    router.push("/admin");
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 flex-col gap-4 p-8">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="text-lg font-semibold text-gray-700">Redirecting to Dashboard...</div>
    </div>
  );
}
