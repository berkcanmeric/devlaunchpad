"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  gradient?: "neon" | "warm" | "fresh";
  align?: "left" | "center";
}

const gradientClasses = {
  neon: "gradient-text-neon",
  warm: "gradient-text-warm",
  fresh: "gradient-text-fresh",
};

export function SectionHeader({
  badge,
  title,
  subtitle,
  gradient = "neon",
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center"
      )}
    >
      {badge && (
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-fore-muted border border-edge rounded-full">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight",
          gradientClasses[gradient]
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-fore-dim max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
