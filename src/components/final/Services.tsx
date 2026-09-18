import { services } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function Services() {
  return (
    <section id="leistungen" className="border-b py-16 md:py-24" style={{ backgroundColor: t.sand, borderColor: t.stone + "40" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div
          data-reveal-item
          className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-end sm:justify-between" style={{ borderColor: t.stone + "40" }}>
          <h2 className="text-2xl font-medium sm:text-3xl" style={{ ...t.headingFont, color: t.ink }}>
            {services.heading}
          </h2>
          <p className="max-w-md text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
            {services.sub}
          </p>
        </div>

        <div>
          {services.items.map((item, i) => (
            <div
              key={item.title}
              data-reveal-item
              className="grid gap-2 border-b py-6 sm:grid-cols-[80px_1.1fr_1.4fr] sm:items-baseline sm:gap-6"
              style={{ borderColor: t.stone + "40" }}
            >
              <span className="text-sm" style={{ ...t.bodyFont, color: t.terracotta }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-medium" style={{ ...t.headingFont, color: t.ink }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
