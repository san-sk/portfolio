"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE_QUERY = "(max-width: 1023px)";

/**
 * On mobile, clamps its content to `collapsedHeight` with a soft fade and a
 * "Show more" toggle so sections stay short — nobody wants to scroll a mile.
 * On desktop (lg+) it renders everything, untouched. The toggle only appears
 * when the content actually overflows the collapsed height.
 */
export function MobileCollapse({
  children,
  collapsedHeight = 380,
}: {
  children: React.ReactNode;
  collapsedHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const measure = useCallback(() => {
    const mobile = window.matchMedia(MOBILE_QUERY).matches;
    setIsMobile(mobile);
    const h = ref.current?.scrollHeight ?? 0;
    setFullHeight(h);
    setOverflows(h > collapsedHeight + 40);
  }, [collapsedHeight]);

  useEffect(() => {
    measure();
    const mq = window.matchMedia(MOBILE_QUERY);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    // Re-measure once late, after web fonts / images settle.
    const t = setTimeout(measure, 500);
    return () => {
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [measure]);

  const clamp = isMobile && overflows;
  const collapsed = clamp && !expanded;

  return (
    <div>
      <div
        ref={ref}
        style={{
          maxHeight: clamp ? (expanded ? fullHeight : collapsedHeight) : undefined,
        }}
        className="relative overflow-hidden transition-[max-height] duration-500 ease-out motion-reduce:transition-none"
      >
        {children}
        {collapsed && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/80 to-transparent"
          />
        )}
      </div>

      {clamp && (
        <div className="mt-6 flex justify-center lg:hidden">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground active:scale-95"
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                expanded && "rotate-180",
              )}
            />
          </button>
        </div>
      )}
    </div>
  );
}
