"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { libraries, libraryCategories } from "@/data/libraries";

export default function LibrariesPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = libraries.filter((lib) => {
    const matchCat = cat === "All" || lib.category === cat;
    const matchQ = q === "" || lib.name.toLowerCase().includes(q.toLowerCase()) || lib.description.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <PageHeader
        title="Web Libraries"
        description="Curated collection of the best libraries for building modern web applications."
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
            {libraryCategories.map((c) => (
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
            {filtered.map((lib) => (
              <motion.a
                key={lib.name}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="group p-5 rounded-xl border border-edge bg-card hover:bg-card-hover hover:border-edge-hover transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-semibold text-fore">{lib.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted mb-2">{lib.category}</p>
                <p className="text-sm text-secondary leading-relaxed mb-3">{lib.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {lib.tags.map((t) => (
                    <span key={t} className="text-xs text-muted px-2 py-0.5 rounded bg-raised border border-edge">{t}</span>
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
