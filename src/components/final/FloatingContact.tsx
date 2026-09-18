import { contact, floatingCta } from "@/lib/content-fliesen";
import { t } from "./tokens";

/**
 * Desktop: kleiner Floating-Button unten rechts, blendet sich im
 * Kontaktbereich aus (Regel in globals.css).
 * Mobil: feste Aktionsleiste am unteren Rand. Der Platz dafuer ist ueber
 * .site-root reserviert, damit sie den Footer nie ueberdeckt.
 */
export function FloatingContact() {
  return (
    <>
      <a
        href="/#kontakt"
        className="floating-cta fixed right-6 bottom-6 z-30 hidden px-5 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 md:block"
        style={{ ...t.bodyFont, backgroundColor: t.terracotta }}
      >
        {floatingCta.offer}
      </a>

      <div
        className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t md:hidden"
        style={{
          backgroundColor: t.surface,
          borderColor: t.stone + "40",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <a
          href="/#kontakt"
          className="flex h-14 items-center justify-center text-center text-sm font-medium text-white"
          style={{ ...t.bodyFont, backgroundColor: t.terracotta }}
        >
          {floatingCta.offer}
        </a>
        <a
          href={contact.phoneHref}
          aria-label={floatingCta.callAria}
          className="flex h-14 items-center justify-center border-l text-center text-sm font-medium"
          style={{ ...t.bodyFont, color: t.ink, borderColor: t.stone + "40" }}
        >
          {floatingCta.call}
        </a>
        <a
          href={contact.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={floatingCta.whatsappAria}
          className="flex h-14 items-center justify-center border-l text-center text-sm font-medium"
          style={{ ...t.bodyFont, color: t.ink, borderColor: t.stone + "40" }}
        >
          {floatingCta.whatsapp}
        </a>
      </div>
    </>
  );
}
