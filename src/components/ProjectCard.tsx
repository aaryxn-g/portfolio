"use client";

import { motion } from "motion/react";
import ProjectImage from "@/components/ProjectImage";
import type { ProjectEntry } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectEntry;
  total: number;
  size?: "md" | "sm";
}

export default function ProjectCard({ project, total, size = "md" }: ProjectCardProps) {
  const isMd = size === "md";

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      className="group flex flex-col gap-6 border border-border p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8"
    >
      <div className="flex flex-col gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted transition-transform duration-300 group-hover:translate-x-0.5">
          <span className="text-accent">{project.index}</span> / {String(total).padStart(2, "0")} · {project.category}
          {project.date ? ` · ${project.date}` : ""}
        </p>

        <h3
          className={`font-medium uppercase leading-tight tracking-tight text-foreground ${
            isMd ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h3>

        {project.description ? (
          <p className={`leading-relaxed text-muted ${isMd ? "text-sm sm:text-base" : "text-sm"}`}>
            {project.description}
          </p>
        ) : null}

        {project.bullets?.length ? (
          <ul className="flex flex-col gap-2">
            {project.bullets.map((bullet) => (
              <li key={bullet} className={`flex gap-3 leading-relaxed text-muted ${isMd ? "text-sm sm:text-base" : "text-sm"}`}>
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}

        {project.metric ? (
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              {project.metric.label}
            </span>
            <span className={`font-medium text-foreground ${isMd ? "text-xl sm:text-2xl" : "text-lg"}`}>
              {project.metric.value}
            </span>
          </div>
        ) : null}

        {project.technologies?.length ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            {project.technologies.join(" · ")}
          </p>
        ) : null}
      </div>

      <ProjectImage
        src={project.image.src}
        alt={project.image.alt}
        caption={project.image.caption}
        aspectRatio={project.image.aspectRatio}
        fit={project.image.fit}
        sizes="(min-width: 768px) 45vw, 100vw"
      />
    </motion.article>
  );
}
