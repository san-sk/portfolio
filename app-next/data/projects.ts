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
      "Built an offline-ready server-location map that stays usable without a connection",
      "Owned VPN notification management — connection status, alerts, and kill-switch",
      "Instrumented every transition to make failures observable, not mysterious",
    ],
    outcome:
      "Steadier connections, a dependable offline map, and clearer status notifications — delivered through targeted debugging, telemetry, and Play Console rollout monitoring.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines",
      "VPN Service API",
      "Offline Maps",
      "Notifications",
    ],
    metrics: [
      { label: "Norton 360 installs", value: "50M+" },
      { label: "My focus", value: "Connect reliability" },
    ],
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    mono: "NV",
    links: { demo: "https://us.norton.com/products/norton-vpn" },
    featured: true,
  },
  {
    slug: "netmeds",
    name: "Netmeds",
    category: "Healthcare · E-commerce",
    year: "2023",
    tagline: "Ordering medicine should feel as safe as the medicine itself.",
    overview:
      "A prescription and OTC medicine Android app where checkout reliability and app stability directly affect people getting their meds.",
    problem:
      "Business-critical modules were flaky — checkout failures and API errors were eroding trust, and cold start felt sluggish.",
    approach: [
      "Revamped business-critical modules in Kotlin & Java to steady checkout",
      "Refactored the network layer to Retrofit + Coroutines to cut API failures",
      "Built reusable UI libraries and led peer reviews to raise the quality bar",
    ],
    outcome:
      "Improved app stability and checkout reliability, a lower API failure rate, and faster cold-start performance.",
    tech: ["Kotlin", "Java", "Retrofit", "Coroutines", "MVVM"],
    metrics: [
      { label: "Domain", value: "Pharmacy" },
      { label: "My focus", value: "Checkout reliability" },
    ],
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    mono: "NM",
    links: {},
    featured: true,
  },
  {
    slug: "sulekha-marketplace",
    name: "Sulekha Marketplace",
    category: "Marketplace · 1M+ downloads",
    year: "2022",
    tagline: "Local services at scale, with maps that actually feel instant.",
    overview:
      "A local-services marketplace with 1M+ downloads — maps, notifications, custom views, and screen-share onboarding.",
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
      { label: "Downloads", value: "1M+" },
      { label: "My focus", value: "Perf on mid-range" },
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
    tagline: "A hospital in your pocket — app, API and database, built solo.",
    overview:
      "A healthcare product built end-to-end from an empty repo — Android client, REST API and MySQL backend for EHR, ICD diagnosis, prescriptions and appointments.",
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
    featured: true,
  },
];
