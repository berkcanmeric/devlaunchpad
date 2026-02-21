"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { mobileSdks, mobileSdkCategories, type MobileSdk } from "@/data/mobile-sdks";

const colorMap: Record<string, { glow: string }> = {
  neon: { glow: "hover:border-neon/20 hover:shadow-[0_0_24px_rgba(0,229,255,0.06)]" },
  coral: { glow: "hover:border-coral/20 hover:shadow-[0_0_24px_rgba(255,61,113,0.06)]" },
  violet: { glow: "hover:border-violet/20 hover:shadow-[0_0_24px_rgba(124,58,237,0.06)]" },
  gold: { glow: "hover:border-gold/20 hover:shadow-[0_0_24px_rgba(245,158,11,0.06)]" },
  mint: { glow: "hover:border-mint/20 hover:shadow-[0_0_24px_rgba(16,185,129,0.06)]" },
};

const platformBadge: Record<string, string> = {
  ios: "bg-fore/10 text-fore",
  android: "bg-mint/10 text-mint",
  "cross-platform": "bg-violet/10 text-violet",
};

export default function MobileSdksPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = mobileSdks.filter((sdk) => {
    const matchCat = activeCategory === "All" || sdk.category === activeCategory;
    const matchSearch =
      search === "" ||
      sdk.name.toLowerCase().includes(search.toLowerCase()) ||
      sdk.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <PageHeader
        icon={
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-gold" />
          </div>
        }
        title="Mobile SDKs"
        description="Essential SDKs for building production-ready iOS and Android apps. Monetization, analytics, notifications, and more."
        gradient="warm"
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {/* Search + filters */}
        <div className="mb-8">
          <div className="relative mb-4 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fore-muted" />
            <input
              type="text"
              placeholder="Search SDKs..."
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
                  ? "bg-gold/10 text-gold border-gold/20"
                  : "text-fore-muted border-edge hover:border-edge-strong hover:text-fore"
              )}
            >
              All
            </button>
            {mobileSdkCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                  activeCategory === cat
                    ? "bg-gold/10 text-gold border-gold/20"
                    : "text-fore-muted border-edge hover:border-edge-strong hover:text-fore"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((sdk, i) => (
              <motion.a
                key={sdk.name}
                href={sdk.url}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className={cn(
                  "group rounded-2xl border border-edge bg-surface-card p-5 transition-all duration-300 card-lift",
                  colorMap[sdk.color].glow
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-base text-fore">
                    {sdk.name}
                  </h3>
                  <ExternalLink className="w-3.5 h-3.5 text-fore-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-fore-muted font-medium uppercase tracking-wider">
                    {sdk.category}
                  </span>
                  <span className="text-fore-muted">·</span>
                  <div className="flex gap-1">
                    {sdk.platforms.map((p) => (
                      <span
                        key={p}
                        className={cn(
                          "text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded",
                          platformBadge[p]
                        )}
                      >
                        {p === "cross-platform" ? "Cross" : p}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-fore-dim leading-relaxed mb-4">
                  {sdk.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {sdk.features.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                    >
                      {f}
                    </span>
                  ))}
                  {sdk.features.length > 4 && (
                    <span className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge">
                      +{sdk.features.length - 4}
                    </span>
                  )}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-fore-muted">No SDKs found matching your search.</p>
          </div>
        )}
      </section>
    </>
  );
}
