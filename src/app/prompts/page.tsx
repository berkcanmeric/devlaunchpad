"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Copy, Check, Terminal, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { prompts, claudeSkills, promptCategories, type Prompt } from "@/data/prompts";

const colorMap: Record<string, { glow: string; accent: string }> = {
  neon: { glow: "hover:border-neon/20", accent: "text-neon" },
  coral: { glow: "hover:border-coral/20", accent: "text-coral" },
  violet: { glow: "hover:border-violet/20", accent: "text-violet" },
  gold: { glow: "hover:border-gold/20", accent: "text-gold" },
  mint: { glow: "hover:border-mint/20", accent: "text-mint" },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-fore-dim rounded-lg border border-edge hover:border-edge-glow hover:text-neon transition-all"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" />
          Copy prompt
        </>
      )}
    </button>
  );
}

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = prompts.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <>
      <PageHeader
        icon={
          <div className="w-12 h-12 rounded-xl bg-mint/10 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-mint" />
          </div>
        }
        title="Prompts & Claude Skills"
        description="Battle-tested prompts for every stage of development. Copy, paste, and customize for your specific needs."
        gradient="fresh"
      />

      <section className="mx-auto max-w-5xl px-6 pb-24">
        {/* ── CLAUDE SKILLS ─────────────── */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl md:text-3xl gradient-text-fresh mb-3"
          >
            Claude Code Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-fore-dim mb-8"
          >
            Built-in slash commands and features in Claude Code for rapid development.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            {claudeSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-edge bg-surface-card p-5 hover:border-edge-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-mint/10 flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-mint" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-fore text-sm">
                      {skill.name}
                    </h3>
                    <code className="text-xs text-neon">{skill.command}</code>
                  </div>
                </div>
                <p className="text-sm text-fore-dim leading-relaxed mb-2">
                  {skill.description}
                </p>
                <p className="text-xs text-fore-muted italic">{skill.example}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── PROMPTS ───────────────────── */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl md:text-3xl gradient-text-neon mb-3"
          >
            Development Prompts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-fore-dim mb-8"
          >
            Carefully crafted prompts that produce consistent, high-quality results.
          </motion.p>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory("All")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                activeCategory === "All"
                  ? "bg-neon/10 text-neon border-neon/20"
                  : "text-fore-muted border-edge hover:text-fore"
              )}
            >
              All
            </button>
            {promptCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                  activeCategory === cat
                    ? "bg-neon/10 text-neon border-neon/20"
                    : "text-fore-muted border-edge hover:text-fore"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Prompt cards */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((prompt, i) => {
                const colors = colorMap[prompt.color];
                return (
                  <motion.div
                    key={prompt.title}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={cn(
                      "rounded-2xl border border-edge bg-surface-card p-6 transition-all duration-300",
                      colors.glow
                    )}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-display font-bold text-lg text-fore">
                            {prompt.title}
                          </h3>
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-edge text-fore-muted">
                            {prompt.category}
                          </span>
                        </div>
                        <p className="text-sm text-fore-dim">{prompt.description}</p>
                      </div>
                      <CopyButton text={prompt.prompt} />
                    </div>

                    {/* Prompt content */}
                    <pre className="text-xs text-fore-dim leading-relaxed bg-surface p-4 rounded-xl border border-edge overflow-x-auto whitespace-pre-wrap font-mono max-h-64 overflow-y-auto">
                      {prompt.prompt}
                    </pre>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {prompt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
