"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("hs58200p@gmail.com");
  const [password, setPassword] = useState("Qwert01234kkk@.com");
  const [errorMsg, setErrorMsg] = useState("");

  // Auto-redirect if already signed in
  useEffect(() => {
    const match = document.cookie.match(/(^| )mock_user=([^;]+)/);
    if (match) {
      try {
        const mockUser = JSON.parse(decodeURIComponent(match[2]));
        router.push(`/${mockUser.role}`);
      } catch (e) {
        console.error(e);
      }
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lowerUser = username.trim().toLowerCase();
    let role = "admin";
    let userId = "admin1";
    let firstName = "Admin";
    let lastName = "User";

    // Dynamic role parsing based on prefix
    if (lowerUser.startsWith("teacher")) {
      role = "teacher";
      userId = lowerUser; // e.g. "teacher1"
      firstName = "Teacher";
      lastName = lowerUser.replace("teacher", "#");
    } else if (lowerUser.startsWith("student")) {
      role = "student";
      userId = lowerUser; // e.g. "student1"
      firstName = "Student";
      lastName = lowerUser.replace("student", "#");
    } else if (lowerUser.startsWith("parent")) {
      role = "parent";
      userId = lowerUser; // e.g. "parent1"
      firstName = "Parent";
      lastName = lowerUser.replace("parent", "#");
    } else {
      role = "admin";
      userId = "admin1";
      firstName = "Admin";
      lastName = "User";
    }

    // Set cookie valid for 1 day
    const mockUser = {
      id: userId,
      role: role,
      firstName: firstName,
      lastName: lastName,
    };

    document.cookie = `mock_user=${encodeURIComponent(JSON.stringify(mockUser))}; path=/; max-age=86400`;

    // Redirect to the role-specific dashboard
    router.push(`/${role}`);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f7f8fa]">
      <div className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-4 w-[400px]">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <Image src="/logo.png" alt="" width={24} height={24} />
          School Management Dashboard
        </h1>
        <h2 className="text-gray-400">Sign in to your account</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-500">Username / Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="e.g. admin, teacher1, student1, parent1"
              className="p-2 rounded-md ring-1 ring-gray-300 outline-none focus:ring-hsYellow focus:border-transparent transition-all"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs text-gray-500">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-2 rounded-md ring-1 ring-gray-300 outline-none focus:ring-hsYellow focus:border-transparent transition-all"
            />
          </div>
          
          <button
            type="submit"
            className="bg-hsYellow text-black font-semibold my-1 rounded-md text-sm p-[10px] hover:bg-yellow-400 transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="text-[10px] text-gray-400 mt-2 border-t pt-2 leading-relaxed">
          <span className="font-semibold block mb-1">Tip: Use these credentials to test dashboards:</span>
          • Admin: <code className="bg-gray-100 px-1 rounded">admin</code><br />
          • Teacher: <code className="bg-gray-100 px-1 rounded">teacher1</code> (up to teacher10)<br />
          • Student: <code className="bg-gray-100 px-1 rounded">student1</code> (up to student20)<br />
          • Parent: <code className="bg-gray-100 px-1 rounded">parent1</code> (up to parent25)<br />
          Password can be anything!
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
