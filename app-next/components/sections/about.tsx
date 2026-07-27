import { MapPin } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { Section } from "@/components/section";
import { Avatar } from "@/components/ui/avatar";
import { site } from "@/lib/site";

const principles = [
  {
    title: "Details are the product",
    body: "The 8dp nobody notices, the animation that lands just right — that&rsquo;s where trust is built. I sweat it because users feel it.",
  },
  {
    title: "Simple is earned",
    body: "Clean architecture isn&rsquo;t about rules; it&rsquo;s about making the next change obvious. I optimize for the engineer who reads this in a year.",
  },
  {
    title: "Make failure observable",
    body: "If a failure isn&rsquo;t observable, it isn&rsquo;t done. I instrument state transitions so a 3am page points at the cause — that&rsquo;s exactly how I killed Norton VPN&rsquo;s silent connect failures.",
  },
];

const coreStack = [
  "Kotlin",
  "Jetpack Compose",
  "Compose Multiplatform",
  "Kotlin Multiplatform",
  "Coroutines & Flow",
  "Clean Architecture",
];

export function About() {
  return (
    <Section
      id="about"
      file="about.md"
      eyebrow="Mindset"
      title={
        <>
          I don&rsquo;t just have experience.
          <br />I <span className="text-gradient">care</span> about the craft.
        </>
      }
      intro="Some engineers count years. I count the moments a product finally feels right — then chase the next one."
      collapsible
      collapsedHeight={420}
    >
      <Reveal className="mb-4">
        <div className="card-surface flex flex-col items-center gap-6 p-6 text-center sm:flex-row sm:items-center sm:p-8 sm:text-left">
          <Avatar className="h-28 w-28 sm:h-32 sm:w-32" />
          <div>
            <p className="text-lg font-semibold tracking-tight">
              Hi, I&rsquo;m {site.fullName}.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              A Chennai-based software engineer who&rsquo;s spent seven years
              turning Kotlin, Compose &amp; KMP into products people quietly
              trust — across VPN, security, banking, healthcare and marketplace
              apps, plus the REST backends and tooling behind them.
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1 font-mono text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              {site.location}
            </span>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {principles.map((p, i) => (
          <Reveal key={p.title} delay={i} as="article">
            <div className="card-surface h-full p-6 transition-colors duration-300 hover:border-accent/40">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: p.body }}
              />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6" delay={1}>
        <div className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            What I reach for daily
          </span>
          <ul className="flex flex-wrap gap-2">
            {coreStack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground/90"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
