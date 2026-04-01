import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-950 to-slate-950 text-white py-16 border-t border-cyan-800/30">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-cyan-300">Tiago Encanador e Reparos Hidraulicos</h3>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>
          <p className="text-blue-200/70 leading-relaxed text-sm">
            Encanador profissional 24h em Campinas e regiao. Solucoes hidraulicas rapidas e honestas para residencias e empresas em toda a regiao do DDD 19.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-cyan-300 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Horario de Atendimento
          </h4>
          <div className="space-y-2 text-blue-200/70 text-sm">
            <p>Segunda a Sabado: 7h as 19h</p>
            <p>Domingos e Feriados: 8h as 17h</p>
            <p className="text-red-300 font-semibold">Emergencias: 24 horas</p>
          </div>

          <h4 className="font-semibold mt-8 mb-4 text-cyan-300">Servicos</h4>
          <ul className="space-y-1 text-blue-200/70 text-sm">
            <li>Reparo de Vazamentos</li>
            <li>Limpeza de Caixa dAgua</li>
            <li>Desentupimento em Geral</li>
            <li>Redes Hidraulicas</li>
            <li>Torneiras e Chuveiros</li>
            <li>Caixa Acoplada</li>
            <li>Socorro 24h</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-cyan-300 flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Contato e Regiao
          </h4>
          <div className="space-y-3 text-blue-200/70 text-sm">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
              Campinas e Regiao Metropolitana - DDD 19<br />
              Sumare, Americana, Piracicaba, Indaiatuba, Valinhos, Vinhedo, Hortolandia e mais.
            </p>
            <a href="tel:+5519994896499" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              (19) 99489-6499
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cyan-800/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-blue-300/50">
          &copy; {new Date().getFullYear()} Tiago Encanador e Reparos Hidraulicos - Todos os direitos reservados
        </p>
        <p className="text-blue-300/50">
          Desenvolvido por{" "}
          <a
            href="https://lsbintelligence.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            LSB Business Intelligence
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
