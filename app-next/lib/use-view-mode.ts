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
    setMode(
      document.documentElement.getAttribute("data-view") === "lite"
        ? "lite"
        : "full",
    );
  }, []);

  return mode;
}
