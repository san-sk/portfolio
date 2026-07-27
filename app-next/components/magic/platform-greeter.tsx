"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// A friendly Android-style robot waving hello, with an Apple buddy peeking out
// from behind (a little hide-and-seek). The cycling greetings nod to Android +
// iOS work and an AI-first workflow.
const greetings = [
  "Hi there!",
  "Vanakkam!",
  "Namaste!",
  "Android at heart.",
  "iOS-curious.",
  "AI-first, always.",
];

export type GreeterPhase = "throw" | "catch";

export function PlatformGreeter({
  className,
  phase,
}: {
  className?: string;
  /** "throw" launches the Apple up; "catch" drops it in and settles it. */
  phase?: GreeterPhase;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % greetings.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const active = !reduce && phase;

  // The Apple is the "ball": tossed up on throw, dropped in + settled on catch.
  const appleAnim = active
    ? phase === "throw"
      ? {
          x: [0, -14, 40],
          y: [0, 18, -340],
          rotate: [-6, -22, 260],
          scale: [1, 1.15, 0.35],
          opacity: [1, 1, 0],
        }
      : {
          x: [70, 34, 0],
          y: [-360, -70, 0],
          rotate: [260, 46, -6],
          scale: [0.35, 0.95, 1],
          opacity: [0, 1, 1],
        }
    : reduce
      ? undefined
      : { x: [0, -16, 0, 0], rotate: [-6, -12, -6, -6] };

  const appleTrans = active
    ? phase === "throw"
      ? { duration: 0.95, ease: [0.5, 0, 0.9, 0.4] as const }
      : { duration: 1.3, ease: [0.34, 1.35, 0.5, 1] as const }
    : { duration: 5, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" as const };

  // The robot reacts: crouch-and-launch on throw, a settle bob on catch.
  const robotAnim = active
    ? phase === "throw"
      ? { y: [0, 14, -20, 0], rotate: [0, -3, 5, 0] }
      : { y: [0, -12, 0], scale: [1, 1.05, 1] }
    : reduce
      ? undefined
      : { y: [0, -7, 0] };

  const robotTrans = active
    ? { duration: 0.95, ease: "easeOut" as const }
    : { duration: 4, repeat: Infinity, ease: "easeInOut" as const };

  // The throwing/catching arm swings up on cue, otherwise waves on a loop.
  const armAnim = active
    ? phase === "throw"
      ? { rotate: [0, 12, -75, -10] }
      : { rotate: [-45, -30, 0] }
    : reduce
      ? undefined
      : { rotate: [0, -26, 8, -26, 0] };

  const armTrans = active
    ? { duration: 0.9, ease: "easeOut" as const }
    : { duration: 1.8, repeat: Infinity, repeatDelay: 1.3, ease: "easeInOut" as const };

  return (
    <div className={cn("pointer-events-none relative select-none", className)}>
      {/* Cycling greeting bubble */}
      <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
        <div className="relative rounded-2xl border border-border bg-surface/90 px-3 py-1.5 font-mono text-xs shadow-lg backdrop-blur">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={greetings[i]}
              initial={reduce ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="inline-block whitespace-nowrap text-accent"
            >
              {greetings[i]}
            </motion.span>
          </AnimatePresence>
          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-surface/90" />
        </div>
      </div>

      <div className="relative flex justify-center pt-6">
        {/* Apple buddy peeking out from behind — a little hide-and-seek */}
        <motion.svg
          viewBox="0 0 384 512"
          aria-hidden
          className="absolute bottom-8 left-[6%] z-0 w-[34%] max-w-[64px] text-foreground/35 drop-shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
          animate={appleAnim}
          transition={appleTrans}
        >
          <path
            fill="currentColor"
            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
          />
        </motion.svg>

        {/* Android-style robot (original artwork), in front */}
        <motion.svg
          viewBox="0 0 200 224"
          className="relative z-10 w-[88%] max-w-[176px] text-accent drop-shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
          role="img"
          aria-label="A friendly robot waving hello"
          animate={robotAnim}
          transition={robotTrans}
        >
          <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none">
            <line x1="72" y1="52" x2="60" y2="33" />
            <line x1="128" y1="52" x2="140" y2="33" />
          </g>
          <path d="M55 112 L55 86 A45 45 0 0 1 145 86 L145 112 Z" fill="currentColor" />
          <circle cx="82" cy="80" r="6.5" fill="#ffffff" />
          <circle cx="118" cy="80" r="6.5" fill="#ffffff" />
          <rect x="55" y="120" width="90" height="72" rx="18" fill="currentColor" />
          <rect x="72" y="188" width="15" height="30" rx="7.5" fill="currentColor" />
          <rect x="113" y="188" width="15" height="30" rx="7.5" fill="currentColor" />
          <rect x="150" y="124" width="16" height="54" rx="8" fill="currentColor" />
          <motion.g
            style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}
            animate={armAnim}
            transition={armTrans}
          >
            <rect x="34" y="92" width="16" height="52" rx="8" fill="currentColor" />
          </motion.g>
        </motion.svg>
      </div>
    </div>
  );
}
