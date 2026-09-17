"use client";

import { useState } from "react";
import { nav, brand } from "@/lib/content";
import { c } from "./tokens";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: c.black }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-xl font-bold tracking-tight" style={{ ...c.headingFont, color: c.offwhite }}>
          {brand.short}
          <span style={{ color: c.gold }}>.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide uppercase transition-colors"
              style={{ ...c.bodyFont, color: c.offwhite }}
              onMouseEnter={(e) => (e.currentTarget.style.color = c.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = c.offwhite)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="px-5 py-2.5 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5"
            style={{ ...c.bodyFont, backgroundColor: c.gold, color: c.black }}
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
          <span className="h-0.5 w-6" style={{ backgroundColor: c.offwhite }} />
          <span className="h-0.5 w-6" style={{ backgroundColor: c.gold }} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-6 md:hidden">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-semibold uppercase"
              style={{ ...c.bodyFont, color: c.offwhite }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 text-center text-sm font-bold tracking-wide uppercase"
            style={{ ...c.bodyFont, backgroundColor: c.gold, color: c.black }}
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
