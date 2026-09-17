import Link from "next/link";
import { brand, designs } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 items-center justify-center bg-neutral-50 px-6 py-16">
      <div className="w-full max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          {brand.name}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Design-Prototypen
        </h1>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-neutral-600">
          Drei gleich aufgebaute Homepage-Entwürfe zum Vergleich. Inhalte sind
          Platzhalter.
        </p>

        <ul className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
          {designs.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/${d.slug}`}
                className="flex items-center justify-between gap-4 py-5 transition-colors hover:bg-neutral-100"
              >
                <span>
                  <span className="block text-lg font-semibold text-neutral-900">
                    {d.label}
                  </span>
                  <span className="block text-sm text-neutral-600">{d.desc}</span>
                </span>
                <span className="font-mono text-sm text-neutral-400">
                  /{d.slug}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
