import {
  Boxes,
  Braces,
  Cpu,
  Database,
  FlaskConical,
  Hammer,
  Layers,
  LineChart,
  Rocket,
  ShieldCheck,
  Smartphone,
  Waves,
  Wrench,
} from "lucide-react";

export interface Domain {
  title: string;
  tagline: string;
  icon: typeof Boxes;
  skills: string[];
  /** grid span for the bento layout */
  span?: "wide" | "tall" | "normal";
  accentNote?: string;
  /** signature domains render as large cards; the rest fall into the toolkit list */
  featured?: boolean;
}

// Groups + titles mirror the résumé's skill sections so the story matches
// exactly. Contents reflect only what's genuinely interview-ready.
export const domains: Domain[] = [
  {
    title: "Languages",
    tagline: "The languages I think and ship in.",
    icon: Braces,
    skills: ["Kotlin 2.2+", "Java", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Android",
    tagline: "Seven years deep in the platform — SDK internals to Play Store rollouts.",
    icon: Smartphone,
    span: "wide",
    featured: true,
    accentNote: "The craft I return to daily",
    skills: [
      "Android SDK",
      "Jetpack Compose",
      "Navigation 3",
      "Material 3",
      "Material Expressive",
      "ViewModel",
      "DataStore",
      "Room",
      "WorkManager",
      "Paging 3",
      "CameraX",
    ],
  },
  {
    title: "Cross-Platform",
    tagline: "Shared logic, native feel, across every surface.",
    icon: Boxes,
    featured: true,
    skills: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "CMP iOS (stable)",
      "CMP Desktop",
      "Compose Web (Beta)",
      "Compose Hot Reload",
      "React Native",
    ],
  },
  {
    title: "Architecture",
    tagline: "Structure that scales with the team, not against it.",
    icon: Layers,
    featured: true,
    skills: [
      "Clean Architecture",
      "MVI",
      "MVVM",
      "Modularization",
      "Unidirectional Data Flow",
      "Repository Pattern",
      "SOLID",
      "Dependency Injection",
    ],
  },
  {
    title: "Async & Reactive",
    tagline: "Concurrency and streams, done the Kotlin way.",
    icon: Waves,
    skills: ["Coroutines", "Flow", "StateFlow", "SharedFlow"],
  },
  {
    title: "Networking & Data",
    tagline: "Talking to backends and persisting state reliably.",
    icon: Database,
    skills: [
      "Retrofit",
      "OkHttp",
      "Ktor",
      "REST",
      "GraphQL",
      "Kotlinx Serialization",
      "Room",
      "Realm",
      "Firebase",
    ],
  },
  {
    title: "DI & Tooling",
    tagline: "Wiring dependencies cleanly and predictably.",
    icon: Wrench,
    skills: ["Hilt", "Dagger 2", "Koin"],
  },
  {
    title: "Security",
    tagline: "Shipping VPN and banking flows where trust is the product.",
    icon: ShieldCheck,
    featured: true,
    skills: [
      "VPN protocols",
      "EncryptedSharedPreferences",
      "Biometric APIs",
      "OAuth2",
      "SSL Pinning",
      "Secure Auth Flows",
    ],
  },
  {
    title: "Performance & Stability",
    tagline: "Chasing cold-start, jank, and crashes until the numbers get boring.",
    icon: LineChart,
    featured: true,
    skills: [
      "Cold-start tuning",
      "Baseline Profiles",
      "R8",
      "Crash-free sessions",
      "LeakCanary",
      "Crashlytics",
      "Android Studio Profiler",
    ],
  },
  {
    title: "Testing & Quality",
    tagline: "Confidence before every release.",
    icon: FlaskConical,
    skills: [
      "JUnit",
      "MockK",
      "Espresso",
      "Compose UI Tests",
      "CMP UI Testing v2",
      "Turbine",
      "Detekt",
      "ktlint",
    ],
  },
  {
    title: "CI/CD & Release",
    tagline: "Repeatable pipelines from build to production.",
    icon: Rocket,
    skills: ["GitHub Actions", "Play Console", "Crashlytics"],
  },
  {
    title: "AI-Assisted Dev",
    tagline: "Pairing with models to review, refactor, and scaffold — thoughtfully.",
    icon: Cpu,
    featured: true,
    skills: ["Claude", "Cursor", "GitHub Copilot", "Junie", "Local LLMs"],
  },
  {
    title: "Tools",
    tagline: "The day-to-day that keeps delivery smooth.",
    icon: Hammer,
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Confluence",
      "Figma",
      "Postman",
      "Android Studio",
      "Charles Proxy",
    ],
  },
];
