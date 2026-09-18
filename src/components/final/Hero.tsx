import Image from "next/image";
import { hero } from "@/lib/content-fliesen";
import { t } from "./tokens";

export function Hero() {
  return (
    <section id="top" className="border-b" style={{ backgroundColor: t.sand, borderColor: t.stone + "40" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
        <div>
          <p
            data-reveal-item
            className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ ...t.bodyFont, color: t.terracotta }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: t.terracotta }} />
            {hero.eyebrow}
          </p>
          <h1
            data-reveal-item
            className="text-4xl leading-[1.15] font-medium tracking-tight sm:text-5xl lg:text-6xl"
            style={{ ...t.headingFont, color: t.ink }}
          >
            {hero.headline}
          </h1>
          <p data-reveal-item className="mt-6 max-w-xl text-lg leading-relaxed" style={{ ...t.bodyFont, color: t.stone }}>
            {hero.sub}
          </p>
          <div data-reveal-item className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#kontakt"
              className="px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ ...t.bodyFont, backgroundColor: t.terracotta }}
            >
              {hero.primaryCta}
            </a>
            <a
              href="/#leistungen"
              className="border px-6 py-3 text-sm font-medium transition-colors hover:opacity-70"
              style={{ ...t.bodyFont, borderColor: t.ink, color: t.ink }}
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="border" style={{ borderColor: t.stone + "40" }}>
          <div
            className="relative aspect-[4/5] w-full overflow-hidden md:aspect-square"
            style={{ backgroundColor: t.surface }}
          >
            <Image
              src="/hero.jpg"
              alt="Treppenanlage mit hellem Naturstein verkleidet – Yildiz Bau"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
