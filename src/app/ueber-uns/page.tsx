import type { Metadata } from "next";
import { Nav } from "@/components/final/Nav";
import { AboutIntro } from "@/components/final/AboutIntro";
import { AboutValues } from "@/components/final/AboutValues";
import { Cta } from "@/components/final/Cta";
import { Footer } from "@/components/final/Footer";

export const metadata: Metadata = {
  title: "Über uns — Yildiz Bauunternehmen",
  description:
    "Familiengeführter Handwerksbetrieb aus Bielefeld für Fliesen-, Naturstein- und Betonwerksteinarbeiten.",
};

export default function UeberUns() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <main>
        <AboutIntro />
        <AboutValues />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
