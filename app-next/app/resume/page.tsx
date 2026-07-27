import type { Metadata } from "next";
import { Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { ResumeToolbar } from "@/components/resume/resume-toolbar";
import { resume } from "@/data/resume";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${resume.name} — ${resume.role}. ${resume.summary.slice(0, 140)}…`,
  alternates: { canonical: `${site.url}/resume` },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="resume-h2 mb-3 border-b border-accent/30 pb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-accent">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <div className="resume-doc px-4 pb-24 pt-28 print:p-0 print:pt-0">
      <ResumeToolbar />

      <article className="resume-sheet mx-auto w-full max-w-3xl rounded-2xl border border-border bg-surface/80 p-8 shadow-xl shadow-black/20 sm:p-12 print:max-w-none print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none">
        <header className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between print:border-black/70">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl print:text-black">
              {resume.name}
            </h1>
            <p className="mt-1.5 text-sm font-medium text-accent">{resume.role}</p>
          </div>
          <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground sm:items-end sm:text-right print:text-black">
            <li className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
              {resume.location}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-foreground print:text-black print:underline"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
              {resume.phone}
            </li>
            <li className="flex items-center gap-2">
              <a
                href={site.socials.linkedin}
                className="inline-flex items-center gap-1.5 hover:text-foreground print:text-black print:underline"
              >
                <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent" />
                LinkedIn
              </a>
              <span aria-hidden className="text-muted-foreground/40 print:text-black">·</span>
              <a
                href={site.url}
                className="inline-flex items-center gap-1.5 hover:text-foreground print:text-black print:underline"
              >
                <Globe className="h-3.5 w-3.5 shrink-0 text-accent" />
                Portfolio
              </a>
            </li>
          </ul>
        </header>

        <p className="mt-5 text-sm leading-relaxed text-foreground/90 print:mt-3 print:text-black">
          {resume.summary}
        </p>

        <section className="mt-8 print:mt-4">
          <SectionTitle>Core Skills</SectionTitle>
          <div className="grid gap-x-8 gap-y-1.5 sm:grid-cols-2 print:gap-y-1">
            {resume.skills.map((s) => (
              <p key={s.label} className="break-inside-avoid text-[13px] leading-relaxed text-muted-foreground print:text-black">
                <strong className="text-foreground print:text-black">{s.label}:</strong>{" "}
                {s.value}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 print:mt-4">
          <SectionTitle>Professional Experience</SectionTitle>
          <div className="space-y-5 print:space-y-3">
            {resume.experience.map((role) => (
              <div key={role.title + role.period} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[15px] font-semibold text-foreground print:text-black">
                    {role.title}
                  </h3>
                  <span className="text-xs font-medium text-accent">{role.period}</span>
                </div>
                <p className="text-[13px] text-muted-foreground print:text-black">{role.org}</p>
                <ul className="mt-2 space-y-1.5">
                  {role.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground print:text-black"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 print:mt-4">
          <SectionTitle>Key Projects</SectionTitle>
          <ul className="space-y-1.5">
            {resume.projects.map((p) => (
              <li
                key={p.name}
                className="break-inside-avoid text-[13px] leading-relaxed text-muted-foreground print:text-black"
              >
                <strong className="text-foreground print:text-black">{p.name}:</strong>{" "}
                {p.detail}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 print:mt-4">
          <SectionTitle>Education</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {resume.education.map((e) => (
              <p key={e.degree} className="break-inside-avoid text-[13px] leading-relaxed text-muted-foreground print:text-black">
                <strong className="text-foreground print:text-black">{e.degree}</strong>
                <br />
                {e.place}
              </p>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
