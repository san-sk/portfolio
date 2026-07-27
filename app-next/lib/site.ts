export const site = {
  name: "San",
  fullName: "Santhanam K",
  role: "Senior Software Engineer",
  title: "San — Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years shipping secure, high-scale products — from a 50M-install VPN to cross-platform Kotlin/KMP apps and the tooling that ships them faster.",
  url: "https://san-sk.github.io/portfolio",
  email: "santhanamk.dev@gmail.com",
  location: "Chennai, India · Remote-friendly",
  // Swap this file (app-next/public) with a real headshot (e.g. /profile.jpg) later.
  avatar: "/profile.svg",
  socials: {
    github: "https://github.com/san-sk",
    linkedin: "https://www.linkedin.com/in/santhanam-k-0236a91b1/",
    githubUser: "san-sk",
  },
  // Sections double as "open files" in the IDE-style shell. Proof-of-work
  // (Projects) comes first; the skills inventory (Expertise) reads last.
  nav: [
    { label: "About", href: "#about", file: "about.md" },
    { label: "Projects", href: "#projects", file: "projects.kt" },
    { label: "Experience", href: "#experience", file: "experience.log" },
    { label: "Approach", href: "#approach", file: "approach.kt" },
    { label: "Open Source", href: "#open-source", file: "open_source.kt" },
    { label: "Expertise", href: "#expertise", file: "expertise.kt" },
    { label: "Contact", href: "#contact", file: "contact.kt" },
  ],
} as const;

export type Site = typeof site;
