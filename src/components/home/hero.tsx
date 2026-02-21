"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

const floatingBadges = [
  { label: "Next.js 16", x: "8%", y: "22%", delay: 0.2 },
  { label: "React Native", x: "84%", y: "18%", delay: 0.7 },
  { label: "Claude AI", x: "6%", y: "68%", delay: 1.1 },
  { label: "TypeScript", x: "88%", y: "62%", delay: 0.4 },
  { label: "Tailwind", x: "12%", y: "82%", delay: 1.4 },
  { label: "Expo", x: "82%", y: "78%", delay: 0.9 },
  { label: "Bun", x: "92%", y: "40%", delay: 1.6 },
  { label: "Vercel", x: "4%", y: "45%", delay: 0.6 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* ── Background layers ────────── */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-surface pointer-events-none" />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-neon/[0.07] blur-[140px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-violet/[0.06] blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-coral/[0.04] blur-[100px]" />

      {/* Animated vertical beams */}
      {[18, 42, 67, 85].map((left, i) => (
        <motion.div
          key={left}
          className="absolute top-0 w-px h-full pointer-events-none"
          style={{ left: `${left}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.15, 0] }}
          transition={{
            duration: 4,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-neon/30 to-transparent" />
        </motion.div>
      ))}

      {/* ── Floating tech badges ────── */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute hidden lg:block"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: badge.delay + 0.8, duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 5 + badge.delay, repeat: Infinity, ease: "easeInOut" }}
            className="px-3 py-1.5 rounded-full glass text-xs text-fore-dim font-medium select-none"
          >
            {badge.label}
          </motion.div>
        </motion.div>
      ))}

      {/* ── Main content ────────────── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-fore-dim mb-8">
            <Sparkles className="w-3.5 h-3.5 text-neon" />
            Your complete development companion
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-fore">Dev</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-violet to-coral">
            Launchpad
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-fore-dim max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ship web &amp; mobile apps at warp speed. Roadmaps, AI tools, libraries,
          SDKs, prompts, and everything you need to build{" "}
          <span className="text-fore font-medium">end-to-end</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/roadmaps"
            className="group flex items-center gap-2.5 px-7 py-3.5 bg-neon text-surface font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] hover:bg-neon/90"
          >
            <Rocket className="w-4 h-4" />
            Explore Roadmaps
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/ai-tools"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-edge hover:border-edge-glow text-fore-dim hover:text-fore font-medium transition-all duration-300 hover:bg-white/[0.02]"
          >
            Browse AI Tools
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex items-center justify-center gap-8 md:gap-12"
        >
          {[
            { value: "7", label: "Sections" },
            { value: "50+", label: "Tools" },
            { value: "3", label: "Roadmaps" },
            { value: "8+", label: "AI Agents" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold text-fore">
                {stat.value}
              </div>
              <div className="text-xs text-fore-muted mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
    </section>
  );
}
