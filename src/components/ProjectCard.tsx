// src/components/ProjectCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image"; // IMPORTADO
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

// Mapeamento de nomes de tecnologia para componentes de ícone
const iconMap: { [key: string]: React.ReactElement } = {
  HTML: <FaHtml5 size={24} title="HTML5" />,
  HTML5: <FaHtml5 size={24} title="HTML5" />,
  CSS: <FaCss3Alt size={24} title="CSS3" />,
  CSS3: <FaCss3Alt size={24} title="CSS3" />,
  JavaScript: <FaJsSquare size={24} title="JavaScript" />,
  TypeScript: <SiTypescript size={24} title="TypeScript" />,
  React: <FaReact size={24} title="React" />,
  "Next.js": <SiNextdotjs size={24} title="Next.js" />,
  "Tailwind CSS": <SiTailwindcss size={24} title="Tailwind CSS" />,
  "Node.js": <FaNodeJs size={24} title="Node.js" />,
  Express: <SiExpress size={24} title="Express" />,
  MongoDB: <SiMongodb size={24} title="MongoDB" />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl, // imageUrl agora está a ser recebida aqui
  tags,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
      {/* Image Container - CÓDIGO ATUALIZADO */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Imagem do projeto ${title}`}
          layout="fill"
          objectFit="contain"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex gap-2">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                Ver Online
              </Link>
            )}
            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                Código
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technology Icons */}
        <div className="flex items-center space-x-3 mb-6">
          {tags.slice(0, 4).map((tag, index) => (
            <div
              key={index}
              className="text-white/60 hover:text-white transition-colors duration-300"
            >
              {iconMap[tag] || (
                <span className="text-xs bg-white/10 px-2 py-1 rounded">
                  {tag}
                </span>
              )}
            </div>
          ))}
          {tags.length > 4 && (
            <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded">
              +{tags.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4 border-t border-white/10">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="flex-1 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-medium py-2 px-4 rounded-lg text-center text-sm transition-all duration-300 hover:scale-105"
            >
              Ver Projeto
            </Link>
          )}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg text-center text-sm border border-white/20 hover:border-white/30 transition-all duration-300"
            >
              Repositório
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;