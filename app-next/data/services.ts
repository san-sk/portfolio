import type { LucideIcon } from "lucide-react";
import { BookOpen, GraduationCap, Presentation, Smartphone } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  cta:
    | { label: string; kind: "email"; subject: string }
    | { label: string; kind: "link"; href: string };
}

export const services: Service[] = [
  {
    id: "mentorship",
    icon: GraduationCap,
    title: "1:1 Mentorship",
    tagline: "For engineers leveling up",
    description:
      "Personal guidance for Android engineers — career direction, code & architecture reviews, and mock interviews tuned to where you want to go.",
    points: [
      "Career & growth roadmap",
      "Code / architecture reviews",
      "Mock interviews & honest feedback",
    ],
    cta: { label: "Book a session", kind: "email", subject: "1:1 Mentorship" },
  },
  {
    id: "development",
    icon: Smartphone,
    title: "App Development",
    tagline: "For startups & product teams",
    description:
      "Contract Android & Kotlin Multiplatform development — from a rough prototype to a polished, performant Play Store release.",
    points: [
      "Android + KMP builds",
      "Compose UI & design systems",
      "Performance & release readiness",
    ],
    cta: {
      label: "Start a project",
      kind: "email",
      subject: "App development enquiry",
    },
  },
  {
    id: "workshops",
    icon: Presentation,
    title: "Team Workshops",
    tagline: "For engineering teams",
    description:
      "Hands-on sessions on Jetpack Compose, clean architecture, and performance — practical, code-first, and tuned to your team\u2019s stack.",
    points: [
      "Compose & Material 3",
      "Architecture & testing",
      "Performance profiling",
    ],
    cta: {
      label: "Request a workshop",
      kind: "email",
      subject: "Team workshop enquiry",
    },
  },
  {
    id: "materials",
    icon: BookOpen,
    title: "Learning Materials",
    tagline: "For everyone",
    description:
      "Guides, templates, and checklists I use to ship quality Android apps — published as engineering notes as I write them.",
    points: [
      "Architecture templates",
      "Release checklists",
      "Compose patterns",
    ],
    cta: { label: "Read the notes", kind: "link", href: "/notes" },
  },
];
