"use client";

import { FaThumbtack } from "react-icons/fa";
import { TimelineItem } from "@/components/work";
import { getAllWorks } from "@/lib/works";

export default function Page() {
  const allWorks = getAllWorks();
  const pinnedWorks = allWorks.filter((work) => work.isPinned);
  const unpinnedWorks = allWorks.filter((work) => !work.isPinned);

  // Sort unpinned works by date (newer first)
  const sortedUnpinnedWorks = [...unpinnedWorks].sort((a, b) => {
    const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || "0", 10);
    const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || "0", 10);
    return yearB - yearA;
  });

  return (
    <main className="min-h-screen w-full flex flex-col items-center py-20 px-4">
      <div className="w-5/6 max-w-4xl">
        <h1 className="text-6xl font-bold text-center mb-8">Works</h1>

        {/* Pinned Section */}
        {pinnedWorks.length > 0 && (
          <>
            <h2 className="mb-6 text-center text-2xl flex items-center justify-center gap-2">
              <FaThumbtack className="text-primary" />
              PINNED
            </h2>
            <div className="flex flex-col mb-12">
              {pinnedWorks.map((work, index) => (
                <TimelineItem
                  key={work.id}
                  work={work}
                  isLast={index === pinnedWorks.length - 1}
                  onPinToggle={() => {}}
                />
              ))}
            </div>
          </>
        )}

        {/* Timeline Section */}
        <h2 className="mb-8 text-center text-2xl">TIMELINE</h2>
        <div className="flex flex-col">
          {sortedUnpinnedWorks.map((work, index) => (
            <TimelineItem
              key={work.id}
              work={work}
              isLast={index === sortedUnpinnedWorks.length - 1}
              onPinToggle={() => {}}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
