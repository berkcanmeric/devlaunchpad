"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { macTools, macToolCategories } from "@/data/mac-tools";

function InstallCmd({ cmd }: { cmd: string }) {
  const [copied, setCopied] = useState(false);
  if (cmd.startsWith("Available")) return <span className="text-xs text-muted italic">{cmd}</span>;
  const copy = () => { navigator.clipboard.writeText(cmd); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={copy} className="group/c flex items-center gap-2 w-full text-left">
      <code className="flex-1 text-xs text-secondary bg-raised px-3 py-2 rounded-lg border border-edge font-mono truncate">{cmd}</code>
      <span className="flex-shrink-0 text-muted group-hover/c:text-accent transition-colors">
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      </span>
    </button>
  );
}

export default function MacToolsPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = macTools.filter((t) => {
    const matchCat = cat === "All" || t.category === cat;
    const matchQ = q === "" || t.name.toLowerCase().includes(q.toLowerCase()) || t.description.toLowerCase().includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <PageHeader
        title="Mac Developer Tools"
        description="The essential toolkit for developer productivity on macOS."
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
            <button onClick={() => setCat("All")} className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors", cat === "All" ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary")}>
              All
            </button>
            {macToolCategories.map((c) => {
              if (macTools.filter((t) => t.category === c).length === 0) return null;
              return (
                <button key={c} onClick={() => setCat(c)} className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors", cat === c ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary")}>
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((tool) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="card-gradient group p-5"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-fore flex items-center gap-2">
                      {tool.name}
                      {!tool.free && (
                        <span className="text-[10px] font-medium uppercase tracking-wider text-muted px-1.5 py-0.5 rounded bg-raised border border-edge">Paid</span>
                      )}
                    </h3>
                    <span className="text-xs text-muted">{tool.category}</span>
                  </div>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fore opacity-0 group-hover:opacity-100 transition-all">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-sm text-secondary leading-relaxed mb-3">{tool.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tool.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs text-muted px-2 py-0.5 rounded bg-raised border border-edge">{f}</span>
                  ))}
                </div>
                <InstallCmd cmd={tool.install} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && <p className="text-sm text-muted text-center py-12">No results found.</p>}
      </section>
    </>
  );
}
