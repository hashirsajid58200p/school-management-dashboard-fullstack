"use client";

import { useState } from "react";
import { updateProfile } from "@/lib/actions";
import { toast } from "react-toastify";
import Image from "next/image";

interface ProfileFormProps {
  initialData: any;
  role: string;
}

const ProfileForm = ({ initialData, role }: ProfileFormProps) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(initialData.email || "");
  const [phone, setPhone] = useState(initialData.phone || "");
  const [address, setAddress] = useState(initialData.address || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await updateProfile(
        { success: false, error: false },
        { email, phone, address, ...(password !== "" && { password }) }
      );
      if (res.success) {
        toast.success("Profile updated successfully!");
        setPassword("");
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while saving profile changes.");
    } finally {
      setLoading(false);
    }
  };

  const getRoleBadgeColor = () => {
    switch (role) {
      case "admin":
        return "bg-hsPurpleLight text-purple-700 border border-hsPurple";
      case "teacher":
        return "bg-hsSkyLight text-sky-700 border border-hsSky";
      case "student":
        return "bg-hsYellowLight text-yellow-800 border border-hsYellow";
      case "parent":
        return "bg-emerald-50 text-emerald-800 border border-emerald-200";
      default:
        return "bg-slate-50 text-slate-700 border border-slate-200/60";
    }
  };

  const getInitials = () => {
    if (role === "admin") {
      return initialData.username?.substring(0, 2).toUpperCase() || "AD";
    }
    const firstInitial = initialData.name?.[0] || "";
    const lastInitial = initialData.surname?.[0] || "";
    return (firstInitial + lastInitial).toUpperCase() || "US";
  };

  const displayName =
    role === "admin"
      ? initialData.username
      : `${initialData.name} ${initialData.surname}`;

  return (
    <div className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100">
      {/* 1. HERO BANNER WITH THEME GRADIENT */}
      <div className="h-40 w-full bg-gradient-to-r from-hsSky via-hsPurple to-hsYellow relative">
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* 2. FLOATING AVATAR */}
      <div className="absolute top-20 left-8 z-10">
        {initialData.img ? (
          <div className="relative w-32 h-32 rounded-2xl border-4 border-white shadow-md overflow-hidden bg-slate-50">
            <Image
              src={initialData.img}
              alt="Profile Avatar"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-md flex items-center justify-center text-4xl font-extrabold text-slate-700 bg-gradient-to-br from-hsYellow to-amber-200">
            {getInitials()}
          </div>
        )}
      </div>

      {/* 3. PROFILE HEADER SECTION */}
      <div className="pt-16 pb-6 px-8 border-b border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 ml-0 md:ml-36">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-slate-800">{displayName}</h2>
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider ${getRoleBadgeColor()}`}>
                {role}
              </span>
              <span className="text-xs text-slate-400 font-mono">@{initialData.username}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN DETAILS & EDIT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* LEFT COLUMN: READ-ONLY ATTRIBUTES */}
        <div className="lg:col-span-1 flex flex-col gap-6 bg-slate-50/50 p-6 rounded-xl border border-slate-100">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-200/60 pb-2">Account Information</h4>
          
          <div className="flex flex-col gap-4 text-sm text-slate-600">
            <div className="flex flex-col">
              <span className="text-xs text-slate-400 font-medium mb-1">System Identifier (ID)</span>
              <span className="font-mono text-xs text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200/50 shadow-sm">{initialData.id}</span>
            </div>

            {initialData.bloodType && (
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium mb-1">Blood Group</span>
                <span className="font-semibold text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200/50 shadow-sm">{initialData.bloodType}</span>
              </div>
            )}

            {initialData.birthday && (
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium mb-1">Date of Birth</span>
                <span className="font-semibold text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200/50 shadow-sm">{initialData.birthday}</span>
              </div>
            )}

            {role === "teacher" && initialData.subject && (
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium mb-1">Academic Subject</span>
                <span className="font-semibold text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200/50 shadow-sm">{initialData.subject.name}</span>
              </div>
            )}

            {role === "student" && initialData.class && (
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium mb-1">Classroom Section</span>
                <span className="font-semibold text-slate-700 bg-white px-3 py-2 rounded-lg border border-slate-200/50 shadow-sm">{initialData.class.name}</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM */}
        <div className="lg:col-span-2">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2 mb-6">Modify Details</h4>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* EMAIL */}
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-xs font-semibold text-slate-500">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ring-[1.5px] ring-slate-200 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow focus:border-transparent transition-all shadow-sm"
                required
              />
            </div>

            {/* PHONE */}
            {role !== "admin" && (
              <div className="flex flex-col gap-2 md:col-span-1">
                <label className="text-xs font-semibold text-slate-500">Contact Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="ring-[1.5px] ring-slate-200 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow focus:border-transparent transition-all shadow-sm"
                />
              </div>
            )}

            {/* ADDRESS */}
            {role !== "admin" && (
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-xs font-semibold text-slate-500">Residential Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="ring-[1.5px] ring-slate-200 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow focus:border-transparent transition-all resize-none shadow-sm"
                />
              </div>
            )}

            {/* PASSWORD */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-semibold text-slate-500">New Password (leave blank to keep current)</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="ring-[1.5px] ring-slate-200 p-2.5 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-hsYellow focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* SUBMIT BUTTON WITH THEME STYLE */}
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 rounded-lg text-sm font-semibold text-slate-800 transition-all shadow-sm hover:shadow-md ${
                  loading
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                    : "bg-hsYellow hover:bg-[#ebd05b]"
                }`}
              >
                {loading ? "Saving changes..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
