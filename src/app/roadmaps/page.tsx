"use client";

import { motion } from "framer-motion";
import { Map, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { roadmaps, phaseLabels, type Roadmap } from "@/data/roadmaps";

const phaseColors: Record<string, string> = {
  foundation: "bg-neon/10 text-neon border-neon/20",
  core: "bg-violet/10 text-violet border-violet/20",
  enhance: "bg-gold/10 text-gold border-gold/20",
  quality: "bg-mint/10 text-mint border-mint/20",
  ship: "bg-coral/10 text-coral border-coral/20",
};

const roadmapAccent: Record<string, string> = {
  neon: "border-neon/20",
  coral: "border-coral/20",
  violet: "border-violet/20",
  gold: "border-gold/20",
  mint: "border-mint/20",
};

const roadmapGlow: Record<string, string> = {
  neon: "from-neon/10",
  coral: "from-coral/10",
  violet: "from-violet/10",
  gold: "from-gold/10",
  mint: "from-mint/10",
};

function RoadmapCard({ roadmap, index }: { roadmap: Roadmap; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20 last:mb-0"
    >
      {/* Roadmap header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className={cn("w-1 h-8 rounded-full bg-gradient-to-b", roadmapGlow[roadmap.color])} />
          <div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-fore">
              {roadmap.title}
            </h2>
            <p className="text-sm text-fore-muted">{roadmap.subtitle}</p>
          </div>
        </div>
        <p className="text-fore-dim leading-relaxed max-w-3xl pl-5 ml-[2px] border-l border-edge">
          {roadmap.description}
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {roadmap.steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className={cn(
              "group relative rounded-xl border border-edge bg-surface-card p-5 transition-all duration-300 hover:border-edge-strong hover:bg-surface-hover"
            )}
          >
            <div className="flex items-start gap-4">
              {/* Step number */}
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] border border-edge flex items-center justify-center">
                <span className="text-xs font-bold text-fore-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>

              <div className="flex-1 min-w-0">
                {/* Title + phase badge */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-display font-semibold text-fore text-base">
                    {step.title}
                  </h3>
                  <span
                    className={cn(
                      "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border",
                      phaseColors[step.phase]
                    )}
                  >
                    {phaseLabels[step.phase]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-fore-dim leading-relaxed mb-3">
                  {step.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function RoadmapsPage() {
  return (
    <>
      <PageHeader
        icon={
          <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center">
            <Map className="w-6 h-6 text-neon" />
          </div>
        }
        title="Development Roadmaps"
        description="Clear, opinionated paths from zero to production. Each roadmap is designed to get you shipping real apps as quickly as possible."
        gradient="neon"
      />

      <section className="mx-auto max-w-4xl px-6 pb-24">
        {/* Roadmap selector pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {roadmaps.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="px-4 py-2 text-sm font-medium text-fore-dim rounded-lg border border-edge hover:border-edge-glow hover:text-fore transition-all"
            >
              {r.title}
            </a>
          ))}
        </div>

        {/* Roadmaps */}
        {roadmaps.map((roadmap, i) => (
          <div key={roadmap.id} id={roadmap.id}>
            <RoadmapCard roadmap={roadmap} index={i} />
          </div>
        ))}
      </section>
    </>
  );
}
