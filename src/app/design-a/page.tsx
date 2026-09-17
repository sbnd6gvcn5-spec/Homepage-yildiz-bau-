import { Nav } from "@/components/design-a/Nav";
import { Hero } from "@/components/design-a/Hero";
import { Trust } from "@/components/design-a/Trust";
import { Services } from "@/components/design-a/Services";
import { References } from "@/components/design-a/References";
import { Process } from "@/components/design-a/Process";
import { Cta } from "@/components/design-a/Cta";
import { Footer } from "@/components/design-a/Footer";

export default function DesignA() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Services />
        <References />
        <Process />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
