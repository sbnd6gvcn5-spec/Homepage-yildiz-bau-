import type { Metadata } from "next";
import {
  Fraunces,
  IBM_Plex_Sans,
  Space_Grotesk,
  IBM_Plex_Mono,
  Public_Sans,
  Bricolage_Grotesque,
  Manrope,
  Newsreader,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";

// Werkstoff (design-a)
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

// Präzision (design-b)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});
const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

// Signatur (design-c)
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

// Finale Homepage (Fliesenfachbetrieb)
const newsreader = Newsreader({
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yildiz Bauunternehmen — Fliesenfachbetrieb Bielefeld & OWL",
  description:
    "Fliesenarbeiten für Bielefeld und OWL: Feinsteinzeug, Großformat, bodengleiche Duschen und Naturstein.",
};

const fontVariables = [
  fraunces.variable,
  ibmPlexSans.variable,
  spaceGrotesk.variable,
  ibmPlexMono.variable,
  publicSans.variable,
  bricolage.variable,
  manrope.variable,
  newsreader.variable,
  instrumentSans.variable,
].join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
