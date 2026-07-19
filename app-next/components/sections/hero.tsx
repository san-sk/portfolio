"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Github, Monitor, Smartphone } from "lucide-react";
import { PlatformGreeter } from "@/components/magic/platform-greeter";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { GradientText } from "@/components/magic/gradient-text";
import { Magnetic } from "@/components/magic/magnetic";
import { Counter } from "@/components/magic/counter";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/misc";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 0.61, 0.36, 1] as const },
  },
};

const GUTTER = ["01", "02", "03", "04", "05", "06", "07"];

export function Hero() {
  const reduce = useReducedMotion();
  const jump = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
    >
      <AuroraBackground />

      {/* editor line-number gutter */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 flex-col justify-center gap-[2.1vw] border-r border-border/60 pl-4 font-mono text-xs text-muted-foreground/40 md:flex"
      >
        {GUTTER.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      <div className="container-x py-24 md:pl-24">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
          className="max-w-5xl"
        >
          <motion.div variants={reduce ? undefined : item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
              {/* Desktop viewers → nudge to mobile */}
              <span className="hidden items-center gap-2 lg:inline-flex">
                <Smartphone className="h-3.5 w-3.5 text-accent" />
                You&rsquo;re in the IDE build — open it on your phone and it
                becomes a native-feeling Android app.
              </span>
              {/* Mobile viewers → nudge to desktop */}
              <span className="inline-flex items-center gap-2 lg:hidden">
                <Monitor className="h-3.5 w-3.5 text-accent" />
                You&rsquo;re in the Android build — open it on desktop and it
                becomes an engineer&rsquo;s IDE.
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-6 font-mono text-sm text-accent"
          >
            <span className="text-muted-foreground">{"// "}</span>
            Senior Android Engineer · Kotlin · Compose · KMP
          </motion.p>

          <motion.h1
            variants={reduce ? undefined : item}
            className="mt-5 text-balance text-[clamp(2.75rem,8.5vw,7.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]"
          >
            I build apps
            <br />
            that feel{" "}
            <GradientText>inevitable.</GradientText>
            {!reduce && (
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="ml-2 inline-block h-[0.82em] w-[0.5ch] translate-y-[0.06em] bg-accent align-middle"
              />
            )}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : item}
            className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            I&rsquo;m <span className="font-medium text-foreground">{site.fullName}</span>.
            Seven years turning Kotlin, Jetpack Compose &amp; Kotlin Multiplatform
            into products that feel effortless — obsessed with the details most
            people never notice.
          </motion.p>

          <motion.div
            variants={reduce ? undefined : item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <div className="contents" data-lite-hide>
              <Magnetic>
                <Button size="lg" onClick={() => jump("#projects")}>
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Magnetic>
            </div>
            <div className="contents" data-lite-hide>
              <Magnetic strength={0.25}>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => (window.location.href = asset("/resume"))}
                >
                  <FileText className="h-4 w-4" />
                  View résumé
                </Button>
              </Magnetic>
            </div>
            <div data-lite-only>
              <Magnetic>
                <Button size="lg" onClick={() => jump("#contact")}>
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Magnetic>
            </div>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.dl
            variants={reduce ? undefined : item}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs leading-tight text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>

          {/* Inline greeter for mobile / tablet — the headline fills the width
              on small screens, so there's no right whitespace to float into
              without overlapping the text. */}
          <motion.div
            variants={reduce ? undefined : item}
            className="mt-14 flex justify-center xl:hidden"
          >
            <PlatformGreeter className="w-[188px]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Android + Apple greeter floating in the right whitespace (desktop only,
          where the layout actually leaves room beside the headline) */}
      <PlatformGreeter className="absolute right-24 top-[37%] z-10 hidden w-[248px] -translate-y-1/2 xl:block 2xl:right-40 2xl:w-[288px]" />
    </section>
  );
}
