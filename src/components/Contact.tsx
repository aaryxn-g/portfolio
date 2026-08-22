import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { BRAND_NAME } from "@/data/navigation";
import { GITHUB_URL } from "@/data/social";
import { CONTACT_CONTENT, EMAIL, LINKEDIN_URL } from "@/data/contact";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: GITHUB_URL,
    external: true,
    ariaLabel: `${BRAND_NAME}'s GitHub profile (opens in a new tab)`,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    external: true,
    ariaLabel: `${BRAND_NAME}'s LinkedIn profile (opens in a new tab)`,
  },
  {
    label: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    ariaLabel: `Email ${BRAND_NAME} at ${EMAIL}`,
  },
];

export default function Contact() {
  const { footer } = CONTACT_CONTENT;

  return (
    <section
      id="contact"
      className="relative scroll-mt-28 px-6 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <Reveal className="flex flex-col gap-8">
          <SectionLabel
            index={CONTACT_CONTENT.sectionLabel.index}
            label={CONTACT_CONTENT.sectionLabel.label}
          />

          <h2 className="flex flex-col font-display text-[clamp(2.75rem,8vw,6rem)] font-medium uppercase leading-[0.95] tracking-tight text-foreground">
            {CONTACT_CONTENT.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {CONTACT_CONTENT.supportingText}
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border px-8 py-4 font-mono text-sm uppercase tracking-[0.15em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <span className="text-muted transition-colors duration-200 group-hover:text-accent">[</span>
            {CONTACT_CONTENT.ctaLabel}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
            <span className="text-muted transition-colors duration-200 group-hover:text-accent">]</span>
          </a>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-24 flex flex-col gap-10 border-t border-border pt-10 sm:flex-row sm:items-end sm:justify-between lg:mt-32"
        >
          <div className="flex flex-col gap-1">
            <p className="font-mono text-sm uppercase tracking-[0.15em] text-foreground">{footer.name}</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{footer.tagline}</p>
          </div>

          <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-label={link.ariaLabel}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.15em] text-muted transition-colors duration-200 hover:text-accent ${
                    link.external ? "uppercase" : "normal-case"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {footer.copyright}
        </p>
      </div>
    </section>
  );
}
