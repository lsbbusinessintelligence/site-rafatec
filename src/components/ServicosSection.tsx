import { motion } from "framer-motion";
import { Droplets, Wrench, Waves, AlertCircle, Settings, ShieldCheck, Zap, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Vazamentos e Infiltracoes",
    description: "Localizacao e reparo definitivo de vazamentos internos e externos, sem quebra-quebra desnecessario.",
    image: "/images/tiago/TIAGOENCANADOR-FOTOSITE01.jpeg",
  },
  {
    icon: FlaskConical,
    title: "Limpeza de Caixa dAgua",
    description: "Higienizacao profissional de caixas dagua e reservatorios para garantir agua limpa e saudavel.",
    image: "/images/tiago/TIAGOENCANADOR-FOTOSITE02.jpeg",
  },
  {
    icon: Waves,
    title: "Instalacao de Redes Hidraulicas",
    description: "Projeto e execucao de tubulacoes de PVC e conexoes embutidas para obras residenciais e comerciais.",
    image: "/images/tiago/TIAGOENCANADOR-FOTOSITE03.jpeg",
  },
  {
    icon: Settings,
    title: "Caixa Acoplada e Descarga",
    description: "Conserto, troca e reparo de mecanismos de descarga e caixas acopladas com rapidez e garantia.",
    image: "/images/tiago/TIAGOENCANADOR-FOTOSITE04.jpeg",
  },
  {
    icon: Wrench,
    title: "Torneiras e Chuveiros",
    description: "Reparo rapido e substituicao de acessorios, metais sanitarios, torneiras e registros.",
    image: "/images/tiago/TIAGOENCANADOR-FOTOSITE05.jpeg",
  },
  {
    icon: ShieldCheck,
    title: "Reparo Hidraulico Geral",
    description: "Solucoes completas para sistemas hidraulicos residenciais e comerciais com qualidade e pontualidade.",
    image: "/images/tiago/TIAGOENCANADOR-FOTOSITE06.jpeg",
  },
  {
    icon: AlertCircle,
    title: "Desentupimento em Geral",
    description: "Solucoes eficientes para pias, ralos, vasos sanitarios e redes de esgoto entupidos.",
    image: null,
  },
  {
    icon: Zap,
    title: "Socorro Hidraulico 24h",
    description: "Atendimento rapido para emergencias hidraulicas a qualquer hora do dia ou da noite.",
    image: null,
  },
];

const ServicosSection = () => (
  <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200">
          Servicos Especializados
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Solucoes Hidraulicas{" "}
          <span className="text-cyan-600">Completas e com Garantia</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Atendimento rapido e honesto em Campinas e toda a regiao do DDD 19
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-200 overflow-hidden"
            >
              {service.image && (
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.style.display = "none";
                    }}
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicosSection;
