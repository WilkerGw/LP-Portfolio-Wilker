// src/components/ProjectCard.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const iconMap: { [key: string]: React.ReactElement } = {
  HTML: <FaHtml5 size={20} title="HTML5" />,
  HTML5: <FaHtml5 size={20} title="HTML5" />,
  CSS: <FaCss3Alt size={20} title="CSS3" />,
  CSS3: <FaCss3Alt size={20} title="CSS3" />,
  JavaScript: <FaJsSquare size={20} title="JavaScript" />,
  TypeScript: <SiTypescript size={20} title="TypeScript" />,
  React: <FaReact size={20} title="React" />,
  "Next.js": <SiNextdotjs size={20} title="Next.js" />,
  "Tailwind CSS": <SiTailwindcss size={20} title="Tailwind CSS" />,
  "Node.js": <FaNodeJs size={20} title="Node.js" />,
  Express: <SiExpress size={20} title="Express" />,
  MongoDB: <SiMongodb size={20} title="MongoDB" />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="group relative liquid-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-dark-lighter">
        <Image
          src={imageUrl}
          alt={`Imagem do projeto ${title}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="btn-liquid px-6 py-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            >
              <span className="relative z-10 font-bold">Ver Site</span>
            </Link>
          )}
          {repoUrl && (
            <Link
              href={repoUrl}
              target="_blank"
              className="px-6 py-2 bg-white/10 text-white font-bold rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-white/20"
            >
              Código
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <div className="flex items-center gap-2 mb-3">
          {tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/10">
              +{tags.length - 3}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 grow line-clamp-3">
          {description}
        </p>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-3">
            {tags.map((tag, i) => (
              <div key={i} className="hover:text-primary transition-colors" title={tag}>
                {iconMap[tag]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;