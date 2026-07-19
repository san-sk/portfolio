export interface Role {
  company: string;
  role: string;
  period: string;
  from: string;
  growth: string;
  highlights: string[];
  current?: boolean;
}

export const experience: Role[] = [
  {
    company: "Gen Digital",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    from: "2025",
    growth:
      "Moved into consumer security at global scale — where reliability is the feature and AI-first workflows became part of how I ship.",
    highlights: [
      "Norton VPN, Avast VPN & Norton 360 security features in Kotlin + Compose",
      "AI-first workflows for review, refactor and test scaffolding",
      "Crash-free release support across a worldwide user base",
    ],
    current: true,
  },
  {
    company: "Temenos",
    role: "Engineer",
    period: "May 2023 — Dec 2024",
    from: "2023",
    growth:
      "Went all-in on Kotlin Multiplatform — learning to share logic across platforms without compromising on native trust.",
    highlights: [
      "KMP + Compose Multiplatform banking flows for regulated clients",
      "Biometric auth, notifications, Visualizer & Quantum Fabric integrations",
    ],
  },
  {
    company: "Vitalic Health",
    role: "Senior Software Engineer",
    period: "Nov 2022 — Apr 2023",
    from: "2022",
    growth:
      "Grew into a senior seat by rescuing business-critical modules and setting a cleaner technical direction.",
    highlights: [
      "Revamped critical Android modules in Kotlin & Java",
      "Refactored the network layer to Retrofit + Coroutines",
      "Shipped reusable UI libraries for a medicine platform",
    ],
  },
  {
    company: "GlobalLogic",
    role: "Software Engineer",
    period: "Jun 2022 — Nov 2022",
    from: "2022",
    growth:
      "Stepped outside pure native to a React Native product — learning to debug across the JS/native bridge and deliver with a distributed, cross-timezone team.",
    highlights: [
      "React Native app with embedded WebView flows for a global client",
      "Debugged native bridge issues across the JS/native boundary",
      "Coordinated cross-timezone delivery with distributed teams",
    ],
  },
  {
    company: "Sulekha",
    role: "Software Developer",
    period: "Jan 2021 — Jun 2022",
    from: "2021",
    growth:
      "Learned what scale really means on a 10M+ download product — and started mentoring others along the way.",
    highlights: [
      "Custom UI, Firebase, Google Maps and onboarding for a marketplace app",
      "Mentored junior Android developers",
    ],
  },
  {
    company: "VASS",
    role: "Android Developer",
    period: "Sep 2019 — Dec 2020",
    from: "2019",
    growth:
      "Where it began — building a healthcare product from scratch taught me to own a feature end-to-end.",
    highlights: [
      "Built VGM Patient from zero — EHR, ICD diagnosis, prescriptions, appointments",
      "Delivered across Android, REST APIs, PHP CodeIgniter and MySQL",
    ],
  },
];
