"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  FileText,
  GitBranch,
  Github,
  Home,
  Layers,
  Mail,
  PanelsTopLeft,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/nav/theme-toggle";
import { CommandPalette } from "@/components/nav/command-palette";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* ---------------- Window title bar ---------------- */
function TitleBar({ onSearch }: { onSearch: () => void }) {
  return (
    <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-surface/80 px-3 backdrop-blur-md sm:px-4 lg:h-10">
      <div className="flex items-center gap-3">
        {/* Desktop: macOS-style window dots */}
        <div className="hidden items-center gap-1.5 lg:flex">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        {/* Mobile: Android-app brand */}
        <Link href="/" className="flex items-center gap-2.5 lg:hidden">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent font-mono text-sm font-bold text-accent-foreground">
            S
          </span>
          <span className="text-base font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>
        <span className="hidden font-mono text-xs text-muted-foreground lg:block">
          {site.socials.githubUser} — ~/portfolio
        </span>
      </div>

      <button
        onClick={onSearch}
        className="group hidden items-center gap-2 rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground lg:flex"
        aria-label="Open command palette"
      >
        <Search className="h-3 w-3" />
        <span>Go to…</span>
        <kbd className="rounded bg-muted px-1 text-[10px]">⌘K</kbd>
      </button>

      <div className="flex items-center gap-1">
        <button
          onClick={onSearch}
          aria-label="Search"
          className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
        >
          <Search className="h-5 w-5" />
        </button>
        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Github className="h-4 w-4" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}

/* ---------------- Left activity rail (global tools) ---------------- */
function ActivityRail({ onSearch }: { onSearch: () => void }) {
  const pathname = usePathname();
  const tools = [
    { label: "Explorer", icon: PanelsTopLeft, href: "#top", kind: "hash" as const },
    { label: "Search (⌘K)", icon: Search, action: onSearch, kind: "action" as const },
    { label: "Notes", icon: BookOpen, href: "/notes", kind: "route" as const },
    { label: "Résumé", icon: FileText, href: "/resume", kind: "route" as const },
    { label: "Source control", icon: Github, href: site.socials.github, kind: "external" as const },
    { label: "Contact", icon: Mail, href: "#contact", kind: "hash" as const },
  ];

  const jump = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `${BASE}/${href}`;
  };

  return (
    <aside className="fixed bottom-6 left-0 top-10 z-40 hidden w-14 flex-col items-center justify-between border-r border-border bg-surface/60 py-4 backdrop-blur-md lg:flex">
      <div className="flex flex-col items-center gap-1">
        <Link
          href="/"
          className="mb-3 grid h-9 w-9 place-items-center rounded-lg bg-accent font-mono text-sm font-bold text-accent-foreground"
          aria-label="Home"
        >
          S
        </Link>
        {tools.map((t) => {
          const Icon = t.icon;
          const active = t.kind === "route" && !!pathname?.includes(t.href!);
          const cls =
            "group relative grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";
          const tip = (
            <span className="pointer-events-none absolute left-12 z-50 whitespace-nowrap rounded-md border border-border bg-elevated px-2 py-1 text-xs text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {t.label}
            </span>
          );
          if (t.kind === "action")
            return (
              <button key={t.label} onClick={t.action} className={cls} aria-label={t.label}>
                <Icon className="h-5 w-5" />
                {tip}
              </button>
            );
          if (t.kind === "route")
            return (
              <Link
                key={t.label}
                href={t.href!}
                className={cn(cls, active && "bg-muted text-accent")}
                aria-label={t.label}
              >
                <Icon className="h-5 w-5" />
                {tip}
              </Link>
            );
          if (t.kind === "external")
            return (
              <a
                key={t.label}
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
                aria-label={t.label}
              >
                <Icon className="h-5 w-5" />
                {tip}
              </a>
            );
          return (
            <button key={t.label} onClick={() => jump(t.href!)} className={cls} aria-label={t.label}>
              <Icon className="h-5 w-5" />
              {tip}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

/* ---------------- File tabs (sections) ---------------- */
function TabStrip({ activeId }: { activeId: string }) {
  const stripRef = useRef<HTMLDivElement>(null);

  const jump = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `${BASE}/${href}`;
  };

  return (
    <div className="sticky top-10 z-30 hidden border-b border-border bg-background/85 backdrop-blur-md lg:block lg:pl-14">
      <div
        ref={stripRef}
        className="no-scrollbar flex items-stretch overflow-x-auto"
      >
        {site.nav.map((n) => {
          const active = activeId === n.href.slice(1);
          return (
            <button
              key={n.href}
              onClick={() => jump(n.href)}
              className={cn(
                "group relative flex shrink-0 items-center gap-2 border-r border-border px-4 py-2.5 font-mono text-xs transition-colors",
                active
                  ? "bg-surface text-foreground"
                  : "text-muted-foreground hover:bg-surface/50 hover:text-foreground",
              )}
            >
              {active && (
                <span className="absolute inset-x-0 top-0 h-0.5 bg-accent" />
              )}
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  active ? "bg-accent" : "bg-muted-foreground/40",
                )}
              />
              {n.file}
              <X
                className={cn(
                  "h-3 w-3 transition-opacity",
                  active ? "opacity-40" : "opacity-0 group-hover:opacity-40",
                )}
              />
            </button>
          );
        })}
        <Link
          href="/notes"
          className="flex shrink-0 items-center gap-2 border-r border-border px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-surface/50 hover:text-foreground"
        >
          <BookOpen className="h-3 w-3" />
          notes.md
        </Link>
        <Link
          href="/resume"
          className="flex shrink-0 items-center gap-2 border-r border-border px-4 py-2.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-surface/50 hover:text-foreground"
        >
          <FileText className="h-3 w-3" />
          resume.pdf
        </Link>
      </div>
    </div>
  );
}

/* ---------------- Bottom status bar ---------------- */
function StatusBar({ activeId }: { activeId: string }) {
  const [clock, setClock] = useState("");
  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const activeLabel = site.nav.find((n) => n.href.slice(1) === activeId)?.file ?? "hero.kt";

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 hidden h-6 items-center justify-between border-t border-border bg-surface/90 px-3 font-mono text-[11px] text-muted-foreground backdrop-blur-md lg:flex">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 text-accent">
          <GitBranch className="h-3 w-3" /> main
        </span>
        <span className="hidden sm:inline">Kotlin 2.2</span>
        <span className="hidden sm:inline">Compose</span>
        <span className="truncate">▸ {activeLabel}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden sm:inline">LF</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Ready
        </span>
        <span suppressHydrationWarning>{clock}</span>
      </div>
    </footer>
  );
}

/* ---------------- Mobile bottom navigation (Android-app style) ---------------- */
function BottomNav({ activeId }: { activeId: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const items = [
    { label: "Home", icon: Home, href: "#top", kind: "hash" as const },
    { label: "Skills", icon: Layers, href: "#expertise", kind: "hash" as const },
    { label: "Work", icon: Sparkles, href: "#projects", kind: "hash" as const },
    { label: "Notes", icon: BookOpen, href: "/notes", kind: "route" as const },
    { label: "Contact", icon: Mail, href: "#contact", kind: "hash" as const },
  ];

  const jump = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = `${BASE}/${href}`;
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      {items.map((it) => {
        const Icon = it.icon;
        const active =
          it.kind === "route"
            ? !!pathname?.includes(it.href)
            : isHome && activeId === it.href.slice(1);
        const inner = (
          <>
            <span
              className={cn(
                "grid h-8 w-16 place-items-center rounded-full transition-colors",
                active ? "bg-accent/15 text-accent" : "text-muted-foreground",
              )}
            >
              <Icon className="h-[22px] w-[22px]" />
            </span>
            <span
              className={cn(
                "mt-0.5 text-[11px] font-medium",
                active ? "text-accent" : "text-muted-foreground",
              )}
            >
              {it.label}
            </span>
          </>
        );
        const cls = "flex flex-col items-center justify-center pb-2 pt-1.5";
        return it.kind === "route" ? (
          <Link key={it.label} href={it.href} className={cls} aria-label={it.label}>
            {inner}
          </Link>
        ) : (
          <button
            key={it.label}
            onClick={() => jump(it.href)}
            className={cls}
            aria-label={it.label}
          >
            {inner}
          </button>
        );
      })}
    </nav>
  );
}

/* ---------------- Shell ---------------- */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState("");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const ids = ["top", ...site.nav.map((n) => n.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <div className="min-h-screen">
      <TitleBar onSearch={() => setPaletteOpen(true)} />
      <ActivityRail onSearch={() => setPaletteOpen(true)} />
      {isHome && <TabStrip activeId={activeId} />}
      <main className="pb-24 lg:pb-10 lg:pl-14">{children}</main>
      <StatusBar activeId={activeId} />
      <BottomNav activeId={activeId} />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  );
}
