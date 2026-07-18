"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Login failed!");
      } else {
        toast.success("Welcome back! Logging you in...");
        router.refresh();
        router.push("/");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f8fa]">
      <div className="bg-white p-10 rounded-lg shadow-2xl border border-gray-100 w-full max-w-md">
        <div className="flex flex-col items-center gap-2 mb-8">
          <h1 className="text-2xl font-bold text-gray-800">School Dashboard</h1>
          <p className="text-sm text-gray-500">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-600 font-semibold" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. admin@school.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hsPurple focus:border-transparent text-sm"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-600 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hsPurple focus:border-transparent text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-hsPurple hover:bg-[#b5b4f8] text-black font-semibold rounded-md transition-all text-sm shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
