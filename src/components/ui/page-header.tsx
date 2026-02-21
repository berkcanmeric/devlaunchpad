"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-12 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/[0.025] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-secondary text-[15px] md:text-base max-w-xl">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Gradient divider */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-edge to-transparent" />
    </section>
  );
}
