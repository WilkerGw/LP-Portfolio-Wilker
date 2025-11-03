// src/components/Skills.tsx
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaBrain, // 1. CORREÇÃO: Adicionado FaBrain
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiGimp,
  SiCanva,
} from "react-icons/si";

// Mapeamento de nomes para ícones
const iconMap: { [key: string]: React.ReactElement } = {
  HTML5: <FaHtml5 title="HTML5" />,
  CSS3: <FaCss3Alt title="CSS3" />,
  JavaScript: <FaJsSquare title="JavaScript" />,
  TypeScript: <SiTypescript title="TypeScript" />,
  React: <FaReact title="React" />,
  "Next.js": <SiNextdotjs title="Next.js" />,
  "Tailwind CSS": <SiTailwindcss title="Tailwind CSS" />,
  "Node.js": <FaNodeJs title="Node.js" />,
  Express: <SiExpress title="Express" />,
  Python: <FaPython title="Python" />,
  Django: <SiDjango title="Django" />,
  MongoDB: <SiMongodb title="MongoDB" />,
  PostgreSQL: <SiPostgresql title="PostgreSQL" />,
  MySQL: <SiMysql title="MySQL" />,
  Git: <FaGitAlt title="Git" />,
  GitHub: <FaGithub title="GitHub" />,
  Gemini: <FaBrain title="Gemini" />, // 2. CORREÇÃO: Usando FaBrain para Gemini
  Gimp: <SiGimp title="Gimp" />,
  Canva: <SiCanva title="Canva" />,
};

// ... (o restante do arquivo permanece exatamente o mesmo)
const skillsData = [
  {
    category: "Frontend",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "Django"],
  },
  {
    category: "Bancos de Dados",
    technologies: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Ferramentas & Outros",
    technologies: ["Git", "GitHub", "Gemini", "Gimp", "Canva"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-black via-green-600 to-green-800 bg-clip-text text-transparent animate-slide-up">
            Habilidades
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up delay-200">
            Tecnologias e ferramentas que domino para criar soluções digitais
            excepcionais
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {skillCategory.category}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full"></div>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {skillCategory.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center group/tech hover:scale-110 transition-all duration-300"
                  >
                    <div className="text-4xl text-gray-700 group-hover/tech:text-green-600 transition-colors duration-300 mb-2">
                      {iconMap[tech] || (
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {tech.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-medium text-gray-600 group-hover/tech:text-green-600 transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-green-800/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-slide-up delay-500">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sempre Aprendendo
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              A tecnologia evolui constantemente, e eu me mantenho atualizado
              com as últimas tendências e melhores práticas do desenvolvimento
              web. Estou sempre explorando novas ferramentas e frameworks para
              entregar soluções ainda melhores.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white text-sm rounded-full font-medium">
                Aprendizado Contínuo
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white text-sm rounded-full font-medium">
                Melhores Práticas
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-800 text-white text-sm rounded-full font-medium">
                Inovação
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
