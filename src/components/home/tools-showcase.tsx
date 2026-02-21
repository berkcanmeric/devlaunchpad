"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tools = [
  {
    name: "Claude Code",
    tagline: "Agentic CLI for complex coding tasks",
    desc: "Multi-file editing, git ops, MCP support, background agents.",
  },
  {
    name: "Cursor",
    tagline: "AI-first editor with Composer",
    desc: "Tab completion, inline chat, multi-file refactoring.",
  },
  {
    name: "v0 by Vercel",
    tagline: "Natural language to production UI",
    desc: "Describe a component, get React + Tailwind + shadcn/ui code.",
  },
];

const stack = [
  { name: "Next.js 16", role: "Framework" },
  { name: "TypeScript", role: "Language" },
  { name: "Tailwind v4", role: "Styling" },
  { name: "shadcn/ui", role: "Components" },
  { name: "Zustand", role: "State" },
  { name: "Prisma", role: "ORM" },
  { name: "Clerk", role: "Auth" },
  { name: "Vercel", role: "Deploy" },
];

export function ToolsShowcase() {
  return (
    <section className="py-20 md:py-28">
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
          <p className="text-secondary text-[15px] max-w-lg">
            The tools that turn a solo developer into a full engineering team.
          </p>
        </motion.div>

        {/* Featured AI tools */}
        <div className="grid md:grid-cols-3 gap-2.5 mb-16">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="card-gradient p-5"
            >
              <p className="text-[15px] font-semibold text-fore mb-0.5">{t.name}</p>
              <p className="text-[12px] text-accent font-medium mb-2">{t.tagline}</p>
              <p className="text-[13px] text-secondary leading-relaxed">{t.desc}</p>
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
          <p className="text-[13px] font-semibold text-muted uppercase tracking-wider mb-4">
            Recommended Stack
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {stack.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg border border-edge bg-card text-[13px]"
              >
                <span className="font-medium text-fore">{s.name}</span>
                <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">{s.role}</span>
              </div>
            ))}
          </div>
          <Link
            href="/libraries"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Browse all libraries
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
