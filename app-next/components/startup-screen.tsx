"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Gauge, Layers3 } from "lucide-react";
import { PlatformGreeter } from "@/components/magic/platform-greeter";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Magnetic } from "@/components/magic/magnetic";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { setViewMode } from "@/lib/view";
import type { ViewMode } from "@/lib/use-view-mode";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;

const wrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
// Text: rises up while a blur clears — feels like it's coming into focus.
const rise = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};
// Greeter + buttons: springy pop-in.
const pop = {
  hidden: { opacity: 0, scale: 0.55, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 220,
      damping: 16,
      mass: 0.9,
    },
  },
};
const btnRow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/**
 * Cold-start splash shown only on the bare root (no `?view=` param). It greets
 * the visitor and asks for a pace, then fades to reveal the app underneath.
 * Direct `?view=lite` / `?view=full` links skip it entirely.
 */
export function StartupScreen() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  // Once a choice is made the mascot is "thrown" before we reveal the app.
  const [leaving, setLeaving] = useState<ViewMode | null>(null);

  useEffect(() => {
    setOpen(document.documentElement.getAttribute("data-view-ask") === "1");
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const reveal = (mode: ViewMode) => {
    setViewMode(mode);
    setOpen(false);
  };

  const enter = (mode: ViewMode) => {
    if (leaving) return;

    if (reduce) {
      reveal(mode);
      window.dispatchEvent(new CustomEvent("app:entered", { detail: mode }));
      return;
    }

    // 1) Android throws the Apple up, 2) reveal the app, 3) the hero greeter
    //    catches the Apple and settles it (see the app:entered listener).
    setLeaving(mode);
    window.setTimeout(() => reveal(mode), 850);
    window.setTimeout(
      () => window.dispatchEvent(new CustomEvent("app:entered", { detail: mode })),
      1000,
    );
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "f") enter("full");
      else if (k === "l") enter("lite");
      else if (e.key === "Escape") enter("full");
    };
    // Non-gating: the first scroll/swipe just dives into the full portfolio.
    const skip = () => enter("full");
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", skip, { passive: true });
    window.addEventListener("touchmove", skip, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", skip);
      window.removeEventListener("touchmove", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Choose how to explore the portfolio"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background px-6"
        >
          <AuroraBackground />

          {/* IDE boot chip (desktop) — slides in from the corner */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="absolute left-4 top-4 hidden items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground sm:flex"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-accent">~/portfolio</span>
            <span className="text-muted-foreground/50">— booting workspace…</span>
          </motion.div>

          <motion.div
            variants={reduce ? undefined : wrap}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "visible"}
            className="relative flex w-full max-w-xl flex-col items-center text-center"
          >
            <motion.div variants={reduce ? undefined : pop} className="relative">
              {/* accent glow that blooms in behind the mascot */}
              <motion.span
                aria-hidden
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4 }}
                animate={{ opacity: leaving ? 0 : 1, scale: leaving ? 1.6 : 1 }}
                transition={{ duration: 1.1, ease: "easeOut", delay: leaving ? 0 : 0.1 }}
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
              />
              {/* the Android stays; on choose it throws the Apple up and away */}
              <PlatformGreeter
                className="w-[180px]"
                phase={leaving ? "throw" : undefined}
              />
            </motion.div>

            <div
              className={cn(
                "flex flex-col items-center transition-all duration-300 ease-out",
                leaving && "pointer-events-none scale-95 opacity-0 blur-sm",
              )}
            >
            <motion.p
              variants={reduce ? undefined : rise}
              className="mt-6 font-mono text-xs text-accent"
            >
              <span className="text-muted-foreground">{"// "}</span>
              {site.fullName} · Senior Software Engineer
            </motion.p>

            <motion.h1
              variants={reduce ? undefined : rise}
              className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl"
            >
              Pick your pace.
            </motion.h1>

            <motion.p
              variants={reduce ? undefined : rise}
              className="mt-4 text-pretty text-sm text-muted-foreground sm:text-base"
            >
              Short on time, or here to dig in? Pick a pace — or just scroll to
              dive straight in. You can switch anytime once you&rsquo;re inside.
            </motion.p>

            <motion.div
              variants={reduce ? undefined : btnRow}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            >
              <motion.div variants={reduce ? undefined : pop}>
                <Magnetic>
                  <Button size="lg" onClick={() => enter("full")}>
                    <Layers3 className="h-4 w-4" />
                    Full tour
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Button>
                </Magnetic>
              </motion.div>
              <motion.div variants={reduce ? undefined : pop}>
                <Magnetic strength={0.25}>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => enter("lite")}
                  >
                    <Gauge className="h-4 w-4" />
                    Quick look
                  </Button>
                </Magnetic>
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
