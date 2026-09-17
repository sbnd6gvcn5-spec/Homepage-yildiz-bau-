import { Nav } from "@/components/design-b/Nav";
import { Hero } from "@/components/design-b/Hero";
import { Trust } from "@/components/design-b/Trust";
import { Services } from "@/components/design-b/Services";
import { References } from "@/components/design-b/References";
import { Process } from "@/components/design-b/Process";
import { Cta } from "@/components/design-b/Cta";
import { Footer } from "@/components/design-b/Footer";

export default function DesignB() {
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
