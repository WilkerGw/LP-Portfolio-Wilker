import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-green-50 to-gray-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>

      <div className="flex flex-col items-center container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-black via-green-600 to-green-800 bg-clip-text text-transparent animate-slide-up">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-800 mx-auto rounded-full"></div>
        </div>
            <Image
              src="/images/logo.png"
              alt="Wilker Martins"
              width={450}
              height={450}
              className="mb-10 w-50"
            />
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-up delay-200">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Olá! Eu sou{" "}
                  <span className="font-bold text-green-600">
                    Wilker Martins
                  </span>
                  , um desenvolvedor web apaixonado por criar soluções digitais
                  que sejam tanto funcionais quanto visualmente atraentes. Minha
                  jornada na programação começou com um fascínio por como a
                  tecnologia pode simplificar e melhorar a vida das pessoas.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Com experiência em tecnologias modernas como{" "}
                  <span className="font-semibold text-green-600">React</span>,{" "}
                  <span className="font-semibold text-green-600">Next.js</span>{" "}
                  e
                  <span className="font-semibold text-green-600">
                    {" "}
                    Tailwind CSS
                  </span>
                  , eu me dedico a construir interfaces de usuário rápidas,
                  responsivas e intuitivas. Estou sempre em busca de novos
                  desafios e aprendizados para aprimorar minhas habilidades.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-600/10 to-green-800/10 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fora do mundo do código, gosto de explorar novas tecnologias,
                  contribuir para projetos de código aberto e acompanhar as
                  últimas tendências do mercado de desenvolvimento web.
                </p>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="space-y-6 animate-slide-up delay-300">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    2+
                  </div>
                  <div className="text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-700 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projetos Concluídos
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-gray-600">Tecnologias</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-green-800 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Dedicado</div>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Tecnologias Favoritas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Python",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-green-500 to-green-700 text-white text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
