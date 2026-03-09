import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Ambitions } from "@/components/ambitions";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Ambitions />
      <Footer />
    </main>
  );
}
