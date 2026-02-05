// src/components/SkillsCarousel.tsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiSupabase } from "react-icons/si";

const skillsIcons = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <FaPython />, name: "Python", color: "#3776AB" },
  { icon: <SiSupabase />, name: "Supabase", color: "#3ECF8E" },
  { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
];

const SkillsCarousel = () => {
  // Duplicamos a lista para criar o efeito de loop infinito
  const extendedSkills = [...skillsIcons, ...skillsIcons];

  return (
    <div className="w-full overflow-hidden relative">
      {/* Fade nas bordas */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

      {/* Carousel */}
      <div className="flex carousel-scroll">
        {extendedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-3"
          >
            <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default">
              {/* Icon */}
              <span
                className="text-xl transition-all duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>

              {/* Name */}
              <span className="text-sm font-medium text-gray-400 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;