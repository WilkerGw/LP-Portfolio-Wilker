// src/components/Automation.tsx
import React from "react";
import { FaSitemap, FaBolt, FaSyncAlt, FaRobot } from "react-icons/fa";

const Automation = () => {
  return (
    <section
      id="automation"
      className="relative py-16 md:py-24 bg-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <FaRobot className="text-primary mr-2" />
            <span className="text-primary text-sm font-bold tracking-wider uppercase">Automação</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            Automação & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">N8N</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Otimizando processos e conectando ferramentas para poupar tempo e aumentar a eficiência através de automações inteligentes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Info Cards */}
            <div className="space-y-6">
              <div className="bg-dark-surface border border-white/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  O que é N8N?
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed relative z-10">
                  O N8N é uma ferramenta low-code de automação de fluxos de trabalho. Permite conectar diferentes aplicações e serviços (APIs, bancos de dados, e-mails) para criar processos automáticos de forma visual e eficiente.
                </p>
              </div>

              <div className="bg-dark-surface border border-white/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  Como eu ajudo?
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed relative z-10">
                  Utilizo o N8N para construir automações personalizadas que resolvem problemas de negócio, desde simples notificações até integrações complexas que sincronizam dados entre múltiplas plataformas.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: <FaSitemap />,
                  title: "Fluxos de Trabalho",
                  description: "Desenho e implemento fluxos lógicos para automatizar tarefas repetitivas e otimizar processos.",
                  color: "primary"
                },
                {
                  icon: <FaSyncAlt />,
                  title: "Integração de APIs",
                  description: "Conecto APIs de serviços distintos (Google, CRMs, E-mail) para que conversem entre si.",
                  color: "secondary"
                },
                {
                  icon: <FaBolt />,
                  title: "Otimização de Tempo",
                  description: "Reduzo o trabalho manual da sua equipe, economizando tempo e minimizando erros humanos.",
                  color: "primary-light"
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-dark-surface border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats or CTA Section */}
          <div className="bg-dark-surface/50 backdrop-blur-sm border border-white/5 rounded-3xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Automatizar?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar a otimizar seus processos e aumentar a produtividade da sua equipe.
            </p>
            <a
              href="#contact"
              className="inline-block py-4 px-8 bg-gradient-to-r from-primary to-secondary text-dark font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automation;