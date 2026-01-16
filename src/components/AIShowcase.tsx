"use client";

import React, { useEffect, useRef, useState } from 'react';
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const LazyVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {
              // Handle autoplay restrictions
              console.log('Autoplay prevented');
            });
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'grayscale-0' : 'grayscale'} group-hover:grayscale-0`}
        muted={isMuted}
        loop
        playsInline
        preload="none"
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 z-20"
        aria-label={isMuted ? "Ativar som" : "Desativar som"}
      >
        {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
      </button>
    </div>
  );
};

const AIShowcase = () => {
  // Section 1: 4 vertical videos (9:16)
  const verticalVideos = [
    {
      src: '/videos-ai/filtro-azul.mp4',
      title: 'Neon Dreams',
      description: 'Runway Gen-2'
    },
    {
      src: '/videos-ai/antirreflexo.mp4',
      title: 'Cyber Kinetic',
      description: 'Pika Labs'
    },
    {
      src: '/videos-ai/natal-azul.mp4',
      title: 'Neural Flow',
      description: 'Stable Video'
    },
    {
      src: '/videos-ai/vantagem-dobro.mp4',
      title: 'Digital Soul',
      description: 'Kaiber'
    },
  ];

  // Section 2: 4 vertical images (4:5 aspect ratio - 1080x1350)
  const portraitImages = [
    {
      src: '/images/acompanhe-status.webp',
      title: 'Ethereal Portrait',
      description: 'Midjourney v6'
    },
    {
      src: '/images/armacao-gratuita.webp',
      title: 'Cosmic Vogue',
      description: 'DALL-E 3'
    },
    {
      src: '/images/multifocal.webp',
      title: 'Synthetic Fashion',
      description: 'Stable Diffusion XL'
    },
    {
      src: '/images/promocao.webp',
      title: 'Urban Future',
      description: 'Midjourney v6'
    },
  ];

  // Section 3: 4 vertical images (9:16 aspect ratio)
  const verticalImages = [
    {
      src: '/images/story1.webp',
      title: 'Vertical World',
      description: 'Midjourney v6'
    },
    {
      src: '/images/story2.webp',
      title: 'Sky Scraper',
      description: 'Adobe Firefly'
    },
    {
      src: '/images/story3.webp',
      title: 'Deep Ocean',
      description: 'Stable Diffusion 3'
    },
    {
      src: '/images/story4.webp',
      title: 'Cyber Nature',
      description: 'Midjourney v6'
    },
  ];

  /* Lightbox State */
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'video' | 'image', src: string } | null>(null);

  const openLightbox = (type: 'video' | 'image', src: string) => {
    setSelectedMedia({ type, src });
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="text-center mb-12 mt-16 first:mt-0">
      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
        {title}
      </h3>
      <p className="text-gray-400 text-sm md:text-base">
        {subtitle}
      </p>
    </div>
  );

  return (
    <section id="ai-showcase" className="py-24 bg-black text-white relative overflow-hidden" id="ai-showcase">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] left-[20%] w-96 h-96 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 md:-right-12 p-2 text-white/70 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div
              className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  className="max-h-[80vh] w-auto mx-auto"
                  autoPlay
                  controls
                  playsInline
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedMedia.src}
                  alt="Expanded view"
                  className="max-h-[80vh] w-auto mx-auto object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Galeria <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">IA Generativa</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Videos, imagens, narração e muito mais, tudo gerado por IA.
          </p>
        </div>

        {/* Section 1: Vertical Videos */}
        <SectionHeader title="Vídeos e Narrações" subtitle="Vídeos Gerados por IA (9:16)" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {verticalVideos.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-gray-900 border border-gray-800 transform translate-z-0 cursor-pointer"
              onClick={() => openLightbox('video', item.src)}
            >
              <div className="pointer-events-none w-full h-full">
                <LazyVideo src={item.src} />
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Portrait Images (4:5) */}
        <SectionHeader title="Imagens para Posts" subtitle="Imagem promocional para Redes Sociais gerados com IA (4:5)" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portraitImages.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-gray-900 border border-gray-800 transform translate-z-0 cursor-pointer"
              onClick={() => openLightbox('image', item.src)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />

            </div>
          ))}
        </div>

        {/* Section 3: Vertical Images (9:16) */}
        <SectionHeader title="Imagens para Stories" subtitle="Imagem promocional para Stories gerados com IA (9:16)" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {verticalImages.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-gray-900 border border-gray-800 transform translate-z-0 cursor-pointer"
              onClick={() => openLightbox('image', item.src)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIShowcase;
