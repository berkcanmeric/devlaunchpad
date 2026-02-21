"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: "neon" | "warm" | "fresh";
}

const gradientBg = {
  neon: "from-neon/8 via-violet/4 to-transparent",
  warm: "from-coral/8 via-gold/4 to-transparent",
  fresh: "from-mint/8 via-neon/4 to-transparent",
};

export function PageHeader({ icon, title, description, gradient = "neon" }: PageHeaderProps) {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />
      <div className={cn("absolute inset-0 bg-gradient-to-b pointer-events-none", gradientBg[gradient])} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4">{icon}</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-fore mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-fore-dim max-w-2xl leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
