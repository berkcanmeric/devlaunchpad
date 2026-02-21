"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, ExternalLink, Search, Copy, Check, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { macTools, macToolCategories, type MacTool } from "@/data/mac-tools";

const colorMap: Record<string, { glow: string }> = {
  neon: { glow: "hover:border-neon/20 hover:shadow-[0_0_24px_rgba(0,229,255,0.06)]" },
  coral: { glow: "hover:border-coral/20 hover:shadow-[0_0_24px_rgba(255,61,113,0.06)]" },
  violet: { glow: "hover:border-violet/20 hover:shadow-[0_0_24px_rgba(124,58,237,0.06)]" },
  gold: { glow: "hover:border-gold/20 hover:shadow-[0_0_24px_rgba(245,158,11,0.06)]" },
  mint: { glow: "hover:border-mint/20 hover:shadow-[0_0_24px_rgba(16,185,129,0.06)]" },
};

function InstallCopy({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  if (command.startsWith("Available")) {
    return <span className="text-xs text-fore-muted italic">{command}</span>;
  }

  const copy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="group/copy flex items-center gap-2 w-full text-left"
    >
      <code className="flex-1 text-xs text-fore-dim bg-surface px-3 py-2 rounded-lg border border-edge font-mono truncate">
        {command}
      </code>
      <span className="flex-shrink-0 text-fore-muted group-hover/copy:text-neon transition-colors">
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      </span>
    </button>
  );
}

export default function MacToolsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = macTools.filter((tool) => {
    const matchCat = activeCategory === "All" || tool.category === activeCategory;
    const matchSearch =
      search === "" ||
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <PageHeader
        icon={
          <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center">
            <Laptop className="w-6 h-6 text-violet" />
          </div>
        }
        title="Mac Developer Tools"
        description="The essential toolkit for developer productivity on macOS. Package managers, terminals, editors, Git clients, and more."
        gradient="neon"
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {/* Search + filters */}
        <div className="mb-8">
          <div className="relative mb-4 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fore-muted" />
            <input
              type="text"
              placeholder="Search tools..."
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
                  ? "bg-violet/10 text-violet border-violet/20"
                  : "text-fore-muted border-edge hover:text-fore"
              )}
            >
              All ({macTools.length})
            </button>
            {macToolCategories.map((cat) => {
              const count = macTools.filter((t) => t.category === cat).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                    activeCategory === cat
                      ? "bg-violet/10 text-violet border-violet/20"
                      : "text-fore-muted border-edge hover:text-fore"
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
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className={cn(
                  "group rounded-2xl border border-edge bg-surface-card p-5 transition-all duration-300 card-lift",
                  colorMap[tool.color].glow
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-bold text-base text-fore flex items-center gap-2">
                      {tool.name}
                      {!tool.free && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-gold/10 text-gold border border-gold/20">
                          Paid
                        </span>
                      )}
                    </h3>
                    <span className="text-xs text-fore-muted">{tool.category}</span>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fore-muted hover:text-fore transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-fore-dim leading-relaxed mb-4">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.features.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Install command */}
                <InstallCopy command={tool.install} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-fore-muted">No tools found matching your search.</p>
          </div>
        )}
      </section>
    </>
  );
}
