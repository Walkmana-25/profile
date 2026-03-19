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
        <img
          src={work.thumbnailUrl || "/no-image.webp"}
          alt={work.title}
          className="w-full h-full object-cover"
        />
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
