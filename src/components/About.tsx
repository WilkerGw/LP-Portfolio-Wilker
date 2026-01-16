import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px" />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image/Visual Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl transform rotate-6 transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform -rotate-6 transition-transform duration-500 group-hover:-rotate-12" />
              <div className="relative h-full bg-dark-surface rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/logo.png"
                  alt="Wilker Martins"
                  fill
                  className="object-contain p-8 transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-primary text-sm font-bold tracking-wider uppercase">Sobre Mim</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-white">
              Desenvolvedor apaixonado por <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Inovação e Tecnologia
              </span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Olá! Eu sou <strong className="text-white">Wilker Martins</strong>, um desenvolvedor web focado em criar soluções digitais que não apenas funcionam, mas encantam. Minha jornada é impulsionada pela curiosidade de entender como a tecnologia pode transformar vidas e negócios.
              </p>

              <p>
                Especialista em <strong className="text-primary">React, Next.js e Automação</strong>, combino design intuitivo com arquitetura robusta para entregar produtos de alta performance.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { number: "2+", label: "Anos de Experiência" },
                { number: "10+", label: "Projetos Entregues" },
                { number: "100%", label: "Satisfação" },
                { number: "24/7", label: "Suporte Dedicado" },
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{stat.number}</h3>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
