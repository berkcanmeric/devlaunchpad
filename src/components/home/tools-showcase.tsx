"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const featuredTools = [
  {
    name: "Claude Code",
    tagline: "Agentic coding in your terminal",
    description: "Multi-file editing, git operations, MCP support, and complex reasoning — all from the CLI.",
    gradient: "from-neon to-violet",
    glowColor: "rgba(0, 229, 255, 0.06)",
  },
  {
    name: "Cursor",
    tagline: "AI-first code editor",
    description: "Tab completion, inline chat, Composer for multi-file edits. Built on VS Code.",
    gradient: "from-violet to-coral",
    glowColor: "rgba(124, 58, 237, 0.06)",
  },
  {
    name: "v0 by Vercel",
    tagline: "Describe UI, get code",
    description: "Natural language to production-ready React + Tailwind components using shadcn/ui.",
    gradient: "from-coral to-gold",
    glowColor: "rgba(255, 61, 113, 0.06)",
  },
];

const essentialStack = [
  { name: "Next.js 16", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS v4", category: "Styling" },
  { name: "shadcn/ui", category: "Components" },
  { name: "Zustand", category: "State" },
  { name: "Prisma", category: "Database" },
  { name: "Clerk", category: "Auth" },
  { name: "Vercel", category: "Deploy" },
];

export function ToolsShowcase() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-fore-muted border border-edge rounded-full">
            Powered by AI
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight gradient-text-warm">
            Build 10x Faster
          </h2>
          <p className="mt-4 text-base md:text-lg text-fore-dim max-w-2xl mx-auto">
            The AI tools that turn you into a one-person development team.
          </p>
        </motion.div>

        {/* Featured AI tools */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {featuredTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl border border-edge bg-surface-card p-6 transition-all duration-300 card-lift hover:border-edge-strong overflow-hidden"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 0%, ${tool.glowColor}, transparent 60%)` }}
              />

              <div className="relative z-10">
                {/* Gradient bar */}
                <div className={cn("w-12 h-1 rounded-full bg-gradient-to-r mb-5", tool.gradient)} />

                <h3 className="font-display font-bold text-xl text-fore mb-1">
                  {tool.name}
                </h3>
                <p className="text-sm font-medium text-fore-muted mb-3">
                  {tool.tagline}
                </p>
                <p className="text-sm text-fore-dim leading-relaxed">
                  {tool.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Essential stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight text-fore mb-3">
            The Essential Stack
          </h3>
          <p className="text-sm text-fore-dim">
            The recommended tech stack for shipping fast in 2025-2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {essentialStack.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-edge bg-surface-card hover:border-edge-glow hover:bg-surface-hover transition-all duration-200"
            >
              <span className="text-sm font-medium text-fore">{item.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-fore-muted font-semibold px-1.5 py-0.5 rounded bg-white/[0.04]">
                {item.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/libraries"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neon hover:text-neon/80 transition-colors"
          >
            Explore all libraries
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
