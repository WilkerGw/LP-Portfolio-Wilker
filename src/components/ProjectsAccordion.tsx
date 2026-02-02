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
}

const projects: ProjectItem[] = [
    {
        id: 1,
        title: 'Mind ERP',
        description: 'Sistema completo de gestão para óticas com Dashboard.',
        buttonText: 'Ver seção',
        imageUrl: '/images/mind-erp.webp',
        linkUrl: '/projetos'
    },
    {
        id: 2,
        title: 'E-commerce',
        description: 'Loja virtual completa com carrinho e pagamentos online.',
        buttonText: 'Ver seção',
        imageUrl: '/images/vizz-loja-virtual.webp',
        linkUrl: '/projetos'
    },
    {
        id: 3,
        title: 'Imobiliária',
        description: 'Landing Page moderna para apresentação de imóveis de alto padrão.',
        buttonText: 'Ver seção',
        imageUrl: '/images/elevva-imobiliaria.webp',
        linkUrl: '/projetos'
    },
    {
        id: 4,
        title: 'AI Tools',
        description: 'Removedor de fundos automático utilizando Inteligência Artificial.',
        buttonText: 'Ver seção',
        imageUrl: '/images/removedor-fundo.webp',
        linkUrl: '/projetos'
    },
];

export const ProjectsAccordion: React.FC = () => {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full bg-dark border-y border-white/5 overflow-hidden font-sans relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

            {/* Lado esquerdo: Texto fixo */}
            <div className="w-full md:w-1/4 flex items-center justify-start p-8 bg-dark-surface border-b md:border-b-0 md:border-r border-white/5 z-10 relative">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                    Projetos <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                        Web
                    </span>
                </h2>
            </div>

            {/* Lado direito: Cards interativos */}
            <div className="flex flex-col md:flex-row flex-1 z-10 h-auto md:h-full">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onMouseEnter={() => setActiveId(project.id)}
                        onClick={() => setActiveId(project.id)}
                        className={`relative w-full md:w-auto md:h-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden border-t md:border-t-0 md:border-l border-white/5
              ${activeId === project.id ? 'h-[500px] md:h-full md:flex-[3]' : 'h-24 md:h-full md:flex-1'}`}
                    >
                        {/* Imagem de Fundo */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url(${project.imageUrl})` }}
                        >
                            {/* Overlay */}
                            <div className={`absolute inset-0 transition-colors duration-500 ${activeId === project.id ? 'bg-black/40' : 'bg-black/60'}`} />
                        </div>

                        {/* Conteúdo do Card */}
                        <div className="relative h-full flex flex-col justify-end p-6 text-white">
                            <h3 className={`text-2xl font-bold font-heading transition-all duration-500 ${activeId === project.id ? 'mb-4 translate-y-0 text-white' : 'mb-2 md:mb-10 md:-rotate-90 origin-left whitespace-nowrap text-gray-300'}`}>
                                {project.title}
                            </h3>

                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === project.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="mb-6 text-sm leading-relaxed text-gray-200">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.linkUrl}
                                    target={project.linkUrl.startsWith('http') ? '_blank' : undefined}
                                    className="px-8 py-2 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 inline-block text-center"
                                >
                                    {project.buttonText}
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
