import { Nav } from "@/components/final/Nav";
import { Hero } from "@/components/final/Hero";
import { Trust } from "@/components/final/Trust";
import { Services } from "@/components/final/Services";
import { References } from "@/components/final/References";
import { Process } from "@/components/final/Process";
import { Cta } from "@/components/final/Cta";
import { Footer } from "@/components/final/Footer";

export default function Home() {
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
