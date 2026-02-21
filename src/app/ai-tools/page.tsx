"use client";

import { motion } from "framer-motion";
import { Bot, ExternalLink, ArrowRight, Zap, Shield, Cpu, FileText, Bug, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { aiTools, aiAgents, type AiTool, type AiAgent } from "@/data/ai-tools";

const tierBadge: Record<string, string> = {
  essential: "bg-neon/10 text-neon border-neon/20",
  recommended: "bg-violet/10 text-violet border-violet/20",
  "nice-to-have": "bg-fore-muted/10 text-fore-muted border-fore-muted/20",
};

const agentIcons: Record<string, React.ElementType> = {
  "Release Manager": Rocket,
  "QA Tester": Bug,
  "Senior Developer": Cpu,
  "DevOps Engineer": Zap,
  "Technical Writer": FileText,
  "Security Auditor": Shield,
};

const agentGlow: Record<string, string> = {
  neon: "hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] hover:border-neon/20",
  coral: "hover:shadow-[0_0_30px_rgba(255,61,113,0.08)] hover:border-coral/20",
  violet: "hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] hover:border-violet/20",
  gold: "hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] hover:border-gold/20",
  mint: "hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] hover:border-mint/20",
};

const agentIconBg: Record<string, string> = {
  neon: "bg-neon/10 text-neon",
  coral: "bg-coral/10 text-coral",
  violet: "bg-violet/10 text-violet",
  gold: "bg-gold/10 text-gold",
  mint: "bg-mint/10 text-mint",
};

export default function AiToolsPage() {
  return (
    <>
      <PageHeader
        icon={
          <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center">
            <Bot className="w-6 h-6 text-violet" />
          </div>
        }
        title="AI Tools & Agents"
        description="The AI-powered tools and autonomous agents that turn a solo developer into a full engineering team."
        gradient="neon"
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {/* ── AI TOOLS ──────────────────── */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl md:text-3xl gradient-text-neon mb-8"
          >
            AI Development Tools
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {aiTools.map((tool, i) => (
              <motion.a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="group relative rounded-2xl border border-edge bg-surface-card p-6 transition-all duration-300 card-lift hover:border-edge-strong overflow-hidden"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-fore">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-fore-muted">{tool.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                        tierBadge[tool.tier]
                      )}
                    >
                      {tool.tier}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-fore-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <p className="text-sm text-fore-dim leading-relaxed mb-4">
                  {tool.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {tool.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* ── AI AGENTS ─────────────────── */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl md:text-3xl gradient-text-warm mb-3"
          >
            AI Agents for Faster Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-fore-dim mb-8 max-w-2xl"
          >
            Configure these agents as Claude Code skills or use the prompts directly. Each agent specializes in a development role.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiAgents.map((agent, i) => {
              const Icon = agentIcons[agent.name] || Cpu;
              return (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={cn(
                    "group rounded-2xl border border-edge bg-surface-card p-6 transition-all duration-300 card-lift",
                    agentGlow[agent.color]
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                      agentIconBg[agent.color]
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-fore mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-fore-muted mb-3">{agent.role}</p>
                  <p className="text-sm text-fore-dim leading-relaxed mb-4">
                    {agent.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {agent.skills.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Prompt snippet */}
                  <details className="group/details">
                    <summary className="text-xs font-medium text-neon cursor-pointer flex items-center gap-1 hover:text-neon/80 transition-colors">
                      View prompt
                      <ArrowRight className="w-3 h-3 group-open/details:rotate-90 transition-transform" />
                    </summary>
                    <pre className="mt-3 text-xs text-fore-dim leading-relaxed bg-surface p-3 rounded-lg border border-edge overflow-x-auto whitespace-pre-wrap">
                      {agent.promptSnippet}
                    </pre>
                  </details>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
