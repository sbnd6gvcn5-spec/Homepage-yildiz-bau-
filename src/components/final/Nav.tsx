"use client";

import { useState } from "react";
import Image from "next/image";
import { nav } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{ borderColor: t.stone + "40", backgroundColor: t.surface }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/#top" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Yildiz Bau – Fliesenfachbetrieb Bielefeld"
            width={1142}
            height={497}
            priority
            className="h-9 w-auto md:h-11"
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
        <nav id="mobile-menu" className="flex flex-col gap-1 border-t px-6 py-4 md:hidden" style={{ borderColor: t.stone + "40" }}>
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
  );
}
