import CountUpValue from "@/components/CountUpValue";
import ProjectImage from "@/components/ProjectImage";
import type { ProjectEntry } from "@/data/projects";

interface FeaturedProjectCardProps {
  project: ProjectEntry;
  total: number;
}

const GRID_COLS: Record<"default" | "large", string> = {
  default: "lg:grid-cols-2",
  large: "lg:grid-cols-[0.85fr_1.15fr]",
};

export default function FeaturedProjectCard({ project, total }: FeaturedProjectCardProps) {
  const gridCols = GRID_COLS[project.imageProminence ?? "default"];

  return (
    <article className="group overflow-hidden rounded-2xl border border-border transition-colors duration-300 hover:border-accent/40">
      <div className={`grid gap-10 p-6 sm:p-10 lg:items-center lg:gap-16 lg:p-14 ${gridCols}`}>
        <div className="flex flex-col gap-6 transition-transform duration-500 lg:group-hover:translate-x-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            Featured Project
          </span>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted transition-transform duration-300 group-hover:translate-x-0.5">
            <span className="text-accent">{project.index}</span> / {String(total).padStart(2, "0")}
          </p>

          <h3 className="font-mono text-sm uppercase tracking-[0.25em] text-muted">{project.title}</h3>

          {project.date || project.context ? (
            <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.date ? <p>{project.date}</p> : null}
              {project.context ? <p>{project.context}</p> : null}
            </div>
          ) : null}

          {project.tagline ? (
            <p className="font-display text-[clamp(1.75rem,4vw,3rem)] font-medium uppercase leading-[1.05] tracking-tight text-foreground">
              {project.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          ) : null}

          {project.description ? (
            <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>
          ) : null}

          {project.bullets?.length ? (
            <ul className="flex flex-col gap-2">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}

          {project.metric ? (
            <div className="flex flex-col gap-1 border-t border-border pt-5 transition-colors duration-300 group-hover:border-accent/30">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                {project.metric.label}
              </span>
              <span className="text-3xl font-medium text-foreground transition-colors duration-300 sm:text-4xl group-hover:text-accent">
                {project.id === "propnet" ? (
                  <CountUpValue to={0.989} decimals={3} suffix=" ± 0.004" />
                ) : (
                  project.metric.value
                )}
              </span>
            </div>
          ) : null}

          {project.benchmarks?.length ? (
            <ul className="flex flex-col gap-2">
              {project.benchmarks.map((benchmark) => (
                <li
                  key={benchmark.label}
                  className="flex items-baseline justify-between gap-4 font-mono text-xs uppercase tracking-[0.15em] text-muted"
                >
                  <span>{benchmark.label}</span>
                  <span>{benchmark.value}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {project.technologies?.length ? (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {project.technologies.join(" · ")}
            </p>
          ) : null}

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex w-fit items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <span className="text-muted transition-colors duration-200 group-hover/link:text-accent">[</span>
              View Project
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              >
                ↗
              </span>
              <span className="text-muted transition-colors duration-200 group-hover/link:text-accent">]</span>
            </a>
          ) : null}
        </div>

        <ProjectImage
          src={project.image.src}
          alt={project.image.alt}
          caption={project.image.caption}
          aspectRatio={project.image.aspectRatio}
          fit={project.image.fit}
          sizes="(min-width: 1024px) 620px, 100vw"
          className="transition-transform duration-500 group-hover:-translate-y-1"
        />
      </div>
    </article>
  );
}
