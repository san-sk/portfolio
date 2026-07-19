export interface Note {
  /** Unique slug — used as the key and (later) the route. */
  slug: string;
  title: string;
  /** One or two sentence teaser. */
  summary: string;
  /** ISO date, e.g. "2026-01-20". */
  date: string;
  /** e.g. "6 min read". */
  readingTime: string;
  tags: string[];
  /**
   * Optional external link (Medium, dev.to, personal blog). If present, the
   * card opens it in a new tab. Leave undefined for drafts / coming-soon.
   */
  href?: string;
  draft?: boolean;
}

/**
 * Add notes here as you write them — the /notes page renders automatically and
 * shows a polished empty state until the first entry lands.
 *
 * Example:
 *   {
 *     slug: "compose-recomposition",
 *     title: "Taming recomposition in Jetpack Compose",
 *     summary: "A practical checklist for finding and fixing needless recompositions.",
 *     date: "2026-02-01",
 *     readingTime: "7 min read",
 *     tags: ["Compose", "Performance"],
 *     href: "https://medium.com/@you/...",
 *   },
 */
export const notes: Note[] = [];
