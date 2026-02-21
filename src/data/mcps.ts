export interface Mcp {
  name: string;
  description: string;
  category: string;
  url: string;
  features: string[];
  color: "neon" | "coral" | "violet" | "gold" | "mint";
  configSnippet: string;
}

export const mcpCategories = [
  "Development",
  "Design",
  "Monitoring",
  "Deployment",
  "Database",
  "Communication",
  "AI & Search",
] as const;

export const mcps: Mcp[] = [
  {
    name: "Next.js DevTools MCP",
    description:
      "Official Next.js MCP for Claude Code. Query running dev servers, inspect routes, check build errors, browse docs, and run browser automation — all from the terminal.",
    category: "Development",
    url: "https://nextjs.org",
    features: [
      "Dev server inspection",
      "Route discovery",
      "Error diagnostics",
      "Docs lookup",
      "Browser automation",
      "Cache components migration",
    ],
    color: "neon",
    configSnippet: `"next-devtools": {
  "command": "npx",
  "args": ["-y", "@anthropic-ai/next-devtools-mcp@latest"]
}`,
  },
  {
    name: "GitHub MCP",
    description:
      "Interact with GitHub directly from Claude Code. Create PRs, review issues, search code, manage releases, and automate workflows.",
    category: "Development",
    url: "https://github.com/modelcontextprotocol/servers",
    features: [
      "PR management",
      "Issue tracking",
      "Code search",
      "Release management",
      "Repository operations",
    ],
    color: "neon",
    configSnippet: `"github": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-github"],
  "env": { "GITHUB_TOKEN": "your-token" }
}`,
  },
  {
    name: "Sentry MCP",
    description:
      "Query Sentry errors and performance data. Search issues, analyze stack traces, view release health, and debug production problems without leaving Claude.",
    category: "Monitoring",
    url: "https://sentry.io",
    features: [
      "Issue search",
      "Error analysis",
      "Stack trace inspection",
      "Release health",
      "Performance data",
    ],
    color: "coral",
    configSnippet: `"sentry": {
  "command": "npx",
  "args": ["-y", "@sentry/mcp-server"],
  "env": { "SENTRY_AUTH_TOKEN": "your-token" }
}`,
  },
  {
    name: "Vercel MCP",
    description:
      "Manage Vercel deployments from Claude. Check build logs, runtime logs, list projects, inspect deployments, and search Vercel documentation.",
    category: "Deployment",
    url: "https://vercel.com",
    features: [
      "Deployment management",
      "Build logs",
      "Runtime logs",
      "Project listing",
      "Domain management",
      "Docs search",
    ],
    color: "neon",
    configSnippet: `"vercel": {
  "command": "npx",
  "args": ["-y", "@vercel/mcp"],
  "env": { "VERCEL_TOKEN": "your-token" }
}`,
  },
  {
    name: "Figma MCP",
    description:
      "Read Figma designs, extract design tokens, get component details, and generate code from Figma files. Bridge the design-to-code gap.",
    category: "Design",
    url: "https://www.figma.com",
    features: [
      "Design reading",
      "Screenshot capture",
      "Code Connect",
      "Design tokens",
      "Component metadata",
    ],
    color: "violet",
    configSnippet: `"figma": {
  "command": "npx",
  "args": ["-y", "figma-developer-mcp", "--figma-api-key=your-key"]
}`,
  },
  {
    name: "Supabase MCP",
    description:
      "Interact with your Supabase project. Run SQL queries, manage tables, inspect schemas, and handle migrations directly from Claude Code.",
    category: "Database",
    url: "https://supabase.com",
    features: [
      "SQL execution",
      "Schema inspection",
      "Table management",
      "Migration handling",
      "RLS policy management",
    ],
    color: "mint",
    configSnippet: `"supabase": {
  "command": "npx",
  "args": ["-y", "@supabase/mcp-server"],
  "env": { "SUPABASE_URL": "...", "SUPABASE_SERVICE_ROLE_KEY": "..." }
}`,
  },
  {
    name: "Ahrefs MCP",
    description:
      "SEO and web analytics from Claude. Check domain ratings, organic keywords, backlinks, site audits, and search volume data.",
    category: "AI & Search",
    url: "https://ahrefs.com",
    features: [
      "Domain analysis",
      "Keyword research",
      "Backlink checking",
      "Site audits",
      "Traffic analysis",
    ],
    color: "gold",
    configSnippet: `"ahrefs": {
  "command": "npx",
  "args": ["-y", "@anthropic-ai/ahrefs-mcp"],
  "env": { "AHREFS_API_KEY": "your-key" }
}`,
  },
  {
    name: "Filesystem MCP",
    description:
      "Extended filesystem operations beyond Claude Code's built-in tools. Useful for complex file manipulation, directory operations, and batch processing.",
    category: "Development",
    url: "https://github.com/modelcontextprotocol/servers",
    features: [
      "Advanced file ops",
      "Directory manipulation",
      "Batch processing",
      "File watching",
      "Pattern matching",
    ],
    color: "mint",
    configSnippet: `"filesystem": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/dir"]
}`,
  },
  {
    name: "Slack MCP",
    description:
      "Read and send Slack messages from Claude. Search channels, read threads, post updates, and manage notifications.",
    category: "Communication",
    url: "https://slack.com",
    features: [
      "Read channels",
      "Send messages",
      "Thread replies",
      "Channel search",
      "User lookup",
    ],
    color: "coral",
    configSnippet: `"slack": {
  "command": "npx",
  "args": ["-y", "@anthropic-ai/slack-mcp"],
  "env": { "SLACK_TOKEN": "your-token" }
}`,
  },
  {
    name: "Puppeteer MCP",
    description:
      "Browser automation and web scraping from Claude. Navigate pages, take screenshots, extract data, fill forms, and test web UIs.",
    category: "Development",
    url: "https://pptr.dev",
    features: [
      "Web scraping",
      "Screenshots",
      "Form filling",
      "Page navigation",
      "PDF generation",
    ],
    color: "violet",
    configSnippet: `"puppeteer": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
}`,
  },
];
