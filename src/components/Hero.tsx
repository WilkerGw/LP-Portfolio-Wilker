// src/components/Hero.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SkillsCarousel from "./SkillsCarousel";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-gradient-to-br from-black via-green-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-600/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      {/* Conteúdo Principal */}
      <div className="container mx-auto p-8 text-center md:text-left z-10 relative">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Disponível para projetos
            </span>
          </div>

          <h1 className="text-6xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent animate-slide-up">
            <span className="block lg:inline">WILKER</span>
            <span className="block lg:inline lg:ml-4 text-5xl md:text-5xl lg:text-7xl">
              MARTINS
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-white/80 font-light animate-slide-up delay-200 my-4">
            DESENVOLVEDOR WEB
          </h2>

          <p className="text-lg md:text-xl lg:text-1xl text-white/70 max-w-lg animate-slide-up delay-300">
            Transformando ideias em experiências digitais extraordinárias
            através de código limpo e design inovador.
          </p>
          
          {/* Ícones de Redes Sociais - ADICIONADO */}
          <div className="flex justify-center md:justify-start space-x-4 my-4">
            <a
              href="https://www.linkedin.com/in/wilker-martins-22238a370/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/WilkerGw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dev.wilker"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
               <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/>
                </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
            <Link
              href="/wilker-curriculo.pdf"
              target="_blank"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="relative z-10">Baixar Currículo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="#projects"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Ver Projetos
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Imagem com efeitos modernos */}
      <div className="absolute bottom-32 right-2 hidden lg:block z-1">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full blur-3xl scale-110"></div>
          <div className="relative">
            <Image
              src="/images/wilker.png"
              alt="Wilker Martins"
              width={440}
              height={440}
              className="rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Carrossel modernizado */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm">
        <SkillsCarousel />
      </div>
    </section>
  );
};

export default Hero;