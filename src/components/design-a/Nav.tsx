"use client";

import { useState } from "react";
import { nav, brand } from "@/lib/content";
import { a } from "./tokens";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b-2"
      style={{ borderColor: a.ink, backgroundColor: a.paper }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight"
          style={{ ...a.headingFont, color: a.ink }}
        >
          {brand.short}
        </a>

        <nav className="hidden items-center gap-8 md:flex" style={a.bodyFont}>
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: a.ink }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-sm px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: a.rust }}
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
          <span className="h-0.5 w-6" style={{ backgroundColor: a.ink }} />
          <span className="h-0.5 w-6" style={{ backgroundColor: a.ink }} />
        </button>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t-2 px-6 py-4 md:hidden"
          style={{ borderColor: a.ink, ...a.bodyFont }}
        >
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium"
              style={{ color: a.ink }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm px-4 py-3 text-center text-sm font-semibold text-white"
            style={{ backgroundColor: a.rust }}
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
