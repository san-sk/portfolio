"use client";

import { useViewMode, type ViewMode } from "@/lib/use-view-mode";
import { setViewMode } from "@/lib/view";
import { cn } from "@/lib/utils";

const MODES: ViewMode[] = ["lite", "full"];

/** Always-available segmented control to switch between the lite and full view. */
export function ViewToggle({ className }: { className?: string }) {
  const mode = useViewMode();

  return (
    <div
      role="group"
      aria-label="Portfolio detail level"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/60 p-0.5 font-mono text-[10px] leading-none",
        className,
      )}
    >
      {MODES.map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setViewMode(m)}
          aria-pressed={mode === m}
          className={cn(
            "rounded-full px-2 py-1 capitalize transition-colors",
            mode === m
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
