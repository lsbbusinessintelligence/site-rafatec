import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519994896499?text=Ol%C3%A1!%20Preciso%20de%20socorro%20em%20(19).%20%C3%89%20para%20encanamento%20ou%20reparo%3F";

const CtaSection = () => {
  const handleClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click_whatsapp", {
        event_category: "lead",
        event_label: label,
      });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white/8 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-8" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#7dd3fc"/>
        </svg>
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 text-cyan-200 text-sm font-semibold border border-white/20">
            Emergencia Hidraulica? Nao espere!
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Vazamento ou entupimento?{" "}
            <span className="text-cyan-300">Nao fique na mao!</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Para socorro hidraulico honesto,{" "}
            <span className="font-bold text-cyan-300">Tiago Encanador e a solucao.</span>{" "}
            Atendimento 24 horas em Campinas e toda a regiao do DDD 19.
          </p>
          <p className="text-blue-200/60 text-sm mb-10">
            4,7 estrelas em 55 avaliacoes no Google - Servico Garantido
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick("botao_whatsapp_cta")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-400 transition-all duration-200 shadow-2xl shadow-green-500/40"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar Tiago no WhatsApp Agora
            </motion.a>

            <a
              href="tel:+5519994896499"
              onClick={() => handleClick("telefone_cta")}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/15 text-white font-semibold hover:bg-white/25 transition-all duration-200 border border-white/20 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 text-cyan-300" />
              (19) 99489-6499
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
