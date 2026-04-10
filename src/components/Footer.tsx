import { MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-950 to-slate-950 text-white py-16 border-t border-orange-800/20">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/images/rafatec/RAFATEC-LOGO.jpeg"
              alt="RAFATEC Encanamento a Gas Logo"
              className="h-12 w-auto rounded-md object-contain bg-white p-1"
            />
          </div>
          <h3 className="text-base font-bold text-orange-300 mb-2">RAFATEC Encanamento a Gas GN e GLP</h3>
          <div className="mt-1 h-1 w-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-3" />
          <p className="text-blue-200/70 leading-relaxed text-sm">
            Especialista em instalacao, manutencao e teste de estanqueidade de redes de gas GN e GLP em Limeira e regiao. Servicos 100 normatizados com laudo tecnico.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-orange-300">Servicos</h4>
          <ul className="space-y-2 text-blue-200/70 text-sm">
            <li>Instalacao de Redes de Gas GN e GLP</li>
            <li>Teste de Estanqueidade e Laudos</li>
            <li>Conversao de Fogao e Cooktop</li>
            <li>Caca Vazamento de Gas</li>
            <li>Manutencao Preventiva e Corretiva</li>
            <li>Adequacao Normativa ABNT</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-orange-300 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Contato e Regiao
          </h4>
          <div className="space-y-3 text-blue-200/70 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
              Limeira - SP e Regiao Metropolitana<br />
              Rio Claro, Araras, Piracicaba, Americana, Santa Barbara dOeste e mais.
            </p>
            <a href="tel:+5519999817815" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
              <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
              (19) 99981-7815
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-800/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-blue-300/50">
          &copy; {new Date().getFullYear()} RAFATEC Encanamento a Gas GN e GLP - Limeira SP
        </p>
        <p className="text-blue-300/50">
          Developed by{" "}
          <a
            href="https://lsbintelligence.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
          >
            LSB Business Intelligence
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;