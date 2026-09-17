import { Nav } from "@/components/design-c/Nav";
import { Hero } from "@/components/design-c/Hero";
import { Trust } from "@/components/design-c/Trust";
import { Services } from "@/components/design-c/Services";
import { References } from "@/components/design-c/References";
import { Process } from "@/components/design-c/Process";
import { Cta } from "@/components/design-c/Cta";
import { Footer } from "@/components/design-c/Footer";

export default function DesignC() {
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
