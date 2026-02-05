// src/components/Hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

import SkillsCarousel from "./SkillsCarousel";

const Hero = () => {
  return (
    <section className="relative flex items-center pt-28 pb-32 lg:h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary text-sm font-medium">
                Disponível para novos projetos
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 animate-slide-up">
              <span className="text-white">Wilker Martins</span> <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Desenvolvedor Web
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed animate-slide-up delay-200">
              Criando experiências digitais modernas com <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Next.js</span> e <span className="text-white font-medium">IA Generativa</span>.
            </p>

            <div className="flex flex-col items-center">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
                <Link
                  href="#ai-showcase"
                  className="btn-liquid px-8 py-3 w-full sm:w-auto group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Ver Portfólio
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-3 w-full sm:w-auto rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300 hover:border-primary/30"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Entre em Contato
                  </span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in delay-500">
                {[
                  {
                    href: "https://github.com/WilkerGw",
                    label: "GitHub",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.087 2.91.831.092-.646.349-1.086.635-1.337-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.547 1.376.203 2.394.1 2.646.64.699 1.028 1.591 1.028 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                  },
                  {
                    href: "https://www.linkedin.com/in/wilker-martins-22238a370/",
                    label: "LinkedIn",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                  },
                  {
                    href: "https://www.instagram.com/dev.wilker",
                    label: "Instagram",
                    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><circle cx="17.5" cy="6.5" r="1.5" /></svg>
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>


          {/* Visual Composition (Desktop Only) */}
          <div className="hidden lg:block flex-1 relative w-full h-full min-h-[500px] perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[550px] h-[400px] transform rotate-y-[-5deg] rotate-x-[2deg] transition-transform duration-500 hover:rotate-0">

              {/* Laptop Composition */}
              <div className="absolute top-0 left-0 w-[440px] animate-float z-10 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                {/* Screen Frame (Metallic) */}
                <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-t-2xl p-[2px] shadow-2xl relative">
                  {/* Camera */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/80 z-20 shadow-[0_0_2px_rgba(255,255,255,0.2)]"></div>

                  {/* Inner Screen Bezel */}
                  <div className="bg-black rounded-t-xl p-[2px]">
                    {/* Display Area (OLED Black) */}
                    <div className="bg-[#030303] rounded-t-lg overflow-hidden h-[270px] relative border border-white/5 shadow-inner group">

                      {/* Ambient Glow */}
                      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-5 rotate-180 animate-spin-slow pointer-events-none"></div>

                      {/* Mock Browser Header */}
                      <div className="w-full h-8 bg-[#0a0a0a] flex items-center px-4 space-x-2 border-b border-white/5 backdrop-blur-md">
                        <div className="flex space-x-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm"></div>
                        </div>
                        <div className="ml-4 w-3/5 h-4 bg-[#1a1a1a] rounded-md border border-white/5 flex items-center px-2">
                          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                        </div>
                      </div>

                      {/* Screen Content - Dashboard Style */}
                      <div className="p-6 relative">
                        {/* Header Area */}
                        <div className="flex items-start space-x-6 mb-8">
                          <div className="w-1/3 space-y-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-secondary/10 border border-white/10 flex items-center justify-center">
                              <div className="w-6 h-6 rounded-md bg-primary/40"></div>
                            </div>
                            <div className="w-3/4 h-2 bg-white/20 rounded-full"></div>
                            <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                          </div>

                          {/* Chart Area */}
                          <div className="flex-1 h-24 rounded-xl bg-white/5 border border-white/5 p-3 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-primary/10 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 w-[calc(100%-24px)] h-[1px] bg-white/10"></div>
                            {/* Simple SVG Chart Line */}
                            <div className="absolute bottom-3 left-3 w-[calc(100%-24px)] h-12">
                              <svg className="w-full h-full overflow-visible">
                                <path d="M0,48 C20,40 40,45 60,30 C80,15 100,25 120,10 C140,0 160,20 180,48" fill="none" stroke="url(#lineGradient)" strokeWidth="2" />
                                <defs>
                                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="#8fce34" />
                                    <stop offset="100%" stopColor="#0a6435" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Grid Cards */}
                        <div className="grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-16 bg-[#111] rounded-lg border border-white/5 p-3 flex flex-col justify-between group-hover:border-primary/20 transition-colors duration-500">
                              <div className="w-4 h-4 rounded bg-white/10"></div>
                              <div className="w-2/3 h-1.5 bg-white/10 rounded-full"></div>
                            </div>
                          ))}
                        </div>

                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="bg-gradient-to-b from-gray-800 to-[#111] h-3.5 w-[480px] -ml-5 rounded-b-xl shadow-[0_25px_60px_-12px_rgba(0,0,0,0.6)] relative border-t border-black/80 flex justify-center">
                  <div className="w-24 h-1.5 bg-white/10 rounded-b-md backdrop-blur-sm"></div>
                </div>
              </div>

              {/* Smartphone Composition (Titanium Style) */}
              <div className="absolute bottom-[-10px] right-[-10px] w-[110px] h-[220px] rounded-[2.5rem] p-[3px] bg-gradient-to-b from-gray-400 via-gray-600 to-gray-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float-delayed z-20 transform rotate-[-5deg]">
                {/* Phone Bezel */}
                <div className="w-full h-full bg-black rounded-[2.3rem] overflow-hidden relative border-[3px] border-black">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-5 bg-black rounded-full z-30 flex items-center justify-center space-x-1">
                    <div className="w-8 h-3 rounded-full bg-[#1a1a1a] flex items-center justify-end px-1">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
                    </div>
                  </div>

                  {/* Mobile Screen */}
                  <div className="w-full h-full bg-[#050505] relative pt-10 px-3">
                    {/* App Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-white/5 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-lg bg-primary/40 text-primary flex items-center justify-center font-bold text-xs">A</div>
                      </div>
                      <div className="aspect-square rounded-2xl bg-[#111] border border-white/5"></div>
                      <div className="aspect-square rounded-2xl bg-[#111] border border-white/5"></div>
                      <div className="aspect-square rounded-2xl bg-[#111] border border-white/5"></div>
                    </div>
                  </div>

                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-linear-to-bl from-white/10 via-transparent to-transparent pointer-events-none rounded-[2.3rem]" />
                </div>
              </div>

              {/* Background ambient lighting */}
              <div className="absolute top-10 right-20 w-32 h-32 bg-primary/30 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>


      {/* Dynamic Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 z-0 pointer-events-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black opacity-0"
          ></path>
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-black"
          ></path>
        </svg>
      </div>

      {/* Bottom Carousel */}
      <div className="absolute bottom-0 left-0 w-full pb-6 z-10">
        <SkillsCarousel />
      </div>


    </section>
  );
};

export default Hero;