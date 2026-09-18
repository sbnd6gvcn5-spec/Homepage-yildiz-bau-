import type { ReactNode } from "react";
import { t } from "./tokens";

/**
 * Gemeinsames Geruest der Rechtsseiten: schmale Lesespalte im Stil der
 * uebrigen Seiten (Serif-Ueberschriften, Sans-Fliesstext, Haarlinien).
 * Die Spalte ist bewusst schmaler als der 6xl-Raster der Startseite —
 * Fliesstext liest sich bei rund 70 Zeichen pro Zeile am ruhigsten.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  notice,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  notice?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section
        className="border-b"
        style={{ backgroundColor: t.sand, borderColor: t.stone + "40" }}
      >
        {/* Aussen das 6xl-Raster der uebrigen Seiten, damit Ueberschrift und
            Logo auf derselben Kante sitzen; innen die schmale Lesespalte. */}
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="max-w-3xl">
            <p
              className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase"
              style={{ ...t.bodyFont, color: t.terracotta }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: t.terracotta }}
              />
              {eyebrow}
            </p>
            <h1
              className="text-3xl leading-[1.18] font-medium tracking-tight sm:text-4xl lg:text-5xl"
              style={{ ...t.headingFont, color: t.ink }}
            >
              {title}
            </h1>
            {intro && (
              <p
                className="mt-5 max-w-[52ch] text-lg leading-relaxed"
                style={{ ...t.bodyFont, color: t.stone }}
              >
                {intro}
              </p>
            )}
            {notice && (
              <p
                className="mt-8 max-w-[60ch] border-l-2 py-1 pl-4 text-sm leading-relaxed"
                style={{
                  ...t.bodyFont,
                  borderColor: t.terracotta,
                  color: t.ink,
                }}
              >
                <strong className="font-medium">Hinweis:</strong> {notice}
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        className="py-14 md:py-20"
        style={{ backgroundColor: t.surface }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">{children}</div>
        </div>
      </section>
    </>
  );
}

/** Ein Block aus Ueberschrift und kurzen Angabezeilen (Impressum). */
export function LegalEntry({
  heading,
  lines,
  note,
}: {
  heading: string;
  lines: string[];
  note?: string;
}) {
  return (
    <div
      className="border-t py-6 first:border-t-0 first:pt-0"
      style={{ borderColor: t.stone + "40" }}
    >
      <h2
        className="text-xs font-medium tracking-[0.2em] uppercase"
        style={{ ...t.bodyFont, color: t.stone }}
      >
        {heading}
      </h2>
      <div className="mt-3 space-y-1">
        {lines.map((line) => (
          <p
            key={line}
            className="text-base leading-relaxed"
            style={{ ...t.bodyFont, color: t.ink }}
          >
            {line}
          </p>
        ))}
      </div>
      {note && (
        <p
          className="mt-2 text-sm leading-relaxed"
          style={{ ...t.bodyFont, color: t.stone }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

/** Ein Abschnitt aus Ueberschrift und Fliesstext (Rechtshinweise, DSGVO). */
export function LegalSection({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2
        className="text-xl font-medium sm:text-2xl"
        style={{ ...t.headingFont, color: t.ink }}
      >
        {heading}
      </h2>
      {/* Zielmass sind rund 70 Zeichen je Zeile. Die ch-Einheit misst die
          Breite der Ziffer 0 und liegt damit ueber der mittleren Zeichen-
          breite - 58ch ergibt gemessen etwa 69 Zeichen. */}
      <div className="mt-4 max-w-[58ch] space-y-4">
        {paragraphs.map((text) => (
          <p
            key={text}
            className="text-base leading-relaxed"
            style={{ ...t.bodyFont, color: t.stone }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
