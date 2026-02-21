"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { roadmaps, phaseLabels, type Roadmap } from "@/data/roadmaps";

const phaseDot: Record<string, string> = {
  foundation: "bg-accent",
  core: "bg-fore",
  enhance: "bg-secondary",
  quality: "bg-muted",
  ship: "bg-accent",
};

function RoadmapSection({ roadmap, index }: { roadmap: Roadmap; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="mb-16 last:mb-0"
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold text-fore mb-1">{roadmap.title}</h2>
        <p className="text-sm text-secondary">{roadmap.description}</p>
      </div>

      <div className="space-y-2">
        {roadmap.steps.map((step, i) => (
          <div
            key={step.title}
            className="card-gradient group flex gap-4 p-4"
          >
            <div className="flex-shrink-0 w-7 h-7 rounded-md bg-raised flex items-center justify-center">
              <span className="text-[11px] font-bold text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-sm font-semibold text-fore">{step.title}</h3>
                <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-muted">
                  <span className={cn("w-1.5 h-1.5 rounded-full", phaseDot[step.phase])} />
                  {phaseLabels[step.phase]}
                </span>
              </div>
              <p className="text-sm text-secondary leading-relaxed mb-2">{step.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {step.tools.map((tool) => (
                  <span key={tool} className="text-xs text-muted px-2 py-0.5 rounded bg-raised border border-edge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function RoadmapsPage() {
  return (
    <>
      <PageHeader
        title="Roadmaps"
        description="Clear paths from zero to production. Each roadmap is designed to get you shipping real apps as quickly as possible."
      />
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {roadmaps.map((r) => (
            <a
              key={r.id}
              href={`#${r.id}`}
              className="px-3 py-1.5 text-xs font-medium text-secondary border border-edge rounded-md hover:text-fore hover:border-edge-hover transition-colors"
            >
              {r.title}
            </a>
          ))}
        </div>
        {roadmaps.map((r, i) => (
          <div key={r.id} id={r.id}>
            <RoadmapSection roadmap={r} index={i} />
          </div>
        ))}
      </section>
    </>
  );
}
