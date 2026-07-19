"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with a pointer-following radial highlight and a subtle border sheen.
 * Progressive enhancement — degrades to a static card without JS.
 */
export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
} & Record<string, unknown>) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={onMove}
      {...rest}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-2xl border border-border bg-surface/60 transition-colors duration-300",
        "hover:border-accent/40",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--x,50%) var(--y,50%), hsl(var(--accent) / 0.12), transparent 60%)",
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  );
}
