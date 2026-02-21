"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { mcps, mcpCategories } from "@/data/mcps";

function ConfigCopy({ snippet }: { snippet: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(snippet); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] uppercase tracking-wider text-muted font-medium">Config</span>
        <button onClick={copy} className="flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors">
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="text-xs text-secondary bg-raised p-3 rounded-lg border border-edge overflow-x-auto whitespace-pre-wrap font-mono">
        {snippet}
      </pre>
    </div>
  );
}

export default function McpsPage() {
  const [cat, setCat] = useState("All");
  const filtered = mcps.filter((m) => cat === "All" || m.category === cat);

  return (
    <>
      <PageHeader
        title="Claude Code MCPs"
        description="Model Context Protocol servers that supercharge Claude Code with external integrations."
      />
      <section className="mx-auto max-w-6xl px-5 py-12">
        {/* Setup */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 card-gradient mb-8"
        >
          <h3 className="text-sm font-semibold text-fore mb-2">Quick Setup</h3>
          <p className="text-sm text-secondary mb-3">
            Add to <code className="text-accent text-xs">~/.claude/settings.json</code> under <code className="text-accent text-xs">&quot;mcpServers&quot;</code>:
          </p>
          <pre className="text-xs text-secondary bg-raised p-3 rounded-lg border border-edge font-mono overflow-x-auto">
{`{
  "mcpServers": {
    "name": {
      "command": "npx",
      "args": ["-y", "@package/mcp-server"],
      "env": { "API_KEY": "your-key" }
    }
  }
}`}
          </pre>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          <button onClick={() => setCat("All")} className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors", cat === "All" ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary")}>
            All
          </button>
          {mcpCategories.map((c) => {
            if (mcps.filter((m) => m.category === c).length === 0) return null;
            return (
              <button key={c} onClick={() => setCat(c)} className={cn("px-2.5 py-1 text-xs font-medium rounded-md border transition-colors", cat === c ? "bg-accent-dim text-accent border-accent/20" : "text-muted border-edge hover:text-secondary")}>
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {filtered.map((mcp, i) => (
            <motion.div
              key={mcp.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="p-5 card-gradient"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-sm font-semibold text-fore">{mcp.name}</h3>
                  <span className="text-xs text-muted">{mcp.category}</span>
                </div>
                <a href={mcp.url} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fore transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-secondary leading-relaxed mb-3">{mcp.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {mcp.features.slice(0, 4).map((f) => (
                  <span key={f} className="text-xs text-muted px-2 py-0.5 rounded bg-raised border border-edge">{f}</span>
                ))}
              </div>
              <ConfigCopy snippet={mcp.configSnippet} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
