import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { LEADERSHIP_CONTENT } from "@/data/leadership";

export default function LeadershipAchievements() {
  const {
    currentLeadership,
    currentLeadershipLabel,
    earlierRoles,
    earlierRolesLabel,
    achievements,
    achievementsLabel,
  } = LEADERSHIP_CONTENT;

  return (
    <section
      id="achievements"
      className="relative scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="flex flex-col gap-6">
          <SectionLabel
            index={LEADERSHIP_CONTENT.sectionLabel.index}
            label={LEADERSHIP_CONTENT.sectionLabel.label}
          />
          <h2 className="flex flex-col font-display text-[clamp(2.25rem,6vw,4.5rem)] font-medium uppercase leading-[0.95] tracking-tight text-foreground">
            {LEADERSHIP_CONTENT.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <Reveal delay={40} className="mt-16 lg:mt-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{currentLeadershipLabel}</p>
        </Reveal>

        <ol className="mt-6 flex flex-col gap-6">
          {currentLeadership.map((entry, index) => (
            <li key={entry.id}>
              <Reveal delay={index * 100}>
                <article className="group overflow-hidden rounded-2xl border border-border transition-colors duration-300 hover:border-accent/40">
                  <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-14">
                    <div className="flex flex-col gap-5">
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                        <span className="text-accent">{entry.index}</span> / {entry.date}
                      </p>

                      <h3 className="text-2xl font-medium uppercase tracking-tight text-foreground sm:text-3xl">
                        {entry.role}
                      </h3>

                      <p className="text-lg font-medium uppercase leading-snug tracking-wide text-accent sm:text-xl">
                        {entry.organization}
                      </p>

                      <ul className="flex flex-col gap-3">
                        {entry.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <PhotoFrame
                      src={entry.image.src}
                      alt={entry.image.alt}
                      caption={entry.image.tag}
                      sizes="(min-width: 1024px) 520px, 100vw"
                      aspectRatio={entry.image.aspectRatio}
                      scale={entry.image.scale}
                      objectPosition="top"
                    />
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={160} className="mt-14 border-t border-border pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{earlierRolesLabel}</p>

          <ul className="mt-6 flex flex-col">
            {earlierRoles.map((role) => (
              <li
                key={role.id}
                className="flex flex-col gap-1 border-b border-border py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-sm font-medium uppercase tracking-wide text-foreground sm:text-base">
                    {role.role}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                    {role.organization}
                  </span>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{role.date}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={220} className="mt-14 border-t border-border pt-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">{achievementsLabel}</p>

          <ol className="mt-6 grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
            {achievements.map((achievement) => (
              <li key={achievement.id}>
                <article className="group flex flex-col gap-5 rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                      <span className="text-accent">{achievement.index}</span> / {achievement.date}
                    </p>

                    <h3 className="text-lg font-medium uppercase leading-snug tracking-tight text-foreground sm:text-xl">
                      <span className="text-accent">{achievement.placement}</span> | {achievement.competition}
                    </h3>

                    {achievement.context?.length ? (
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
                        {achievement.context.join(" · ")}
                      </p>
                    ) : null}

                    <p className="text-sm leading-relaxed text-muted sm:text-base">{achievement.description}</p>
                  </div>

                  <PhotoFrame
                    src={achievement.image.src}
                    alt={achievement.image.alt}
                    caption={achievement.image.tag}
                    sizes="(min-width: 640px) 45vw, 100vw"
                    aspectRatio={achievement.image.aspectRatio}
                    className={achievement.id === "ieee-sustainathon" ? "sm:max-w-xs" : undefined}
                  />
                </article>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
