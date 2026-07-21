import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { SpotlightCard } from "@/components/magic/spotlight-card";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "Beyond full-time work — 1:1 mentorship for Android engineers, contract app development, and hands-on team workshops on Compose, architecture and performance.",
  alternates: { canonical: `${site.url}/work-with-me` },
};

export default function WorkWithMePage() {
  return (
    <div className="container-x pt-28 pb-24">
      <Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-accent">services.kt</span>
          <span className="text-muted-foreground/40">—</span>
          <span className="text-muted-foreground">Work with me</span>
        </div>

        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Ways we can build together
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Beyond full-time work, I mentor engineers, build apps, and share what
          I learn. If any of these fit, my inbox is open.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {services.map((s, i) => {
          const Icon = s.icon;
          const href =
            s.cta.kind === "email"
              ? `mailto:${site.email}?subject=${encodeURIComponent(s.cta.subject)}`
              : s.cta.href;
          const isInternal = s.cta.kind === "link" && href.startsWith("/");

          const CTA = isInternal ? (
            <Link
              href={href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover/spotlight:translate-x-0.5"
            >
              {s.cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : (
            <a
              href={href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-transform group-hover/spotlight:translate-x-0.5"
            >
              {s.cta.label}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          );

          return (
            <Reveal key={s.id} delay={i}>
              <SpotlightCard className="flex h-full flex-col p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-muted/50 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {s.title}
                    </h2>
                    <p className="font-mono text-xs text-muted-foreground">
                      {s.tagline}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm text-foreground/90"
                    >
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">{CTA}</div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
