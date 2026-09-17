import { services } from "@/lib/content";
import { a } from "./tokens";

export function Services() {
  return (
    <section
      id="leistungen"
      className="border-b-2 py-16 md:py-24"
      style={{ backgroundColor: a.paper, borderColor: a.ink }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            className="text-2xl font-semibold sm:text-3xl"
            style={{ ...a.headingFont, color: a.ink }}
          >
            {services.heading}
          </h2>
          <p
            className="mt-3 text-base leading-relaxed opacity-80"
            style={{ ...a.bodyFont, color: a.ink }}
          >
            {services.sub}
          </p>
        </div>

        <div className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: a.ink }}>
          {services.items.map((item) => (
            <div key={item.title} className="p-6" style={{ backgroundColor: a.paper }}>
              <h3
                className="text-lg font-semibold"
                style={{ ...a.headingFont, color: a.ink }}
              >
                {item.title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed opacity-75"
                style={{ ...a.bodyFont, color: a.ink }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
