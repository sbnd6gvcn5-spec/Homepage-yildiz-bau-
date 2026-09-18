import Image from "next/image";
import { brand, nav, footer } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: t.surface }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt="Yildiz Bau – Fliesenfachbetrieb Bielefeld"
            width={1152}
            height={504}
            className="h-11 w-auto"
          />
          <p className="mt-3 text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
            {footer.addressPlaceholder}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase" style={{ ...t.bodyFont, color: t.stone }}>
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:opacity-70" style={{ ...t.bodyFont, color: t.ink }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium tracking-[0.2em] uppercase" style={{ ...t.bodyFont, color: t.stone }}>
            Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-sm" style={{ ...t.bodyFont, color: t.ink }}>
            <li>{footer.phonePlaceholder}</li>
            <li>{footer.emailPlaceholder}</li>
          </ul>
        </div>
      </div>

      <div
        className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t px-6 pt-6 text-xs"
        style={{ borderColor: t.stone + "40", color: t.stone, ...t.bodyFont }}
      >
        <span>
          © {new Date().getFullYear()} {brand.name}
        </span>
        <div className="flex gap-4">
          {footer.legalLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:opacity-70">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
