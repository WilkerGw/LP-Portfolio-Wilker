// src/components/Projects.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    title: "Meu Portfólio",
    description:
      "O site que você está vendo agora, construído com as tecnologias mais modernas para web. Design responsivo e animações fluidas.",
    imageUrl: "/images/portfolio.webp",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://portfolio-front-tau-flax.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/Portfolio-Wilker",
    featured: true,
  },
  {
    title: "Elevva Imobiliária",
    description:
      "Uma solução digital moderna para o mercado imobiliário, focada na apresentação elegante de imóveis e na facilidade de contato.",
    imageUrl: "/images/elevva-imobiliaria.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://lp-elevva-imoboliaria-egwb14q70-wilkergws-projects.vercel.app/",
    repoUrl: "https://lp-elevva-imoboliaria-egwb14q70-wilkergws-projects.vercel.app/",
    featured: false,
  },
  {
    title: "E-commerce Loja de Óculos",
    description:
      "Uma loja virtual completa para o ramo de óticas, com um catálogo de produtos detalhado, carrinho de compras e um checkout seguro com diversas opções de pagamento.",
    imageUrl: "/images/vizz-loja-virtual.webp",
    tags: ["NuvemShop"],
    liveUrl: "https://oticasvizz.lojavirtualnuvem.com.br/",
    featured: false,
  },
  {
    title: "Removedor de Fundo com IA",
    description:
      "Uma aplicação web construída com Python e Gradio que usa IA (Rembg) para remover fundos de imagens automaticamente. Suporta processamento em lote.",
    imageUrl: "/images/removedor-fundo.webp",
    tags: ["Python", "Gradio", "Rembg", "Pillow"],
    liveUrl: null,
    repoUrl: "https://github.com/WilkerGw/removedor-fundo-ia",
    featured: false,
  },
  {
    title: "Site Institucional Óticas Vizz",
    description:
      "Desenvolvimento do site institucional para uma ótica, utilizando Next.js para alta performance. O projeto inclui um chatbot com a IA Gemini do Google.",
    imageUrl: "/images/vizz-site.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Gemini"],
    liveUrl: "https://www.oticasvizz.com.br/",
    featured: false,
  },
  {
    title: "Mind ERP - Sistema de Gestão",
    description:
      "Um sistema ERP full-stack completo para gestão de óticas. O backend foi construído com Node.js, Express e Prisma, e o frontend com Next.js.",
    imageUrl: "/images/mind-erp.webp",
    tags: ["Next.js", "Node.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Landing Page 'Nice Clothes'",
    description:
      "Uma landing page visualmente atraente para uma marca de vestuário desportivo, focada na apresentação de produtos com animações modernas.",
    imageUrl: "/images/nice-clothes.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://nice-clothes.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/Nice-Clothes",
    featured: false,
  },
  {
    title: "Lading Page Loja Esportiva",
    description:
      "Frontend de uma LP de loja esportiva construído com Next.js e TypeScript. O projeto utiliza CSS Modules para estilização.",
    imageUrl: "/images/sneaker.webp",
    tags: ["Next.js", "TypeScript", "CSS Modules", "React Context"],
    liveUrl: "https://loja-de-tenis-525s.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/loja-de-tenis",
    featured: false,
  },
  {
    title: "Site para Imobiliária",
    description:
      "Uma landing page elegante para uma imobiliária, construída com Next.js e CSS Modules. O projeto foca na experiência do utilizador.",
    imageUrl: "/images/imobiliaria.webp",
    tags: ["Next.js", "React", "JavaScript", "CSS Modules"],
    liveUrl: "https://imobiliaria-site-seven.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/Imobiliaria-site",
    featured: false,
  },
  {
    title: "Landing Page 'Espaço Integrado'",
    description:
      "Uma landing page de página única para um centro de bem-estar. O projeto foi desenvolvido com Next.js e Framer Motion.",
    imageUrl: "/images/espaco-terapia.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://lp-espaco-integrado.vercel.app/",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Landing Page 'Aurum'",
    description:
      "Uma landing page para o Aurum, uma plataforma de audiolearning, desenvolvida com as tecnologias mais modernas.",
    imageUrl: "/images/aurum.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://lp-aurum.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/LP-Aurum",
    featured: false,
  },
  {
    title: "Landing Page 'NeuroFlow Coffee'",
    description:
      "Desenvolvimento de uma landing page de alta conversão para o 'NeuroFlow Coffee', um produto de café nootrópico.",
    imageUrl: "/images/neuro-coffee.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://lp-neuro-flow-coffee.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/LP-Neuro-Flow-Coffee",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-primary text-sm font-bold tracking-wider uppercase">Portfolio</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Projetos Web em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Destaque</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Uma seleção de projetos que demonstram minha paixão por criar experiências digitais excepcionais.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          {projectsData
            .filter((project) => project.featured)
            .map((project, index) => (
              <div key={index} className="relative group rounded-3xl overflow-hidden border border-white/10 bg-dark-surface/50 backdrop-blur-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Projeto Principal
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="px-8 py-3 bg-primary hover:bg-primary-dark text-dark font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                        >
                          Ver Projeto
                        </Link>
                      )}
                      {project.repoUrl && (
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all hover:scale-105"
                        >
                          Ver Código
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="relative aspect-video lg:aspect-auto bg-dark-lighter overflow-hidden">
                    <div className="absolute inset-0 z-10" />
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData
            .filter((project) => !project.featured)
            .map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                liveUrl={project.liveUrl || undefined}
                repoUrl={project.repoUrl || undefined}
              />
            ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="https://github.com/WilkerGw"
            target="_blank"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-medium group"
          >
            Ver mais no GitHub
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;