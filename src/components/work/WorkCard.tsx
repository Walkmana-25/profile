"use client";

import Link from "next/link";
import { FaThumbtack } from "react-icons/fa";
import { WorkCardProps } from "./types";

export function WorkCard({ work, onPinToggle }: WorkCardProps) {
  const handlePinClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onPinToggle(work.id);
  };

  return (
    <Link
      href={`/works/${work.slug}`}
      className={`
        block relative rounded-lg p-4
        bg-base-200 hover:bg-base-300
        transition-colors cursor-pointer
        ${work.isPinned ? "border-2 border-primary" : "border border-base-300"}
      `}
    >
      <div className="flex gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg truncate pr-8">{work.title}</h3>
          <p className="text-base-content/70 line-clamp-2 mt-1">
            {work.summary}
          </p>
        </div>

        <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden bg-base-300">
          {work.thumbnailUrl ? (
            <img
              src={work.thumbnailUrl}
              alt={work.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-base-content/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handlePinClick}
        className={`
          absolute top-3 right-3 p-2 rounded-full
          transition-colors
          ${
            work.isPinned
              ? "text-primary bg-primary/10"
              : "text-base-content/50 hover:text-base-content hover:bg-base-300"
          }
        `}
        aria-label={work.isPinned ? "ピン留めを解除" : "ピン留めする"}
      >
        <FaThumbtack className={work.isPinned ? "rotate-45" : ""} />
      </button>
    </Link>
  );
}
