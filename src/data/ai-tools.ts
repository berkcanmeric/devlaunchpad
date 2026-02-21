export interface AiTool {
  name: string;
  category: string;
  description: string;
  url: string;
  features: string[];
  tier: "essential" | "recommended" | "nice-to-have";
  icon: string;
}

export interface AiAgent {
  name: string;
  role: string;
  description: string;
  skills: string[];
  promptSnippet: string;
  color: "neon" | "coral" | "violet" | "gold" | "mint";
}

export const aiTools: AiTool[] = [
  {
    name: "Claude Code",
    category: "AI CLI & Agent",
    description:
      "Anthropic's agentic coding CLI. Runs in your terminal, reads your codebase, executes commands, edits files, and creates commits. Best-in-class for complex multi-file tasks and architectural reasoning.",
    url: "https://claude.ai/code",
    features: [
      "Agentic terminal coding",
      "Multi-file editing",
      "Git operations",
      "MCP server support",
      "Custom slash commands",
      "Background agents",
    ],
    tier: "essential",
    icon: "🤖",
  },
  {
    name: "Cursor",
    category: "AI IDE",
    description:
      "AI-first code editor built on VS Code. Tab completion, inline chat, and Composer for multi-file editing. Excellent for rapid prototyping and refactoring with visual context.",
    url: "https://cursor.com",
    features: [
      "Tab autocomplete",
      "Inline chat",
      "Composer (multi-file)",
      "Codebase indexing",
      "@-mentions for context",
      "Custom rules",
    ],
    tier: "essential",
    icon: "⚡",
  },
  {
    name: "v0 by Vercel",
    category: "UI Generator",
    description:
      "AI-powered UI generation tool. Describe a component or page in natural language and get production-ready React + Tailwind code using shadcn/ui components.",
    url: "https://v0.dev",
    features: [
      "Natural language to UI",
      "shadcn/ui components",
      "React + Tailwind output",
      "Iterative refinement",
      "One-click deploy",
    ],
    tier: "essential",
    icon: "🎨",
  },
  {
    name: "GitHub Copilot",
    category: "Code Completion",
    description:
      "GitHub's AI pair programmer. Deep VS Code integration with inline suggestions, chat panel, and workspace-aware completions. Great for boilerplate and patterns.",
    url: "https://github.com/features/copilot",
    features: [
      "Inline suggestions",
      "Chat panel",
      "CLI integration",
      "PR descriptions",
      "Code review",
    ],
    tier: "recommended",
    icon: "🐙",
  },
  {
    name: "Bolt.new",
    category: "Full-Stack Generator",
    description:
      "AI full-stack app builder by StackBlitz. Generates entire web applications from a prompt, with live preview, package installation, and deployment.",
    url: "https://bolt.new",
    features: [
      "Full-stack generation",
      "Live preview",
      "Package management",
      "One-click deploy",
      "Iterative editing",
    ],
    tier: "recommended",
    icon: "⚡",
  },
  {
    name: "Windsurf",
    category: "AI IDE",
    description:
      "Codeium's AI-powered IDE with Cascade — an agentic coding assistant that can plan, execute, and iterate across your entire codebase.",
    url: "https://codeium.com/windsurf",
    features: [
      "Cascade agent",
      "Multi-file editing",
      "Terminal integration",
      "Codebase awareness",
      "Free tier available",
    ],
    tier: "recommended",
    icon: "🏄",
  },
  {
    name: "ChatGPT",
    category: "General AI",
    description:
      "OpenAI's conversational AI. Useful for brainstorming, explaining concepts, generating boilerplate, and debugging. Canvas mode for collaborative editing.",
    url: "https://chat.openai.com",
    features: [
      "Conversational coding",
      "Canvas mode",
      "Image understanding",
      "Web browsing",
      "GPT-4o model",
    ],
    tier: "recommended",
    icon: "💬",
  },
  {
    name: "Gemini",
    category: "General AI",
    description:
      "Google's multimodal AI with massive context windows. Excellent for analyzing large codebases, understanding complex architectures, and processing documentation.",
    url: "https://gemini.google.com",
    features: [
      "1M+ token context",
      "Multimodal input",
      "Google integration",
      "Code execution",
      "Gems customization",
    ],
    tier: "nice-to-have",
    icon: "💎",
  },
];

export const aiAgents: AiAgent[] = [
  {
    name: "Release Manager",
    role: "Manages the release lifecycle",
    description:
      "Automates version bumps, changelog generation, release notes, tag creation, and deployment coordination. Ensures consistent, well-documented releases.",
    skills: [
      "Semantic versioning",
      "Changelog generation",
      "Git tag management",
      "Release note drafting",
      "Deployment coordination",
    ],
    promptSnippet:
      "You are a Release Manager agent. Analyze the git history since the last tag, categorize changes (features, fixes, breaking), bump the version following semver, generate a changelog entry, and create a GitHub release with detailed notes.",
    color: "neon",
  },
  {
    name: "QA Tester",
    role: "Automated testing & quality assurance",
    description:
      "Writes comprehensive test suites, identifies edge cases, performs test-driven bug fixes, and ensures code coverage meets standards.",
    skills: [
      "Unit test writing",
      "E2E test design",
      "Edge case discovery",
      "Coverage analysis",
      "Test-driven fixes",
    ],
    promptSnippet:
      "You are a QA Tester agent. For the given code, write comprehensive tests covering happy paths, error cases, edge cases, and boundary conditions. Use Vitest for unit tests and Playwright for E2E. Aim for >90% coverage on critical paths.",
    color: "mint",
  },
  {
    name: "Senior Developer",
    role: "Architecture & code review",
    description:
      "Reviews code for quality, suggests architectural improvements, identifies anti-patterns, and mentors through detailed code review comments.",
    skills: [
      "Code review",
      "Architecture design",
      "Pattern identification",
      "Performance optimization",
      "Security review",
    ],
    promptSnippet:
      "You are a Senior Developer agent. Review this code for: correctness, performance, security vulnerabilities, maintainability, and adherence to project conventions. Provide specific, actionable feedback with code examples for improvements.",
    color: "violet",
  },
  {
    name: "DevOps Engineer",
    role: "Infrastructure & CI/CD",
    description:
      "Sets up and maintains CI/CD pipelines, Docker configurations, deployment workflows, monitoring, and infrastructure as code.",
    skills: [
      "CI/CD pipeline design",
      "Docker configuration",
      "GitHub Actions",
      "Monitoring setup",
      "Infrastructure as code",
    ],
    promptSnippet:
      "You are a DevOps Engineer agent. Set up a production-grade CI/CD pipeline with: linting, type checking, testing, preview deployments on PRs, and auto-deploy to production on main. Include caching for fast builds.",
    color: "gold",
  },
  {
    name: "Technical Writer",
    role: "Documentation & API docs",
    description:
      "Creates clear, comprehensive documentation including README files, API references, architecture decisions, and user guides.",
    skills: [
      "README generation",
      "API documentation",
      "Architecture decision records",
      "User guides",
      "Inline code comments",
    ],
    promptSnippet:
      "You are a Technical Writer agent. Generate comprehensive documentation for this codebase: README with setup instructions, API endpoint documentation with request/response examples, and architecture overview with diagrams.",
    color: "coral",
  },
  {
    name: "Security Auditor",
    role: "Security analysis & hardening",
    description:
      "Scans code for security vulnerabilities, reviews dependencies, checks for OWASP top 10 issues, and recommends hardening measures.",
    skills: [
      "Vulnerability scanning",
      "Dependency auditing",
      "OWASP analysis",
      "Auth flow review",
      "Input validation",
    ],
    promptSnippet:
      "You are a Security Auditor agent. Audit this code for: SQL injection, XSS, CSRF, insecure auth flows, hardcoded secrets, dependency vulnerabilities, and missing input validation. Provide severity ratings and fix recommendations.",
    color: "coral",
  },
];
