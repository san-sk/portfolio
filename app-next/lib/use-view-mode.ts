"use client";

import { useEffect, useState } from "react";

export type ViewMode = "full" | "lite";

/**
 * Reads the current portfolio view mode set by the inline `viewInitScript`
 * (driven by the `?view=` query param). Defaults to "full" during SSR/first
 * paint, then syncs on mount.
 */
export function useViewMode(): ViewMode {
  const [mode, setMode] = useState<ViewMode>("full");

  useEffect(() => {
    const sync = () =>
      setMode(
        document.documentElement.getAttribute("data-view") === "lite"
          ? "lite"
          : "full",
      );
    sync();
    // The view chooser applies a choice at runtime; keep consumers in sync.
    window.addEventListener("viewchange", sync);
    return () => window.removeEventListener("viewchange", sync);
  }, []);

  return mode;
}
