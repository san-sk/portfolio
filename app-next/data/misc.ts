// Real, resume-backed highlights only. Everything here is a fact you can stand behind.
export const stats = [
  { value: 7, suffix: "+", label: "Years shipping Android" },
  { value: 50, suffix: "M+", label: "Norton 360 installs" },
  { value: 10, suffix: "M+", label: "Sulekha downloads" },
  { value: 6, suffix: "", label: "Companies · domains" },
];

export interface Repo {
  name: string;
  description: string;
  language: string;
  langColor: string;
  topics: string[];
  url: string;
}

/**
 * Real repositories pulled from github.com/san-sk. Edit descriptions freely —
 * the Open Source grid renders whatever lives here. No fabricated stats.
 */
export const repos: Repo[] = [
  {
    name: "SafeWipe",
    description:
      "Cross-platform, NIST SP 800-88 compliant data-wiping tool — Rust core engine with a Compose Multiplatform UI and verifiable compliance reports.",
    language: "Rust",
    langColor: "#dea584",
    topics: ["compose-multiplatform", "rust", "security"],
    url: "https://github.com/san-sk/SafeWipe",
  },
  {
    name: "LogAnalyzer",
    description:
      "Authentication log analyzer that parses Linux auth logs to flag failed logins and suspicious IPs — Python + Streamlit with graphs and CSV export.",
    language: "Python",
    langColor: "#3572A5",
    topics: ["python", "streamlit", "security"],
    url: "https://github.com/san-sk/LogAnalyzer",
  },
  {
    name: "I-PassManager",
    description: "Android password manager built with Kotlin.",
    language: "Kotlin",
    langColor: "#a97bff",
    topics: ["android", "kotlin", "security"],
    url: "https://github.com/san-sk/I-PassManager",
  },
  {
    name: "kmportfolio",
    description: "Portfolio experiment built with Kotlin Multiplatform.",
    language: "Kotlin",
    langColor: "#a97bff",
    topics: ["kotlin-multiplatform", "compose"],
    url: "https://github.com/san-sk/kmportfolio",
  },
  {
    name: "Android-BuildSrc",
    description: "Reusable BuildSrc / Gradle setup for Android projects.",
    language: "Kotlin",
    langColor: "#a97bff",
    topics: ["gradle", "android", "tooling"],
    url: "https://github.com/san-sk/Android-BuildSrc",
  },
  {
    name: "Android-Automation-Sample",
    description: "Android UI automation sample project using Appium.",
    language: "Kotlin",
    langColor: "#a97bff",
    topics: ["appium", "automation", "android"],
    url: "https://github.com/san-sk/Android-Automation-Sample",
  },
];
