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

const items = [
  {
    title: "Roadmaps",
    desc: "Step-by-step paths for frontend, mobile, and full-stack.",
    href: "/roadmaps",
    icon: Map,
    count: "3 paths",
  },
  {
    title: "AI Tools & Agents",
    desc: "Claude Code, Cursor, v0, and autonomous dev agents.",
    href: "/ai-tools",
    icon: Bot,
    count: "8 tools",
  },
  {
    title: "Web Libraries",
    desc: "UI kits, state, animation, ORMs, auth, and payments.",
    href: "/libraries",
    icon: Library,
    count: "25+ libs",
  },
  {
    title: "Mobile SDKs",
    desc: "RevenueCat, Firebase, Expo, analytics, and more.",
    href: "/mobile-sdks",
    icon: Smartphone,
    count: "15+ SDKs",
  },
  {
    title: "Prompts & Skills",
    desc: "Battle-tested prompts and Claude Code slash commands.",
    href: "/prompts",
    icon: MessageSquare,
    count: "8 prompts",
  },
  {
    title: "Claude MCPs",
    desc: "GitHub, Sentry, Vercel, Figma, and database MCPs.",
    href: "/mcps",
    icon: Plug,
    count: "10 MCPs",
  },
  {
    title: "Mac Tools",
    desc: "Homebrew, Bun, Raycast, Warp, and dev essentials.",
    href: "/mac-tools",
    icon: Laptop,
    count: "20+ tools",
  },
];

export function BentoGrid() {
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
            Everything in one place
          </h2>
          <p className="text-secondary text-sm md:text-base max-w-lg">
            Stop switching between dozens of tabs. All the tools and resources
            you need, organized and ready.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
            >
              <Link
                href={item.href}
                className="group flex flex-col h-full p-5 rounded-xl border border-edge bg-card hover:bg-card-hover hover:border-edge-hover transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <item.icon className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-sm font-semibold text-fore mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-3 flex-1">
                  {item.desc}
                </p>
                <span className="text-xs text-muted">{item.count}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
