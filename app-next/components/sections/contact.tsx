"use client";

import { ArrowUpRight, Copy, Check, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magic/magnetic";
import { site } from "@/lib/site";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 grid-lines opacity-20" />
      </div>

      <div className="container-x text-center">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="eyebrow mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to opportunities
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Let&rsquo;s build something
            <br />
            worth <span className="text-gradient">caring about.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg text-muted-foreground">
            Senior/staff roles, ambitious product teams, or a hard Android
            problem — if quality matters to you, we&rsquo;ll get along.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnetic>
              <Button
                size="lg"
                onClick={() => (window.location.href = `mailto:${site.email}`)}
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </Button>
            </Magnetic>
            <button
              onClick={copyEmail}
              className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full border border-border bg-surface/60 px-5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-accent" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" /> Copy email
                </>
              )}
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {[
              { icon: Github, href: site.socials.github, label: "GitHub" },
              { icon: Linkedin, href: site.socials.linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <Icon className="h-4 w-4" /> {label}
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
              </a>
            ))}
          </div>

          <p className="mt-14 font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.fullName} — built with Next.js &amp;
            Compose-grade attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
