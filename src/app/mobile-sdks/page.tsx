"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { mobileSdks, mobileSdkCategories } from "@/data/mobile-sdks";

export default function MobileSdksPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = mobileSdks.filter((sdk) => {
    const matchCat = cat === "All" || sdk.category === cat;
    const matchQ = q === "" || sdk.name.toLowerCase().includes(q.toLowerCase()) || sdk.description.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <PageHeader
        title="Mobile SDKs"
        description="Essential SDKs for building production-ready iOS and Android apps."
      />
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="relative flex-shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full sm:w-56 pl-9 pr-3 py-2 text-sm bg-card border border-edge rounded-lg text-fore placeholder:text-muted focus:outline-none focus:border-edge-hover"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setCat("All")}
              className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors",
                cat === "All" ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary"
              )}
            >
              All
            </button>
            {mobileSdkCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors",
                  cat === c ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((sdk) => (
              <motion.a
                key={sdk.name}
                href={sdk.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="card-gradient group p-5"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-semibold text-fore">{sdk.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted">{sdk.category}</span>
                  <span className="text-muted text-xs">·</span>
                  {sdk.platforms.map((p) => (
                    <span key={p} className="text-[10px] uppercase tracking-wider text-muted font-medium">
                      {p === "cross-platform" ? "Cross" : p}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-secondary leading-relaxed mb-3">{sdk.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {sdk.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs text-muted px-2 py-0.5 rounded bg-raised border border-edge">{f}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && <p className="text-sm text-muted text-center py-12">No results found.</p>}
      </section>
    </>
  );
}
