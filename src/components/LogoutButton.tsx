"use client";

import Image from "next/image";
import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      window.location.href = "/sign-in";
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-hsSkyLight w-full text-left transition-colors cursor-pointer"
      title="Logout"
    >
      <Image src="/logout.png" alt="" width={20} height={20} />
      <span className="hidden lg:block">
        {loading ? "Signing out..." : "Logout"}
      </span>
    </button>
  );
}
