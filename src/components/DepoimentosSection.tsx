import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Cliente RAFATEC", text: "Servico excelente! Instalaram a rede de gas da minha casa em Limeira com total seguranca. Emitiram o laudo tecnico no mesmo dia. Super recomendo!", rating: 5 },
  { name: "Cliente RAFATEC", text: "Precisei converter meu fogao para gas natural e a RAFATEC fez tudo certinho, com material de qualidade e ainda explicou tudo sobre a nova rede de gas.", rating: 5 },
  { name: "Cliente RAFATEC", text: "Profissionais muito qualificados. Fizeram o teste de estanqueidade no meu apartamento e identificaram um pequeno vazamento que eu nao sabia. Seguranca em primeiro lugar!", rating: 5 },
  { name: "Cliente RAFATEC", text: "Atendimento rapido e eficiente. Fiz o orcamento por WhatsApp e em menos de 24h a equipe ja estava aqui em Limeira resolvendo tudo.", rating: 5 },
  { name: "Cliente RAFATEC", text: "Nota 10! Contratei para instalar a rede de gas GN no meu comercio. Trabalho impecavel, dentro do prazo e com toda a documentacao exigida pelos bombeiros.", rating: 5 },
  { name: "Cliente RAFATEC", text: "Equipe extremamente profissional. Explicaram cada etapa do servico, usaram materiais certificados e entregaram o laudo com ART. Confianca total!", rating: 5 },
];

const avaliacaoImages = [
  { src: "/images/rafatec/RAFATEC-AVALIACAO01.jpeg", alt: "Avaliacao 5 estrelas RAFATEC Encanamento Gas Limeira no Google" },
  { src: "/images/rafatec/RAFATEC-AVALIACAO02.jpeg", alt: "Cliente satisfeito com servico de gas em Limeira RAFATEC" },
  { src: "/images/rafatec/RAFATEC-AVALIACAO03.jpeg", alt: "Avaliacao positiva RAFATEC instalacao gas GN Limeira" },
  { src: "/images/rafatec/RAFATEC-AVALIACAO04.jpeg", alt: "Review 5 estrelas RAFATEC teste de estanqueidade Limeira" },
  { src: "/images/rafatec/RAFATEC-AVALIACAO05.jpeg", alt: "Depoimento cliente RAFATEC conversao fogao gas Limeira" },
  { src: "/images/rafatec/RAFATEC-AVALIACAO06.jpeg", alt: "Nota maxima RAFATEC encanamento gas GLP Limeira Google" },
];

const fotosServico = [
  { src: "/images/rafatec/RAFATEC-FOTO07.jpeg", alt: "Instalacao de rede de gas de cobre em residencia Limeira RAFATEC" },
  { src: "/images/rafatec/RAFATEC-FOTO08.jpeg", alt: "Teste de estanqueidade em apartamento em Limeira pela RAFATEC" },
  { src: "/images/rafatec/RAFATEC-FOTO09.jpeg", alt: "Conversao de fogao para gas natural GN Limeira RAFATEC" },
  { src: "/images/rafatec/RAFATEC-FOTO10.jpeg", alt: "Instalacao ponto de gas GLP em comercio Limeira RAFATEC" },
  { src: "/images/rafatec/RAFATEC-FOTO11.jpeg", alt: "Manutencao de rede de gas com troca de registro em Limeira" },
  { src: "/images/rafatec/RAFATEC-FOTO12.jpeg", alt: "RAFATEC equipe tecnica instalacao gas normatizada Limeira SP" },
];

const DepoimentosSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-blue-50" aria-labelledby="avaliacoes-heading">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-yellow-50 border border-yellow-200">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-bold text-gray-900 text-lg">5,0</span>
          <span className="text-gray-600 text-sm">Nota maxima no Google</span>
        </div>
        <h2 id="avaliacoes-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O que nossos{" "}
          <span className="text-orange-500">clientes dizem</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Avaliacoes reais de clientes satisfeitos com os servicos de gas da Rafatec Gas em Limeira e regiao
        </p>
      </motion.div>

      {/* Testimonial cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, index) => (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <Quote className="w-8 h-8 text-orange-200 mb-4 flex-shrink-0" />
            <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">{t.text}</p>
            <footer className="flex items-center justify-between">
              <cite className="text-gray-500 text-xs font-medium not-italic">— {t.name}</cite>
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>

      {/* Google review screenshots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-xl font-bold text-gray-800 text-center mb-8">
          Avaliacoes reais no Google
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {avaliacaoImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service photos gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-800 text-center mb-8">
          Nossos trabalhos em Limeira e regiao
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fotosServico.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default DepoimentosSection;