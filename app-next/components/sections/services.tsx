import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SpotlightCard } from "@/components/magic/spotlight-card";
import { Reveal } from "@/components/magic/reveal";
import { Section } from "@/components/section";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export function Services() {
  return (
    <Section
      id="services"
      file="services.kt"
      eyebrow="Work with me"
      title="Ways we can build together"
      intro="Beyond full-time work, I mentor engineers, build apps, and share what I learn. If any of these fit, my inbox is open."
    >
      <div className="grid gap-4 md:grid-cols-2">
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
                    <h3 className="text-lg font-semibold tracking-tight">
                      {s.title}
                    </h3>
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
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground/90">
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
    </Section>
  );
}
