"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Library, ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { libraries, libraryCategories, type Library as LibraryType } from "@/data/libraries";

const colorMap: Record<string, { icon: string; glow: string }> = {
  neon: { icon: "bg-neon/10 text-neon", glow: "hover:border-neon/20 hover:shadow-[0_0_24px_rgba(0,229,255,0.06)]" },
  coral: { icon: "bg-coral/10 text-coral", glow: "hover:border-coral/20 hover:shadow-[0_0_24px_rgba(255,61,113,0.06)]" },
  violet: { icon: "bg-violet/10 text-violet", glow: "hover:border-violet/20 hover:shadow-[0_0_24px_rgba(124,58,237,0.06)]" },
  gold: { icon: "bg-gold/10 text-gold", glow: "hover:border-gold/20 hover:shadow-[0_0_24px_rgba(245,158,11,0.06)]" },
  mint: { icon: "bg-mint/10 text-mint", glow: "hover:border-mint/20 hover:shadow-[0_0_24px_rgba(16,185,129,0.06)]" },
};

export default function LibrariesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = libraries.filter((lib) => {
    const matchCat = activeCategory === "All" || lib.category === activeCategory;
    const matchSearch =
      search === "" ||
      lib.name.toLowerCase().includes(search.toLowerCase()) ||
      lib.description.toLowerCase().includes(search.toLowerCase()) ||
      lib.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      <PageHeader
        icon={
          <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
            <Library className="w-6 h-6 text-coral" />
          </div>
        }
        title="Web Libraries"
        description="Curated collection of the best libraries for building modern web applications. From UI components to ORMs, everything you need."
        gradient="warm"
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {/* Search + filters */}
        <div className="mb-8">
          <div className="relative mb-4 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fore-muted" />
            <input
              type="text"
              placeholder="Search libraries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-card border border-edge text-sm text-fore placeholder:text-fore-muted focus:outline-none focus:border-edge-glow transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("All")}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                activeCategory === "All"
                  ? "bg-neon/10 text-neon border-neon/20"
                  : "text-fore-muted border-edge hover:border-edge-strong hover:text-fore"
              )}
            >
              All ({libraries.length})
            </button>
            {libraryCategories.map((cat) => {
              const count = libraries.filter((l) => l.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                    activeCategory === cat
                      ? "bg-neon/10 text-neon border-neon/20"
                      : "text-fore-muted border-edge hover:border-edge-strong hover:text-fore"
                  )}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((lib, i) => {
              const colors = colorMap[lib.color];
              return (
                <motion.a
                  key={lib.name}
                  href={lib.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className={cn(
                    "group rounded-2xl border border-edge bg-surface-card p-5 transition-all duration-300 card-lift",
                    colors.glow
                  )}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-base text-fore">
                      {lib.name}
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-fore-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>

                  <p className="text-xs text-fore-muted mb-2 font-medium uppercase tracking-wider">
                    {lib.category}
                  </p>

                  <p className="text-sm text-fore-dim leading-relaxed mb-4">
                    {lib.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {lib.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-fore-muted">No libraries found matching your search.</p>
          </div>
        )}
      </section>
    </>
  );
}
