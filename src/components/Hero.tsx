import FramedImage from "@/components/FramedImage";
import SectionLabel from "@/components/SectionLabel";
import { HERO_CONTENT } from "@/data/hero";
import { GITHUB_URL } from "@/data/social";
import { LINKEDIN_URL } from "@/data/contact";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 pt-32 pb-16 sm:px-10 lg:px-16"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div className="flex flex-col gap-8">
          <div className="reveal" style={{ animationDelay: "0ms" }}>
            <SectionLabel index={HERO_CONTENT.sectionLabel.index} label={HERO_CONTENT.sectionLabel.label} pulse />
          </div>

          <h1 className="flex flex-col font-display text-[clamp(3rem,11vw,7.5rem)] font-medium uppercase leading-[0.92] tracking-tight text-foreground">
            <span className="reveal block" style={{ animationDelay: "90ms" }}>
              {HERO_CONTENT.firstName}
            </span>
            <span className="reveal block" style={{ animationDelay: "170ms" }}>
              {HERO_CONTENT.lastName}
            </span>
          </h1>

          <p
            className="reveal font-mono text-xs uppercase tracking-[0.25em] text-muted sm:text-sm"
            style={{ animationDelay: "260ms" }}
          >
            {HERO_CONTENT.subtitle}
          </p>

          <p
            className="reveal max-w-md text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "340ms" }}
          >
            {HERO_CONTENT.description}
          </p>

          <div className="reveal flex flex-wrap items-center gap-4" style={{ animationDelay: "430ms" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">[</span>
              View My Work
              <span
                aria-hidden="true"
                className="inline-block max-w-0 overflow-hidden text-accent opacity-0 transition-all duration-200 group-hover:ml-0.5 group-hover:max-w-[1em] group-hover:opacity-100"
              >
                →
              </span>
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">]</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">[</span>
              GitHub
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">]</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">[</span>
              LinkedIn
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">]</span>
            </a>
          </div>
        </div>

        <div className="reveal relative flex flex-col items-end gap-6" style={{ animationDelay: "520ms" }}>
          <div className="group relative w-full max-w-xs overflow-hidden rounded-2xl border border-border transition-colors duration-500 hover:border-accent/40">
            <FramedImage
              src={HERO_CONTENT.image.src}
              alt={HERO_CONTENT.image.alt}
              aspectRatio={HERO_CONTENT.image.aspectRatio}
              priority
              sizes="(min-width: 1024px) 320px, 80vw"
              imageClassName="portrait-settle"
            />

            <span aria-hidden="true" className="absolute left-4 top-4 h-3 w-3 border-l border-t border-border transition-colors duration-500 group-hover:border-accent/60" />
            <span aria-hidden="true" className="absolute right-4 top-4 h-3 w-3 border-r border-t border-border transition-colors duration-500 group-hover:border-accent/60" />
            <span aria-hidden="true" className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-border transition-colors duration-500 group-hover:border-accent/60" />
          </div>

          <div className="w-44 rounded-xl border border-border bg-background/90 p-4 backdrop-blur sm:w-52">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <span aria-hidden="true" className="signal-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {HERO_CONTENT.currently.label}
            </p>
            <p className="mt-2 text-sm leading-snug text-foreground">
              {HERO_CONTENT.currently.lines.join(" ")}
            </p>
          </div>
        </div>
      </div>

      <div
        className="reveal absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
        style={{ animationDelay: "620ms" }}
      >
        <span className="scroll-indicator font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          {HERO_CONTENT.scrollLabel} ↓
        </span>
      </div>
    </section>
  );
}
