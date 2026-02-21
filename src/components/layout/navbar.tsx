"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Roadmaps", href: "/roadmaps" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Libraries", href: "/libraries" },
  { label: "Mobile SDKs", href: "/mobile-sdks" },
  { label: "Prompts", href: "/prompts" },
  { label: "MCPs", href: "/mcps" },
  { label: "Mac Tools", href: "/mac-tools" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/80 backdrop-blur-2xl border-b border-edge/60"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-tight text-fore">
          DevLaunchpad
        </Link>

        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative px-3 py-1.5 text-[13px] rounded-md transition-colors duration-200",
                  active
                    ? "text-fore font-medium"
                    : "text-secondary hover:text-fore"
                )}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/[0.05] rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/berkcanmeric/devlaunchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 text-[13px] font-medium text-muted hover:text-fore transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-1.5 text-secondary hover:text-fore"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-surface/95 backdrop-blur-2xl border-b border-edge"
          >
            <div className="px-5 py-3 space-y-0.5">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 text-sm rounded-md transition-colors",
                      active ? "text-fore bg-white/[0.04]" : "text-secondary hover:text-fore"
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
