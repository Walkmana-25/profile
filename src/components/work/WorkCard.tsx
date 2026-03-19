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
          <img
            src={work.thumbnailUrl || "/no-image.webp"}
            alt={work.title}
            className="w-full h-full object-cover"
          />
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
