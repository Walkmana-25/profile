"use client";

import { TimelineItemProps } from "./types";
import { WorkCard } from "./WorkCard";

export function TimelineItem({ work, isLast, onPinToggle }: TimelineItemProps) {
  return (
    <div className="flex gap-4 md:gap-8">
      {/* Left: Date and Timeline */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-24 text-right pr-4">
          <span className="text-sm text-base-content/70 whitespace-nowrap">
            {work.date}
          </span>
        </div>
        <div className="flex flex-col items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-base-content/20 mt-2 min-h-[60px]" />
          )}
        </div>
      </div>

      {/* Mobile: Date above card */}
      <div className="md:hidden flex flex-col w-full">
        <div className="flex items-center gap-2 mb-2 ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm text-base-content/70">{work.date}</span>
        </div>
        <WorkCard work={work} onPinToggle={onPinToggle} />
        {!isLast && (
          <div className="w-0.5 h-6 bg-base-content/20 ml-2 mt-4 self-start" />
        )}
      </div>

      {/* Desktop: Card */}
      <div className="hidden md:block flex-1 pb-8">
        <WorkCard work={work} onPinToggle={onPinToggle} />
      </div>
    </div>
  );
}
