import { motion } from "framer-motion";
import { MessageCircle, Phone, AlertTriangle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519999817815?text=Ol%C3%A1!%20Encontrei%20a%20RAFATEC%20no%20Google.%20Preciso%20de%20ajuda%20com%20encanamento%20de%20g%C3%A1s.";

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
    <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-orange-400/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-orange-500/20 text-orange-300 text-sm font-semibold border border-orange-400/30">
            <AlertTriangle className="w-4 h-4" />
            Sente cheiro de gas? Nao arrisque!
          </div>

          <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Precisa instalar ou corrigir seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              encanamento de gas?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 mb-4 max-w-3xl mx-auto leading-relaxed">
            Fale agora com a{" "}
            <span className="font-bold text-orange-300">RAFATEC, especialista em gas GN e GLP em Limeira.</span>{" "}
            Orcamento rapido, servico normatizado e laudo tecnico garantido.
          </p>
          <p className="text-blue-200/60 text-sm mb-10">
            Nota 5,0 no Google · 100 Normatizado ABNT · Laudo Tecnico com ART
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
              Falar com a RAFATEC Agora
            </motion.a>

            <a
              href="tel:+5519999817815"
              onClick={() => handleClick("telefone_cta")}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/15 text-white font-semibold hover:bg-white/25 transition-all duration-200 border border-white/20 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 text-orange-300" />
              (19) 99981-7815
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;