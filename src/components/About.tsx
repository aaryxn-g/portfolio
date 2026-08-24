import FramedImage from "@/components/FramedImage";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { ABOUT_CONTENT } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-6">
              <SectionLabel index={ABOUT_CONTENT.sectionLabel.index} label={ABOUT_CONTENT.sectionLabel.label} />
              <h2 className="flex flex-col font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium uppercase leading-[0.95] tracking-tight text-foreground">
                {ABOUT_CONTENT.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>

            <Reveal delay={100} className="group/frame relative w-full overflow-hidden border border-border transition-colors duration-500 hover:border-accent/40">
              <FramedImage
                src={ABOUT_CONTENT.image.src}
                alt={ABOUT_CONTENT.image.alt}
                aspectRatio={ABOUT_CONTENT.image.aspectRatio}
                sizes="(min-width: 1024px) 40vw, 90vw"
              />

              <span aria-hidden="true" className="absolute right-6 top-6 h-6 w-6 border-r border-t border-accent/60" />

              <span aria-hidden="true" className="absolute left-4 top-4 h-3 w-3 border-l border-t border-border" />
              <span aria-hidden="true" className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-border" />

              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/80 via-background/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover/frame:opacity-100"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Profile / 001</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">BITS Pilani / Dubai</span>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-12">
            <Reveal delay={160} className="flex flex-col gap-6">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 1
                      ? "max-w-xl text-lg leading-relaxed text-foreground sm:text-xl"
                      : "max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={240} className="flex flex-col gap-5 border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                {ABOUT_CONTENT.exploringLabel}
              </p>

              <ul className="flex flex-col">
                {ABOUT_CONTENT.interests.map((interest, index) => (
                  <li key={interest}>
                    <span className="group relative flex items-baseline gap-3 border-b border-border py-3">
                      <span className="font-mono text-[10px] text-muted transition-colors duration-300 group-hover:text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-sm uppercase tracking-[0.08em] text-foreground transition-colors duration-300 group-hover:text-accent">
                        {interest}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
