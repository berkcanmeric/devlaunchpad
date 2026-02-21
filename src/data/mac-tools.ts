export interface MacTool {
  name: string;
  category: string;
  description: string;
  url: string;
  install: string;
  features: string[];
  color: "neon" | "coral" | "violet" | "gold" | "mint";
  free: boolean;
}

export const macToolCategories = [
  "Package Manager",
  "Terminal & Shell",
  "Editor & IDE",
  "Git & Version Control",
  "Database",
  "API & Network",
  "Design",
  "Productivity",
  "Browser",
  "Utilities",
] as const;

export const macTools: MacTool[] = [
  // ── Package Manager ────────────────────
  {
    name: "Homebrew",
    category: "Package Manager",
    description:
      "The missing package manager for macOS. Install CLI tools, fonts, apps, and developer dependencies with a single command.",
    url: "https://brew.sh",
    install: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    features: ["CLI tools", "Cask apps", "Fonts", "Taps", "Auto-update"],
    color: "gold",
    free: true,
  },
  {
    name: "Bun",
    category: "Package Manager",
    description:
      "All-in-one JavaScript runtime and toolkit. Insanely fast package manager, bundler, test runner, and Node.js-compatible runtime.",
    url: "https://bun.sh",
    install: "curl -fsSL https://bun.sh/install | bash",
    features: ["Fast installs", "Runtime", "Bundler", "Test runner", "Node.js compat"],
    color: "neon",
    free: true,
  },

  // ── Terminal & Shell ───────────────────
  {
    name: "Warp",
    category: "Terminal & Shell",
    description:
      "Modern terminal with IDE-like features. Block-based output, AI command search, workflow sharing, and beautiful themes.",
    url: "https://www.warp.dev",
    install: "brew install --cask warp",
    features: ["Block-based output", "AI search", "Workflows", "Themes", "Team sharing"],
    color: "violet",
    free: true,
  },
  {
    name: "iTerm2",
    category: "Terminal & Shell",
    description:
      "The classic macOS terminal replacement. Split panes, search, autocomplete, profiles, tmux integration, and extensive customization.",
    url: "https://iterm2.com",
    install: "brew install --cask iterm2",
    features: ["Split panes", "Search", "Profiles", "tmux", "Triggers"],
    color: "mint",
    free: true,
  },
  {
    name: "Oh My Zsh",
    category: "Terminal & Shell",
    description:
      "Framework for managing Zsh config. Hundreds of plugins, themes, and helpers. Auto-suggestions, syntax highlighting, and git shortcuts.",
    url: "https://ohmyz.sh",
    install: 'sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
    features: ["Themes", "Plugins", "Git aliases", "Auto-suggestions", "Syntax highlight"],
    color: "neon",
    free: true,
  },
  {
    name: "Starship",
    category: "Terminal & Shell",
    description:
      "Minimal, blazing-fast cross-shell prompt. Shows git status, Node version, battery, and more. Written in Rust.",
    url: "https://starship.rs",
    install: "brew install starship",
    features: ["Fast prompt", "Git info", "Language versions", "Custom modules", "Cross-shell"],
    color: "gold",
    free: true,
  },

  // ── Editor & IDE ───────────────────────
  {
    name: "Cursor",
    category: "Editor & IDE",
    description:
      "AI-first code editor built on VS Code. Tab completion, chat, Composer for multi-file editing, and codebase-aware AI.",
    url: "https://cursor.com",
    install: "brew install --cask cursor",
    features: ["AI tab complete", "Chat", "Composer", "VS Code base", "Custom rules"],
    color: "neon",
    free: false,
  },
  {
    name: "VS Code",
    category: "Editor & IDE",
    description:
      "The industry-standard code editor. Massive extension ecosystem, integrated terminal, debugging, Git, and remote development.",
    url: "https://code.visualstudio.com",
    install: "brew install --cask visual-studio-code",
    features: ["Extensions", "Debugging", "Git", "Terminal", "Remote dev"],
    color: "violet",
    free: true,
  },
  {
    name: "Zed",
    category: "Editor & IDE",
    description:
      "High-performance code editor built in Rust. Native speed, collaborative editing, AI integration, and minimal design.",
    url: "https://zed.dev",
    install: "brew install --cask zed",
    features: ["Blazing fast", "Collaboration", "AI built-in", "Native", "Minimal"],
    color: "mint",
    free: true,
  },

  // ── Git & Version Control ──────────────
  {
    name: "Fork",
    category: "Git & Version Control",
    description:
      "Beautiful, fast Git client for Mac. Interactive rebase, merge conflict resolver, image diffs, and repository manager.",
    url: "https://git-fork.com",
    install: "brew install --cask fork",
    features: ["Interactive rebase", "Conflict resolver", "Image diff", "Repo manager", "Fast"],
    color: "coral",
    free: false,
  },
  {
    name: "GitHub CLI",
    category: "Git & Version Control",
    description:
      "GitHub from the command line. Create PRs, review issues, manage releases, run actions, and codespaces — all from the terminal.",
    url: "https://cli.github.com",
    install: "brew install gh",
    features: ["PR management", "Issues", "Actions", "Releases", "Codespaces"],
    color: "neon",
    free: true,
  },
  {
    name: "lazygit",
    category: "Git & Version Control",
    description:
      "Terminal UI for git commands. Visual staging, interactive rebase, cherry-picking, and stash management in a keyboard-driven TUI.",
    url: "https://github.com/jesseduffield/lazygit",
    install: "brew install lazygit",
    features: ["Visual staging", "Interactive rebase", "Cherry-pick", "Stash", "Keyboard-driven"],
    color: "gold",
    free: true,
  },

  // ── Database ───────────────────────────
  {
    name: "TablePlus",
    category: "Database",
    description:
      "Modern, native database GUI. PostgreSQL, MySQL, SQLite, Redis, MongoDB. Query editor, visual schema, and data editing.",
    url: "https://tableplus.com",
    install: "brew install --cask tableplus",
    features: ["Multi-database", "Query editor", "Visual schema", "Data editing", "SSH tunnels"],
    color: "violet",
    free: false,
  },

  // ── API & Network ──────────────────────
  {
    name: "Proxyman",
    category: "API & Network",
    description:
      "Native macOS HTTP proxy debugger. Inspect API traffic, modify requests, breakpoints, and SSL proxying for iOS/Android simulators.",
    url: "https://proxyman.io",
    install: "brew install --cask proxyman",
    features: ["HTTP proxy", "SSL proxying", "Breakpoints", "Map local", "Mobile debugging"],
    color: "coral",
    free: false,
  },
  {
    name: "Hoppscotch",
    category: "API & Network",
    description:
      "Open-source API development ecosystem. REST, GraphQL, WebSocket, SSE testing. Lightweight Postman alternative with real-time collaboration.",
    url: "https://hoppscotch.io",
    install: "brew install --cask hoppscotch",
    features: ["REST & GraphQL", "WebSocket", "Collections", "Environments", "Open source"],
    color: "mint",
    free: true,
  },

  // ── Design ─────────────────────────────
  {
    name: "Figma",
    category: "Design",
    description:
      "Collaborative interface design tool. Design, prototype, handoff, and design system management. The industry standard for UI design.",
    url: "https://figma.com",
    install: "brew install --cask figma",
    features: ["UI Design", "Prototyping", "Components", "Auto Layout", "Dev Mode"],
    color: "violet",
    free: true,
  },

  // ── Productivity ───────────────────────
  {
    name: "Raycast",
    category: "Productivity",
    description:
      "Supercharged launcher replacing Spotlight. Extensions for GitHub, Jira, clipboard history, snippets, window management, and AI chat.",
    url: "https://raycast.com",
    install: "brew install --cask raycast",
    features: ["Launcher", "Extensions", "Clipboard", "Snippets", "Window management", "AI"],
    color: "gold",
    free: true,
  },
  {
    name: "Amphetamine",
    category: "Productivity",
    description:
      "Keep your Mac awake. Prevent sleep during builds, deployments, or long-running tasks. Triggers for apps, battery, and time.",
    url: "https://apps.apple.com/app/amphetamine/id937984704",
    install: "Available on Mac App Store",
    features: ["Prevent sleep", "App triggers", "Time triggers", "Battery rules", "Menu bar control"],
    color: "coral",
    free: true,
  },
  {
    name: "Rectangle",
    category: "Productivity",
    description:
      "Window management with keyboard shortcuts. Snap windows to halves, thirds, quarters. Spectacle successor with better performance.",
    url: "https://rectangleapp.com",
    install: "brew install --cask rectangle",
    features: ["Window snapping", "Keyboard shortcuts", "Multi-monitor", "Customizable", "Free"],
    color: "mint",
    free: true,
  },
  {
    name: "CleanShot X",
    category: "Productivity",
    description:
      "Superior screenshot and screen recording. Annotate, blur, pin, scrolling capture, OCR, and cloud upload with short links.",
    url: "https://cleanshot.com",
    install: "brew install --cask cleanshot",
    features: ["Screenshots", "Screen recording", "Annotation", "OCR", "Cloud upload"],
    color: "neon",
    free: false,
  },

  // ── Browser ────────────────────────────
  {
    name: "Arc Browser",
    category: "Browser",
    description:
      "Reimagined web browser with spaces, profiles, and a sidebar-first design. Split view, easels, boosts, and built-in ad blocking.",
    url: "https://arc.net",
    install: "brew install --cask arc",
    features: ["Spaces", "Split view", "Sidebar tabs", "Boosts", "Ad blocking"],
    color: "violet",
    free: true,
  },
];
