"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  const totalPages = Math.ceil(count / ITEM_PER_PAGE);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const range = 1; // pages around current page
    
    pages.push(1);

    if (page - range > 2) {
      pages.push("...");
    }

    for (let i = Math.max(2, page - range); i <= Math.min(totalPages - 1, page + range); i++) {
      pages.push(i);
    }

    if (page + range < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled={!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          changePage(page - 1);
        }}
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {getPageNumbers().map((pageNumber, i) => {
          if (pageNumber === "...") {
            return (
              <span key={`ellipsis-${i}`} className="px-2 text-gray-400">
                ...
              </span>
            );
          }
          return (
            <button
              key={pageNumber}
              className={`px-2 rounded-sm ${
                page === pageNumber ? "bg-hsSky" : ""
              }`}
              onClick={() => {
                changePage(pageNumber as number);
              }}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!hasNext}
        onClick={() => {
          changePage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
