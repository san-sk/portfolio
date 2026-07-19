import { Reveal } from "@/components/magic/reveal";
import { Section } from "@/components/section";

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
    title: "Ship, then sharpen",
    body: "I&rsquo;d rather release something honest and measurable than perfect and imaginary — then profile, refine, and repeat.",
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
    >
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
