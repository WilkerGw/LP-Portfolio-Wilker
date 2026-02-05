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
  SiSupabase,
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
  Supabase: <SiSupabase title="Supabase" />,
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
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Supabase"],
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
      className="section-base py-20 md:py-28"
    >
      {/* Background Elements */}
      <div className="section-grid" />
      <div className="section-glow-primary" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full liquid-glass mb-6">
            <span className="text-primary text-sm font-bold tracking-wider uppercase">Expertise</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Minhas <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Habilidades</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Um conjunto diversificado de tecnologias e ferramentas que utilizo para transformar ideias em realidade.
          </p>
        </div>

        {/* Skills Grid - Compact Layout */}
        <div className="space-y-8">
          {skillsData.map((skillCategory, index) => (
            <div
              key={index}
              className="group liquid-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 whitespace-nowrap min-w-[160px]">
                  {skillCategory.category}
                </h3>

                {/* Technologies - Horizontal Flow */}
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {skillCategory.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary/10 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group/tech cursor-default"
                    >
                      <span className="text-xl text-gray-400 group-hover/tech:text-primary transition-colors duration-300">
                        {iconMap[tech] || (
                          <span className="text-sm font-bold">{tech.charAt(0)}</span>
                        )}
                      </span>
                      <span className="text-sm font-medium text-gray-300 group-hover/tech:text-white transition-colors duration-300">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="relative inline-block liquid-glass rounded-2xl p-8 md:p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 rounded-full blur-[80px] -z-10" />

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Aprendizado <span className="text-primary">Contínuo</span>
            </h3>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              A tecnologia evolui constantemente, e eu me mantenho atualizado
              com as últimas tendências e melhores práticas do desenvolvimento web.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "UI/UX Design", icon: "🎨" },
                { name: "SEO", icon: "🔍" },
                { name: "Performance", icon: "⚡" },
                { name: "Acessibilidade", icon: "♿" },
                { name: "Clean Code", icon: "✨" }
              ].map((item, i) => (
                <span
                  key={i}
                  className="group px-4 py-2 bg-white/5 hover:bg-primary/10 text-gray-300 hover:text-primary text-sm rounded-full border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-default flex items-center gap-2"
                >
                  <span className="group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                  {item.name}
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
