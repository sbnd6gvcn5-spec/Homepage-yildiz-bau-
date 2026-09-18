import { Nav } from "@/components/final/Nav";
import { Hero } from "@/components/final/Hero";
import { Trust } from "@/components/final/Trust";
import { Services } from "@/components/final/Services";
import { References } from "@/components/final/References";
import { Process } from "@/components/final/Process";
import { About } from "@/components/final/About";
import { Cta } from "@/components/final/Cta";
import { Footer } from "@/components/final/Footer";
import { FloatingContact } from "@/components/final/FloatingContact";
import { ScrollState } from "@/components/final/ScrollState";

export default function Home() {
  return (
    <div className="site-root overflow-x-hidden">
      <ScrollState />
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <References />
        <Process />
        <About />
        <Cta />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
