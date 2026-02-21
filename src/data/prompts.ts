export interface Prompt {
  title: string;
  category: string;
  description: string;
  prompt: string;
  tags: string[];
  color: "neon" | "coral" | "violet" | "gold" | "mint";
}

export interface ClaudeSkill {
  name: string;
  command: string;
  description: string;
  example: string;
}

export const promptCategories = [
  "Architecture",
  "Feature Building",
  "Bug Fixing",
  "Code Review",
  "Testing",
  "Documentation",
  "Refactoring",
  "DevOps",
] as const;

export const prompts: Prompt[] = [
  {
    title: "Project Architecture Design",
    category: "Architecture",
    description: "Plan the architecture for a new feature or entire project with clear structure and reasoning.",
    prompt: `I'm building [describe your project]. Help me design the architecture:

1. **Project Structure**: Recommend a file/folder structure following Next.js App Router conventions
2. **Data Layer**: Suggest database schema (PostgreSQL + Prisma/Drizzle) with relationships
3. **API Design**: Define the API routes or server actions needed
4. **State Management**: Recommend client vs server state boundaries
5. **Auth Flow**: Outline the authentication and authorization approach
6. **Key Decisions**: List architectural decisions with trade-offs

Tech stack: Next.js 16, TypeScript, Tailwind CSS, [your database], [your auth provider]

Be specific with file names, function signatures, and type definitions.`,
    tags: ["Architecture", "Planning", "Next.js"],
    color: "violet",
  },
  {
    title: "Component Builder",
    category: "Feature Building",
    description: "Generate a production-ready React component with proper types, error handling, and accessibility.",
    prompt: `Build a [component name] React component with these requirements:

**Functionality**: [describe what it should do]
**Props**: [list the props it should accept]
**Behavior**: [describe interactions, states, edge cases]

Requirements:
- TypeScript with explicit prop types and JSDoc
- Tailwind CSS for styling (use the project's design tokens)
- Accessible: proper ARIA attributes, keyboard navigation, focus management
- Handle loading, error, and empty states
- Use Framer Motion for meaningful animations
- Responsive: mobile-first, works at all breakpoints
- Follow the existing component patterns in the codebase

Return the component file plus any supporting types or utilities.`,
    tags: ["Components", "React", "TypeScript"],
    color: "neon",
  },
  {
    title: "Debug Detective",
    category: "Bug Fixing",
    description: "Systematic approach to finding and fixing bugs with root cause analysis.",
    prompt: `I have a bug: [describe the bug, expected vs actual behavior]

**Environment**: [browser, OS, Node version, etc.]
**Steps to reproduce**: [list steps]
**Error message**: [paste error if any]
**Relevant code**: [paste the relevant files]

Please:
1. Identify the root cause (not just symptoms)
2. Explain WHY this bug occurs
3. Provide the minimal fix with exact file changes
4. Suggest a test that would catch this regression
5. Check if similar patterns exist elsewhere in the codebase that might have the same issue`,
    tags: ["Debugging", "Bug Fix", "Analysis"],
    color: "coral",
  },
  {
    title: "PR Review Checklist",
    category: "Code Review",
    description: "Comprehensive code review focusing on correctness, security, performance, and maintainability.",
    prompt: `Review this code change for a pull request:

[paste diff or describe changes]

Check for:
1. **Correctness**: Does it do what it's supposed to? Edge cases handled?
2. **Security**: Any injection risks, auth bypasses, data exposure, or OWASP issues?
3. **Performance**: N+1 queries, unnecessary re-renders, missing memoization, bundle size impact?
4. **Types**: Are TypeScript types precise (no \`any\`)? Are error types handled?
5. **Testing**: Are critical paths tested? Are edge cases covered?
6. **Naming**: Are variables, functions, and files named clearly and consistently?
7. **Patterns**: Does it follow existing project conventions?

Format as GitHub PR review comments with file paths and line references.`,
    tags: ["Code Review", "Quality", "PR"],
    color: "mint",
  },
  {
    title: "Test Suite Generator",
    category: "Testing",
    description: "Generate comprehensive test suites covering unit, integration, and edge cases.",
    prompt: `Write tests for: [describe the code/feature to test]

**Test framework**: Vitest + Testing Library (or Playwright for E2E)

Generate:
1. **Unit tests**: Pure logic, utilities, hooks
2. **Component tests**: Rendering, user interactions, async behavior
3. **Integration tests**: API routes, database operations, auth flows
4. **Edge cases**: Empty data, errors, race conditions, boundary values

For each test:
- Clear test name describing the behavior (not the implementation)
- Arrange-Act-Assert pattern
- Minimal setup, no over-mocking
- Type-safe mocks where needed

Aim for confidence in correctness, not coverage percentage.`,
    tags: ["Testing", "Vitest", "Playwright"],
    color: "gold",
  },
  {
    title: "API Endpoint Builder",
    category: "Feature Building",
    description: "Create a complete API endpoint with validation, error handling, and types.",
    prompt: `Create an API endpoint for: [describe the endpoint]

**Method**: [GET/POST/PUT/DELETE]
**Path**: [/api/...]
**Auth**: [required/optional/public]
**Input**: [describe request body/params]
**Output**: [describe response shape]

Include:
1. Next.js Route Handler (app/api/.../route.ts)
2. Zod schema for input validation
3. Proper error handling with status codes
4. TypeScript types for request/response
5. Database query with Prisma/Drizzle
6. Auth check if required
7. Rate limiting consideration`,
    tags: ["API", "Next.js", "Server"],
    color: "neon",
  },
  {
    title: "Refactoring Guide",
    category: "Refactoring",
    description: "Safely refactor code while maintaining functionality and improving structure.",
    prompt: `Refactor this code to improve [readability/performance/maintainability]:

[paste code]

Constraints:
- Maintain exact same external behavior (no functional changes)
- Keep the same public API/interface
- Explain each refactoring step and why it improves the code
- Show a before/after comparison
- Identify any risks in the refactoring
- Suggest tests to verify behavior is preserved

Apply these principles:
- Extract repeated logic into well-named functions
- Replace imperative code with declarative patterns where clearer
- Improve type safety
- Remove dead code and unused variables`,
    tags: ["Refactoring", "Clean Code", "Patterns"],
    color: "violet",
  },
  {
    title: "CI/CD Pipeline Setup",
    category: "DevOps",
    description: "Create a complete GitHub Actions CI/CD pipeline for your project.",
    prompt: `Set up a CI/CD pipeline for my Next.js project:

**Hosting**: [Vercel/Railway/AWS]
**Database**: [PostgreSQL/Supabase/PlanetScale]
**Package manager**: Bun

Create GitHub Actions workflows for:
1. **CI (on PR)**: Lint → Type check → Test → Build → Preview deploy
2. **CD (on main merge)**: Full test suite → Deploy to production
3. **Scheduled**: Dependency audit, Lighthouse CI

Include:
- Bun caching for fast installs
- Parallel job execution where possible
- Branch protection rule recommendations
- Environment variable management
- Slack/Discord notification on failure`,
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    color: "gold",
  },
];

export const claudeSkills: ClaudeSkill[] = [
  {
    name: "Commit",
    command: "/commit",
    description: "Analyzes staged changes and creates a well-formatted commit message following conventional commit standards.",
    example: "Stage your changes, then type /commit in Claude Code",
  },
  {
    name: "Code Review",
    command: "/review-pr",
    description: "Reviews a pull request for code quality, bugs, security issues, and suggests improvements.",
    example: "/review-pr 42 — reviews PR #42 in the current repo",
  },
  {
    name: "Frontend Design",
    command: "/frontend-design",
    description: "Creates distinctive, production-grade frontend interfaces with high design quality.",
    example: "/frontend-design Build a dashboard with charts and data tables",
  },
  {
    name: "Custom Skills",
    command: "CLAUDE.md",
    description: "Define project-specific instructions, conventions, and commands in a CLAUDE.md file at the project root.",
    example: "Add coding standards, preferred patterns, and project context to CLAUDE.md",
  },
];
