import { ArrowUpRight, Github } from "lucide-react";
import { SpotlightCard } from "@/components/magic/spotlight-card";
import { Reveal } from "@/components/magic/reveal";
import { Section } from "@/components/section";
import { repos } from "@/data/misc";
import { site } from "@/lib/site";

export function OpenSource() {
  const hasRepos = repos.length > 0;

  return (
    <Section
      id="open-source"
      file="open_source.kt"
      eyebrow="Open Source"
      title="Building in the open"
      intro="I share experiments and notes as I learn — the code that doesn&rsquo;t make it into a product still teaches something."
    >
      <Reveal>
        <SpotlightCard
          as="a"
          className="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center"
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-muted/50 text-foreground">
              <Github className="h-7 w-7" />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-tight">
                github.com/{site.socials.githubUser}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Follow along for Android, Compose &amp; KMP experiments.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform group-hover/spotlight:scale-[1.03] sm:self-auto">
            View profile
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </SpotlightCard>
      </Reveal>

      {hasRepos && (
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={i}>
              <SpotlightCard
                as="a"
                className="block h-full p-5"
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{repo.name}</span>
                </div>
                <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-muted-foreground">
                  {repo.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {repo.topics.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: repo.langColor }}
                    />
                    {repo.language}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-50 transition-opacity group-hover/spotlight:opacity-100" />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
