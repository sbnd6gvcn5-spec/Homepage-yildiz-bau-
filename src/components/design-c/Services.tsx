import { services } from "@/lib/content";
import { c } from "./tokens";

export function Services() {
  return (
    <section id="leistungen" className="py-16 md:py-24" style={{ backgroundColor: c.black }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ ...c.headingFont, color: c.offwhite }}>
            {services.heading}
          </h2>
          <p className="max-w-sm text-sm leading-relaxed" style={{ ...c.bodyFont, color: c.gray }}>
            {services.sub}
          </p>
        </div>

        <div className="mt-10 border-t" style={{ borderColor: "#2a2a2c" }}>
          {services.items.map((item, i) => (
            <div
              key={item.title}
              className="group flex flex-col gap-2 border-b py-6 sm:flex-row sm:items-baseline sm:gap-8"
              style={{ borderColor: "#2a2a2c" }}
            >
              <span
                className="text-2xl font-bold sm:w-16"
                style={{ ...c.headingFont, color: c.goldDeep }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold sm:w-64 sm:shrink-0" style={{ ...c.headingFont, color: c.offwhite }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed sm:max-w-md" style={{ ...c.bodyFont, color: c.gray }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
