"use client";

import Image from "next/image";
import { useState } from "react";

export default function NavbarLogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch (err) {
      console.error("Navbar logout error:", err);
    } finally {
      window.location.href = "/sign-in";
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="p-1.5 hover:bg-gray-100 rounded-full transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
      title="Log Out"
    >
      <Image src="/logout.png" alt="Logout" width={18} height={18} />
    </button>
  );
}
