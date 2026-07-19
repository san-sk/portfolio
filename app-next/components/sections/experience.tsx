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
      <Reveal>
        <div className="relative">
          {/* Horizontal timeline spine the dots sit on */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[38px] hidden h-px bg-gradient-to-r from-accent/60 via-border to-transparent sm:block"
          />
          <ol className="-mx-4 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
            {experience.map((role) => (
              <li
                key={role.company}
                tabIndex={0}
                className="group relative flex w-[270px] shrink-0 snap-start flex-col rounded-2xl border border-border bg-surface/70 p-5 outline-none ring-accent/40 transition-colors duration-300 hover:border-accent/40 hover:bg-surface focus-visible:ring-2 sm:w-[290px]"
              >
                <span
                  className={cn(
                    "grid h-5 w-5 place-items-center rounded-full border-2",
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

                <span
                  className={cn(
                    "mt-4 font-mono text-xs",
                    role.current ? "text-accent" : "text-muted-foreground",
                  )}
                >
                  {role.period}
                </span>
                <h3 className="mt-1.5 text-base font-semibold leading-snug tracking-tight">
                  {role.role}
                  <span className="block font-normal text-muted-foreground">
                    {role.company}
                  </span>
                </h3>

                {/* Details reveal — collapsed by default, expands on hover / focus,
                    and stays open on touch devices that can't hover. */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 text-pretty text-sm leading-relaxed text-foreground/90">
                      {role.growth}
                    </p>
                    <ul className="mt-3 grid gap-1.5">
                      {role.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-2 text-[13px] leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <span className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground/60 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0 [@media(hover:none)]:hidden">
                  Hover to expand
                  <span aria-hidden>→</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}
