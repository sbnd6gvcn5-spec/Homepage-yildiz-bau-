import { brand, nav, footer } from "@/lib/content";
import { a } from "./tokens";

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: a.charcoal }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold" style={{ ...a.headingFont, color: a.paper }}>
            {brand.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed opacity-60" style={{ ...a.bodyFont, color: a.paper }}>
            {footer.addressPlaceholder}
          </p>
        </div>

        <div style={a.bodyFont}>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase opacity-50" style={{ color: a.paper }}>
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm opacity-80 hover:opacity-100" style={{ color: a.paper }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div style={a.bodyFont}>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase opacity-50" style={{ color: a.paper }}>
            Kontakt
          </p>
          <ul className="mt-3 space-y-2 text-sm opacity-80" style={{ color: a.paper }}>
            <li>{footer.phonePlaceholder}</li>
            <li>{footer.emailPlaceholder}</li>
          </ul>
        </div>
      </div>

      <div
        className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t px-6 pt-6 text-xs opacity-50"
        style={{ borderColor: a.paper, color: a.paper, ...a.bodyFont }}
      >
        <span>
          © {new Date().getFullYear()} {brand.name}
        </span>
        <div className="flex gap-4">
          {footer.legalLinks.map((label) => (
            <a key={label} href="#" className="hover:opacity-100">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
