// Gemeinsamer Inhalt für alle drei Prototypen (design-a/b/c).
// Bewusst ohne verifizierbare Firmenfakten: kein Gründungsjahr, keine
// Meisterbetrieb-Angabe, keine Mitarbeiterzahl, keine Bewertungen, keine
// Projektzahlen. Alles unten ist neutraler Platzhaltertext.

export const brand = {
  name: "Yildiz Bauunternehmen",
  short: "Yildiz Bau",
};

export const nav = {
  links: [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Referenzen", href: "#referenzen" },
    { label: "Prozess", href: "#prozess" },
    { label: "Kontakt", href: "#kontakt" },
  ],
  cta: "Projekt anfragen",
};

export const hero = {
  eyebrow: "Hochbau & Sanierung",
  headline: "Bauprojekte, die halten, was die Planung verspricht.",
  sub: "Von der ersten Skizze bis zur Übergabe: ein Ansprechpartner, klare Abläufe und saubere Ausführung auf der Baustelle.",
  primaryCta: "Projekt besprechen",
  secondaryCta: "Leistungen ansehen",
};

export const trust = {
  heading: "Worauf Sie sich verlassen können",
  values: [
    {
      title: "Ein Ansprechpartner",
      desc: "Von der Anfrage bis zur Übergabe begleitet Sie eine feste Kontaktperson.",
    },
    {
      title: "Transparente Angebote",
      desc: "Nachvollziehbare Kalkulation ohne versteckte Posten.",
    },
    {
      title: "Saubere Baustellen",
      desc: "Geordnete Abläufe und Rücksicht auf Nachbarschaft und Umgebung.",
    },
    {
      title: "Klare Kommunikation",
      desc: "Regelmäßige Updates zum Baufortschritt, verständlich erklärt.",
    },
  ],
  logosNote: "Referenz- und Partnerlogos (Platzhalter)",
};

export const services = {
  heading: "Leistungen",
  sub: "Ein Überblick über unser Leistungsspektrum im Hoch- und Ausbau.",
  items: [
    {
      title: "Neubau",
      desc: "Planung und Umsetzung von Wohn- und Gewerbebauten von Grund auf.",
    },
    {
      title: "Umbau & Sanierung",
      desc: "Bestandsgebäude modernisieren und für neue Nutzung ertüchtigen.",
    },
    {
      title: "Anbau & Aufstockung",
      desc: "Zusätzlichen Raum schaffen, ohne den Charakter des Bestands zu verlieren.",
    },
    {
      title: "Dach & Fassade",
      desc: "Witterungsschutz und Optik aus einer Hand, fachgerecht ausgeführt.",
    },
    {
      title: "Innenausbau",
      desc: "Grundrisse, Böden, Trockenbau und Oberflächen bis zur Bezugsfertigkeit.",
    },
    {
      title: "Projektsteuerung",
      desc: "Koordination von Gewerken, Terminen und Budget während der Bauphase.",
    },
  ],
};

export const references = {
  heading: "Referenzen",
  sub: "Eine Auswahl unserer Arbeit (Platzhalterprojekte).",
  items: [
    { title: "Projekt Platzhalter 01", tag: "Neubau" },
    { title: "Projekt Platzhalter 02", tag: "Sanierung" },
    { title: "Projekt Platzhalter 03", tag: "Anbau" },
    { title: "Projekt Platzhalter 04", tag: "Innenausbau" },
    { title: "Projekt Platzhalter 05", tag: "Dach & Fassade" },
    { title: "Projekt Platzhalter 06", tag: "Neubau" },
  ],
};

export const process = {
  heading: "Prozess",
  sub: "So läuft die Zusammenarbeit ab.",
  steps: [
    {
      title: "Erstgespräch",
      desc: "Wir besprechen Ihr Vorhaben, Rahmenbedingungen und Ziele.",
    },
    {
      title: "Planung & Angebot",
      desc: "Sie erhalten eine nachvollziehbare Planung mit klarer Kalkulation.",
    },
    {
      title: "Umsetzung",
      desc: "Ausführung auf der Baustelle mit regelmäßiger Abstimmung.",
    },
    {
      title: "Übergabe & Nachbetreuung",
      desc: "Abnahme des fertigen Projekts und Ansprechpartner danach.",
    },
  ],
};

export const cta = {
  heading: "Bereit für Ihr Bauprojekt?",
  sub: "Schildern Sie uns Ihr Vorhaben — wir melden uns mit den nächsten Schritten.",
  button: "Projekt anfragen",
};

export const footer = {
  addressPlaceholder: "[Adresse – Platzhalter]",
  phonePlaceholder: "[Telefon – Platzhalter]",
  emailPlaceholder: "[E-Mail – Platzhalter]",
  legalLinks: ["Impressum", "Datenschutz"],
};

export const designs = [
  {
    slug: "design-a",
    label: "Werkstoff",
    desc: "Materialbetont, warm, handwerklich.",
  },
  {
    slug: "design-b",
    label: "Präzision",
    desc: "Technisch, klar, rasterbasiert.",
  },
  {
    slug: "design-c",
    label: "Signatur",
    desc: "Mutig, kontrastreich, eigenständig.",
  },
] as const;
