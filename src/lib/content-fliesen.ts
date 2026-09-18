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

// Die Inhaltsseite ist ein Onepager, daneben stehen die Rechtstexte als
// eigene Routen. Deshalb sind die Sprungmarken absolut ("/#..."), damit sie
// auch von /impressum und /datenschutz aus auf die Startseite zurueckfuehren.
export const nav = {
  links: [
    { label: "Leistungen", href: "/#leistungen" },
    { label: "Referenzen", href: "/#referenzen" },
    { label: "Prozess", href: "/#prozess" },
    { label: "Über uns", href: "/#ueber-uns" },
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
      title: "Erfahrung mit Großprojekten",
      desc: "Ausgeführte Arbeiten unter anderem in Wohnanlagen, Schulen und Einkaufszentren.",
    },
    {
      title: "Geschultes Team",
      desc: "Derzeit fünf geschulte Mitarbeiter, bei Bedarf unterstützt durch qualifizierte Subunternehmer.",
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
  legalLinks: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};

// ---------------------------------------------------------------------------
// Rechtstexte.
//
// Beide Seiten sind ausdruecklich nur Geruest: alle unternehmensbezogenen
// Angaben stehen als [Platzhalter] und muessen vom Betrieb eingesetzt werden.
// Die Datenschutzerklaerung ist KEIN rechtsverbindlicher Text - der finale
// Wortlaut gehoert ueber einen geprueften Generator oder eine anwaltliche
// Pruefung eingesetzt. Dieser Hinweis steht auch sichtbar auf der Seite.
// ---------------------------------------------------------------------------

export const imprint = {
  eyebrow: "Rechtliches",
  title: "Impressum",
  intro: "Angaben gemäß § 5 DDG (zuvor § 5 TMG).",
  entries: [
    {
      heading: "Diensteanbieter",
      lines: ["[Firmenname / Rechtsform]", "[Straße Hausnr.]", "[PLZ Ort]"],
    },
    {
      heading: "Vertreten durch",
      lines: ["[Inhaber/Vertretungsberechtigter]"],
    },
    {
      heading: "Kontakt",
      lines: ["Telefon: [Telefon]", "E-Mail: [E-Mail]"],
    },
    {
      heading: "Umsatzsteuer-Identifikationsnummer / Steuernummer",
      lines: ["[USt-IdNr. / Steuernummer]"],
    },
    {
      heading: "Eintragung in die Handwerksrolle",
      lines: [
        "Zuständige Handwerkskammer: [Handwerkskammer]",
        "Registrierungs-/Betriebsnummer: [Registrierungs-/Betriebsnummer]",
      ],
    },
    {
      heading: "Berufsbezeichnung und zuständige Kammer",
      lines: ["[Angaben]"],
    },
    {
      heading: "Berufshaftpflichtversicherung",
      lines: ["Versicherer: [Versicherer]", "Geltungsbereich: [Geltungsbereich]"],
      note: "Angabe optional – entfällt, wenn keine Versicherung anzugeben ist.",
    },
    {
      heading: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      lines: ["[Name, Anschrift]"],
    },
  ],
  notes: [
    {
      heading: "Haftung für Inhalte",
      paragraphs: [
        "Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
        "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Eine Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen, besteht nicht. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben davon unberührt. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich; bei Bekanntwerden entsprechender Rechtsverletzungen werden diese Inhalte umgehend entfernt.",
      ],
    },
    {
      heading: "Haftung für Links",
      paragraphs: [
        "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte kann keine Gewähr übernommen werden; verantwortlich ist stets der jeweilige Anbieter oder Betreiber der verlinkten Seiten.",
        "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Eine dauerhafte inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links umgehend entfernt.",
      ],
    },
    {
      heading: "Urheberrecht",
      paragraphs: [
        "Die auf diesen Seiten erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Urhebers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Sollte dennoch eine Urheberrechtsverletzung bekannt werden, bitten wir um einen entsprechenden Hinweis; bei Bekanntwerden von Rechtsverletzungen werden solche Inhalte umgehend entfernt.",
      ],
    },
  ],
};

export const privacy = {
  eyebrow: "Rechtliches",
  title: "Datenschutzerklärung",
  draftNotice:
    "Entwurf/Gerüst – finalen Text über geprüften Generator oder anwaltliche Prüfung einsetzen. Die folgenden Abschnitte geben nur die übliche Gliederung vor und sind nicht rechtsverbindlich.",
  sections: [
    {
      heading: "1. Verantwortlicher",
      paragraphs: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
        "[Firmenname / Rechtsform], [Straße Hausnr.], [PLZ Ort], Telefon [Telefon], E-Mail [E-Mail].",
        "[Platzhalter: gegebenenfalls vertretungsberechtigte Person ergänzen.]",
      ],
    },
    {
      heading: "2. Allgemeine Hinweise & Datenerfassung",
      paragraphs: [
        "[Platzhalter: kurzer Überblick, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden, zu welchem Zweck und auf welcher Rechtsgrundlage.]",
        "[Platzhalter: Hinweis auf Freiwilligkeit der Angaben und auf die Speicherdauer.]",
      ],
    },
    {
      heading: "3. Hosting",
      paragraphs: [
        "Diese Website wird bei folgendem Anbieter gehostet: [Hosting-Anbieter], [Anschrift des Anbieters].",
        "[Platzhalter: Zweck der Verarbeitung, Rechtsgrundlage und gegebenenfalls Auftragsverarbeitungsvertrag beschreiben.]",
      ],
    },
    {
      heading: "4. Server-Logfiles",
      paragraphs: [
        "[Platzhalter: Aufzählung der erfassten Logfile-Daten, etwa Browsertyp, Betriebssystem, Referrer-URL, Hostname, Uhrzeit der Anfrage und IP-Adresse.]",
        "[Platzhalter: Zweck, Rechtsgrundlage und Speicherdauer der Logfiles angeben.]",
      ],
    },
    {
      heading: "5. Kontaktaufnahme",
      paragraphs: [
        "[Platzhalter: Beschreibung der Verarbeitung bei Kontaktaufnahme über Kontaktformular, E-Mail, Telefon und WhatsApp.]",
        "[Platzhalter: Hinweis, welche Daten dabei anfallen, wie lange sie gespeichert werden und auf welcher Rechtsgrundlage die Verarbeitung erfolgt.]",
        "[Platzhalter: Bei WhatsApp zusätzlich auf den Anbieter und eine mögliche Datenübermittlung hinweisen.]",
      ],
    },
    {
      heading: "6. Eingesetzte Dienste und Schriften",
      paragraphs: [
        "[Platzhalter: eingesetzte Dienste auflisten, etwa Kartendienste, Analyse- oder Videodienste.]",
        "[Platzhalter: Angabe, ob Schriftarten lokal ausgeliefert oder von einem externen Anbieter geladen werden, zum Beispiel Google Fonts.]",
      ],
    },
    {
      heading: "7. Cookies",
      paragraphs: [
        "[Platzhalter: Angabe, ob und welche Cookies eingesetzt werden, zu welchem Zweck, wie lange sie gespeichert werden und wie eine Einwilligung eingeholt beziehungsweise widerrufen werden kann.]",
      ],
    },
    {
      heading: "8. Rechte der betroffenen Person",
      paragraphs: [
        "Betroffene Personen haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft über die verarbeiteten Daten, auf Berichtigung unrichtiger Daten, auf Löschung, auf Einschränkung der Verarbeitung und auf Datenübertragbarkeit.",
        "Ebenso besteht das Recht, einer Verarbeitung zu widersprechen sowie eine erteilte Einwilligung mit Wirkung für die Zukunft zu widerrufen.",
        "Darüber hinaus besteht ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde: [zuständige Aufsichtsbehörde].",
      ],
    },
    {
      heading: "9. Kontakt in Datenschutzfragen",
      paragraphs: [
        "Für Fragen zum Datenschutz und zur Ausübung der genannten Rechte: [Ansprechpartner Datenschutz], [E-Mail], [Telefon].",
        "[Platzhalter: falls benannt, Kontaktdaten des Datenschutzbeauftragten ergänzen.]",
      ],
    },
  ],
};
