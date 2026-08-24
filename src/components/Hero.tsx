"use client";

import { motion, type Transition, type Variants } from "motion/react";
import FramedImage from "@/components/FramedImage";
import SectionLabel from "@/components/SectionLabel";
import { HERO_CONTENT } from "@/data/hero";
import { GITHUB_URL } from "@/data/social";
import { LINKEDIN_URL } from "@/data/contact";

const EASE_SETTLE: Transition["ease"] = [0.16, 1, 0.3, 1];

// Pure orchestration variants: no visual properties of their own, just a
// staggered timeline that nested motion elements inherit.
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_SETTLE } },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: EASE_SETTLE } },
};

const tapTransition: Transition = { type: "spring", stiffness: 420, damping: 26 };

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 pt-32 pb-16 sm:px-10 lg:px-16"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center"
      >
        <div className="flex flex-col gap-8">
          <motion.div variants={fadeUp}>
            <SectionLabel index={HERO_CONTENT.sectionLabel.index} label={HERO_CONTENT.sectionLabel.label} pulse />
          </motion.div>

          <motion.h1
            variants={stagger}
            className="flex flex-col font-display text-[clamp(3rem,11vw,7.5rem)] font-medium uppercase leading-[0.92] tracking-tight text-foreground"
          >
            <motion.span variants={fadeUp} className="block">
              {HERO_CONTENT.firstName}
            </motion.span>
            <motion.span variants={fadeUp} className="block">
              {HERO_CONTENT.lastName}
            </motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.25em] text-muted sm:text-sm">
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.p variants={fadeUp} className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={tapTransition}
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">[</span>
              View My Work
              <span className="text-muted transition-colors duration-200 group-hover:text-accent">]</span>
            </motion.a>

            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={tapTransition}
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
            </motion.a>

            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={tapTransition}
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
            </motion.a>
          </motion.div>
        </div>

        <motion.div variants={imageReveal} className="relative flex flex-col items-end gap-6">
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group relative w-full max-w-xs overflow-hidden border border-border transition-colors duration-500 hover:border-accent/40"
          >
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
          </motion.div>

          <div className="w-44 border border-border bg-background/90 p-4 backdrop-blur sm:w-52">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
              <span aria-hidden="true" className="signal-dot h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {HERO_CONTENT.currently.label}
            </p>
            <p className="mt-2 text-sm leading-snug text-foreground">
              {HERO_CONTENT.currently.lines.join(" ")}
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75, ease: EASE_SETTLE }}
        className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="scroll-indicator font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
          {HERO_CONTENT.scrollLabel} ↓
        </span>
      </motion.div>
    </section>
  );
}
