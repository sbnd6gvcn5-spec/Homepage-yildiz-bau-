"use client";

import { useState } from "react";
import { nav, brand } from "@/lib/content";
import { b } from "./tokens";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ borderColor: b.line, backgroundColor: b.surface }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-tight" style={{ ...b.headingFont, color: b.ink }}>
            {brand.short}
          </span>
          <span className="text-[10px] tracking-widest uppercase" style={{ ...b.monoFont, color: b.muted }}>
            Bauunternehmen
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
              style={{ ...b.bodyFont, color: b.ink }}
            >
              <span style={{ ...b.monoFont, color: b.accent, fontSize: "10px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="border px-4 py-2 text-sm font-semibold transition-colors hover:text-white"
            style={{ ...b.bodyFont, borderColor: b.accent, color: b.accent }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = b.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {nav.cta}
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-px w-6" style={{ backgroundColor: b.ink }} />
          <span className="h-px w-6" style={{ backgroundColor: b.ink }} />
          <span className="h-px w-6" style={{ backgroundColor: b.ink }} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t px-6 py-4 md:hidden" style={{ borderColor: b.line }}>
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium"
              style={{ ...b.bodyFont, color: b.ink }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 border px-4 py-3 text-center text-sm font-semibold"
            style={{ ...b.bodyFont, borderColor: b.accent, color: b.accent }}
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
