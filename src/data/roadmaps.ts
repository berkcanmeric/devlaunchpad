export interface RoadmapStep {
  title: string;
  description: string;
  tools: string[];
  phase: "foundation" | "core" | "enhance" | "quality" | "ship";
}

export interface Roadmap {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: "neon" | "coral" | "violet" | "gold" | "mint";
  steps: RoadmapStep[];
}

const phaseLabels: Record<RoadmapStep["phase"], string> = {
  foundation: "Foundation",
  core: "Core",
  enhance: "Enhance",
  quality: "Quality",
  ship: "Ship",
};

export { phaseLabels };

export const roadmaps: Roadmap[] = [
  {
    id: "web-frontend",
    title: "Frontend Web",
    subtitle: "Modern web applications",
    description:
      "Master modern frontend development from HTML basics to production-grade Next.js applications with cutting-edge UI.",
    color: "neon",
    steps: [
      {
        title: "HTML & CSS Fundamentals",
        description:
          "Semantic HTML5, Flexbox, CSS Grid, responsive design, accessibility basics, CSS custom properties.",
        tools: ["MDN Web Docs", "CSS-Tricks", "web.dev"],
        phase: "foundation",
      },
      {
        title: "JavaScript & TypeScript",
        description:
          "ES2024+, async/await, modules, DOM APIs. TypeScript generics, utility types, strict mode, type narrowing.",
        tools: ["TypeScript Handbook", "javascript.info", "Total TypeScript"],
        phase: "foundation",
      },
      {
        title: "React Fundamentals",
        description:
          "Components, JSX, hooks (useState, useEffect, useRef, useMemo), context, patterns like compound components.",
        tools: ["React Docs", "React DevTools", "Storybook"],
        phase: "core",
      },
      {
        title: "Next.js & App Router",
        description:
          "Server components, server actions, route handlers, middleware, ISR, streaming, parallel routes, intercepting routes.",
        tools: ["Next.js 16", "Vercel", "next-devtools MCP"],
        phase: "core",
      },
      {
        title: "State & Data Fetching",
        description:
          "Zustand for client state, TanStack Query for server state, SWR, React Hook Form + Zod for forms and validation.",
        tools: ["Zustand", "TanStack Query", "Zod"],
        phase: "core",
      },
      {
        title: "Styling & UI Systems",
        description:
          "Tailwind CSS v4, shadcn/ui, Aceternity UI, Radix primitives, Framer Motion, design tokens, responsive systems.",
        tools: ["Tailwind CSS", "shadcn/ui", "Aceternity UI", "HeroUI"],
        phase: "enhance",
      },
      {
        title: "Authentication & Database",
        description:
          "NextAuth.js / Clerk for auth, Prisma / Drizzle ORM, Supabase or PlanetScale, row-level security.",
        tools: ["Clerk", "Prisma", "Supabase", "Neon"],
        phase: "enhance",
      },
      {
        title: "Testing & Quality",
        description:
          "Vitest for unit tests, Testing Library for component tests, Playwright for E2E, MSW for mocking APIs.",
        tools: ["Vitest", "Playwright", "Testing Library"],
        phase: "quality",
      },
      {
        title: "Performance & Optimization",
        description:
          "Core Web Vitals, code splitting, lazy loading, image optimization, bundle analysis, edge caching.",
        tools: ["Lighthouse", "Bundle Analyzer", "Vercel Analytics"],
        phase: "quality",
      },
      {
        title: "CI/CD & Deployment",
        description:
          "Vercel deployment, GitHub Actions, preview deployments, monitoring with Sentry, analytics, feature flags.",
        tools: ["Vercel", "GitHub Actions", "Sentry", "LaunchDarkly"],
        phase: "ship",
      },
    ],
  },
  {
    id: "mobile-react-native",
    title: "Mobile (React Native)",
    subtitle: "Cross-platform mobile apps",
    description:
      "Build production-ready iOS and Android apps with React Native and Expo, from setup to App Store submission.",
    color: "coral",
    steps: [
      {
        title: "React Native & Expo Setup",
        description:
          "Expo Router, file-based routing, dev client, EAS Build, Expo Go for rapid prototyping, project structure.",
        tools: ["Expo", "Expo Router", "EAS CLI"],
        phase: "foundation",
      },
      {
        title: "Core UI & Navigation",
        description:
          "React Navigation v7, stack/tab/drawer navigators, native gestures, safe area handling, platform-specific UI.",
        tools: ["React Navigation", "React Native Reanimated", "NativeWind"],
        phase: "foundation",
      },
      {
        title: "State & Networking",
        description:
          "Zustand for state, TanStack Query for API caching, Axios interceptors, offline-first patterns, MMKV storage.",
        tools: ["Zustand", "TanStack Query", "MMKV"],
        phase: "core",
      },
      {
        title: "Native APIs & Modules",
        description:
          "Camera, notifications (OneSignal/Expo), biometrics, file system, device info, deep linking, share extensions.",
        tools: ["Expo Modules", "OneSignal", "expo-notifications"],
        phase: "core",
      },
      {
        title: "Animations & Gestures",
        description:
          "Reanimated 3 shared values, gesture handler, layout animations, Skia for canvas, Lottie for micro-animations.",
        tools: ["Reanimated", "Gesture Handler", "Lottie", "Skia"],
        phase: "enhance",
      },
      {
        title: "Monetization & Payments",
        description:
          "RevenueCat for in-app purchases and subscriptions, Stripe for one-time payments, paywall UI, receipt validation.",
        tools: ["RevenueCat", "Stripe", "Superwall"],
        phase: "enhance",
      },
      {
        title: "Analytics & Crash Reporting",
        description:
          "Sentry for crash reporting, Amplitude or Mixpanel for analytics, PostHog for feature flags, A/B testing.",
        tools: ["Sentry", "Amplitude", "PostHog"],
        phase: "quality",
      },
      {
        title: "Testing & QA",
        description:
          "Jest + Testing Library for unit/component tests, Detox or Maestro for E2E, snapshot testing, CI integration.",
        tools: ["Jest", "Maestro", "Detox"],
        phase: "quality",
      },
      {
        title: "Build & Release",
        description:
          "EAS Build for cloud builds, EAS Submit, OTA updates with expo-updates, versioning, release channels.",
        tools: ["EAS Build", "EAS Submit", "expo-updates"],
        phase: "ship",
      },
      {
        title: "App Store Optimization",
        description:
          "App Store Connect, Google Play Console, screenshots, descriptions, keywords, ratings, review management.",
        tools: ["App Store Connect", "Google Play Console", "Fastlane"],
        phase: "ship",
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack",
    subtitle: "End-to-end applications",
    description:
      "Build complete web applications from database to deployment with modern full-stack patterns and best practices.",
    color: "violet",
    steps: [
      {
        title: "TypeScript Mastery",
        description:
          "Advanced types, generics, conditional types, template literal types, declaration files, monorepo type sharing.",
        tools: ["TypeScript 5.x", "ts-reset", "Total TypeScript"],
        phase: "foundation",
      },
      {
        title: "Next.js Full-Stack Patterns",
        description:
          "Server components, server actions, route handlers, middleware, API design, tRPC for end-to-end type safety.",
        tools: ["Next.js 16", "tRPC", "Hono"],
        phase: "core",
      },
      {
        title: "Database & ORM",
        description:
          "PostgreSQL with Prisma or Drizzle, migrations, seeding, connection pooling, query optimization, indexing.",
        tools: ["Prisma", "Drizzle", "Neon", "Supabase"],
        phase: "core",
      },
      {
        title: "Authentication & Authorization",
        description:
          "Clerk or NextAuth.js, OAuth providers, JWT, RBAC, row-level security, session management, MFA.",
        tools: ["Clerk", "NextAuth.js", "Supabase Auth"],
        phase: "core",
      },
      {
        title: "File Storage & Media",
        description:
          "UploadThing or S3 for file uploads, image optimization with Sharp, video transcoding, CDN caching.",
        tools: ["UploadThing", "AWS S3", "Cloudflare R2"],
        phase: "enhance",
      },
      {
        title: "Real-time & Background Jobs",
        description:
          "WebSockets, Server-Sent Events, Pusher/Ably for real-time, Inngest or Trigger.dev for background jobs, cron.",
        tools: ["Pusher", "Inngest", "Trigger.dev"],
        phase: "enhance",
      },
      {
        title: "Email & Notifications",
        description:
          "Resend for transactional email, React Email for templates, in-app notifications, push via OneSignal.",
        tools: ["Resend", "React Email", "Novu"],
        phase: "enhance",
      },
      {
        title: "Payments & Billing",
        description:
          "Stripe Checkout, subscriptions, webhooks, customer portal, usage-based billing, invoicing, tax handling.",
        tools: ["Stripe", "Lemon Squeezy", "Paddle"],
        phase: "enhance",
      },
      {
        title: "Testing & Monitoring",
        description:
          "Vitest, Playwright E2E, API testing, Sentry error tracking, Vercel Analytics, uptime monitoring.",
        tools: ["Vitest", "Playwright", "Sentry", "BetterStack"],
        phase: "quality",
      },
      {
        title: "DevOps & Infrastructure",
        description:
          "Vercel or Railway deployment, Docker, GitHub Actions CI/CD, feature flags, database backups, security headers.",
        tools: ["Vercel", "Railway", "GitHub Actions", "Docker"],
        phase: "ship",
      },
    ],
  },
];
