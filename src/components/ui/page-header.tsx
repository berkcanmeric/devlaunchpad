"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="pt-24 pb-10 md:pt-28 md:pb-12 border-b border-edge">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            {title}
          </h1>
          <p className="text-secondary text-base md:text-lg max-w-xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
