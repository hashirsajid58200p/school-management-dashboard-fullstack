"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export type FilterOption = {
  label: string;
  value: string;
  paramName: string;
};

export const SortButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const isDesc = sort === "desc";

  const handleSort = () => {
    const params = new URLSearchParams(window.location.search);
    if (isDesc) {
      params.set("sort", "asc");
    } else {
      params.set("sort", "desc");
    }
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={handleSort}
      className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-400 transition-all ${
        isDesc ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-hsYellow text-black"
      }`}
      title={isDesc ? "Sorted Descending (Click to Sort Ascending)" : "Sorted Ascending (Click to Sort Descending)"}
    >
      <Image
        src="/sort.png"
        alt="Sort"
        width={14}
        height={14}
        className={isDesc ? "invert" : ""}
      />
    </button>
  );
};

export const FilterButton = ({ options }: { options: FilterOption[] }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Detect if any option is currently active
  const activeOption = options.find((opt) => searchParams.get(opt.paramName) === opt.value);
  const isActive = !!activeOption;
  const activeVal = activeOption?.value || "";

  // Close dropdown on click outside
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

  const handleFilter = (paramName: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(paramName) === value) {
      params.delete(paramName);
    } else {
      // Clear other filters from this options set to prevent conflicts
      options.forEach((opt) => params.delete(opt.paramName));
      params.set(paramName, value);
    }
    setOpen(false);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    const params = new URLSearchParams(window.location.search);
    options.forEach((opt) => params.delete(opt.paramName));
    setOpen(false);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  if (!options || options.length === 0) return null;

  return (
    <div ref={containerRef} className="relative z-40">
      <button
        onClick={() => setOpen(!open)}
        className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-400 transition-all ${
          isActive ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-hsYellow text-black"
        }`}
        title="Filter results"
      >
        <Image
          src="/filter.png"
          alt="Filter"
          width={14}
          height={14}
          className={isActive ? "invert" : ""}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl z-50 py-2 divide-y divide-slate-50">
          <div className="px-3 py-1.5 text-slate-400 font-bold uppercase tracking-wider text-[9px] select-none">
            Filter Scope
          </div>
          <div className="max-h-[200px] overflow-y-auto py-1">
            {options.map((opt) => (
              <button
                key={`${opt.paramName}-${opt.value}`}
                onClick={() => handleFilter(opt.paramName, opt.value)}
                className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-50 transition-colors flex items-center justify-between ${
                  activeVal === opt.value ? "text-indigo-600 font-semibold" : "text-slate-600"
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {activeVal === opt.value && <span className="font-bold">✓</span>}
              </button>
            ))}
          </div>
          {isActive && (
            <div className="pt-1">
              <button
                onClick={handleClear}
                className="w-full text-center py-2 text-xs text-rose-600 hover:bg-rose-50 font-bold transition-colors"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
