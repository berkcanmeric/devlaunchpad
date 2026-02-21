"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 border-t border-edge">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Ready to ship?
          </h2>
          <p className="text-secondary text-sm md:text-base max-w-md mx-auto mb-8">
            Everything you need to build your next app is here. Pick a roadmap, grab your tools, and start building.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/roadmaps"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-fore text-surface rounded-lg hover:bg-fore/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://github.com/berkcanmeric/devlaunchpad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-secondary border border-edge rounded-lg hover:text-fore hover:border-edge-hover transition-colors"
            >
              Star on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
