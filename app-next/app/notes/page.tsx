import type { Metadata } from "next";
import { ArrowUpRight, Clock, PenLine } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { PageBackLink } from "@/components/nav/page-back";
import { notes } from "@/data/notes";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering Notes",
  description:
    "Notes and write-ups on Android, Jetpack Compose, Kotlin Multiplatform, architecture and performance.",
  alternates: { canonical: `${site.url}/notes` },
};

const published = notes
  .filter((n) => !n.draft)
  .sort((a, b) => +new Date(b.date) - +new Date(a.date));

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function NotesPage() {
  return (
    <div className="container-x pt-28 pb-24">
      <Reveal>
        <header className="flex max-w-3xl flex-col items-start">
          <PageBackLink />

          <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-accent">notes.md</span>
          <span className="text-muted-foreground/40">—</span>
          <span className="text-muted-foreground">Writing</span>
        </div>

        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Engineering notes
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Thoughts on Android, Jetpack Compose, Kotlin Multiplatform,
          architecture and the details that make apps feel great — written down
          as I learn them.
        </p>
        </header>
      </Reveal>

      {published.length === 0 ? (
        <Reveal className="mt-14" delay={1}>
          <div className="card-surface mx-auto max-w-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                ~/notes — zsh
              </span>
            </div>
            <div className="space-y-2 p-6 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-accent">$</span> ls ~/notes
              </p>
              <p className="text-muted-foreground/70">
                no entries yet — drafts in progress.
              </p>
              <p className="mt-4 text-foreground">
                <span className="text-accent">$</span> echo &quot;first post
                landing soon&quot;
                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent align-middle" />
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Want me to write about something specific? Suggest a topic.
            </p>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Note topic suggestion")}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:brightness-105 active:scale-95"
            >
              <PenLine className="h-4 w-4" /> Suggest a topic
            </a>
          </div>
        </Reveal>
      ) : (
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {published.map((note, i) => {
            const clickable = Boolean(note.href);
            const inner = (
              <>
                <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
                  <span>{formatDate(note.date)}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {note.readingTime}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-tight">
                  {note.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {note.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {note.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {clickable && (
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Read note <ArrowUpRight className="h-4 w-4" />
                  </span>
                )}
              </>
            );

            const cardClass =
              "card-surface block h-full p-6 transition-colors hover:border-accent/40";

            return (
              <Reveal key={note.slug} delay={i}>
                {clickable ? (
                  <a
                    href={note.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      )}
    </div>
  );
}
