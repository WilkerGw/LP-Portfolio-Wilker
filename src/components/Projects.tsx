// src/components/Projects.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import Image from "next/image"; // 1. IMPORTAÇÃO ADICIONADA

const projectsData = [
  {
    title: "Meu Portfólio",
    description:
      "O site que você está vendo agora, construído com as tecnologias mais modernas para web. Design responsivo e animações fluidas.",
    imageUrl: "/images/projects/portfolio.png", // Caminho corrigido para a imagem
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://portfolio-front-tau-flax.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/Portfolio-Wilker",
    featured: true, // Este continua em destaque
  },
  {
    title: "E-commerce Loja de Óculos",
    description:
      "Uma loja virtual completa para o ramo de óticas, com um catálogo de produtos detalhado, carrinho de compras e um checkout seguro com diversas opções de pagamento.",
    imageUrl: "/images/projects/vizz-loja-virtual.png",
    tags: ["NuvemShop"],
    liveUrl: "https://oticasvizz.lojavirtualnuvem.com.br/",
    featured: false,
  },
  {
    title: "Removedor de Fundo com IA",
    description:
      "Uma aplicação web construída com Python e Gradio que usa IA (Rembg) para remover fundos de imagens automaticamente. Suporta processamento em lote (múltiplas imagens) através de uma interface 'arrastar e soltar' (drag-and-drop).",
    imageUrl: "/images/projects/removedor-fundo.png",
    tags: ["Python", "Gradio", "Rembg", "Pillow"],
    liveUrl: null, // O app corre localmente, não está num site público
    repoUrl: "https://github.com/WilkerGw/removedor-fundo-ia",
    // 
    // ALTERAÇÃO FEITA AQUI:
    featured: false, // Alterado de true para false
    //
  },
  {
    title: "Site Institucional Óticas Vizz",
    description:
      "Desenvolvimento do site institucional para uma ótica, utilizando Next.js para alta performance. O projeto inclui um chatbot com a IA Gemini do Google, sistema de agendamento de exames e um design moderno com animações em Framer Motion.",
    imageUrl: "/images/projects/vizz-site.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini",
      "Framer Motion",
    ],
    liveUrl: "https://www.oticasvizz.com.br/",
    featured: false,
  },
  {
    title: "Mind ERP - Sistema de Gestão para Óticas",
    description:
      "Um sistema ERP full-stack completo para gestão de óticas. O backend foi construído com Node.js, Express e Prisma, e o frontend com Next.js e Tailwind CSS. Inclui módulos de vendas, stock, clientes, ordens de serviço e dashboard com relatórios.",
    imageUrl: "/images/projects/erp-mind.png",
    tags: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "Prisma",
      "Tailwind CSS",
      "Zustand",
    ],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Landing Page 'Nice Clothes'",
    description:
      "Uma landing page visualmente atraente para uma marca de vestuário desportivo, focada na apresentação de produtos com animações modernas. Desenvolvida com Next.js, Tailwind CSS e Framer Motion para uma experiência de utilizador fluida e responsiva.",
    imageUrl: "/images/projects/nice-clothes.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://nice-clothes.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/Nice-Clothes",
    featured: false,
  },
  {
    title: "Lading Page Loja Esportiva",
    description:
      "Frontend de uma LP de loja esportiva construído com Next.js e TypeScript. O projeto utiliza CSS Modules para estilização e Context API para gestão do carrinho de compras. Inclui listagem de produtos por categoria, pesquisa e páginas de detalhe.",
    imageUrl: "/images/projects/sneakers.png",
    tags: ["Next.js", "TypeScript", "CSS Modules", "React Context", "Docker"],
    liveUrl: "https://loja-de-tenis-525s.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/loja-de-tenis",
    featured: false,
  },
  {
    title: "Site para Imobiliária",
    description:
      "Uma landing page elegante para uma imobiliária, construída com Next.js e CSS Modules. O projeto foca na experiência do utilizador com funcionalidades de pesquisa de imóveis, navegação inteligente com scroll spy e um design limpo e responsivo.",
    imageUrl: "/images/projects/imobiliaria.png",
    tags: ["Next.js", "React", "JavaScript", "CSS Modules"],
    liveUrl: "https://imobiliaria-site-seven.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/Imobiliaria-site",
    featured: false,
  },
  {
    title: "Landing Page 'Espaço Integrado'",
    description:
      "Uma landing page de página única para um centro de bem-estar. O projeto foi desenvolvido com Next.js e Framer Motion para criar uma experiência de navegação suave e apresentar os serviços e planos de forma clara e profissional.",
    imageUrl: "/images/projects/espaco-terapia.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://lp-espaco-integrado.vercel.app/",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "Landing Page 'Aurum'",
    description:
      "Uma landing page para o Aurum, uma plataforma de audiolearning, desenvolvida com as tecnologias mais modernas para criar uma experiência de usuário rápida e responsiva. O projeto apresenta a proposta de valor da plataforma, seus benefícios, conteúdos e planos de assinatura com o objetivo de converter visitantes em assinantes.",
    imageUrl: "/images/projects/aurum.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://lp-aurum.vercel.app/",
    repoUrl: "https://github.com/WilkerGw/LP-Aurum",
    featured: false,
  },
  {
    title: "Landing Page 'NeuroFlow Coffee'",
    description:
      "Desenvolvimento de uma landing page de alta conversão para o 'NeuroFlow Coffee', um produto de café nootrópico. O projeto foi construído para apresentar de forma persuasiva os benefícios de foco e energia limpa do produto, incluindo depoimentos, FAQ e uma oferta especial de lançamento com garantia de satisfação.",
    imageUrl: "/images/projects/neuro-coffee.png",
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
      className="relative py-20 bg-gradient-to-br from-black via-green-900 to-black overflow-hidden"
    >
      {/* ... (código do background permanece o mesmo) ... */}

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-green-200 to-green-300 bg-clip-text text-transparent animate-slide-up">
            Meus Projetos
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-slide-up delay-200">
            Uma coleção dos meus trabalhos mais recentes, demonstrando
            criatividade, inovação e expertise técnica em desenvolvimento web.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Project */}
        <div className="mb-16 animate-slide-up delay-300">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Projeto em Destaque
          </h3>
          <div className="max-w-4xl mx-auto">
            {projectsData
              .filter((project) => project.featured)
              .map((project, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-r from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        {/* ... (informações do projeto permanecem as mesmas) ... */}
                        <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full mb-4">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          Projeto em Destaque
                        </div>
                        <h4 className="text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h4>
                        <p className="text-white/70 text-lg mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Este código agora está seguro, pois o projeto com URL null não está mais aqui */}
                        <div className="flex flex-col lg:flex-row gap-4 text-center">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver Projeto
                            </a>
                          )}
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Código Fonte
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="relative aspect-video overflow-hidden transition-all duration-300">
                        <Image
                          src={project.imageUrl}
                          alt={`Imagem do projeto ${project.title}`}
                          layout="fill"
                          objectFit="contain"
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="animate-slide-up delay-400">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Outros Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData
              .filter((project) => !project.featured) // Agora o "Removedor de Fundo" será filtrado para cá
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  tags={project.tags}
                  liveUrl={project.liveUrl || undefined} // Passa undefined se for null
                  repoUrl={project.repoUrl || undefined} // Passa undefined se for null
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;