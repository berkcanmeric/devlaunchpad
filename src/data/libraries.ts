export interface Library {
  name: string;
  category: string;
  description: string;
  url: string;
  tags: string[];
  color: "neon" | "coral" | "violet" | "gold" | "mint";
}

export const libraryCategories = [
  "UI Components",
  "Styling",
  "State Management",
  "Data Fetching",
  "Forms & Validation",
  "Animation",
  "Authentication",
  "Database & ORM",
  "Payments",
  "Email",
  "File Upload",
  "Utilities",
] as const;

export const libraries: Library[] = [
  // ── UI Components ──────────────────────
  {
    name: "shadcn/ui",
    category: "UI Components",
    description:
      "Beautifully designed, accessible components built on Radix UI and Tailwind CSS. Copy-paste into your project and customize.",
    url: "https://ui.shadcn.com",
    tags: ["React", "Tailwind", "Radix", "Accessible"],
    color: "neon",
  },
  {
    name: "Aceternity UI",
    category: "UI Components",
    description:
      "Stunning animated components — 3D cards, aurora backgrounds, infinite marquees, parallax scrolling, beam effects, and more.",
    url: "https://ui.aceternity.com",
    tags: ["React", "Framer Motion", "Tailwind", "Animated"],
    color: "violet",
  },
  {
    name: "HeroUI",
    category: "UI Components",
    description:
      "Modern React UI library with beautiful defaults. Buttons, modals, inputs, cards, and more with first-class dark mode support.",
    url: "https://www.heroui.com",
    tags: ["React", "Tailwind", "Accessible", "Dark Mode"],
    color: "coral",
  },
  {
    name: "ReactBits",
    category: "UI Components",
    description:
      "Collection of animated React components and effects — text animations, background effects, interactive elements, and physics-based motion.",
    url: "https://reactbits.dev",
    tags: ["React", "Animation", "Effects", "Interactive"],
    color: "gold",
  },
  {
    name: "Radix UI",
    category: "UI Components",
    description:
      "Unstyled, accessible component primitives. Dialog, dropdown, popover, tooltip, tabs, and more. The foundation for shadcn/ui.",
    url: "https://www.radix-ui.com",
    tags: ["React", "Accessible", "Unstyled", "Primitives"],
    color: "mint",
  },
  {
    name: "Magic UI",
    category: "UI Components",
    description:
      "Animated components and effects for landing pages. Marquee, dock, globe, bento grid, particles, and shimmer effects.",
    url: "https://magicui.design",
    tags: ["React", "Landing Pages", "Animated", "Tailwind"],
    color: "violet",
  },

  // ── Styling ────────────────────────────
  {
    name: "Tailwind CSS v4",
    category: "Styling",
    description:
      "Utility-first CSS framework. v4 introduces CSS-first configuration, zero-config content detection, native cascade layers, and faster build.",
    url: "https://tailwindcss.com",
    tags: ["CSS", "Utility-First", "Framework"],
    color: "neon",
  },

  // ── State Management ───────────────────
  {
    name: "Zustand",
    category: "State Management",
    description:
      "Tiny, fast, scalable state management. No providers, no boilerplate, just a hook. Perfect for client state in Next.js apps.",
    url: "https://zustand.docs.pmnd.rs",
    tags: ["React", "State", "Minimal", "TypeScript"],
    color: "gold",
  },
  {
    name: "Jotai",
    category: "State Management",
    description:
      "Primitive and flexible state management with an atomic model. Great for derived state and fine-grained reactivity.",
    url: "https://jotai.org",
    tags: ["React", "Atomic", "State", "Minimal"],
    color: "mint",
  },

  // ── Data Fetching ──────────────────────
  {
    name: "TanStack Query",
    category: "Data Fetching",
    description:
      "Powerful data synchronization for React. Caching, background updates, pagination, infinite scroll, optimistic mutations, and offline support.",
    url: "https://tanstack.com/query",
    tags: ["React", "Data Fetching", "Cache", "Server State"],
    color: "coral",
  },
  {
    name: "tRPC",
    category: "Data Fetching",
    description:
      "End-to-end typesafe API layer. Define procedures on the server, call them from the client with full TypeScript autocomplete. No codegen.",
    url: "https://trpc.io",
    tags: ["TypeScript", "API", "Full-Stack", "Type-Safe"],
    color: "violet",
  },

  // ── Forms & Validation ─────────────────
  {
    name: "React Hook Form",
    category: "Forms & Validation",
    description:
      "Performant, flexible form library with easy validation. Minimal re-renders, built-in error handling, integration with Zod.",
    url: "https://react-hook-form.com",
    tags: ["React", "Forms", "Validation", "Performance"],
    color: "neon",
  },
  {
    name: "Zod",
    category: "Forms & Validation",
    description:
      "TypeScript-first schema validation. Define schemas that validate data and infer TypeScript types. Works everywhere — forms, APIs, env vars.",
    url: "https://zod.dev",
    tags: ["TypeScript", "Validation", "Schema", "Runtime"],
    color: "mint",
  },

  // ── Animation ──────────────────────────
  {
    name: "Framer Motion",
    category: "Animation",
    description:
      "Production-ready animation library for React. Layout animations, gestures, scroll-triggered effects, shared layout transitions.",
    url: "https://www.framer.com/motion/",
    tags: ["React", "Animation", "Gestures", "Layout"],
    color: "violet",
  },
  {
    name: "GSAP",
    category: "Animation",
    description:
      "Professional-grade animation platform. ScrollTrigger, timeline sequencing, morphing, and physics. Industry standard for complex animations.",
    url: "https://gsap.com",
    tags: ["Animation", "ScrollTrigger", "Professional"],
    color: "gold",
  },

  // ── Authentication ─────────────────────
  {
    name: "Clerk",
    category: "Authentication",
    description:
      "Drop-in authentication and user management. Pre-built components, social login, MFA, organizations, and webhook events.",
    url: "https://clerk.com",
    tags: ["Auth", "React", "Next.js", "Managed"],
    color: "coral",
  },
  {
    name: "Supabase Auth",
    category: "Authentication",
    description:
      "Open-source auth solution with email, social, phone, and magic link. Row-level security, JWT, and built-in user management.",
    url: "https://supabase.com/auth",
    tags: ["Auth", "Open Source", "PostgreSQL", "RLS"],
    color: "mint",
  },

  // ── Database & ORM ─────────────────────
  {
    name: "Prisma",
    category: "Database & ORM",
    description:
      "Next-generation ORM for TypeScript. Declarative schema, auto-generated client with full type safety, migrations, and studio.",
    url: "https://www.prisma.io",
    tags: ["ORM", "TypeScript", "Migrations", "Type-Safe"],
    color: "neon",
  },
  {
    name: "Drizzle ORM",
    category: "Database & ORM",
    description:
      "Lightweight, performant TypeScript ORM. SQL-like syntax, zero dependencies, serverless-ready, schema-first with Drizzle Kit.",
    url: "https://orm.drizzle.team",
    tags: ["ORM", "TypeScript", "Lightweight", "SQL-Like"],
    color: "gold",
  },
  {
    name: "Supabase",
    category: "Database & ORM",
    description:
      "Open-source Firebase alternative. PostgreSQL database, real-time subscriptions, storage, edge functions, and vector embeddings.",
    url: "https://supabase.com",
    tags: ["PostgreSQL", "Real-Time", "Storage", "Open Source"],
    color: "mint",
  },

  // ── Payments ───────────────────────────
  {
    name: "Stripe",
    category: "Payments",
    description:
      "Industry-standard payment processing. Checkout, subscriptions, invoicing, Connect for marketplaces, and robust webhook events.",
    url: "https://stripe.com",
    tags: ["Payments", "Subscriptions", "Webhooks"],
    color: "violet",
  },
  {
    name: "Lemon Squeezy",
    category: "Payments",
    description:
      "All-in-one payments and billing for SaaS. Handles tax, subscriptions, license keys, and merchant of record compliance.",
    url: "https://www.lemonsqueezy.com",
    tags: ["Payments", "SaaS", "Tax", "MoR"],
    color: "gold",
  },

  // ── Email ──────────────────────────────
  {
    name: "Resend",
    category: "Email",
    description:
      "Modern email API built for developers. Send transactional email with React Email templates. Simple API, great deliverability.",
    url: "https://resend.com",
    tags: ["Email", "API", "Transactional", "React Email"],
    color: "neon",
  },

  // ── File Upload ────────────────────────
  {
    name: "UploadThing",
    category: "File Upload",
    description:
      "File uploads for Next.js. Type-safe API, presigned URLs, image optimization, and a drop-in React component.",
    url: "https://uploadthing.com",
    tags: ["Upload", "Next.js", "Type-Safe", "S3"],
    color: "coral",
  },

  // ── Utilities ──────────────────────────
  {
    name: "date-fns",
    category: "Utilities",
    description:
      "Modern date utility library. Tree-shakeable, immutable, TypeScript-first. Format, parse, compare, and manipulate dates.",
    url: "https://date-fns.org",
    tags: ["Dates", "Utility", "Tree-Shakeable"],
    color: "mint",
  },
  {
    name: "Lucide Icons",
    category: "Utilities",
    description:
      "Beautiful, consistent icon library with 1500+ icons. Tree-shakeable React components, customizable size and stroke.",
    url: "https://lucide.dev",
    tags: ["Icons", "React", "SVG", "Open Source"],
    color: "neon",
  },
];
