export const site = {
  name: "San",
  fullName: "Santhanam K",
  role: "Senior Android Engineer",
  title: "San — Senior Android Engineer",
  description:
    "Senior Android Engineer with 7+ years crafting secure, high-performance mobile products with Kotlin, Jetpack Compose, and Compose Multiplatform.",
  url: "https://san-sk.github.io/Portfolio",
  email: "sanskjob@gmail.com",
  location: "India · Remote-friendly",
  socials: {
    github: "https://github.com/san-sk",
    linkedin: "https://www.linkedin.com/in/santhanam-k-0236a91b1/",
    githubUser: "san-sk",
  },
  // Sections double as "open files" in the IDE-style shell.
  nav: [
    { label: "About", href: "#about", file: "about.md" },
    { label: "Expertise", href: "#expertise", file: "expertise.kt" },
    { label: "Projects", href: "#projects", file: "projects.kt" },
    { label: "Experience", href: "#experience", file: "experience.log" },
    { label: "Open Source", href: "#open-source", file: "open_source.kt" },
    { label: "Work with me", href: "#services", file: "services.kt" },
    { label: "Contact", href: "#contact", file: "contact.kt" },
  ],
} as const;

export type Site = typeof site;
