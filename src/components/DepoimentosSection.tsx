import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carol Moraes",
    text: "Em menos de 30 min ele ja veio resolver meu problema! Profissional muito atencioso e preco justo.",
    rating: 5,
  },
  {
    name: "Solji Eun",
    text: "Consertou a caixa acoplada com muita rapidez e eficiencia. Preco justo e trabalho de qualidade. Recomendo!",
    rating: 5,
  },
  {
    name: "Valnei Nardini",
    text: "Honesto, eficiente e preco justo. Resolveu o vazamento de forma definitiva. Profissional de confianca!",
    rating: 5,
  },
  {
    name: "Daiane Sass",
    text: "Muito pontual e servico de otima qualidade. Cumpriu o prazo e deixou tudo limpo apos o trabalho.",
    rating: 5,
  },
  {
    name: "Victoria Hardt",
    text: "Atendimento excelente, rapido e com preco justo. Resolveu o problema de encanamento sem complicacoes.",
    rating: 5,
  },
  {
    name: "Gabriel Galzerano",
    text: "Agilidade e profissionalismo impecaveis. Muito satisfeito com o servico prestado. Super recomendo!",
    rating: 5,
  },
];

const avaliacaoImages = [
  "/images/tiago/TIAGOENCANADOR-AVALIACAO01.jpg",
  "/images/tiago/TIAGOENCANADOR-AVALIACAO02.jpg",
  "/images/tiago/TIAGOENCANADOR-AVALIACAO03.jpg",
  "/images/tiago/TIAGOENCANADOR-AVALIACAO04.jpg",
  "/images/tiago/TIAGOENCANADOR-AVALIACAO05.jpg",
  "/images/tiago/TIAGOENCANADOR-AVALIACAO06.jpg",
];

const fotosServico = [
  "/images/tiago/TIAGOENCANADOR-FOTOSITE07.jpeg",
  "/images/tiago/TIAGOENCANADOR-FOTOSITE08.jpeg",
  "/images/tiago/TIAGOENCANADOR-FOTOSITE09.jpeg",
  "/images/tiago/TIAGOENCANADOR-FOTOSITE10.jpeg",
  "/images/tiago/TIAGOENCANADOR-FOTOSITE11.jpeg",
  "/images/tiago/TIAGOENCANADOR-FOTOSITE12.jpeg",
];

const DepoimentosSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-blue-50">
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
          <span className="font-bold text-gray-900 text-lg">4,7</span>
          <span className="text-gray-600 text-sm">55 avaliacoes no Google</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O que nossos{" "}
          <span className="text-cyan-600">clientes dizem</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Depoimentos reais de clientes satisfeitos com o servico de Tiago Encanador
        </p>
      </motion.div>

      {/* Text testimonials */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col gap-4"
          >
            <Quote className="w-8 h-8 text-cyan-400 flex-shrink-0" />
            <p className="text-gray-700 leading-relaxed flex-1 italic">"{t.text}"</p>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
              <p className="text-gray-400 text-xs">via Google Meu Negocio</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fotos de trabalhos realizados */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Trabalhos e Resultados Reais</h3>
        <p className="text-gray-500 text-sm">Veja a qualidade dos servicos executados por Tiago</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {fotosServico.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Trabalho realizado ${index + 1}`}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.style.display = "none";
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Avaliacao screenshots */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-2">Prints reais das avaliacoes no Google</h3>
        <p className="text-gray-500 text-sm">Transparencia total - veja o que os clientes escrevem</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {avaliacaoImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Avaliacao Google ${index + 1}`}
              className="w-full h-auto object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).parentElement!.style.display = "none";
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;
