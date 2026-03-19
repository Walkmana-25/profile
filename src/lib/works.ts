import { WORKS_DATA } from "@/data/works";
import { Work } from "@/components/work/types";

export function getAllWorks(): Work[] {
  return WORKS_DATA;
}

export function getWorkBySlug(slug: string): Work | undefined {
  return WORKS_DATA.find((work) => work.slug === slug);
}

export function sortWorksByPinAndDate(
  works: Work[],
  pinnedIds: Set<string>
): Work[] {
  return [...works].sort((a, b) => {
    const aIsPinned = pinnedIds.has(a.id);
    const bIsPinned = pinnedIds.has(b.id);

    // Pinned items first
    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;

    // Then by date (newer first)
    return extractYear(b.date) - extractYear(a.date);
  });
}

function extractYear(dateStr: string): number {
  const match = dateStr.match(/\d{4}/);
  return match ? parseInt(match[0], 10) : 0;
}

export function getAllWorkSlugs(): string[] {
  return WORKS_DATA.map((work) => work.slug);
}
