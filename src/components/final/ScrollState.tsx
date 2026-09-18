"use client";

import { useEffect } from "react";

/** Versatz zwischen Elementen, die gemeinsam ins Bild kommen. */
const STAGGER_MS = 70;
/** Deckel, damit eine grosse Welle nicht spuerbar nachhinkt. Acht Stufen
 *  (560ms) decken einen vollen Bildschirm voll Eintraege ab — darunter
 *  laufen Zeilen, die zusammen ins Bild springen, sonst gleichzeitig. */
const MAX_STAGGER_STEPS = 8;

/**
 * Setzt zwei Zustandsattribute auf <html>, an denen das CSS in globals.css
 * haengt:
 *   data-scrolled  — der Kopfbereich ist aus dem Bild gescrollt (Kopf wird
 *                    kompakter und bekommt einen leicht deckenden Hintergrund)
 *   data-near-end  — der Kontaktbereich ist im Bild (Floating-Button blendet
 *                    sich aus)
 *
 * und blendet ausserdem die mit [data-reveal-item] markierten Bloecke ein,
 * sobald sie ins Bild kommen — jeweils genau einmal.
 *
 * Bewusst per IntersectionObserver statt Scroll-Listener: kein Arbeiten bei
 * jedem Scroll-Frame, und der Browser rechnet ausserhalb des Main-Threads.
 */
export function ScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    const observers: IntersectionObserver[] = [];

    // Quittung an das Inline-Skript in layout.tsx: die Einblendung laeuft,
    // der Sicherheits-Timeout dort darf den Startzustand stehen lassen.
    root.dataset.revealActive = "1";

    // Der Platzhalter im Fluss hat genau die Kopfhoehe: sobald er komplett
    // aus dem Bild ist, liegt der Kopf ueber dem Inhalt.
    const spacer = document.querySelector(".site-header-spacer");
    if (spacer) {
      const observer = new IntersectionObserver(([entry]) => {
        root.dataset.scrolled = String(!entry.isIntersecting);
      });
      observer.observe(spacer);
      observers.push(observer);
    }

    // Auf der Startseite der Kontaktbereich, auf den Rechtsseiten der Footer.
    const endMarker = document.getElementById("kontakt") ?? document.querySelector("footer");
    if (endMarker) {
      const observer = new IntersectionObserver(([entry]) => {
        root.dataset.nearEnd = String(entry.isIntersecting);
      });
      observer.observe(endMarker);
      observers.push(observer);
    }

    // Einblenden. Elemente, die im selben Callback ankommen, sind gemeinsam
    // ins Bild gekommen — genau daraus entsteht der Staffel-Versatz, ohne
    // dass im Markup Indizes gepflegt werden muessen. Der Hero-Bereich ist
    // beim Laden sichtbar und staffelt sich damit von selbst.
    const items = document.querySelectorAll<HTMLElement>("[data-reveal-item]");
    if (items.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          const angekommen = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => {
              const top = a.boundingClientRect.top - b.boundingClientRect.top;
              return top !== 0 ? top : a.boundingClientRect.left - b.boundingClientRect.left;
            });

          angekommen.forEach((entry, index) => {
            const element = entry.target as HTMLElement;
            const stufe = Math.min(index, MAX_STAGGER_STEPS);
            element.style.transitionDelay = `${stufe * STAGGER_MS}ms`;
            element.classList.add("is-revealed");
            // Nur einmal: danach nicht mehr beobachten.
            observer.unobserve(element);
          });
        },
        {
          threshold: 0.18,
          // Der grosszuegige obere Rand ist das Sicherheitsnetz: bei einem
          // schnellen Fling oder einem Ankersprung kann ein Element zwischen
          // zwei Frames von unterhalb nach oberhalb des Bildes wandern, ohne
          // die Schwelle je zu ueberschreiten — es bliebe dauerhaft
          // unsichtbar. Mit dem erweiterten Wurzelbereich zaehlt alles, was
          // bereits vorbeigescrollt ist, als sichtbar.
          rootMargin: "100000px 0px 0px 0px",
        },
      );
      items.forEach((item) => revealObserver.observe(item));
      observers.push(revealObserver);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
      delete root.dataset.scrolled;
      delete root.dataset.nearEnd;
      delete root.dataset.revealActive;
    };
  }, []);

  return null;
}
