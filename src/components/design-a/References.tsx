import { references } from "@/lib/content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { a } from "./tokens";

export function References() {
  return (
    <section
      id="referenzen"
      className="border-b-2 py-16 md:py-24"
      style={{ backgroundColor: a.paperDeep, borderColor: a.ink }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2
            className="text-2xl font-semibold sm:text-3xl"
            style={{ ...a.headingFont, color: a.ink }}
          >
            {references.heading}
          </h2>
          <p
            className="mt-3 text-base leading-relaxed opacity-80"
            style={{ ...a.bodyFont, color: a.ink }}
          >
            {references.sub}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.items.map((item) => (
            <div key={item.title} className="border-2" style={{ borderColor: a.ink }}>
              <PlaceholderImage
                className="aspect-[4/3] w-full"
                style={{ color: a.ink, backgroundColor: a.paper }}
              />
              <div className="p-4" style={{ backgroundColor: a.paper }}>
                <span
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                  style={{ color: a.rustDeep, ...a.bodyFont }}
                >
                  {item.tag}
                </span>
                <h3
                  className="mt-1 text-base font-semibold"
                  style={{ ...a.headingFont, color: a.ink }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
