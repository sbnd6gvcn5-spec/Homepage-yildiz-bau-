import { trust } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function Trust() {
  return (
    <section className="border-b py-16" style={{ backgroundColor: t.surface, borderColor: t.stone + "40" }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 data-reveal-item className="text-2xl font-medium sm:text-3xl" style={{ ...t.headingFont, color: t.ink }}>
          {trust.heading}
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust.values.map((v, i) => (
            <div key={v.title} data-reveal-item className="border-t pt-4" style={{ borderColor: t.stone + "40" }}>
              <span className="text-xs font-medium tracking-[0.2em]" style={{ ...t.bodyFont, color: t.terracotta }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-medium" style={{ ...t.headingFont, color: t.ink }}>
                {v.title}
              </h3>
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
