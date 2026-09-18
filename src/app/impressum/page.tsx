import type { Metadata } from "next";
import { Nav } from "@/components/final/Nav";
import { Footer } from "@/components/final/Footer";
import { FloatingContact } from "@/components/final/FloatingContact";
import { ScrollState } from "@/components/final/ScrollState";
import { LegalPage, LegalEntry, LegalSection } from "@/components/final/LegalPage";
import { imprint } from "@/lib/content-fliesen";

export const metadata: Metadata = {
  title: "Impressum — Yildiz Bauunternehmen",
  description: "Impressum und Anbieterkennzeichnung nach § 5 DDG.",
};

export default function Impressum() {
  return (
    <div className="site-root overflow-x-hidden">
      <ScrollState />
      <Nav />
      <main>
        <LegalPage eyebrow={imprint.eyebrow} title={imprint.title} intro={imprint.intro}>
          <div>
            {imprint.entries.map((entry) => (
              <LegalEntry
                key={entry.heading}
                heading={entry.heading}
                lines={entry.lines}
                note={"note" in entry ? entry.note : undefined}
              />
            ))}
          </div>

          <div className="mt-16">
            {imprint.notes.map((note) => (
              <LegalSection key={note.heading} heading={note.heading} paragraphs={note.paragraphs} />
            ))}
          </div>
        </LegalPage>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
