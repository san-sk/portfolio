"use client";

import { Download } from "lucide-react";
import { PageBackLink } from "@/components/nav/page-back";

// Pre-generated, identical for every OS/browser (no print dialog involved).
// Regenerate with `npm run resume:pdf` whenever the résumé content changes.
// Bump `v` when résumé/PDF content changes so browsers don't serve a stale cache.
const pdfHref = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf?v=2`;

export function ResumeToolbar() {
  return (
    <div className="resume-toolbar mx-auto mb-6 flex w-full max-w-3xl items-center justify-between gap-3 print:hidden">
      <PageBackLink />
      <a
        href={pdfHref}
        download="Santhanam-K-Resume.pdf"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:brightness-105 active:scale-95"
      >
        <Download className="h-4 w-4" /> Download PDF
      </a>
    </div>
  );
}
