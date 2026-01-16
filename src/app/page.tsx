// src/app/page.tsx
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Automation from "@/components/Automation";

import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import AIShowcase from "@/components/AIShowcase";

export default function Home() {
  return (
    <div>
      <Hero />

      <AIShowcase />
      <Projects />
      <Skills />

      <Automation />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}