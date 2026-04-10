import { motion } from "framer-motion";
import { MessageCircle, Phone, Star, Flame, ShieldCheck } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519999817815?text=Ol%C3%A1!%20Encontrei%20a%20RAFATEC%20no%20Google.%20Preciso%20de%20ajuda%20com%20encanamento%20de%20g%C3%A1s.";

const trackWhatsApp = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[75vh] flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />
      <div className="absolute top-16 right-8 w-[36rem] h-[36rem] rounded-full bg-orange-500/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-blue-300/5 blur-3xl" />
    </div>

    <div className="container relative z-10 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex items-center gap-4"
      >
        <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
          <Flame className="w-5 h-5 text-orange-400" />
          <span className="text-orange-200 text-sm font-semibold tracking-wide">
            RAFATEC Encanamento a Gas – GN e GLP
          </span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-sm font-semibold bg-orange-500/20 text-orange-300 border border-orange-400/30">
            <ShieldCheck className="w-4 h-4" />
            Servico Normatizado ABNT · Laudo Tecnico com ART
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Especialista em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Encanamento a Gas GN e GLP
            </span>{" "}
            em Limeira
          </h1>

          <p className="text-lg md:text-xl text-blue-100/85 mb-8 max-w-2xl leading-relaxed">
            Instalacao, manutencao, conversao de fogoes e teste de estanqueidade.
            Servicos normatizados com laudo tecnico para sua maxima seguranca em Limeira e regiao.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5,0</span>
            <span className="text-blue-200/70 text-sm">(Nota maxima nas avaliacoes do Google)</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp("botao_whatsapp_hero")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-400 transition-all duration-200 shadow-xl shadow-green-500/40 hover:shadow-green-400/50 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Solicitar Orcamento Seguro (WhatsApp)
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <a
              href="tel:+5519999817815"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-orange-300" />
              (19) 99981-7815
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-4 mt-8 lg:mt-0"
        >
          <div className="relative max-w-[300px] w-full">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-orange-400/40 rounded-xl p-4 shadow-xl relative">
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                &ldquo;Servico impecavel!{" "}
                <span className="font-bold text-blue-700">Profissional qualificado</span>,{" "}
                materiais certificados e laudo tecnico entregue no mesmo dia.&rdquo;
              </p>
              <p className="text-gray-500 text-xs text-center mt-2">— Cliente RAFATEC, via Google</p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/95" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-100 rounded-3xl shadow-2xl shadow-blue-900/40 p-6 max-w-sm w-full border border-blue-200/50">
            <div className="relative overflow-hidden rounded-2xl bg-white ring-4 ring-orange-300/30 flex items-center justify-center" style={{ minHeight: 180 }}>
              <img
                src="/images/rafatec/RAFATEC-LOGO.jpeg"
                alt="RAFATEC Encanamento a Gas GN e GLP Limeira"
                className="w-full h-auto object-contain"
                style={{ maxHeight: 220 }}
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-gray-900 font-bold text-lg">RAFATEC</p>
              <p className="text-blue-700 text-sm font-medium mb-3">Encanamento a Gas GN e GLP</p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">Nota 5,0 · Avaliacoes maximas no Google</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg py-2 px-4 shadow-inner border border-blue-200/60">
              <span className="text-xs font-semibold text-blue-800 tracking-wide uppercase">Limeira e Regiao · SP</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;