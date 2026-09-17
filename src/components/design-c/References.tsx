import { references } from "@/lib/content";
import { PlaceholderImage } from "@/components/placeholder-image";
import { c } from "./tokens";

export function References() {
  return (
    <section id="referenzen" className="py-16 md:py-24" style={{ backgroundColor: c.offwhite }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ ...c.headingFont, color: c.black }}>
            {references.heading}
          </h2>
          <p className="max-w-sm text-sm leading-relaxed opacity-70" style={{ ...c.bodyFont, color: c.black }}>
            {references.sub}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {references.items.map((item) => (
            <div key={item.title} className="group">
              <PlaceholderImage
                className="aspect-[4/3] w-full transition-transform group-hover:-translate-y-1"
                style={{ color: c.black, backgroundColor: "#e7e3d8" }}
              />
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t pt-3" style={{ borderColor: c.black }}>
                <h3 className="text-base font-bold" style={{ ...c.headingFont, color: c.black }}>
                  {item.title}
                </h3>
                <span
                  className="text-[10px] font-bold tracking-wide uppercase"
                  style={{ ...c.bodyFont, color: "#fff", backgroundColor: c.black, padding: "3px 8px" }}
                >
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
