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

const items = [
  {
    title: "Roadmaps",
    desc: "Step-by-step paths for frontend, mobile, and full-stack development. From foundations to production.",
    href: "/roadmaps",
    icon: Map,
    count: "3 paths · 30 steps",
    span: "lg:col-span-2",
  },
  {
    title: "AI Tools & Agents",
    desc: "Claude Code, Cursor, v0, Copilot, and six autonomous dev agents for testing, releases, and review.",
    href: "/ai-tools",
    icon: Bot,
    count: "8 tools · 6 agents",
    span: "",
  },
  {
    title: "Web Libraries",
    desc: "shadcn/ui, Aceternity, HeroUI, Zustand, Prisma, and 20+ curated libraries for modern web apps.",
    href: "/libraries",
    icon: Library,
    count: "25+ libraries",
    span: "",
  },
  {
    title: "Mobile SDKs",
    desc: "RevenueCat, Firebase, Expo, Sentry, OneSignal, and everything for production mobile apps.",
    href: "/mobile-sdks",
    icon: Smartphone,
    count: "15+ SDKs",
    span: "lg:col-span-2",
  },
  {
    title: "Prompts & Skills",
    desc: "Battle-tested prompts for architecture, debugging, testing, and Claude Code slash commands.",
    href: "/prompts",
    icon: MessageSquare,
    count: "8 prompts",
    span: "",
  },
  {
    title: "Claude MCPs",
    desc: "GitHub, Sentry, Vercel, Figma, Supabase, and more — with copy-paste config snippets.",
    href: "/mcps",
    icon: Plug,
    count: "10 MCPs",
    span: "",
  },
  {
    title: "Mac Tools",
    desc: "Homebrew, Bun, Raycast, Warp, TablePlus, and essential Mac tools with install commands.",
    href: "/mac-tools",
    icon: Laptop,
    count: "20+ tools",
    span: "",
  },
];

export function BentoGrid() {
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
            Everything in one place
          </h2>
          <p className="text-secondary text-[15px] max-w-lg">
            Stop switching between dozens of tabs. All the tools and resources
            you need, organized and ready.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={cn(item.span)}
            >
              <Link
                href={item.href}
                className="card-gradient group flex flex-col h-full p-5 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3.5">
                  <div className="w-9 h-9 rounded-[10px] bg-accent/[0.06] border border-accent/10 flex items-center justify-center">
                    <item.icon className="w-[18px] h-[18px] text-accent/70 group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted/0 group-hover:text-secondary transition-all duration-300 translate-y-0.5 group-hover:translate-y-0" />
                </div>
                <h3 className="text-[15px] font-semibold text-fore mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[13px] text-secondary leading-relaxed mb-auto pb-3">
                  {item.desc}
                </p>
                <span className="text-[12px] text-muted font-medium">{item.count}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
