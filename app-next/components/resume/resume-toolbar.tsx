"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export function ResumeToolbar() {
  return (
    <div className="resume-toolbar mx-auto mb-6 flex w-full max-w-3xl items-center justify-between gap-3 print:hidden">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to portfolio
      </Link>
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:brightness-105 active:scale-95"
      >
        <Download className="h-4 w-4" /> Download PDF
      </button>
    </div>
  );
}
