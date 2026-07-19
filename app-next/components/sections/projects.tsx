"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Target, Waypoints } from "lucide-react";
import { Section } from "@/components/section";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface/60">
      <div className={cn("absolute inset-0 bg-gradient-to-br", project.gradient)} />
      <div className="absolute inset-0 grid-lines opacity-30" />
      {/* stylized device frame */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative h-full w-[52%] rounded-[1.8rem] border border-border/80 bg-background/70 p-2 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-border" />
          <div className="flex h-full flex-col gap-2 rounded-[1.3rem] bg-surface/80 p-3">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-mono text-xs font-bold text-accent-foreground">
                {project.mono}
              </span>
              <div className="h-2 w-16 rounded-full bg-muted" />
            </div>
            <div className="mt-1 h-2 w-3/4 rounded-full bg-muted" />
            <div className="h-2 w-1/2 rounded-full bg-muted/70" />
            <div className="mt-auto grid grid-cols-2 gap-2">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-border bg-background/50 p-2"
                >
                  <div className="text-[11px] font-semibold text-accent">
                    {m.value}
                  </div>
                  <div className="text-[9px] text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const flip = index % 2 === 1;

  return (
    <motion.article
      initial={reduce ? undefined : { opacity: 0, y: 40 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      className="card-surface overflow-hidden p-5 sm:p-7"
    >
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2",
          flip && "lg:[direction:rtl]",
        )}
      >
        <div className={cn(flip && "lg:[direction:ltr]")}>
          <ProjectVisual project={project} />
        </div>

        <div className={cn("lg:[direction:ltr]", flip && "lg:pr-2")}>
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-medium text-accent">
              {project.category}
            </span>
            <span className="text-muted-foreground">{project.year}</span>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 text-pretty text-base text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <Target className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">The problem</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Waypoints className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">My approach</p>
                <ul className="mt-1 space-y-1">
                  {project.approach.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {(project.links.github || project.links.demo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                >
                  Live product <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      file="projects.kt"
      eyebrow="Featured Work"
      title="Products, not portfolio filler"
      intro="A few things I&rsquo;ve shipped — framed the way I think about them: a real problem, a considered approach, a measurable result."
    >
      <div className="space-y-6">
        {projects
          .filter((p) => p.featured)
          .map((p, i) => (
            <ProjectCase key={p.slug} project={p} index={i} />
          ))}
      </div>
    </Section>
  );
}
