import { cn } from "@/lib/utils";

/**
 * Subtle, GPU-friendly ambient lighting. No JS, purely CSS blobs + grid.
 * Sits behind content; pointer-events disabled.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 grid-lines opacity-[0.35]" />
      <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px] animate-aurora" />
      <div className="absolute -top-24 right-[8%] h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[120px] animate-float" />
      <div className="absolute top-[30%] left-[4%] h-[22rem] w-[22rem] rounded-full bg-emerald-400/10 blur-[120px] animate-float [animation-delay:1.5s]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
