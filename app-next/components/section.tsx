import { cn } from "@/lib/utils";
import { Reveal } from "@/components/magic/reveal";
import { MobileCollapse } from "@/components/magic/mobile-collapse";

export function Section({
  id,
  file,
  eyebrow,
  title,
  intro,
  children,
  className,
  align = "left",
  collapsible = false,
  collapsedHeight,
}: {
  id?: string;
  file?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  /** On mobile, clamp the body with a "Show more" toggle to keep the page short. */
  collapsible?: boolean;
  collapsedHeight?: number;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28", className)}
    >
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <Reveal
            className={cn(
              "mb-12 max-w-2xl sm:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {(eyebrow || file) && (
              <div
                className={cn(
                  "mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-1.5 font-mono text-xs",
                  align === "center" && "mx-auto",
                )}
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                {file && <span className="text-accent">{file}</span>}
                {file && eyebrow && (
                  <span className="text-muted-foreground/40">—</span>
                )}
                {eyebrow && (
                  <span className="text-muted-foreground">{eyebrow}</span>
                )}
              </div>
            )}
            {title && (
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {collapsible ? (
          <MobileCollapse collapsedHeight={collapsedHeight}>
            {children}
          </MobileCollapse>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
