import FramedImage from "@/components/FramedImage";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { EXPERIENCE_CONTENT } from "@/data/experience";

// All three entry photos are portrait once correctly oriented. BITS gets a
// moderately wider frame for visual prominence; the others use the default
// portrait width so they don't tower over the row.
const IMAGE_COLUMN_CLASS: Record<string, string> = {
  bits: "lg:grid-cols-[1fr_20rem]",
  jio: "lg:grid-cols-[1fr_16rem]",
  orbitx: "lg:grid-cols-[1fr_16rem]",
};

const IMAGE_SIZES: Record<string, string> = {
  bits: "(min-width: 1024px) 20rem, 90vw",
  jio: "(min-width: 1024px) 16rem, 90vw",
  orbitx: "(min-width: 1024px) 16rem, 90vw",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="flex flex-col gap-6">
          <SectionLabel
            index={EXPERIENCE_CONTENT.sectionLabel.index}
            label={EXPERIENCE_CONTENT.sectionLabel.label}
          />
          <h2 className="flex flex-col font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium uppercase leading-[0.95] tracking-tight text-foreground">
            {EXPERIENCE_CONTENT.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <ol className="mt-16 flex flex-col lg:mt-20">
          {EXPERIENCE_CONTENT.entries.map((entry, index) => (
            <li key={entry.id} className="border-t border-border first:border-t-0">
              <Reveal delay={index * 80} className="group flex flex-col py-12 lg:py-16">
                <div
                  className={`grid gap-8 lg:items-start lg:gap-14 ${IMAGE_COLUMN_CLASS[entry.id]}`}
                >
                  <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-medium uppercase leading-tight tracking-tight text-foreground sm:text-3xl">
                      {entry.role}
                    </h3>

                    <p className="text-lg font-medium uppercase leading-snug tracking-wide text-foreground sm:text-xl">
                      {entry.organization}
                    </p>

                    <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                      {entry.context ? <p>{entry.context}</p> : null}
                      <p>
                        <span className="text-accent">{entry.index}</span>
                        {entry.date ? <> / {entry.date}</> : null}
                      </p>
                    </div>

                    {entry.bullets && entry.bullets.length > 0 ? (
                      <ul className="flex flex-col gap-2 transition-transform duration-500 lg:group-hover:translate-x-1">
                        {entry.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <div className="relative w-full overflow-hidden border border-border transition-colors duration-300 lg:group-hover:border-accent/40">
                    <FramedImage
                      src={entry.image.src}
                      alt={entry.image.alt}
                      aspectRatio={entry.image.aspectRatio}
                      scale={entry.image.scale}
                      sizes={IMAGE_SIZES[entry.id]}
                      // A fixed `scale` (set inline) would otherwise be overridden by this
                      // hover class, since inline transforms win over Tailwind utilities.
                      imageClassName={
                        entry.image.scale ? "" : "transition-transform duration-500 lg:group-hover:scale-[1.02]"
                      }
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-border bg-background/50 px-3 py-2 backdrop-blur-sm"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                        {entry.image.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
