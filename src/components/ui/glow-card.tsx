"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowColor = "neon" | "coral" | "violet" | "gold" | "mint";

const glowClasses: Record<GlowColor, string> = {
  neon: "hover:shadow-[0_0_30px_rgba(0,229,255,0.12)] hover:border-neon/20",
  coral: "hover:shadow-[0_0_30px_rgba(255,61,113,0.12)] hover:border-coral/20",
  violet: "hover:shadow-[0_0_30px_rgba(124,58,237,0.12)] hover:border-violet/20",
  gold: "hover:shadow-[0_0_30px_rgba(245,158,11,0.12)] hover:border-gold/20",
  mint: "hover:shadow-[0_0_30px_rgba(16,185,129,0.12)] hover:border-mint/20",
};

const iconBgClasses: Record<GlowColor, string> = {
  neon: "bg-neon/10 text-neon",
  coral: "bg-coral/10 text-coral",
  violet: "bg-violet/10 text-violet",
  gold: "bg-gold/10 text-gold",
  mint: "bg-mint/10 text-mint",
};

interface GlowCardProps {
  children: ReactNode;
  glow?: GlowColor;
  className?: string;
  icon?: ReactNode;
  href?: string;
  delay?: number;
}

export function GlowCard({
  children,
  glow = "neon",
  className,
  icon,
  href,
  delay = 0,
}: GlowCardProps) {
  const sharedClassName = cn(
    "block rounded-2xl border border-edge bg-surface-card p-6 transition-all duration-300 card-lift",
    glowClasses[glow],
    href && "cursor-pointer",
    className
  );

  const inner = (
    <>
      {icon && (
        <div
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
            iconBgClasses[glow]
          )}
        >
          {icon}
        </div>
      )}
      {children}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={sharedClassName}
        >
          {inner}
        </a>
      ) : (
        <div className={sharedClassName}>{inner}</div>
      )}
    </motion.div>
  );
}
