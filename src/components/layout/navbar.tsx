"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled ? "bg-surface/80 backdrop-blur-xl border-b border-edge" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-5 h-14 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-tight text-fore">
          DevLaunchpad
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-[13px] text-secondary hover:text-fore transition-colors rounded-md"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/berkcanmeric/devlaunchpad"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 text-[13px] font-medium text-secondary hover:text-fore transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
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
            className="lg:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-b border-edge"
          >
            <div className="px-5 py-3 space-y-0.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-secondary hover:text-fore rounded-md"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
