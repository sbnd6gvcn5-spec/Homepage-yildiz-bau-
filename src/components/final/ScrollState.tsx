"use client";

import { useEffect } from "react";

/**
 * Setzt zwei Zustandsattribute auf <html>, an denen das CSS in globals.css
 * haengt:
 *   data-scrolled  — der Kopfbereich ist aus dem Bild gescrollt (Kopf wird
 *                    kompakter und bekommt einen leicht deckenden Hintergrund)
 *   data-near-end  — der Kontaktbereich ist im Bild (Floating-Button blendet
 *                    sich aus)
 *
 * Bewusst per IntersectionObserver statt Scroll-Listener: kein Arbeiten bei
 * jedem Scroll-Frame, und der Browser rechnet ausserhalb des Main-Threads.
 */
export function ScrollState() {
  useEffect(() => {
    const root = document.documentElement;
    const observers: IntersectionObserver[] = [];

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

    return () => {
      observers.forEach((observer) => observer.disconnect());
      delete root.dataset.scrolled;
      delete root.dataset.nearEnd;
    };
  }, []);

  return null;
}
