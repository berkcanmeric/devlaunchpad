"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { aiTools, aiAgents } from "@/data/ai-tools";

const tierLabel: Record<string, string> = {
  essential: "Essential",
  recommended: "Recommended",
  "nice-to-have": "Optional",
};

export default function AiToolsPage() {
  return (
    <>
      <PageHeader
        title="AI Tools & Agents"
        description="The AI-powered tools and autonomous agents that turn a solo developer into a full engineering team."
      />

      <section className="mx-auto max-w-6xl px-5 py-12">
        {/* Tools */}
        <h2 className="text-lg font-bold text-fore mb-4">Development Tools</h2>
        <div className="grid md:grid-cols-2 gap-3 mb-16">
          {aiTools.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="group p-5 rounded-xl border border-edge bg-card hover:bg-card-hover hover:border-edge-hover transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{tool.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-fore">{tool.name}</h3>
                    <p className="text-xs text-muted">{tool.category}</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted px-2 py-0.5 rounded bg-raised border border-edge">
                  {tierLabel[tool.tier]}
                </span>
              </div>
              <p className="text-sm text-secondary leading-relaxed mb-3">{tool.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tool.features.slice(0, 4).map((f) => (
                  <span key={f} className="text-xs text-muted px-2 py-0.5 rounded bg-raised border border-edge">
                    {f}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Agents */}
        <h2 className="text-lg font-bold text-fore mb-2">AI Agents</h2>
        <p className="text-sm text-secondary mb-6">
          Configure as Claude Code skills or use the prompts directly.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {aiAgents.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="p-5 rounded-xl border border-edge bg-card"
            >
              <h3 className="text-sm font-semibold text-fore mb-1">{agent.name}</h3>
              <p className="text-xs text-muted mb-2">{agent.role}</p>
              <p className="text-sm text-secondary leading-relaxed mb-3">{agent.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {agent.skills.slice(0, 3).map((s) => (
                  <span key={s} className="text-xs text-muted px-2 py-0.5 rounded bg-raised border border-edge">
                    {s}
                  </span>
                ))}
              </div>
              <details>
                <summary className="text-xs font-medium text-accent cursor-pointer flex items-center gap-1 hover:text-accent-hover">
                  View prompt <ArrowRight className="w-3 h-3" />
                </summary>
                <pre className="mt-2 text-xs text-secondary bg-raised p-3 rounded-lg border border-edge overflow-x-auto whitespace-pre-wrap">
                  {agent.promptSnippet}
                </pre>
              </details>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
