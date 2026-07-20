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

  // Otherwise, render a premium initials monogram avatar
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

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

  // Adjust font size dynamically based on avatar size class
  let fontSize = "text-sm";
  if (className.includes("w-28") || className.includes("h-28") || className.includes("w-32") || className.includes("h-32")) {
    fontSize = "text-3xl";
  } else if (className.includes("w-14") || className.includes("h-14") || className.includes("w-16") || className.includes("h-16")) {
    fontSize = "text-lg";
  }

  return (
    <div className={`rounded-full flex items-center justify-center overflow-hidden shrink-0 shadow-sm relative ${palette.bg} ${className}`}>
      <span className={`font-bold tracking-wider select-none ${fontSize} ${palette.fill}`}>
        {initials}
      </span>
    </div>
  );
};

export default UserAvatar;
