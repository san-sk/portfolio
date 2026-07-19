import { SpotlightCard } from "@/components/magic/spotlight-card";
import { Reveal } from "@/components/magic/reveal";
import { Section } from "@/components/section";
import { domains } from "@/data/expertise";

export function Expertise() {
  const featured = domains.filter((d) => d.featured);
  const toolkit = domains.filter((d) => !d.featured);

  return (
    <Section
      id="expertise"
      file="expertise.kt"
      eyebrow="Engineering Expertise"
      title="The stack I actually ship with"
      intro="Grouped the way my résumé is — every tool here is one I can defend in a room, not a logo wall."
    >
      {/* Tier 1 — signature domains */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.title} delay={i}>
              <SpotlightCard className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-muted/50 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  {d.accentNote && (
                    <span className="text-right text-[11px] font-medium uppercase tracking-wider text-accent/80">
                      {d.accentNote}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.tagline}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {d.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover/spotlight:border-accent/30"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>

      {/* Tier 2 — full toolkit reference */}
      <Reveal className="mt-4" delay={2}>
        <div className="card-surface p-6 sm:p-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-accent">full_toolkit.kt</span>
            <span className="text-muted-foreground/40">—</span>
            <span className="text-muted-foreground">the rest of the day-to-day</span>
          </div>
          <dl className="divide-y divide-border">
            {toolkit.map((d) => (
              <div
                key={d.title}
                className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[190px_1fr] sm:gap-6"
              >
                <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <d.icon className="h-4 w-4 text-accent" />
                  {d.title}
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {d.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
