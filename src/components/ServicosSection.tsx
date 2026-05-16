import { motion } from "framer-motion";
import { Flame, Wrench, FlaskConical, Settings, ShieldCheck, Zap } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Instalacao de Redes de Gas GN e GLP",
    description: "Projetos residenciais e comerciais executados seguindo rigorosamente as normas tecnicas ABNT NBR 15526 e exigencias da Comgas. Do projeto ao laudo, tudo na RAFATEC.",
    alt: "Instalacao de tubulacao de gas de cobre em residencia em Limeira",
    image: "/images/rafatec/RAFATEC-FOTO01.jpeg",
  },
  {
    icon: FlaskConical,
    title: "Teste de Estanqueidade e Laudos",
    description: "Verificacao completa da hermeticidade da rede de gas com emissão de laudo de conformidade e ART. Obrigatorio pelos bombeiros e pela Comgas em Limeira.",
    alt: "Tecnico da RAFATEC realizando teste de estanqueidade em apartamento em Limeira",
    image: "/images/rafatec/RAFATEC-FOTO02.jpeg",
  },
  {
    icon: Settings,
    title: "Conversao de Fogao e Cooktop",
    description: "Adaptacao segura do seu eletrodomestico para gas natural (GN) ou gas de botijao (GLP), com troca de bicos injetores e regulagem certificada.",
    alt: "Conversao de fogao para gas natural GN em Limeira pela RAFATEC",
    image: "/images/rafatec/RAFATEC-FOTO03.jpeg",
  },
  {
    icon: Zap,
    title: "Caca Vazamento de Gas",
    description: "Deteccao eletronica precisa de vazamentos e reparo imediato, garantindo a seguranca do ambiente. Nao arrisque: chame a RAFATEC.",
    alt: "Deteccao eletronica de vazamento de gas em Limeira pela RAFATEC",
    image: "/images/rafatec/RAFATEC-FOTO04.jpeg",
  },
  {
    icon: Wrench,
    title: "Manutencao Preventiva e Corretiva",
    description: "Troca de flexiveis, registros, valvulas e adequacao de ponto de gas para residencias e empresas em Limeira e regiao.",
    alt: "Manutencao de rede de gas com troca de flexivel em Limeira",
    image: "/images/rafatec/RAFATEC-FOTO05.jpeg",
  },
  {
    icon: ShieldCheck,
    title: "Adequacao Normativa",
    description: "Regularizacao de instalacoes antigas para atender as exigencias do Corpo de Bombeiros, Comgas e normas ABNT vigentes.",
    alt: "Adequacao de instalacao de gas normativa ABNT em Limeira pela RAFATEC",
    image: "/images/rafatec/RAFATEC-FOTO06.jpeg",
  },
];

const ServicosSection = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="servicos-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-orange-50 text-orange-600 border border-orange-200">
          Servicos Especializados em Gas
        </span>
        <h2 id="servicos-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Servicos de{" "}
          <span className="text-blue-700">Encanamento a Gas em Limeira</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Da instalacao ao laudo tecnico: solucoes completas em gas GN e GLP para residencias e comercios em Limeira. A Rafatec Gas e a escolha certa.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              {service.image && (
                <div className="overflow-hidden h-48 bg-blue-50">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center mb-4 shadow-md shadow-orange-200">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicosSection;