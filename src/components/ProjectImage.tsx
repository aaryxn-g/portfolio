"use client";

import { motion } from "motion/react";
import FramedImage from "@/components/FramedImage";

interface ProjectImageProps {
  src: string;
  alt: string;
  caption: string;
  aspectRatio: string;
  sizes: string;
  fit?: "cover" | "contain";
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  caption,
  aspectRatio,
  sizes,
  fit,
  className = "",
}: ProjectImageProps) {
  return (
    <div
      className={`relative overflow-hidden border border-border transition-colors duration-300 group-hover:border-accent/40 ${className}`}
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
      >
        <FramedImage src={src} alt={alt} aspectRatio={aspectRatio} sizes={sizes} fit={fit} />
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent p-4"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">{caption}</span>
      </div>
    </div>
  );
}
