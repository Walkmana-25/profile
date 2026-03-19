import { ReactNode } from "react";

export interface Work {
  id: string;
  slug: string;
  title: string;
  date: string;
  summary: string;
  thumbnailUrl?: string;
  isPinned: boolean;
  role: string;
  technologies: string[];
  url?: string;
  content: ReactNode;
}

export interface WorkCardProps {
  work: Work;
  onPinToggle: (id: string) => void;
}

export interface TimelineItemProps {
  work: Work;
  isLast: boolean;
  onPinToggle: (id: string) => void;
}
