"use client";

import { useState, useEffect } from "react";
import { TimelineItem } from "@/components/work";
import { getAllWorks, sortWorksByPinAndDate } from "@/lib/works";

const PINNED_STORAGE_KEY = "pinned-works";

export default function Page() {
  const [pinnedIds, setPinnedIds] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(PINNED_STORAGE_KEY);
    if (stored) {
      try {
        setPinnedIds(new Set(JSON.parse(stored)));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        PINNED_STORAGE_KEY,
        JSON.stringify([...pinnedIds])
      );
    }
  }, [pinnedIds, mounted]);

  const handlePinToggle = (id: string) => {
    setPinnedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const allWorks = getAllWorks();
  const sortedWorks = sortWorksByPinAndDate(
    allWorks.map((work) => ({
      ...work,
      isPinned: pinnedIds.has(work.id),
    })),
    pinnedIds
  );

  return (
    <main className="min-h-screen w-full flex flex-col items-center py-20 px-4">
      <div className="w-5/6 max-w-4xl">
        <h1 className="text-6xl font-bold text-center mb-8">Works</h1>
        <h2 className="mb-8 text-center text-2xl">TIMELINE</h2>
        <div className="flex flex-col">
          {sortedWorks.map((work, index) => (
            <TimelineItem
              key={work.id}
              work={work}
              isLast={index === sortedWorks.length - 1}
              onPinToggle={handlePinToggle}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
