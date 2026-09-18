// Inhalt für die finale Website: Yildiz, Fliesenfachbetrieb in Bielefeld & OWL.
// Schwerpunkt Fliesenarbeiten, ergänzt um angrenzende Gewerke (Treppen,
// Fensterbänke, Naturstein/Betonwerkstein, kleinere Maurerarbeiten, Innenputz,
// Abriss & Sanierung).
// Keine erfundenen Firmenfakten: kein Gründungsjahr, keine Mitarbeiterzahl,
// keine Bewertungen, keine Projektzahlen, ausdrücklich kein "Meisterbetrieb".
// Angaben zu Familienunternehmen und Handwerkskammer-Eintrag stammen vom Kunden.
// Kontaktdaten bleiben Platzhalter.

export const brand = {
  name: "Yildiz Bauunternehmen",
  short: "Yildiz Bau",
};

// Ankerlinks sind seitenübergreifend absolut ("/#..."), damit sie auch von
// /ueber-uns aus auf die Startseite springen.
export const nav = {
  links: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Referenzen", href: "/#referenzen" },
    { label: "Prozess", href: "/#prozess" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/#kontakt" },
  ],
  cta: "Angebot anfragen",
};

export const hero = {
  eyebrow: "Fliesenfachbetrieb Bielefeld & OWL",
  headline: "Fliesenarbeiten, bei denen jede Fuge sitzt.",
  sub: "Feinsteinzeug, Großformat, bodengleiche Duschen und Naturstein – fachgerecht verlegt für Bielefeld und die Region OWL.",
  primaryCta: "Angebot anfragen",
  secondaryCta: "Leistungen ansehen",
};

export const trust = {
  heading: "Worauf Sie sich verlassen können",
  values: [
    {
      title: "Exakte Verlegung",
      desc: "Millimetergenaue Ausrichtung von Großformat- und Feinsteinzeugfliesen.",
    },
    {
      title: "Saubere Fugenbilder",
      desc: "Gleichmäßige Fugen und exakte Anschlüsse für ein ruhiges Gesamtbild.",
    },
    {
      title: "Bodengleiche Duschlösungen",
      desc: "Fachgerechte Abdichtung und Gefälle für dichte, barrierearme Bäder.",
    },
    {
      title: "Klare Kommunikation",
      desc: "Ein Ansprechpartner von der Planung bis zur Übergabe.",
    },
  ],
};

export const services = {
  heading: "Leistungen",
  sub: "Fliesenarbeiten und angrenzende Gewerke — aus einer Hand.",
  items: [
    {
      title: "Feinsteinzeug / Großformatfliesen",
      desc: "Verlegung großformatiger Feinsteinzeugplatten mit exakter Ausrichtung und minimalen Fugenbildern.",
    },
    {
      title: "Boden- & Wandfliesen",
      desc: "Fachgerechte Verlegung im Wohn- und Sanitärbereich, abgestimmt auf Untergrund und Nutzung.",
    },
    {
      title: "Bad- & Duschfliesen (bodengleich)",
      desc: "Abdichtung, Gefälleaufbau und Fliesenarbeiten für bodengleiche Duschbereiche.",
    },
    {
      title: "Naturstein- / Feinsteinverlegung",
      desc: "Verlegung von Naturstein und Feinsteinzeug unter Berücksichtigung materialspezifischer Anforderungen.",
    },
    {
      title: "Treppenverkleidung",
      desc: "Verkleidung von Treppen mit Naturstein, Feinsteinzeug/Keramik oder Betonwerkstein.",
    },
    {
      title: "Fensterbänke",
      desc: "Fertigung und Verlegung von Fensterbänken aus Naturstein, Betonwerkstein oder Keramik.",
    },
    {
      title: "Naturstein- & Betonwerkstein-Arbeiten",
      desc: "Verarbeitung von Naturstein und Betonwerkstein für Böden, Verkleidungen und Sonderlösungen.",
    },
    {
      title: "Kleinere Maurerarbeiten",
      desc: "Ausführung kleinerer Maurerarbeiten im Zuge von Sanierung und Umbau.",
    },
    {
      title: "Innenputz",
      desc: "Putzarbeiten im Innenbereich als Untergrund für Fliesen und Oberflächen.",
    },
    {
      title: "Abriss- & Sanierungsarbeiten",
      desc: "Rückbau und Sanierung im Rahmen von Renovierungs- und Umbauprojekten.",
    },
  ],
};

export const references = {
  heading: "Referenzen",
  sub: "Eine Auswahl ausgeführter Arbeiten.",
  items: [
    {
      title: "Eingangsbereich",
      tag: "Bodenfliesen",
      src: "/referenzen/eingangsbereich-bodenfliesen.jpg",
      alt: "Dunkel gesprenkelte Bodenfliesen im Eingangsbereich eines Gebäudes mit Glasfassade",
    },
    {
      title: "Treppenanlage",
      tag: "Treppenverkleidung",
      src: "/referenzen/treppenverkleidung-naturstein.jpg",
      alt: "Innentreppe mit grauem Naturstein verkleidet, Trittstufen und Setzstufen",
    },
    {
      title: "Hallenboden",
      tag: "Verlegung",
      src: "/referenzen/bodenverlegung-halle.jpg",
      alt: "Verlegung dunkler Bodenplatten im Mörtelbett entlang einer Hallenwand",
    },
    {
      title: "Lager- und Verkaufsraum",
      tag: "Bodenfläche",
      src: "/referenzen/bodenflaeche-lager.jpg",
      alt: "Fertig verlegte dunkle Bodenfliesen in einem Lager- und Verkaufsraum",
    },
    {
      title: "Treppe in hellem Naturstein",
      tag: "Treppenverkleidung",
      src: "/referenzen/treppenverkleidung-naturstein-hell.jpg",
      alt: "Treppenstufen mit hellem Naturstein verkleidet, Zustand während der Bauphase",
    },
  ],
};

export const process = {
  heading: "Prozess",
  sub: "So läuft die Zusammenarbeit ab.",
  steps: [
    {
      title: "Erstgespräch",
      desc: "Begehung vor Ort, Abstimmung von Format, Verlegemuster und Anforderungen.",
    },
    {
      title: "Planung & Angebot",
      desc: "Nachvollziehbares Angebot mit Material- und Leistungsübersicht.",
    },
    {
      title: "Ausführung",
      desc: "Untergrundvorbereitung, Abdichtung und fachgerechte Ausführung inklusive Verfugung.",
    },
    {
      title: "Übergabe & Reinigung",
      desc: "Endreinigung der Flächen und Abnahme des fertigen Ergebnisses.",
    },
  ],
};

export const about = {
  eyebrow: "Über uns",
  headline: "Ein Familienbetrieb für Fliesen- und Steinarbeiten.",
  lead: "Yildiz Bauunternehmen ist ein familiengeführter Handwerksbetrieb aus Bielefeld mit Schwerpunkt auf Fliesen-, Naturstein- und Betonwerksteinarbeiten.",
  paragraphs: [
    "Als Familienunternehmen sind wir langjährig am Markt und arbeiten mit kurzen Wegen: Sie sprechen direkt mit den Personen, die Ihr Projekt auch ausführen.",
    "Wir richten uns flexibel nach Ihrem Bauablauf und halten getroffene Absprachen ein — von der Begehung über die Ausführung bis zur Übergabe.",
  ],
  values: [
    {
      title: "Familienunternehmen",
      desc: "Inhabergeführt, mit persönlicher Betreuung und direkter Ansprache.",
    },
    {
      title: "Langjährig am Markt",
      desc: "Erfahrung aus Fliesen-, Naturstein- und Sanierungsprojekten.",
    },
    {
      title: "Flexibel & zuverlässig",
      desc: "Abstimmung auf Ihren Zeitplan und verbindliche Absprachen.",
    },
    {
      title: "Eingetragener Handwerksbetrieb",
      desc: "Der Betrieb ist in der Handwerkskammer eingetragen.",
    },
  ],
};

export const cta = {
  heading: "Bereit für Ihr Fliesenprojekt?",
  sub: "Schildern Sie uns Ihr Vorhaben — wir melden uns mit den nächsten Schritten.",
  button: "Angebot anfragen",
};

export const footer = {
  addressPlaceholder: "[Adresse – Platzhalter]",
  phonePlaceholder: "[Telefon – Platzhalter]",
  emailPlaceholder: "[E-Mail – Platzhalter]",
  legalLinks: ["Impressum", "Datenschutz"],
};
