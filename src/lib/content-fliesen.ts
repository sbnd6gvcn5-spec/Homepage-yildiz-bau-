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

// Die Website ist ein Onepager: alle Navigationspunkte sind Sprungmarken
// innerhalb der Startseite, in der Reihenfolge der Sektionen.
export const nav = {
  links: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Prozess", href: "#prozess" },
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Kontakt", href: "#kontakt" },
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
      title: "Bad in Betonoptik",
      tag: "Großformat",
      src: "/referenzen/bad-betonoptik-grossformat.jpg",
      alt: "Bad mit großformatigen Wand- und Bodenfliesen in Betonoptik, vorbereitete Anschlüsse für Waschbecken",
      // Hochformat: Ausschnitt nach oben, damit Wandfläche und Anschlüsse im Bild bleiben.
      position: "center 38%",
    },
    {
      title: "Treppenanlage",
      tag: "Treppenverkleidung",
      src: "/referenzen/treppenverkleidung-naturstein.jpg",
      alt: "Innentreppe mit grauem Naturstein verkleidet, Trittstufen und Setzstufen",
    },
    {
      title: "Bodengleiche Dusche",
      tag: "Bad & Dusche",
      src: "/referenzen/bodengleiche-dusche-dachschraege.jpg",
      alt: "Bodengleiche Dusche unter einer Dachschräge mit Akzentfläche in Steinoptik und Duschrinne",
      // Hochformat: Ausschnitt nach unten, sonst fehlen Bodenfläche und Duschrinne.
      position: "center 72%",
    },
    {
      title: "Zugangsbereich mit Leitsystem",
      tag: "Leitsystem",
      src: "/referenzen/zugangsbereich-leitsystem.jpg",
      alt: "Dunkler Fliesenboden mit weißem taktilem Leitsystem im Zugangsbereich eines öffentlichen Gebäudes",
    },
    {
      title: "Lager- und Verkaufsraum",
      tag: "Bodenfläche",
      src: "/referenzen/bodenflaeche-lager.jpg",
      alt: "Fertig verlegte dunkle Bodenfliesen in einem Lager- und Verkaufsraum",
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

// Provisorische Beispielnummer fuer "Anrufen" und WhatsApp. Sie ist bewusst
// als Platzhalter erkennbar und wird vom Kunden noch ersetzt.
// TODO: echte Telefonnummer einsetzen
export const contact = {
  phoneDisplay: "+49 521 1234567",
  phoneHref: "tel:+495211234567",
  // wa.me erwartet die Nummer in E.164 ohne Plus und ohne Trennzeichen.
  whatsappHref: "https://wa.me/495211234567",
};

export const floatingCta = {
  offer: "Angebot anfragen",
  call: "Anrufen",
  whatsapp: "WhatsApp",
  callAria: "Anrufen unter +49 521 1234567 (Platzhalternummer)",
  whatsappAria: "WhatsApp-Chat mit +49 521 1234567 (Platzhalternummer)",
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
