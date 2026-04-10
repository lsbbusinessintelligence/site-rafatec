import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Star, ThumbsUp, FileCheck } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Seguranca em 1 Lugar",
    description: "Profissionais qualificados, materiais certificados e execucao rigorosamente dentro das normas ABNT. Sua familia em seguranca total.",
  },
  {
    icon: Clock,
    title: "Atendimento Agil em Limeira",
    description: "Chegamos rapido para solucionar suas necessidades de gas em Limeira e regiao. Agilidade sem abrir mao da qualidade.",
  },
  {
    icon: FileCheck,
    title: "100 Normatizado",
    description: "Adequacao completa as exigencias do Corpo de Bombeiros, Comgas e normas ABNT NBR 15526. Laudo tecnico e ART em todos os servicos.",
  },
  {
    icon: Award,
    title: "Aprovacao Maxima dos Clientes",
    description: "Historico de avaliacoes nota 5 estrelas no Google Meu Negocio. Clientes satisfeitos em Limeira e regiao comprovam nossa excelencia.",
  },
  {
    icon: Star,
    title: "Nota Maxima no Google",
    description: "Avaliacao 5,0 no Google com dezenas de clientes satisfeitos. Transparencia, pontualidade e servico de alta qualidade sempre.",
  },
  {
    icon: ThumbsUp,
    title: "Garantia Total do Servico",
    description: "Todos os servicos sao garantidos. Emitimos laudo de conformidade e acompanhamos o resultado para sua total satisfacao e seguranca.",
  },
];

const BeneficiosSection = () => (
  <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden" aria-labelledby="diferenciais-heading">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent" />
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-orange-400/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-blue-300/5 blur-3xl" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-orange-400/15 text-orange-300 border border-orange-400/20">
          Por que escolher a RAFATEC?
        </span>
        <h2 id="diferenciais-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
          Diferenciais que garantem{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
            sua seguranca
          </span>
        </h2>
        <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
          Lide com gas exige credibilidade absoluta. Veja por que a RAFATEC e a escolha certa em Limeira.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, index) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/8 border border-white/10 rounded-2xl p-6 hover:bg-white/12 hover:border-orange-400/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BeneficiosSection;