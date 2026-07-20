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

  // Otherwise, render a premium themed minimalist outline avatar
  const normalizedSex = sex 
    ? (sex.toUpperCase() as "MALE" | "FEMALE") 
    : guessSexFromName(name);

  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const palettes = [
    { bg: "bg-[#EDF9FD] border border-[#C3EBFA]/50", fill: "text-[#0284c7]" }, // Sky Blue
    { bg: "bg-[#F1F0FF] border border-[#CFCEFF]/50", fill: "text-[#7c3aed]" }, // Purple
    { bg: "bg-[#FEFCE8] border border-[#FAE27C]/50", fill: "text-[#ca8a04]" }, // Yellow
    { bg: "bg-[#f8fafc] border border-[#e2e8f0]/60", fill: "text-[#475569]" }, // Slate Grey
    { bg: "bg-[#ecfdf5] border border-[#a7f3d0]/50", fill: "text-[#059669]" }, // Emerald Green
    { bg: "bg-[#fff1f2] border border-[#fecdd3]/50", fill: "text-[#e11d48]" }  // Rose Red
  ];
  
  const palette = palettes[hash % palettes.length];

  return (
    <div className={`rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-sm relative ${palette.bg} ${className}`}>
      {role.toLowerCase() === "student" ? (
        normalizedSex === "MALE" ? (
          /* BOY STUDENT - Minimalist Outline Silhouette */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`w-3/5 h-3/5 ${palette.fill}`}>
            <path d="M6 21a6 6 0 0 1 12 0" />
            <circle cx="12" cy="9" r="3.5" />
            {/* Student Cap / Hairline */}
            <path d="M9 7c1-1 2-1 3-1s2 0 3 1" />
          </svg>
        ) : (
          /* GIRL STUDENT - Minimalist Outline Silhouette */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`w-3/5 h-3/5 ${palette.fill}`}>
            <path d="M6 21a6 6 0 0 1 12 0" />
            <circle cx="12" cy="9" r="3.5" />
            {/* Ribbons / Hair-buns */}
            <circle cx="7.5" cy="8" r="1.2" fill="currentColor" />
            <circle cx="16.5" cy="8" r="1.2" fill="currentColor" />
          </svg>
        )
      ) : (
        normalizedSex === "MALE" ? (
          /* ADULT MAN - Minimalist Outline Silhouette */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`w-3/5 h-3/5 ${palette.fill}`}>
            <path d="M5 21a7 7 0 0 1 14 0" />
            <circle cx="12" cy="9" r="3.8" />
            {/* Tie / V-Collar */}
            <path d="M12 12.8v3.5" />
            <path d="M10 12.8l2 1 2-1" />
          </svg>
        ) : (
          /* ADULT WOMAN - Minimalist Outline Silhouette */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`w-3/5 h-3/5 ${palette.fill}`}>
            <path d="M5 21a7 7 0 0 1 14 0" />
            <circle cx="12" cy="9" r="3.8" />
            {/* Long Hair Framing */}
            <path d="M8.2 9.5v4c0 1.2.8 2 1.8 2.2M15.8 9.5v4c0 1.2-.8 2-1.8 2.2" />
          </svg>
        )
      )}
    </div>
  );
};

export default UserAvatar;
