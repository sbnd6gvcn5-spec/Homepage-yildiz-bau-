import { about } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function AboutValues() {
  return (
    <section className="border-b py-16 md:py-24" style={{ backgroundColor: t.surface, borderColor: t.stone + "40" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          {about.paragraphs.map((text) => (
            <p key={text} className="text-base leading-relaxed" style={{ ...t.bodyFont, color: t.ink }}>
              {text}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v, i) => (
            <div key={v.title} className="border-t pt-4" style={{ borderColor: t.stone + "40" }}>
              <span className="text-xs font-medium tracking-[0.2em]" style={{ ...t.bodyFont, color: t.terracotta }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-lg font-medium" style={{ ...t.headingFont, color: t.ink }}>
                {v.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
