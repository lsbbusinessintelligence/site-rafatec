import { motion } from "framer-motion";
import { MessageCircle, Phone, Star, Droplets } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5519994896499?text=Ol%C3%A1!%20Preciso%20de%20socorro%20em%20(19).%20%C3%89%20para%20encanamento%20ou%20reparo%3F";

const trackWhatsApp = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800">
    {/* Water-inspired decorative elements */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="absolute top-16 right-8 w-[32rem] h-[32rem] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl" />
      {/* Wave SVG decoration */}
      <svg className="absolute bottom-0 left-0 right-0 w-full opacity-10" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" fill="#7dd3fc"/>
      </svg>
    </div>

    <div className="container relative z-10 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center gap-4"
      >
        <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
          <Droplets className="w-5 h-5 text-cyan-300" />
          <span className="text-cyan-200 text-sm font-semibold tracking-wide">
            Tiago Encanador e Reparos Hidráulicos
          </span>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold bg-red-500/20 text-red-300 border border-red-400/30">
            <span className="w-2 h-2 rounded-full bg-red-400 inline-block animate-pulse" />
            Emergência 24 Horas — Campinas e Região
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Encanador 24h e Reparos em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
              Campinas e Região
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100/85 mb-8 max-w-2xl leading-relaxed">
            Soluções hidráulicas rápidas, honestas e com preço justo para sua casa ou empresa.
            Socorro urgente para vazamentos, entupimentos e reparos gerais.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-yellow-400"}`} />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4,7</span>
            <span className="text-blue-200/70 text-sm">(55 avaliações no Google)</span>
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
              Chamar Tiago Agora (WhatsApp)
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <a
              href="tel:+5519994896499"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-cyan-300" />
              (19) 99489-6499
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center gap-6 mt-12 lg:mt-0"
        >
          <div className="relative max-w-[300px]">
            <div className="bg-white/95 backdrop-blur-sm border-2 border-cyan-400/40 rounded-xl p-4 shadow-xl relative">
              <p className="text-gray-800 text-sm text-center leading-relaxed">
                &ldquo;Em menos de{" "}
                <span className="font-bold text-blue-700">30 minutos</span>{" "}
                ele já veio resolver meu problema! Trabalho impecável e honesto.&rdquo;
              </p>
              <p className="text-gray-500 text-xs text-center mt-2">- Carol Moraes, via Google</p>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/95" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-100 rounded-3xl shadow-2xl shadow-blue-900/40 p-6 max-w-sm w-full border border-blue-200/50">
            <div className="relative overflow-hidden rounded-2xl bg-white ring-4 ring-cyan-300/30">
              <img
                src="/images/tiago/TIAGOENCANADOR-AVATAR.jpeg"
                alt="Tiago Encanador"
                className="w-full h-auto"
                style={{ filter: "brightness(1.05) saturate(0.95)" }}
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.style.display = "none";
                  if (el.parentElement) {
                    el.parentElement.innerHTML = '<div class="w-full h-48 bg-blue-100 flex items-center justify-center text-blue-400 text-4xl font-bold">T</div>';
                  }
                }}
              />
            </div>
            <div className="mt-5 text-center">
              <p className="text-gray-900 font-bold text-lg">Tiago</p>
              <p className="text-blue-600 text-sm font-medium mb-3">Encanador e Reparos Hidráulicos</p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-500 text-sm">4,7 · 55 avaliações no Google</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg py-2 px-4 shadow-inner border border-blue-200/60">
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Campinas e Região · DDD 19
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
