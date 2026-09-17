import { brand, nav, footer } from "@/lib/content";
import { c } from "./tokens";

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: c.black }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <p className="text-xl font-bold" style={{ ...c.headingFont, color: c.offwhite }}>
            {brand.short}
            <span style={{ color: c.gold }}>.</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ ...c.bodyFont, color: c.gray }}>
            {footer.addressPlaceholder}
          </p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ ...c.bodyFont, color: c.gold }}>
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm hover:opacity-70" style={{ ...c.bodyFont, color: c.offwhite }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ ...c.bodyFont, color: c.gold }}>
            Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-sm" style={{ ...c.bodyFont, color: c.offwhite }}>
            <li>{footer.phonePlaceholder}</li>
            <li>{footer.emailPlaceholder}</li>
          </ul>
        </div>
      </div>

      <div
        className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t px-6 pt-6 text-xs"
        style={{ borderColor: "#2a2a2c", color: c.gray, ...c.bodyFont }}
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
