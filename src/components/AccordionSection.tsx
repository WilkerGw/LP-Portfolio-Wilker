"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// 1. Definição do tipo para os nossos itens
interface ServiceItem {
    id: number;
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
}

const services: ServiceItem[] = [
    { id: 1, title: 'Vídeos', description: 'Vídeos promocionais gerados por IA.', buttonText: 'Ver seção', imageUrl: '/images/capa-videos.webp' },
    { id: 2, title: 'Posts', description: 'Imagens no formato 4:5 para feed geradas por IA.', buttonText: 'Ver seção', imageUrl: '/images/acompanhe-status.webp' },
    { id: 3, title: 'Stories', description: 'Imagens no formato 9:16 para stories geradas por IA.', buttonText: 'Ver seção', imageUrl: '/images/story2.webp' },
    // { id: 4, title: 'Automações', description: 'Automações para redes sociais geradas por IA.', buttonText: 'Ver seção', imageUrl: './images/capa-automacao.webp' },
];

export const InteractiveSection: React.FC = () => {
    // Estado para controlar qual card está ativo (hover)
    // Começamos com o primeiro (id: 1) ou null se preferir tudo fechado
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <section className="flex flex-col md:flex-row h-auto md:h-[600px] w-full bg-dark border-y border-white/5 overflow-hidden font-sans relative py-10">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

            {/* Lado esquerdo: Texto fixo */}
            <div className="w-full md:w-1/4 flex flex-col items-start justify-center p-8 bg-dark-surface border-b md:border-b-0 md:border-r border-white/5 z-10 relative">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-8">
                    Galeria <br className='hidden md:block' />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                        IA Generativa
                    </span>
                </h2>
                <Link
                    href="/ai-generativa"
                    className="btn-liquid px-6 py-2 w-max"
                >
                    <span className="relative z-10 text-sm">Ver seção completa</span>
                </Link>
            </div>

            {/* Lado direito: Cards interativos */}
            <div className="flex flex-col md:flex-row flex-1 z-10 h-auto md:h-full gap-4 p-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onMouseEnter={() => setActiveId(service.id)}
                        onClick={() => setActiveId(service.id)}
                        // Mobile: controla altura (h-24 vs h-[500px]) | Desktop: controla largura (flex-1 vs flex-[3])
                        className={`relative w-full md:w-auto md:h-full transition-all duration-500 ease-in-out cursor-pointer overflow-hidden liquid-card group
              ${activeId === service.id ? 'h-[500px] md:h-full md:flex-[3] border-white/20' : 'h-24 md:h-full md:flex-1 opacity-80 hover:opacity-100'}`}
                    >
                        {/* Imagem de Fundo */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${service.imageUrl})` }}
                        >
                            {/* Overlay escuro para ler o texto melhor */}
                            <div className={`absolute inset-0 transition-colors duration-500 ${activeId === service.id ? 'bg-black/20 backdrop-blur-none' : 'bg-black/60 backdrop-blur-sm'}`} />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                        </div>

                        {/* Conteúdo do Card */}
                        <div className="relative h-full flex flex-col justify-end p-6 text-white z-20">
                            {/* Título Vertical (aparece quando recolhido) ou Horizontal */}
                            <h3 className={`text-2xl font-bold font-heading transition-all duration-500 transform ${activeId === service.id ? 'mb-4 translate-y-0 text-white' : 'mb-2 md:mb-10 md:-rotate-90 origin-left whitespace-nowrap text-gray-300'}`}>
                                {service.title}
                            </h3>

                            {/* Descrição e Botão (SÓ APARECEM NO HOVER) */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === service.id ? 'max-h-[300px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-10'}`}>
                                <p className="mb-6 text-sm leading-relaxed text-gray-100 drop-shadow-md">
                                    {service.description}
                                </p>
                                <Link
                                    href="/ai-generativa"
                                    className="btn-liquid px-8 py-2 w-max"
                                >
                                    <span className="relative z-10">{service.buttonText}</span>
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

export default InteractiveSection;