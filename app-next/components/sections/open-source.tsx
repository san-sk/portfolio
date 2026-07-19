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
        <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <Github className="h-6 w-6 shrink-0 text-accent" />
            <div className="min-w-0">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold tracking-tight transition-colors hover:text-accent"
              >
                github.com/{site.socials.githubUser}
              </a>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Follow along for Android, Compose &amp; KMP experiments.
              </p>
            </div>
          </div>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 self-start whitespace-nowrap text-sm font-semibold text-accent sm:self-auto"
          >
            View profile
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
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
