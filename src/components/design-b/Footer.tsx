import { brand, nav, footer } from "@/lib/content";
import { b } from "./tokens";

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: b.surface }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <p className="text-base font-semibold" style={{ ...b.headingFont, color: b.ink }}>
            {brand.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ ...b.bodyFont, color: b.muted }}>
            {footer.addressPlaceholder}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ ...b.monoFont, color: b.muted }}>
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:opacity-70" style={{ ...b.bodyFont, color: b.ink }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ ...b.monoFont, color: b.muted }}>
            Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-sm" style={{ ...b.bodyFont, color: b.ink }}>
            <li>{footer.phonePlaceholder}</li>
            <li>{footer.emailPlaceholder}</li>
          </ul>
        </div>
      </div>

      <div
        className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t px-6 pt-6 text-xs"
        style={{ borderColor: b.line, color: b.muted, ...b.monoFont }}
      >
        <span>
          © {new Date().getFullYear()} {brand.name}
        </span>
        <div className="flex gap-4">
          {footer.legalLinks.map((label) => (
            <a key={label} href="#" className="hover:opacity-70">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
