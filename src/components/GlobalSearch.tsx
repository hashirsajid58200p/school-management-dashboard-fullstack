"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { searchGlobal, GlobalSearchResult } from "@/lib/actions";

const GlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GlobalSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounced search logic
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    const delayDebounceFn = setTimeout(async () => {
      try {
        const searchResults = await searchGlobal(trimmed);
        setResults(searchResults);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleSelectResult = (url: string) => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    router.push(url);
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Teacher":
        return "bg-purple-50 text-purple-700 border border-purple-100";
      case "Student":
        return "bg-sky-50 text-sky-700 border border-sky-100";
      case "Class":
        return "bg-amber-50 text-amber-700 border border-amber-100";
      case "Lesson":
        return "bg-indigo-50 text-indigo-700 border border-indigo-100";
      case "Event":
        return "bg-emerald-50 text-emerald-700 border border-emerald-100";
      default:
        return "bg-gray-50 text-gray-700 border border-gray-100";
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[130px] md:w-[160px] lg:w-[200px] z-50"
    >
      {/* SEARCH INPUT BAR */}
      <div className="flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3 py-2.5 bg-white focus-within:ring-2 focus-within:ring-hsYellow focus-within:border-transparent transition-all shadow-sm">
        <Image src="/search.png" alt="Search icon" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full bg-transparent outline-none text-slate-700 text-xs"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="text-slate-400 hover:text-slate-600 transition-colors text-[10px]"
          >
            ✕
          </button>
        )}
      </div>

      {/* DROPDOWN MENU */}
      {isOpen && query.trim().length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 max-h-[350px] overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center p-8 gap-2 text-slate-400 text-xs">
              <div className="w-4 h-4 border-2 border-slate-200 border-t-hsYellow rounded-full animate-spin" />
              <span>Searching directory...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="flex flex-col py-2 divide-y divide-slate-50">
              {results.map((item) => (
                <button
                  key={`${item.category}-${item.id}`}
                  onClick={() => handleSelectResult(item.url)}
                  className="w-full text-left p-3 hover:bg-slate-50 transition-colors flex items-start justify-between gap-3"
                >
                  <div className="flex flex-col gap-0.5 overflow-hidden">
                    <span className="text-xs font-semibold text-slate-800 truncate">
                      {item.title}
                    </span>
                    {item.subtitle && (
                      <span className="text-[10px] text-slate-400 truncate">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full select-none shrink-0 ${getCategoryStyles(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-slate-400 text-xs font-medium">
              No matches found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;
