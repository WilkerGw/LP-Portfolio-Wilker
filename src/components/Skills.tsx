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
  FaBrain,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
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
  MongoDB: <SiMongodb title="MongoDB" />,
  PostgreSQL: <SiPostgresql title="PostgreSQL" />,
  MySQL: <SiMysql title="MySQL" />,
  Git: <FaGitAlt title="Git" />,
  GitHub: <FaGithub title="GitHub" />,
  Gemini: <FaBrain title="Gemini" />,
  Gimp: <SiGimp title="Gimp" />,
  Canva: <SiCanva title="Canva" />,
};

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
    technologies: ["Node.js", "Express", "Python"],
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
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-primary text-sm font-bold tracking-wider uppercase">Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Habilidades</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Um conjunto diversificado de tecnologias e ferramentas que utilizo para transformar ideias em realidade.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="group relative bg-dark-surface border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              {/* Category Header */}
              <div className="text-center mb-8 relative">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 -z-10" />
                <h3 className="inline-block px-4 bg-dark-surface text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {skillCategory.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center group/tech"
                  >
                    <div className="relative w-12 h-12 flex items-center justify-center text-3xl text-gray-500 group-hover/tech:text-primary transition-all duration-300 group-hover/tech:scale-110 mb-3">
                      <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                      {iconMap[tech] || (
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {tech.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-xs font-medium text-gray-500 group-hover/tech:text-white transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-dark-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Aprendizado Contínuo
            </h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              A tecnologia evolui constantemente, e eu me mantenho atualizado
              com as últimas tendências e melhores práticas do desenvolvimento
              web.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["UI/UX Design", "SEO", "Performance"].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded-lg border border-white/10 transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
