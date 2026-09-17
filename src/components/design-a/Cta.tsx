import { cta } from "@/lib/content";
import { a } from "./tokens";

export function Cta() {
  return (
    <section
      id="kontakt"
      className="border-b-2 py-16 text-center md:py-24"
      style={{ backgroundColor: a.rust, borderColor: a.ink }}
    >
      <div className="mx-auto max-w-2xl px-6">
        <h2
          className="text-3xl font-semibold sm:text-4xl"
          style={{ ...a.headingFont, color: a.paper }}
        >
          {cta.heading}
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ ...a.bodyFont, color: a.paper, opacity: 0.9 }}>
          {cta.sub}
        </p>
        <a
          href="#kontakt-formular"
          className="mt-8 inline-block rounded-sm px-8 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: a.ink, color: a.paper, ...a.bodyFont }}
        >
          {cta.button}
        </a>
      </div>
    </section>
  );
}
