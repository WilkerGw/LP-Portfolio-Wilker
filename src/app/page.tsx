// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import Automation from "@/components/Automation"; // 1. REMOVIDO
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Automation from "@/components/Automation";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Automation/>
      <Projects />
      <Skills />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}