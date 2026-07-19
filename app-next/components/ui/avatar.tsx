import { site } from "@/lib/site";
import { asset, cn } from "@/lib/utils";

/**
 * Theme-matched avatar. Uses site.avatar (a placeholder monogram by default).
 * Drop a real headshot into app-next/public and point site.avatar at it — the
 * grayscale→color hover treatment makes photos feel premium.
 */
export function Avatar({
  className,
  ring = true,
}: {
  className?: string;
  ring?: boolean;
}) {
  return (
    <span
      className={cn(
        "group/avatar relative inline-block shrink-0 overflow-hidden rounded-full",
        ring && "ring-1 ring-border",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(site.avatar)}
        alt={site.fullName}
        loading="lazy"
        className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover/avatar:scale-105 group-hover/avatar:grayscale-0"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-accent/0 transition-colors duration-500 group-hover/avatar:ring-accent/40"
      />
    </span>
  );
}
