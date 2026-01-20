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
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 animate-fade-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-gray-400 text-sm font-medium tracking-wide">
                Disponível para novos projetos
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 animate-slide-up">
              Wilker Martins <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8fce34] via-[#0a6435] to-[#003424] bg-[length:200%_auto] animate-gradient">
                Desenvolvedor Web
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed animate-slide-up delay-200">
              Desenvolvedor Web & Especialista em criação de conteúdo com IA.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up delay-300">


              <Link
                href="#ai-showcase"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                Ver Portfólio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Social Links */}
            <div className="mb-0 mt-6 flex items-center justify-center lg:justify-start gap-6 animate-fade-in delay-500">
              {[
                { icon: "github", href: "https://github.com/WilkerGw", label: "GitHub" },
                { icon: "linkedin", href: "https://www.linkedin.com/in/wilker-martins-22238a370/", label: "LinkedIn" },
                { icon: "instagram", href: "https://www.instagram.com/dev.wilker", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon === "github" && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  )}
                  {social.icon === "instagram" && (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg>
                  )}
                </a>
              ))}
            </div>
          </div>


          {/* Visual Composition (Desktop Only) */}
          <div className="hidden lg:block flex-1 relative w-full h-full min-h-[500px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px]">

              {/* Main Code Window */}
              <div className="relative glass-card rounded-2xl p-6 border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl animate-float">
                {/* Header Dots */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>

                {/* Code Lines */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <span className="text-pink-500">const</span>
                    <span className="text-blue-400">Developer</span>
                    <span className="text-white">=</span>
                    <span className="text-white">{'{'}</span>
                  </div>
                  <div className="pl-6 flex gap-3">
                    <span className="text-white">name:</span>
                    <span className="text-green-400">'Wilker Martins'</span>,
                  </div>
                  <div className="pl-6 flex gap-3">
                    <span className="text-white">role:</span>
                    <span className="text-green-400">'Full Stack'</span>,
                  </div>
                  <div className="pl-6 flex gap-3">
                    <span className="text-white">skills:</span>
                    <span className="text-yellow-300">['Next.js', 'React', 'AI']</span>
                  </div>
                  <div className="text-white">{'}'};</div>

                  <div className="mt-6 flex gap-3">
                    <span className="text-purple-400">await</span>
                    <span className="text-blue-400">Developer</span>.
                    <span className="text-yellow-200">deploy</span>(
                    <span className="text-green-400">'Awesome_Project'</span>
                    );
                  </div>
                </div>

                {/* Glow Effect behind window */}
                <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl -z-10" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-12 -right-12 glass-panel p-5 rounded-2xl border border-white/10 bg-dark-surface/90 shadow-2xl animate-float-delayed">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">Performance</div>
                  </div>
                </div>
              </div>

              {/* Decorative Icons */}
              <div className="absolute -top-10 -right-10 w-16 h-16 glass-panel rounded-2xl flex items-center justify-center animate-float-delayed shadow-lg delay-75">
                <svg className="w-8 h-8 text-[#61DAFB]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2.2c5.41 0 9.8 4.39 9.8 9.8s-4.39 9.8-9.8 9.8-9.8-4.39-9.8-9.8 4.39-9.8 9.8-9.8zm0 7.6c-1.21 0-2.2.99-2.2 2.2s.99 2.2 2.2 2.2 2.2-.99 2.2-2.2-.99-2.2-2.2-2.2z" /></svg>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
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