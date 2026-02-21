"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Map,
  Bot,
  Library,
  Smartphone,
  MessageSquare,
  Plug,
  Laptop,
  Menu,
  X,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Roadmaps", href: "/roadmaps", icon: Map },
  { label: "AI Tools", href: "/ai-tools", icon: Bot },
  { label: "Libraries", href: "/libraries", icon: Library },
  { label: "Mobile SDKs", href: "/mobile-sdks", icon: Smartphone },
  { label: "Prompts", href: "/prompts", icon: MessageSquare },
  { label: "MCPs", href: "/mcps", icon: Plug },
  { label: "Mac Tools", href: "/mac-tools", icon: Laptop },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong shadow-[0_1px_0_rgba(0,229,255,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-neon via-violet to-coral flex items-center justify-center overflow-hidden">
            <Rocket className="w-4 h-4 text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-rotate-12" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Dev<span className="text-neon">Launchpad</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-[13px] font-medium text-fore-dim hover:text-fore transition-colors duration-200 rounded-lg hover:bg-white/[0.04] group"
            >
              {item.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-neon group-hover:w-4 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/berkcanmeric/devlaunchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-surface bg-neon rounded-lg hover:bg-neon/85 transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,229,255,0.25)]"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-fore-dim hover:text-fore transition-colors rounded-lg hover:bg-white/[0.04]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden glass-strong border-t border-edge"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-3 text-sm text-fore-dim hover:text-fore rounded-lg hover:bg-white/[0.04] transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-fore-muted" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 border-t border-edge">
                <a
                  href="https://github.com/berkcanmeric/devlaunchpad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-surface bg-neon rounded-lg"
                >
                  <Github className="w-3.5 h-3.5" />
                  Star on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
