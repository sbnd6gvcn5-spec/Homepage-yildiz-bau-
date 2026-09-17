import { cta } from "@/lib/content";
import { c } from "./tokens";

export function Cta() {
  return (
    <section id="kontakt" className="py-16 md:py-24" style={{ backgroundColor: c.gold }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-4xl leading-[1.02] font-bold sm:text-5xl lg:text-6xl" style={{ ...c.headingFont, color: c.black }}>
          {cta.heading}
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed" style={{ ...c.bodyFont, color: c.black, opacity: 0.75 }}>
          {cta.sub}
        </p>
        <a
          href="#kontakt-formular"
          className="mt-8 inline-block px-8 py-4 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5"
          style={{ ...c.bodyFont, backgroundColor: c.black, color: c.offwhite }}
        >
          {cta.button}
        </a>
      </div>
    </section>
  );
}
