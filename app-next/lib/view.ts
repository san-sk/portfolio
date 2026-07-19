import type { ViewMode } from "@/lib/use-view-mode";

/**
 * Applies a view mode everywhere at runtime: sets `data-view` on <html> (CSS
 * shows/hides sections), reflects it in the URL, and notifies `useViewMode`
 * consumers — all without a reload. The choice is not persisted, so the bare
 * URL always offers the hero chooser again.
 */
export function setViewMode(mode: ViewMode) {
  if (typeof document === "undefined") return;
  const el = document.documentElement;
  el.setAttribute("data-view", mode);
  el.removeAttribute("data-view-ask");
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("view", mode);
    window.history.replaceState({}, "", url);
  } catch {
    /* non-fatal */
  }
  window.dispatchEvent(new Event("viewchange"));
}
