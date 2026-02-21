"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient w-[500px] h-[500px] bg-accent/[0.035] top-[-10%] left-[15%]" />
      <div
        className="mesh-gradient w-[400px] h-[400px] bg-accent/[0.025] top-[20%] right-[10%]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="mesh-gradient w-[300px] h-[300px] bg-violet-500/[0.02] bottom-[0%] left-[40%]"
        style={{ animationDelay: "-13s" }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[13px] font-medium text-accent border border-accent/15 rounded-full bg-accent/[0.04]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Open-source developer toolkit
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em] leading-[1.05] mb-5"
        >
          Ship apps at
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-accent via-violet-300 to-purple-400 bg-clip-text text-transparent">
            warp speed
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[15px] md:text-base text-secondary max-w-md mx-auto mb-10 leading-relaxed"
        >
          Everything you need to build web &amp; mobile apps end-to-end.
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
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-fore text-surface rounded-lg hover:bg-fore/90 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.08)_inset]"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a
            href="https://github.com/berkcanmeric/devlaunchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-secondary border border-edge rounded-lg hover:text-fore hover:border-edge-hover hover:bg-white/[0.02] transition-all duration-200"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-16 inline-flex items-center gap-6 text-[13px] text-muted"
        >
          <span>7 Sections</span>
          <span className="w-px h-3 bg-edge" />
          <span>50+ Tools</span>
          <span className="w-px h-3 bg-edge" />
          <span>3 Roadmaps</span>
        </motion.div>
      </div>
    </section>
  );
}
