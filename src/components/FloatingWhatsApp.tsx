import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/5519999817815?text=Ol%C3%A1!%20Encontrei%20a%20RAFATEC%20no%20Google.%20Preciso%20de%20ajuda%20com%20encanamento%20de%20g%C3%A1s.";

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
      <motion.a
        href="tel:+5519999817815"
        onClick={() => trackCall("flutuante_tel")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-2 bg-blue-700 text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-blue-700/40 hover:bg-blue-600 transition-colors text-sm font-semibold"
      >
        <Phone className="w-4 h-4" />
        <span className="hidden sm:inline">(19) 99981-7815</span>
      </motion.a>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("botao_flutuante")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 hover:bg-green-400 transition-colors relative"
        aria-label="Abrir WhatsApp RAFATEC"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;