"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { nav } from "@/lib/content-fliesen";
import { t } from "./tokens";

// Farben des Kopfs als CSS-Variablen, weil die Scroll-Zustände in
// globals.css liegen (siehe Kommentar dort).
const headerVars = {
  "--header-bg": t.surface,
  "--header-bg-scrolled": "rgba(255, 255, 255, 0.88)",
} as CSSProperties;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="site-header border-b"
        style={{ ...headerVars, borderColor: t.stone + "40" }}
      >
        <div className="site-header-bar mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="/#top" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Yildiz Bau – Fliesenfachbetrieb Bielefeld"
              width={1152}
              height={504}
              priority
              className="site-header-logo w-auto"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex" style={t.bodyFont}>
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: t.ink }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              className="border px-4 py-2 text-sm font-medium transition-colors hover:text-white"
              style={{ borderColor: t.terracotta, color: t.terracotta }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.terracotta)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {nav.cta}
            </a>
          </nav>

          <button
            id="mobile-menu-toggle"
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Menü öffnen"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-px w-6" style={{ backgroundColor: t.ink }} />
            <span className="h-px w-6" style={{ backgroundColor: t.ink }} />
            <span className="h-px w-6" style={{ backgroundColor: t.ink }} />
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            className="flex flex-col gap-1 border-t px-6 py-4 md:hidden"
            style={{ borderColor: t.stone + "40", backgroundColor: t.surface }}
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium"
                style={{ ...t.bodyFont, color: t.ink }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 border px-4 py-3 text-center text-sm font-medium"
              style={{ ...t.bodyFont, borderColor: t.terracotta, color: t.terracotta }}
            >
              {nav.cta}
            </a>
          </nav>
        )}
      </header>

      {/* Hält im Fluss die volle Kopfhöhe frei — der Kopf selbst ist fixiert. */}
      <div aria-hidden="true" className="site-header-spacer" />
    </>
  );
}
