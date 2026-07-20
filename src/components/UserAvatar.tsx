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

  // Otherwise, render a premium themed solid-silhouette avatar
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
          /* BOY STUDENT - Graduation Cap Silhouette */
          <svg viewBox="0 0 24 24" className={`w-3/5 h-3/5 ${palette.fill}`}>
            {/* Mortarboard Diamond Top */}
            <path d="M12 4L5 7.5l7 3.5 7-3.5z" fill="currentColor" />
            {/* Tassel */}
            <path d="M19 7.5v4c0 .8-.5 1.5-1.2 1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <circle cx="17.8" cy="13" r="0.6" fill="currentColor" />
            {/* Head underneath */}
            <path d="M9 9.5v1.5c0 1.6 1.3 3 3 3s3-1.4 3-3V9.5" fill="currentColor" opacity="0.85" />
            {/* Shoulders */}
            <path d="M6 21c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5z" fill="currentColor" opacity="0.75" />
          </svg>
        ) : (
          /* GIRL STUDENT - Pigtails Silhouette */
          <svg viewBox="0 0 24 24" className={`w-3/5 h-3/5 ${palette.fill}`}>
            {/* Hair Pigtails */}
            <circle cx="7" cy="9.5" r="2.2" fill="currentColor" />
            <circle cx="17" cy="9.5" r="2.2" fill="currentColor" />
            {/* Head */}
            <circle cx="12" cy="10" r="3.5" fill="currentColor" />
            {/* Shoulders */}
            <path d="M6 21c0-2.8 2.2-5 5-5h2c2.8 0 5 2.2 5 5z" fill="currentColor" opacity="0.75" />
          </svg>
        )
      ) : (
        normalizedSex === "MALE" ? (
          /* ADULT MAN - Silhouette with Necktie */
          <svg viewBox="0 0 24 24" className={`w-3/5 h-3/5 ${palette.fill}`}>
            {/* Head */}
            <circle cx="12" cy="9" r="3.8" fill="currentColor" />
            {/* Shoulders */}
            <path d="M5 21c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6z" fill="currentColor" opacity="0.75" />
            {/* Necktie Overlay (White) */}
            <path d="M12 15l-1 1.2.3 3 .7-1.2.7 1.2.3-3z" fill="#ffffff" />
          </svg>
        ) : (
          /* ADULT WOMAN - Bob Hair Silhouette */
          <svg viewBox="0 0 24 24" className={`w-3/5 h-3/5 ${palette.fill}`}>
            {/* Hair back & sides bob */}
            <path d="M8 9.5c0-2.2 1.8-4 4-4s4 1.8 4 4v4c0 1.2-.8 2.2-1.8 2.5H9.8c-1-.3-1.8-1.3-1.8-2.5z" fill="currentColor" />
            {/* Face cutout */}
            <circle cx="12" cy="10" r="3" fill="#ffffff" />
            {/* Shoulders */}
            <path d="M5 21c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6z" fill="currentColor" opacity="0.75" />
          </svg>
        )
      )}
    </div>
  );
};

export default UserAvatar;
