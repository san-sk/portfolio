import { Reveal } from "@/components/magic/reveal";
import { Section } from "@/components/section";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <Section
      id="experience"
      file="experience.log"
      eyebrow="The Journey"
      title="How I&rsquo;ve grown, one product at a time"
      intro="Less a résumé, more a through-line: each step taught me something the last one couldn&rsquo;t."
    >
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-[9px]"
        />
        <div className="space-y-8">
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i} as="article" className="relative pl-8 sm:pl-12">
              <span
                className={cn(
                  "absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 sm:h-5 sm:w-5",
                  role.current
                    ? "border-accent bg-accent/20 animate-pulse-ring"
                    : "border-border bg-background",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    role.current ? "bg-accent" : "bg-muted-foreground/50",
                  )}
                />
              </span>

              <div className="group card-surface p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {role.role}
                    <span className="text-muted-foreground"> · {role.company}</span>
                  </h3>
                  <span
                    className={cn(
                      "font-mono text-xs",
                      role.current ? "text-accent" : "text-muted-foreground",
                    )}
                  >
                    {role.period}
                  </span>
                </div>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/90">
                  {role.growth}
                </p>
                <ul className="mt-4 grid gap-1.5">
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
