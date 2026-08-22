import FeaturedProjectCard from "@/components/FeaturedProjectCard";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { PROJECTS_CONTENT, type ProjectEntry } from "@/data/projects";

const COL_SPAN: Record<ProjectEntry["tier"], string> = {
  featured: "md:col-span-6",
  supporting: "md:col-span-3",
};

export default function Projects() {
  const total = PROJECTS_CONTENT.projects.length;
  const featured = PROJECTS_CONTENT.projects.filter((project) => project.tier === "featured");
  const supporting = PROJECTS_CONTENT.projects.filter((project) => project.tier === "supporting");

  return (
    <section
      id="projects"
      className="relative scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="flex flex-col gap-6">
          <SectionLabel
            index={PROJECTS_CONTENT.sectionLabel.index}
            label={PROJECTS_CONTENT.sectionLabel.label}
          />
          <h2 className="flex flex-col font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium uppercase leading-[0.95] tracking-tight text-foreground">
            {PROJECTS_CONTENT.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 items-start gap-6 md:mt-20 md:grid-cols-6">
          {featured.map((project, index) => (
            <li key={project.id} className={COL_SPAN[project.tier]}>
              <Reveal delay={index * 60}>
                <FeaturedProjectCard project={project} total={total} />
              </Reveal>
            </li>
          ))}

          {supporting.map((project, index) => (
            <li key={project.id} className={COL_SPAN[project.tier]}>
              <Reveal delay={(featured.length + index) * 60}>
                <ProjectCard project={project} total={total} size="sm" />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
