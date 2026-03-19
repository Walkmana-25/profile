"use client";

import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { Work } from "./types";

interface WorkDetailProps {
  work: Work;
}

export function WorkDetail({ work }: WorkDetailProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back link */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-base-content/70 hover:text-base-content mb-8 transition-colors"
      >
        <FaArrowLeft className="text-sm" />
        <span>Back to Works</span>
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-base-content/70">
          <span>{work.date}</span>
          <span className="text-base-content/30">|</span>
          <span>{work.role}</span>
        </div>
        {work.url && (
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span>View Project</span>
          </a>
        )}
      </header>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Overview</h2>
        <p className="text-base-content/80 leading-relaxed">{work.summary}</p>
      </section>

      {/* Main Visual */}
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-base-300 mb-8">
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
              className="h-24 w-24"
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

      {/* Tech Stack */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {work.technologies.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center px-4 py-2 rounded-full border-2 border-primary bg-primary/10 text-primary text-sm font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        {work.content}
      </article>
    </div>
  );
}
