"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Command,
  CornerDownLeft,
  FileText,
  Github,
  HeartHandshake,
  Home,
  Layers,
  Linkedin,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

interface Item {
  label: string;
  hint: string;
  icon: typeof Home;
  action: () => void;
  keywords?: string;
  external?: boolean;
}

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const go = (href: string) => {
    onOpenChange(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.href = `${base}/${href}`;
    } else if (href.startsWith("/")) {
      window.location.href = `${base}${href}`;
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const items: Item[] = useMemo(
    () => [
      { label: "Home", hint: "Top", icon: Home, action: () => go("#top") },
      { label: "Expertise", hint: "Domains", icon: Layers, action: () => go("#expertise") },
      { label: "Featured Projects", hint: "Case studies", icon: Sparkles, action: () => go("#projects") },
      { label: "Experience", hint: "Journey", icon: Briefcase, action: () => go("#experience") },
      { label: "Work with me", hint: "Mentorship & more", icon: HeartHandshake, action: () => go("#services"), keywords: "coaching mentorship hire freelance workshop materials" },
      { label: "Notes", hint: "Writing", icon: BookOpen, action: () => go("/notes"), keywords: "blog articles writing" },
      { label: "Résumé", hint: "View & download", icon: FileText, action: () => go("/resume") },
      { label: "Contact", hint: "Say hello", icon: Mail, action: () => go("#contact") },
      { label: "GitHub", hint: `@${site.socials.githubUser}`, icon: Github, action: () => go(site.socials.github), external: true },
      { label: "LinkedIn", hint: "Connect", icon: Linkedin, action: () => go(site.socials.linkedin), external: true },
      { label: "Email me", hint: site.email, icon: Mail, action: () => go(`mailto:${site.email}`), external: true },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const filtered = items.filter((i) =>
    (i.label + i.hint + (i.keywords ?? "")).toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      filtered[active]?.action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[16vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 0.61, 0.36, 1] }}
            className="glass relative w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl shadow-black/50"
            onKeyDown={onKeyDown}
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
              {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section or link…"
                className="h-14 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="hidden items-center gap-1 rounded-md border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground sm:flex">
                ESC
              </kbd>
            </div>
            <ul className="max-h-[52vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;
                </li>
              )}
              {filtered.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={item.action}
                      className={cn(
                        "flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                        active === i ? "bg-accent/15 text-foreground" : "text-muted-foreground",
                      )}
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-surface/60">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1">{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.hint}</span>
                      {item.external ? (
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                      ) : (
                        <CornerDownLeft className="h-3.5 w-3.5 opacity-0 group-hover:opacity-60" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between border-t border-border px-4 py-2.5 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Command className="h-3 w-3" /> Command palette
              </span>
              <span>↑↓ to navigate · ↵ to select</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
