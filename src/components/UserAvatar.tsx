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

  // Otherwise, render a premium themed line-art vector avatar
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
    <div className={`rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-sm ${palette.bg} ${className}`}>
      {role.toLowerCase() === "student" ? (
        normalizedSex === "MALE" ? (
          /* BOY STUDENT SVG */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-7/12 h-7/12 ${palette.fill}`}>
            <path d="M18 21a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <path d="M9 7.5c1-1.5 2.5-2 3-2s2 .5 3 2" />
          </svg>
        ) : (
          /* GIRL STUDENT SVG */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-7/12 h-7/12 ${palette.fill}`}>
            <path d="M18 21a6 6 0 0 0-12 0" />
            <circle cx="12" cy="10" r="4" />
            <path d="M7.5 9c-1-.5-2 .5-2 1.5s.5 2 1.5 1M16.5 9c1-.5 2 .5 2 1.5s-.5 2-1.5 1" />
          </svg>
        )
      ) : (
        normalizedSex === "MALE" ? (
          /* ADULT MAN SVG */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-7/12 h-7/12 ${palette.fill}`}>
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="9" r="4.5" />
            <path d="M9 6c1.5-1.5 3-1.5 4-1s2 .5 2.5 1.5" />
          </svg>
        ) : (
          /* ADULT WOMAN SVG */
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-7/12 h-7/12 ${palette.fill}`}>
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="9" r="4.5" />
            <path d="M7.5 9v5c0 1 .5 2 1.5 2M16.5 9v5c0 1-.5 2-1.5 2" />
          </svg>
        )
      )}
    </div>
  );
};

export default UserAvatar;
