"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("hs58200p@gmail.com");
  const [password, setPassword] = useState("Qwert01234kkk@.com");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bypassing Clerk and redirecting directly to admin
    router.push("/admin");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f7f8fa]">
      <div className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-4 w-[400px]">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Image src="/logo.png" alt="" width={24} height={24} />
          SchoolHs
        </h1>
        <h2 className="text-gray-400">Sign in to your account</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-500">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="p-2 rounded-md ring-1 ring-gray-300 outline-none focus:ring-blue-500"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 rounded-md ring-1 ring-gray-300 outline-none focus:ring-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white my-1 rounded-md text-sm p-[10px] hover:bg-blue-600 transition-colors font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
