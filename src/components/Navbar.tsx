"use client";

import { useEffect, useState } from "react";
import { BRAND_NAME, NAV_LINKS } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const primaryLinks = NAV_LINKS.slice(0, -1);
  const contactLink = NAV_LINKS[NAV_LINKS.length - 1];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/80 px-5 py-2.5 shadow-[0_1px_0_0_rgba(245,245,245,0.03)] backdrop-blur-md"
            : "border-transparent bg-transparent px-2 py-3"
        }`}
      >
        <a
          href="#"
          className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-foreground"
        >
          {BRAND_NAME}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.08em] text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contactLink.href}
          className="hidden font-mono text-xs uppercase tracking-[0.08em] text-muted transition-colors duration-200 hover:text-foreground md:block"
        >
          {contactLink.label}
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center md:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col items-center justify-between" aria-hidden="true">
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-foreground transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-px w-full bg-foreground transition-transform duration-300 ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {isOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-2xl uppercase tracking-[0.08em] text-foreground transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
