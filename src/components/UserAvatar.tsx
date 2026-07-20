"use client";

import React from "react";
import Image from "next/image";

type UserAvatarProps = {
  name: string;
  role: "admin" | "teacher" | "student" | "parent" | string;
  sex?: "MALE" | "FEMALE" | string | null;
  img?: string | null;
  className?: string;
};

const guessSexFromName = (name: string): "MALE" | "FEMALE" => {
  const femaleNames = [
    "carolyn", "mary", "debra", "patricia", "jennifer", "sara", "linda", 
    "elizabeth", "sandra", "nancy", "karen", "charlotte", "sarah", "heather", 
    "barbara", "jane", "susan", "lisa", "margaret", "cynthia", "linda", "christine",
    "stephanie", "shirley", "maria", "angela", "carolyn", "rebecca", "patricia"
  ];
  const lowerName = name.toLowerCase();
  for (const f of femaleNames) {
    if (lowerName.includes(f)) return "FEMALE";
  }
  return "MALE";
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  role,
  sex,
  img,
  className = "w-10 h-10",
}) => {
  // If the user has an uploaded image, use it!
  if (img && img.trim() !== "" && img !== "/noAvatar.png") {
    return (
      <div className={`relative rounded-full overflow-hidden shrink-0 border border-slate-100 ${className}`}>
        <Image
          src={img}
          alt={name}
          fill
          sizes="100px"
          className="object-cover"
        />
      </div>
    );
  }

  // Otherwise, render a premium themed flat-illustration face
  const normalizedSex = sex 
    ? (sex.toUpperCase() as "MALE" | "FEMALE") 
    : guessSexFromName(name);

  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const palettes = [
    { bg: "bg-[#EDF9FD] border border-[#C3EBFA]/50" }, // Sky Blue
    { bg: "bg-[#F1F0FF] border border-[#CFCEFF]/50" }, // Purple
    { bg: "bg-[#FEFCE8] border border-[#FAE27C]/50" }, // Yellow
    { bg: "bg-[#f8fafc] border border-[#e2e8f0]/60" }, // Slate Grey
    { bg: "bg-[#ecfdf5] border border-[#a7f3d0]/50" }, // Emerald Green
    { bg: "bg-[#fff1f2] border border-[#fecdd3]/50" }  // Rose Red
  ];
  
  const palette = palettes[hash % palettes.length];

  return (
    <div className={`rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-sm relative ${palette.bg} ${className}`}>
      {role.toLowerCase() === "student" ? (
        normalizedSex === "MALE" ? (
          /* BOY STUDENT SVG - Detailed Flat Illustration */
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            {/* Neck */}
            <rect x="11" y="15" width="2" height="3" fill="#fed7aa" />
            {/* Collar */}
            <path d="M9 18l3 1.5 3-1.5" stroke="#f43f5e" strokeWidth="1" fill="none" />
            {/* Face */}
            <circle cx="12" cy="11.5" r="4.2" fill="#ffedd5" />
            {/* Eyes */}
            <circle cx="10.5" cy="11.2" r="0.6" fill="#1e293b" />
            <circle cx="13.5" cy="11.2" r="0.6" fill="#1e293b" />
            {/* Smile */}
            <path d="M11 13a1 1 0 0 0 2 0" stroke="#1e293b" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            {/* Boy Hair (front bangs & back cap) */}
            <path d="M7.8 11.5c-.2-1 .1-2.5 1-3.5 1-1 2.5-1.2 3.5-1s2.2.8 2.8 1.8c.3.5.4 1.1.3 1.7-.5-.8-1.5-1.2-3.4-1.2s-3.2.4-4.2 1.2z" fill="#334155" />
          </svg>
        ) : (
          /* GIRL STUDENT SVG - Detailed Flat Illustration */
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            {/* Hair back (ponytails) */}
            <circle cx="7" cy="12" r="2.2" fill="#334155" />
            <circle cx="17" cy="12" r="2.2" fill="#334155" />
            <path d="M6.5 12h1.5" stroke="#f43f5e" strokeWidth="1.2" />
            <path d="M16 12h1.5" stroke="#f43f5e" strokeWidth="1.2" />
            {/* Neck */}
            <rect x="11" y="15" width="2" height="3" fill="#fed7aa" />
            {/* Collar */}
            <path d="M10 18c0 .8 1 1.2 2 1.2s2-.4 2-1.2" stroke="#10b981" strokeWidth="1.2" fill="none" />
            {/* Face */}
            <circle cx="12" cy="11.5" r="4.2" fill="#ffedd5" />
            {/* Eyes */}
            <circle cx="10.5" cy="11.2" r="0.6" fill="#1e293b" />
            <circle cx="13.5" cy="11.2" r="0.6" fill="#1e293b" />
            {/* Smile */}
            <path d="M11.2 13.2a0.8 0 0 0 1.6 0" stroke="#1e293b" strokeWidth="0.8" fill="none" strokeLinecap="round" />
            {/* Girl Hair (front bangs) */}
            <path d="M7.8 11.5c0-1.8 1-3.2 2.5-3.8.8-.3 1.8-.3 2.5 0 1.5.6 2.5 2 2.5 3.8-.4-.7-1.5-1.2-3.3-1.2s-3.8.5-4.2 1.2z" fill="#334155" />
          </svg>
        )
      ) : (
        normalizedSex === "MALE" ? (
          /* ADULT MAN SVG - Detailed Flat Illustration */
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            {/* Neck */}
            <rect x="11" y="15" width="2" height="3" fill="#fed7aa" />
            {/* Collar */}
            <path d="M9 17.5l3 2 3-2.5" stroke="#3b82f6" strokeWidth="1.2" fill="none" />
            {/* Face */}
            <circle cx="12" cy="11.5" r="4.5" fill="#ffedd5" />
            {/* Eyes */}
            <circle cx="10.5" cy="11" r="0.6" fill="#1e293b" />
            <circle cx="13.5" cy="11" r="0.6" fill="#1e293b" />
            {/* Mustache / Beard shadow */}
            <path d="M7.6 12.5c0 2.2 1.8 3.5 4.4 3.5s4.4-1.3 4.4-3.5h-8.8z" fill="#475569" opacity="0.18" />
            <path d="M10.8 12.8c.4-.2.8-.2 1.2 0 .4-.2.8-.2 1.2 0" stroke="#334155" strokeWidth="0.8" fill="none" />
            {/* Man Hair (parted) */}
            <path d="M7.6 11.5c-.2-1.5.5-3 1.8-3.8 1.2-.8 2.8-.8 4 .1 1 .8 1.5 2 1.5 3.2-.5-.8-1.5-1.2-3.4-1.2s-3.4.5-3.9 1.7z" fill="#1e293b" />
          </svg>
        ) : (
          /* ADULT WOMAN SVG - Detailed Flat Illustration */
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            {/* Hair back */}
            <path d="M7 10v5.5c0 1.5.8 2.5 1.8 3h6.4c1-.5 1.8-1.5 1.8-3V10c0-2.5-1.8-3.8-4.5-3.8S7 7.5 7 10z" fill="#1e293b" />
            {/* Neck */}
            <rect x="11" y="15" width="2" height="3" fill="#fed7aa" />
            {/* Collar */}
            <path d="M10 18c.5.5 1.5.8 2 .8s1.5-.3 2-.8" stroke="#8b5cf6" strokeWidth="1.2" fill="none" />
            {/* Face */}
            <circle cx="12" cy="11.5" r="4.2" fill="#ffedd5" />
            {/* Eyes */}
            <circle cx="10.5" cy="11.2" r="0.6" fill="#1e293b" />
            <circle cx="13.5" cy="11.2" r="0.6" fill="#1e293b" />
            {/* Lips (pink smile) */}
            <path d="M11 13a1 1 0 0 0 2 0" stroke="#f43f5e" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* Front hair bangs */}
            <path d="M7.8 11.5c.2-1.8 1.5-3 4.2-3s4 1.2 4.2 3c-.3-.5-1.2-1-4.2-1s-3.9.5-4.2 1z" fill="#1e293b" />
          </svg>
        )
      )}
    </div>
  );
};

export default UserAvatar;
