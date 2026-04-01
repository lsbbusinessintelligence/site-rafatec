import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/5519994896499?text=Ol%C3%A1!%20Preciso%20de%20socorro%20em%20(19).%20%C3%89%20para%20encanamento%20ou%20reparo%3F";

const trackEvent = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_whatsapp", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const trackCall = (label: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "click_call", {
      event_category: "lead",
      event_label: label,
    });
  }
};

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Botao Ligar */}
      <motion.a
        href="tel:+5519994896499"
        onClick={() => trackCall("flutuante_tel")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-2 bg-blue-600 text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-blue-600/40 hover:bg-blue-500 transition-colors text-sm font-semibold"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">(19) 99489-6499</span>
      </motion.a>

      {/* Botao WhatsApp */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("botao_flutuante")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-2 bg-green-500 text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-400 transition-colors text-sm font-semibold"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
