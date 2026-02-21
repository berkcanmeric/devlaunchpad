"use client";

import { motion } from "framer-motion";
import { Rocket, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-neon/[0.04] blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-violet/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Icon */}
          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-neon/20 via-violet/10 to-transparent border border-edge flex items-center justify-center mb-8">
            <Rocket className="w-6 h-6 text-neon" />
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-fore mb-5">
            Ready to{" "}
            <span className="gradient-text-neon">launch</span>?
          </h2>

          <p className="text-lg text-fore-dim max-w-xl mx-auto mb-10 leading-relaxed">
            Stop searching across dozens of tabs. Everything you need to build
            and ship your next app is right here. Start building today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/roadmaps"
              className="group flex items-center gap-2.5 px-7 py-3.5 bg-neon text-surface font-semibold rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)] hover:bg-neon/90"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://github.com/berkcanmeric/devlaunchpad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-edge hover:border-edge-glow text-fore-dim hover:text-fore font-medium transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
