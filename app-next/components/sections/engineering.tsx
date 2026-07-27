import { ArrowDown, Boxes, Database, LayoutTemplate } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Section } from "@/components/section";

const layers = [
  {
    icon: LayoutTemplate,
    name: "Presentation",
    detail: "Compose · MVI · unidirectional state",
  },
  {
    icon: Boxes,
    name: "Domain",
    detail: "Use cases · pure Kotlin · fully testable",
  },
  {
    icon: Database,
    name: "Data",
    detail: "Repositories · Retrofit / Room · one source of truth",
  },
];

const decisions = [
  {
    n: "01",
    title: "One source of truth, not scattered flags",
    body: "Norton VPN's connect flow is a single StateFlow state machine — every state is explicit and reproducible.",
    tradeoff:
      "Trade-off: more modeling upfront, in exchange for states you can test and reason about.",
  },
  {
    n: "02",
    title: "Modularize by feature",
    body: "Feature modules keep build times and blast radius small, so a growing team can ship without stepping on each other.",
    tradeoff:
      "Trade-off: more Gradle wiring today for parallel, conflict-free delivery tomorrow.",
  },
  {
    n: "03",
    title: "Instrument before you optimize",
    body: "Telemetry on every transition turns \u201cit feels flaky\u201d into a specific failing edge you can actually fix.",
    tradeoff:
      "Trade-off: a little extra code, so failures page you with the cause instead of a mystery.",
  },
];

export function Engineering() {
  return (
    <Section
      id="approach"
      file="approach.kt"
      eyebrow="Engineering Approach"
      title="How I think about systems"
      intro="The patterns I reach for when a product has to stay reliable at scale — and the trade-offs I actually made to get there."
      collapsible
      collapsedHeight={460}
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Layered architecture diagram */}
        <Reveal>
          <div className="card-surface h-full p-6 sm:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-accent">architecture</span>
              <span className="text-muted-foreground/40">—</span>
              <span className="text-muted-foreground">state down, events up</span>
            </div>
            <div className="space-y-3">
              {layers.map((l, i) => (
                <div key={l.name}>
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-muted/50 text-accent">
                      <l.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight">
                        {l.name}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground">
                        {l.detail}
                      </p>
                    </div>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-1 text-muted-foreground/40">
                      <ArrowDown className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Decisions + trade-offs */}
        <div className="grid gap-4">
          {decisions.map((d, i) => (
            <Reveal key={d.n} delay={i}>
              <div className="card-surface h-full p-6 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">{d.n}</span>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {d.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
                <p className="mt-3 border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-foreground/80">
                  {d.tradeoff}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
