// src/components/SkillsCarousel.tsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const skillsIcons = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaDocker />, name: "Docker" },
];

const SkillsCarousel = () => {
  const extendedSkills = [...skillsIcons, ...skillsIcons];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:h-10 [&_svg]:w-10 animate-infinite-scroll py-6">
        {extendedSkills.map((skill, index) => (
          <li key={index} className="flex flex-col items-center text-gray-700">
            {skill.icon}
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCarousel;