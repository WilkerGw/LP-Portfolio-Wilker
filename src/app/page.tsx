// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}