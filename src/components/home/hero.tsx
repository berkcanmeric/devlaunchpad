"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-accent font-medium mb-5"
        >
          Open-source developer toolkit
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5"
        >
          Ship apps at{" "}
          <span className="text-accent">warp speed</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-secondary max-w-xl mx-auto mb-9 leading-relaxed"
        >
          Everything you need to build web & mobile apps end-to-end.
          Roadmaps, AI tools, libraries, SDKs, and prompts — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3"
        >
          <Link
            href="/roadmaps"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-fore text-surface rounded-lg hover:bg-fore/90 transition-colors"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://github.com/berkcanmeric/devlaunchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-secondary border border-edge rounded-lg hover:text-fore hover:border-edge-hover transition-colors"
          >
            GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 flex items-center justify-center gap-8 text-sm text-muted"
        >
          {["7 Sections", "50+ Tools", "3 Roadmaps"].map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              {i > 0 && <span className="w-px h-3 bg-edge" />}
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
