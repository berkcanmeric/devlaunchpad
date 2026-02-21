export interface MobileSdk {
  name: string;
  category: string;
  description: string;
  url: string;
  platforms: ("ios" | "android" | "cross-platform")[];
  features: string[];
  color: "neon" | "coral" | "violet" | "gold" | "mint";
}

export const mobileSdkCategories = [
  "Framework",
  "Monetization",
  "Analytics",
  "Push Notifications",
  "Crash Reporting",
  "Backend & Database",
  "Payments",
  "Ads",
  "Deep Linking",
  "Testing",
] as const;

export const mobileSdks: MobileSdk[] = [
  {
    name: "Expo",
    category: "Framework",
    description:
      "The de facto React Native framework. File-based routing, managed builds (EAS), OTA updates, and a massive library of native modules with a single API.",
    url: "https://expo.dev",
    platforms: ["cross-platform"],
    features: ["Expo Router", "EAS Build", "OTA Updates", "Native Modules", "Dev Client"],
    color: "neon",
  },
  {
    name: "RevenueCat",
    category: "Monetization",
    description:
      "In-app purchase and subscription management. Handles receipt validation, subscription status, entitlements, and analytics across iOS and Android.",
    url: "https://www.revenuecat.com",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Subscription management", "Receipt validation", "Paywall templates", "Analytics", "Experiments"],
    color: "coral",
  },
  {
    name: "Superwall",
    category: "Monetization",
    description:
      "Remote paywall management. A/B test paywalls, change pricing and UI without app updates, conversion analytics.",
    url: "https://superwall.com",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Remote paywalls", "A/B testing", "No-code editor", "Analytics", "Rules engine"],
    color: "gold",
  },
  {
    name: "Stripe Mobile",
    category: "Payments",
    description:
      "Stripe's mobile SDKs for React Native. Apple Pay, Google Pay, card payments, and payment sheets with PCI compliance handled.",
    url: "https://stripe.com/docs/mobile",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Apple Pay", "Google Pay", "Payment Sheet", "PCI Compliant", "SCA Ready"],
    color: "violet",
  },
  {
    name: "Firebase",
    category: "Backend & Database",
    description:
      "Google's mobile platform. Firestore for real-time database, Cloud Functions, Crashlytics, Remote Config, Cloud Messaging, and A/B testing.",
    url: "https://firebase.google.com",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Firestore", "Cloud Functions", "Crashlytics", "Remote Config", "Cloud Messaging"],
    color: "gold",
  },
  {
    name: "Supabase Mobile",
    category: "Backend & Database",
    description:
      "Open-source Firebase alternative with first-class React Native support. PostgreSQL, real-time subscriptions, auth, storage, and edge functions.",
    url: "https://supabase.com",
    platforms: ["cross-platform"],
    features: ["PostgreSQL", "Real-Time", "Auth", "Storage", "Edge Functions"],
    color: "mint",
  },
  {
    name: "OneSignal",
    category: "Push Notifications",
    description:
      "Push notification service with rich targeting. Segments, automated messages, in-app messaging, email, and SMS — all from one dashboard.",
    url: "https://onesignal.com",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Push notifications", "Segments", "Automation", "In-app messaging", "Analytics"],
    color: "neon",
  },
  {
    name: "Expo Notifications",
    category: "Push Notifications",
    description:
      "Expo's built-in push notification service. Free tier, easy token management, scheduled notifications, and rich content support.",
    url: "https://docs.expo.dev/push-notifications/overview/",
    platforms: ["cross-platform"],
    features: ["Free tier", "Token management", "Scheduling", "Rich content", "Expo integration"],
    color: "mint",
  },
  {
    name: "Sentry Mobile",
    category: "Crash Reporting",
    description:
      "Error and performance monitoring for mobile. Crash reporting, breadcrumbs, release health, session replay, and source map support.",
    url: "https://sentry.io/for/mobile/",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Crash reporting", "Performance monitoring", "Release health", "Source maps", "Breadcrumbs"],
    color: "coral",
  },
  {
    name: "Amplitude",
    category: "Analytics",
    description:
      "Product analytics for mobile apps. Event tracking, user journeys, funnels, cohorts, and A/B testing. Generous free tier.",
    url: "https://amplitude.com",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Event tracking", "Funnels", "Cohorts", "A/B testing", "User journeys"],
    color: "violet",
  },
  {
    name: "PostHog",
    category: "Analytics",
    description:
      "Open-source product analytics. Event tracking, session replays, feature flags, A/B testing, and surveys. Self-host or cloud.",
    url: "https://posthog.com",
    platforms: ["cross-platform"],
    features: ["Session replay", "Feature flags", "A/B tests", "Surveys", "Open source"],
    color: "gold",
  },
  {
    name: "Mixpanel",
    category: "Analytics",
    description:
      "Advanced product analytics with powerful querying. Funnels, flows, retention, impact analysis, and real-time dashboards.",
    url: "https://mixpanel.com",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Funnels", "Flows", "Retention", "Real-time", "Impact analysis"],
    color: "neon",
  },
  {
    name: "Branch",
    category: "Deep Linking",
    description:
      "Deep linking and attribution platform. Deferred deep links, universal links, referral tracking, and attribution analytics.",
    url: "https://www.branch.io",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Deep linking", "Deferred links", "Attribution", "Referrals", "Universal links"],
    color: "mint",
  },
  {
    name: "Maestro",
    category: "Testing",
    description:
      "Mobile UI testing framework. Simple YAML-based test definitions, visual testing, cloud execution. Write E2E tests in minutes.",
    url: "https://maestro.mobile.dev",
    platforms: ["ios", "android"],
    features: ["YAML test syntax", "Visual testing", "Cloud runs", "Fast execution", "CI integration"],
    color: "coral",
  },
  {
    name: "AdMob",
    category: "Ads",
    description:
      "Google's mobile ad platform. Banner, interstitial, rewarded, and native ads. Mediation for multiple ad networks.",
    url: "https://admob.google.com",
    platforms: ["ios", "android", "cross-platform"],
    features: ["Banner ads", "Interstitial", "Rewarded", "Native ads", "Mediation"],
    color: "gold",
  },
];
