import type { ViewMode } from "@/lib/use-view-mode";

/**
 * Applies a view mode everywhere at runtime: sets `data-view` on <html> (CSS
 * shows/hides sections), remembers the choice, reflects it in the URL, and
 * notifies `useViewMode` consumers — all without a reload.
 */
export function setViewMode(mode: ViewMode) {
  if (typeof document === "undefined") return;
  const el = document.documentElement;
  el.setAttribute("data-view", mode);
  el.removeAttribute("data-view-ask");
  try {
    localStorage.setItem("view-pref", mode);
    const url = new URL(window.location.href);
    url.searchParams.set("view", mode);
    window.history.replaceState({}, "", url);
  } catch {
    /* non-fatal (private mode / blocked storage) */
  }
  window.dispatchEvent(new Event("viewchange"));
}
