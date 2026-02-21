"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Map,
  Bot,
  Library,
  Smartphone,
  MessageSquare,
  Plug,
  Laptop,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoItem {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  color: "neon" | "coral" | "violet" | "gold" | "mint";
  size: "large" | "medium" | "small";
  stats?: string;
}

const colorMap = {
  neon: {
    icon: "bg-neon/10 text-neon",
    border: "hover:border-neon/20",
    glow: "hover:shadow-[0_0_40px_rgba(0,229,255,0.08)]",
    gradient: "from-neon/5",
  },
  coral: {
    icon: "bg-coral/10 text-coral",
    border: "hover:border-coral/20",
    glow: "hover:shadow-[0_0_40px_rgba(255,61,113,0.08)]",
    gradient: "from-coral/5",
  },
  violet: {
    icon: "bg-violet/10 text-violet",
    border: "hover:border-violet/20",
    glow: "hover:shadow-[0_0_40px_rgba(124,58,237,0.08)]",
    gradient: "from-violet/5",
  },
  gold: {
    icon: "bg-gold/10 text-gold",
    border: "hover:border-gold/20",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]",
    gradient: "from-gold/5",
  },
  mint: {
    icon: "bg-mint/10 text-mint",
    border: "hover:border-mint/20",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]",
    gradient: "from-mint/5",
  },
};

const items: BentoItem[] = [
  {
    title: "Development Roadmaps",
    description:
      "Step-by-step paths for frontend web, React Native mobile, and full-stack development. From foundations to production.",
    href: "/roadmaps",
    icon: Map,
    color: "neon",
    size: "large",
    stats: "3 paths · 30 steps",
  },
  {
    title: "AI Tools & Agents",
    description:
      "Claude Code, Cursor, v0, Copilot, and AI agents for release management, testing, code review, and more.",
    href: "/ai-tools",
    icon: Bot,
    color: "violet",
    size: "large",
    stats: "8 tools · 6 agents",
  },
  {
    title: "Web Libraries",
    description:
      "Curated UI components, state management, animation libraries, ORMs, and everything for modern web apps.",
    href: "/libraries",
    icon: Library,
    color: "coral",
    size: "medium",
    stats: "25+ libraries",
  },
  {
    title: "Mobile SDKs",
    description:
      "RevenueCat, Firebase, Expo, Sentry, and essential SDKs for building production mobile apps.",
    href: "/mobile-sdks",
    icon: Smartphone,
    color: "gold",
    size: "medium",
    stats: "15+ SDKs",
  },
  {
    title: "Prompts & Skills",
    description: "Battle-tested prompts for architecture, debugging, testing, and Claude Code skills.",
    href: "/prompts",
    icon: MessageSquare,
    color: "mint",
    size: "small",
    stats: "8 prompts",
  },
  {
    title: "Claude MCPs",
    description: "Best MCP servers for GitHub, Sentry, Vercel, Figma, databases, and more.",
    href: "/mcps",
    icon: Plug,
    color: "neon",
    size: "small",
    stats: "10 MCPs",
  },
  {
    title: "Mac Developer Tools",
    description: "Homebrew, Bun, Raycast, Warp, and essential Mac tools for developer productivity.",
    href: "/mac-tools",
    icon: Laptop,
    color: "violet",
    size: "small",
    stats: "20+ tools",
  },
];

export function BentoGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-fore-muted border border-edge rounded-full">
            Everything you need
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight gradient-text-neon">
            Your Mission Control
          </h2>
          <p className="mt-4 text-base md:text-lg text-fore-dim max-w-2xl mx-auto leading-relaxed">
            Every tool, library, and resource you need to build and ship web &amp; mobile apps — organized and ready to launch.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  item.size === "large" && "lg:col-span-1 md:col-span-1",
                )}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative flex flex-col h-full rounded-2xl border border-edge bg-surface-card p-6 transition-all duration-300 card-lift overflow-hidden",
                    colors.border,
                    colors.glow
                  )}
                >
                  {/* Subtle gradient overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      colors.gradient
                    )}
                  />

                  <div className="relative z-10">
                    {/* Icon + Arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center",
                          colors.icon
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-fore-muted opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-lg text-fore mb-2 group-hover:text-fore transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-fore-dim leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Stats badge */}
                    {item.stats && (
                      <span className="inline-block text-xs text-fore-muted font-medium px-2.5 py-1 rounded-md bg-white/[0.03] border border-edge">
                        {item.stats}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
