export interface Project {
  slug: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  overview: string;
  problem: string;
  approach: string[];
  outcome: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  gradient: string; // tailwind gradient classes for the visual
  mono: string; // short mark
  links: { github?: string; demo?: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "norton-vpn",
    name: "Norton VPN",
    category: "Consumer Security",
    year: "2025",
    tagline: "A VPN people forget is running — because it never lets them down.",
    overview:
      "Privacy-first Android VPN for a global consumer base, where a dropped connection isn't a bug — it's a broken promise.",
    problem:
      "Connect flows failed silently on flaky networks and the kill-switch had edge cases that leaked traffic during reconnection.",
    approach: [
      "Rebuilt the connect state machine around a single source of truth in StateFlow",
      "Hardened the kill-switch across process death and network handoff",
      "Instrumented every transition to make failures observable, not mysterious",
    ],
    outcome:
      "Steadier connections and cleaner reconnection, delivered through targeted debugging, telemetry, and Play Console rollout monitoring.",
    tech: ["Kotlin", "Jetpack Compose", "Coroutines", "VPN Service API", "Play Console"],
    metrics: [
      { label: "Users reached", value: "50M+" },
      { label: "Surface", value: "Global" },
    ],
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    mono: "NV",
    links: { demo: "https://us.norton.com/products/norton-vpn" },
    featured: true,
  },
  {
    slug: "temenos-banking",
    name: "Mobile Banking (KMP)",
    category: "Fintech · Multiplatform",
    year: "2024",
    tagline: "One banking codebase, native trust on both platforms.",
    overview:
      "Compose Multiplatform banking flows — login, biometric auth, notifications — for regulated financial clients.",
    problem:
      "Two native teams were rebuilding the same regulated flows twice, doubling the surface for bugs and audit risk.",
    approach: [
      "Modeled auth, biometrics and session logic once in shared Kotlin",
      "Drove the UI with Compose Multiplatform for pixel-consistent screens",
      "Integrated Visualizer & Quantum Fabric without leaking platform quirks",
    ],
    outcome:
      "Shared 70%+ of business logic across iOS and Android with a single review surface for security-critical paths.",
    tech: ["Kotlin Multiplatform", "Compose Multiplatform", "Biometrics", "Ktor"],
    metrics: [
      { label: "Shared logic", value: "70%+" },
      { label: "Platforms", value: "iOS + Android" },
    ],
    gradient: "from-sky-500/20 via-emerald-500/10 to-transparent",
    mono: "TB",
    links: {},
    featured: true,
  },
  {
    slug: "sulekha-marketplace",
    name: "Sulekha Marketplace",
    category: "Marketplace · 10M+ downloads",
    year: "2022",
    tagline: "Local services for millions, with maps that actually feel instant.",
    overview:
      "A local-services marketplace with 10M+ downloads — maps, notifications, custom views, and screen-share onboarding.",
    problem:
      "Onboarding drop-off was high and map-heavy screens stuttered on mid-range devices.",
    approach: [
      "Built reusable custom views and libraries to standardize the UI language",
      "Tuned Google Maps and list rendering for low-end hardware",
      "Mentored 3 engineers to keep the quality bar consistent as we scaled",
    ],
    outcome:
      "Smoother onboarding, reusable UI foundations, and a stronger Android team.",
    tech: ["Kotlin", "Google Maps SDK", "Firebase FCM", "Custom Views"],
    metrics: [
      { label: "Downloads", value: "10M+" },
      { label: "Play rating", value: "4.3★" },
    ],
    gradient: "from-amber-500/20 via-emerald-500/10 to-transparent",
    mono: "SK",
    links: {},
    featured: true,
  },
  {
    slug: "vgm-patient",
    name: "VGM Patient",
    category: "Healthcare · 0→1",
    year: "2020",
    tagline: "A hospital in your pocket, built from an empty repo.",
    overview:
      "A healthcare Android app built from scratch — EHR, ICD diagnosis, prescriptions, and appointments.",
    problem:
      "Clinicians needed EHR, diagnosis and prescriptions in one reliable mobile flow, with nothing to start from.",
    approach: [
      "Designed the Android app and REST contracts end-to-end",
      "Built the backend on PHP CodeIgniter + MySQL to control the full stack",
      "Shipped ICD diagnosis, prescriptions and appointments as one coherent product",
    ],
    outcome:
      "A production healthcare product delivered solo, from architecture to release.",
    tech: ["Android", "REST APIs", "PHP CodeIgniter", "MySQL"],
    metrics: [
      { label: "Scope", value: "0 → 1" },
      { label: "Ownership", value: "Full stack" },
    ],
    gradient: "from-rose-500/20 via-emerald-500/10 to-transparent",
    mono: "VP",
    links: {},
    featured: false,
  },
];
