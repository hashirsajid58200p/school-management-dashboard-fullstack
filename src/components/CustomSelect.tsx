"use client";

import { useState, useRef, useEffect } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  value: string;
  onChange: (val: string) => void;
  options: SelectOption[];
  placeholder?: string;
  label?: string;
};

export const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select Option...",
  label,
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOpt = options.find((opt) => opt.value === value);
  const displayText = selectedOpt ? selectedOpt.label : placeholder;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block w-full max-w-xs z-30">
      {label && (
        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 select-none">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 ring-[1.5px] ring-slate-200 px-3 py-2 rounded-lg text-xs bg-white hover:bg-slate-50 transition-all focus:outline-none focus:ring-2 focus:ring-hsYellow shadow-sm"
      >
        <span className="text-slate-700 truncate font-medium">{displayText}</span>
        <span className="text-slate-400 shrink-0 text-[10px]">▼</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-100 rounded-xl shadow-xl z-50 py-1.5 max-h-[220px] overflow-y-auto divide-y divide-slate-50">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition-colors flex items-center justify-between ${
                opt.value === value ? "text-indigo-600 font-semibold" : "text-slate-600"
              }`}
            >
              <span className="truncate">{opt.label}</span>
              {opt.value === value && <span className="font-bold">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
