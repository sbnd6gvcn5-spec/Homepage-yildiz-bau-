// ACHTUNG: Entwurf/Geruest. Der finale Wortlaut der Datenschutzerklaerung
// gehoert ueber einen geprueften Generator oder eine anwaltliche Pruefung
// eingesetzt — die Abschnitte hier geben nur die uebliche Gliederung vor und
// sind nicht rechtsverbindlich. Derselbe Hinweis steht sichtbar auf der Seite.
import type { Metadata } from "next";
import { Nav } from "@/components/final/Nav";
import { Footer } from "@/components/final/Footer";
import { FloatingContact } from "@/components/final/FloatingContact";
import { ScrollState } from "@/components/final/ScrollState";
import { LegalPage, LegalSection } from "@/components/final/LegalPage";
import { privacy } from "@/lib/content-fliesen";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Yildiz Bauunternehmen",
  description: "Hinweise zur Verarbeitung personenbezogener Daten auf dieser Website.",
};

export default function Datenschutz() {
  return (
    <div className="site-root overflow-x-hidden">
      <ScrollState />
      <Nav />
      <main>
        <LegalPage eyebrow={privacy.eyebrow} title={privacy.title} notice={privacy.draftNotice}>
          {privacy.sections.map((section) => (
            <LegalSection key={section.heading} heading={section.heading} paragraphs={section.paragraphs} />
          ))}
        </LegalPage>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
