"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { prompts, claudeSkills, promptCategories } from "@/data/prompts";

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={copy} className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-muted border border-edge rounded-md hover:text-accent hover:border-edge-hover transition-colors">
      {copied ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
    </button>
  );
}

export default function PromptsPage() {
  const [cat, setCat] = useState("All");
  const filtered = prompts.filter((p) => cat === "All" || p.category === cat);

  return (
    <>
      <PageHeader
        title="Prompts & Skills"
        description="Battle-tested prompts for every stage of development. Copy, customize, and ship."
      />
      <section className="mx-auto max-w-4xl px-5 py-12">
        {/* Claude Skills */}
        <h2 className="text-lg font-bold text-fore mb-4">Claude Code Skills</h2>
        <div className="grid md:grid-cols-2 gap-3 mb-14">
          {claudeSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-4 rounded-xl border border-edge bg-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-muted" />
                <span className="text-sm font-semibold text-fore">{skill.name}</span>
                <code className="text-xs text-accent">{skill.command}</code>
              </div>
              <p className="text-sm text-secondary mb-1">{skill.description}</p>
              <p className="text-xs text-muted italic">{skill.example}</p>
            </motion.div>
          ))}
        </div>

        {/* Prompts */}
        <h2 className="text-lg font-bold text-fore mb-4">Development Prompts</h2>
        <div className="flex flex-wrap gap-1.5 mb-6">
          <button onClick={() => setCat("All")} className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors", cat === "All" ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary")}>
            All
          </button>
          {promptCategories.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors", cat === c ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary")}>
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((prompt) => (
              <motion.div
                key={prompt.title}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-edge bg-card p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-fore mb-1">{prompt.title}</h3>
                    <p className="text-sm text-secondary">{prompt.description}</p>
                  </div>
                  <CopyBtn text={prompt.prompt} />
                </div>
                <pre className="text-xs text-secondary bg-raised p-4 rounded-lg border border-edge overflow-x-auto whitespace-pre-wrap font-mono max-h-48 overflow-y-auto leading-relaxed">
                  {prompt.prompt}
                </pre>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
