"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tools = [
  { name: "Claude Code", tagline: "Agentic CLI for complex coding tasks" },
  { name: "Cursor", tagline: "AI-first editor with tab completion & Composer" },
  { name: "v0", tagline: "Natural language to production UI components" },
];

const stack = [
  "Next.js 16", "TypeScript", "Tailwind CSS v4", "shadcn/ui",
  "Zustand", "Prisma", "Clerk", "Vercel",
];

export function ToolsShowcase() {
  return (
    <section className="py-20 md:py-28 border-t border-edge">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Built for the AI era
          </h2>
          <p className="text-secondary text-sm md:text-base max-w-lg">
            The tools that turn a solo developer into a full engineering team.
          </p>
        </motion.div>

        {/* Top AI tools */}
        <div className="grid md:grid-cols-3 gap-3 mb-16">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="p-5 rounded-xl border border-edge bg-card"
            >
              <p className="text-sm font-semibold text-fore mb-1">{t.name}</p>
              <p className="text-sm text-secondary">{t.tagline}</p>
            </motion.div>
          ))}
        </div>

        {/* Recommended stack */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold text-fore mb-4">Recommended stack</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 text-xs font-medium text-secondary border border-edge rounded-md bg-card"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            href="/libraries"
            className="group inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Browse all libraries
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
