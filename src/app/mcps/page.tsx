"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plug, ExternalLink, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { mcps, mcpCategories, type Mcp } from "@/data/mcps";

const colorMap: Record<string, { icon: string; glow: string }> = {
  neon: { icon: "bg-neon/10 text-neon", glow: "hover:border-neon/20 hover:shadow-[0_0_24px_rgba(0,229,255,0.06)]" },
  coral: { icon: "bg-coral/10 text-coral", glow: "hover:border-coral/20 hover:shadow-[0_0_24px_rgba(255,61,113,0.06)]" },
  violet: { icon: "bg-violet/10 text-violet", glow: "hover:border-violet/20 hover:shadow-[0_0_24px_rgba(124,58,237,0.06)]" },
  gold: { icon: "bg-gold/10 text-gold", glow: "hover:border-gold/20 hover:shadow-[0_0_24px_rgba(245,158,11,0.06)]" },
  mint: { icon: "bg-mint/10 text-mint", glow: "hover:border-mint/20 hover:shadow-[0_0_24px_rgba(16,185,129,0.06)]" },
};

function ConfigCopy({ snippet }: { snippet: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-widest text-fore-muted font-semibold">
          MCP Config
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1 text-xs text-fore-muted hover:text-neon transition-colors"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="text-xs text-fore-dim leading-relaxed bg-surface p-3 rounded-lg border border-edge overflow-x-auto whitespace-pre-wrap font-mono">
        {snippet}
      </pre>
    </div>
  );
}

export default function McpsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = mcps.filter(
    (m) => activeCategory === "All" || m.category === activeCategory
  );

  return (
    <>
      <PageHeader
        icon={
          <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center">
            <Plug className="w-6 h-6 text-neon" />
          </div>
        }
        title="Claude Code MCPs"
        description="Model Context Protocol servers that supercharge Claude Code. Connect to GitHub, Sentry, Vercel, databases, and more."
        gradient="neon"
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {/* Setup guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-edge bg-surface-card p-6 mb-10"
        >
          <h3 className="font-display font-bold text-lg text-fore mb-2">
            Quick Setup
          </h3>
          <p className="text-sm text-fore-dim mb-4">
            Add MCP servers to your <code className="text-neon text-xs">~/.claude/settings.json</code> under the <code className="text-neon text-xs">&quot;mcpServers&quot;</code> key:
          </p>
          <pre className="text-xs text-fore-dim bg-surface p-4 rounded-xl border border-edge overflow-x-auto font-mono">
{`{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@package/mcp-server"],
      "env": { "API_KEY": "your-key" }
    }
  }
}`}
          </pre>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
              activeCategory === "All"
                ? "bg-neon/10 text-neon border-neon/20"
                : "text-fore-muted border-edge hover:text-fore"
            )}
          >
            All ({mcps.length})
          </button>
          {mcpCategories.map((cat) => {
            const count = mcps.filter((m) => m.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all",
                  activeCategory === cat
                    ? "bg-neon/10 text-neon border-neon/20"
                    : "text-fore-muted border-edge hover:text-fore"
                )}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* MCP grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((mcp, i) => {
            const colors = colorMap[mcp.color];
            return (
              <motion.div
                key={mcp.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={cn(
                  "group rounded-2xl border border-edge bg-surface-card p-6 transition-all duration-300",
                  colors.glow
                )}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center", colors.icon)}>
                      <Plug className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-fore">
                        {mcp.name}
                      </h3>
                      <span className="text-xs text-fore-muted">{mcp.category}</span>
                    </div>
                  </div>
                  <a
                    href={mcp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fore-muted hover:text-fore transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-sm text-fore-dim leading-relaxed mb-4">
                  {mcp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {mcp.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs text-fore-muted px-2 py-0.5 rounded-md bg-white/[0.03] border border-edge"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <ConfigCopy snippet={mcp.configSnippet} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
