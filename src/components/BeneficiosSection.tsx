import { motion } from "framer-motion";
import { Clock, DollarSign, Zap, Award, Star, ThumbsUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24 Horas",
    description: "Disponibilidade constante para emergencias hidraulicas a qualquer hora. Ligue agora e resolva seu problema rapidamente.",
  },
  {
    icon: DollarSign,
    title: "Preco Justo e Honesto",
    description: "Transparencia absoluta nos orcamentos, sem surpresas na hora de pagar. Precos justos como confirmado por clientes reais.",
  },
  {
    icon: Zap,
    title: "Rapidez e Agilidade",
    description: "Atendimento urgente com resolucao rapida. Em menos de 30 minutos ja pode estar no local para emergencias na regiao.",
  },
  {
    icon: Award,
    title: "Pontualidade e Qualidade",
    description: "Profissionalismo e compromisso com o resultado. Trabalho limpo, pontual e de alta qualidade garantida.",
  },
  {
    icon: Star,
    title: "4,7 Estrelas no Google",
    description: "Historico comprovado de atendimento de excelencia com 55 avaliacoes positivas no Google Meu Negocio.",
  },
  {
    icon: ThumbsUp,
    title: "Garantia do Servico",
    description: "Todos os reparos sao realizados com responsabilidade e garantia. A satisfacao do cliente e prioridade.",
  },
];

const BeneficiosSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-cyan-300/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-blue-300/5 blur-3xl" />
      <svg className="absolute bottom-0 left-0 right-0 w-full opacity-5" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#7dd3fc"/>
      </svg>
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-400/15 text-cyan-300 border border-cyan-400/20">
          Por que escolher Tiago?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Diferenciais que fazem{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
            toda a diferenca
          </span>
        </h2>
        <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
          Qualidade, confianca e agilidade no atendimento em Campinas e regiao do DDD 19
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-200/70 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BeneficiosSection;
