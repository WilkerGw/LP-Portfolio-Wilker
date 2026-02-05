"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface ProjectItem {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    linkUrl: string;
    badge: string;
}

const projects: ProjectItem[] = [
    {
        id: 1,
        title: 'Mind ERP',
        description: 'Sistema completo de gestão para óticas com Dashboard, relatórios e controle de estoque.',
        buttonText: 'Ver projeto',
        imageUrl: '/images/mind-erp.webp',
        linkUrl: '/projetos',
        badge: 'Next.js • Node.js'
    },
    {
        id: 2,
        title: 'E-commerce',
        description: 'Loja virtual completa com carrinho de compras, pagamentos online e gestão de produtos.',
        buttonText: 'Ver projeto',
        imageUrl: '/images/vizz-loja-virtual.webp',
        linkUrl: '/projetos',
        badge: 'NuvemShop'
    },
    {
        id: 3,
        title: 'Imobiliária',
        description: 'Landing Page moderna para apresentação de imóveis de alto padrão com animações.',
        buttonText: 'Ver projeto',
        imageUrl: '/images/elevva-imobiliaria.webp',
        linkUrl: '/projetos',
        badge: 'Next.js • Tailwind'
    },
    {
        id: 4,
        title: 'AI Tools',
        description: 'Removedor de fundos automático utilizando Inteligência Artificial e processamento em lote.',
        buttonText: 'Ver projeto',
        imageUrl: '/images/removedor-fundo.webp',
        linkUrl: '/projetos',
        badge: 'Python • Rembg'
    },
];

export const ProjectsAccordion: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full bg-dark border-y border-white/5 overflow-hidden font-sans relative py-10">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

            {/* Lado esquerdo: Texto fixo */}
            <div className="w-full md:w-1/4 flex flex-col items-start justify-center p-8 bg-dark-surface border-b md:border-b-0 md:border-r border-white/5 z-10 relative">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    <span className="text-secondary text-xs font-medium">{projects.length} projetos</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-4">
                    Projetos <br className='hidden md:block' />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                        Web
                    </span>
                </h2>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Aplicações web modernas desenvolvidas com as melhores tecnologias do mercado.
                </p>

                <Link
                    href="/projetos"
                    className="btn-liquid px-6 py-2.5 w-max group"
                >
                    <span className="relative z-10 text-sm flex items-center gap-2">
                        Ver seção completa
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </Link>
            </div>

            <div className="flex flex-col md:flex-row flex-1 z-10 h-auto md:h-full gap-4 p-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onMouseEnter={() => setActiveId(project.id)}
                        onClick={() => setActiveId(project.id)}
                        className={`relative w-full md:w-auto md:h-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden liquid-card group
              ${activeId === project.id ? 'h-[500px] md:h-full md:flex-[3] border-white/20' : 'h-24 md:h-full md:flex-1 opacity-80 hover:opacity-100'}`}
                    >
                        {/* Imagem de Fundo */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.imageUrl})` }}
                        >
                            <div className={`absolute inset-0 transition-all duration-500 ${activeId === project.id ? 'bg-black/20 backdrop-blur-none' : 'bg-black/60 backdrop-blur-sm'}`} />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Indicador de ativo */}
                        <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${activeId === project.id ? 'bg-secondary scale-100' : 'bg-white/30 scale-75'}`} />

                        {/* Conteúdo do Card */}
                        <div className="relative h-full flex flex-col justify-end p-6 text-white z-20">
                            {/* Badge de tecnologia */}
                            <div className={`transition-all duration-500 ${activeId === project.id ? 'opacity-100 translate-y-0 mb-3' : 'opacity-0 -translate-y-4'}`}>
                                <span className="text-xs font-medium text-secondary/80 bg-secondary/10 px-2 py-1 rounded-full border border-secondary/20">
                                    {project.badge}
                                </span>
                            </div>

                            {/* Título */}
                            <h3 className={`text-2xl font-bold font-heading transition-all duration-500 transform ${activeId === project.id ? 'mb-4 translate-y-0 text-white' : 'mb-2 md:mb-10 md:-rotate-90 origin-left whitespace-nowrap text-gray-300'}`}>
                                {project.title}
                            </h3>

                            {/* Descrição e Botão */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === project.id ? 'max-h-[300px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-10'}`}>
                                <p className="mb-6 text-sm leading-relaxed text-gray-100 drop-shadow-md">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.linkUrl}
                                    target={project.linkUrl.startsWith('http') ? '_blank' : undefined}
                                    className="btn-liquid px-6 py-2 w-max group/btn"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {project.buttonText}
                                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </section >
    );
};

export default ProjectsAccordion;
