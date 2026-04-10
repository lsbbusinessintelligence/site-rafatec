import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Como saber se o meu fogao aceita gas encanado (GN)?",
    answer: "A maioria dos fogoes sai de fabrica configurada para GLP (gas de botijao). Para usar gas natural encanado (GN), e necessario fazer a conversao trocando os bicos injetores do aparelho. A RAFATEC realiza essa conversao com seguranca e emite laudo tecnico de conformidade. Consulte-nos antes de qualquer alteracao.",
  },
  {
    question: "Qual a diferenca entre gas GN e GLP?",
    answer: "O GN (Gas Natural) e fornecido pela Comgas via rede encanada diretamente na residencia, sem necessidade de botijao. O GLP (Gas Liquefeito de Petroleo) e o gas de botijao tradicional (P13, P45). Ambos exigem instalacoes e equipamentos especificos para cada tipo, e a RAFATEC e especialista em sistemas de GN e GLP em Limeira.",
  },
  {
    question: "O que e o teste de estanqueidade e por que e obrigatorio?",
    answer: "O teste de estanqueidade e um procedimento tecnico que verifica se existem vazamentos em toda a rede de gas de um imovel. E obrigatorio pela norma ABNT NBR 15526 e exigido pelos bombeiros e pela Comgas antes da liberacao do fornecimento de gas. A RAFATEC realiza o teste e emite o laudo tecnico (ART) em Limeira e regiao.",
  },
  {
    question: "Quanto tempo demora a instalacao de gas encanado em uma residencia em Limeira?",
    answer: "O tempo varia conforme o tamanho do imovel, mas uma instalacao residencial padrao costuma ser concluida em um unico dia. A RAFATEC realiza o projeto, a execucao e emite o laudo de conformidade, tudo de forma agil e normatizada em Limeira.",
  },
  {
    question: "E perigoso ter vazamento de gas? O que devo fazer?",
    answer: "Sim, vazamentos de gas representam risco de explosao e intoxicacao. Se sentir cheiro de gas: (1) Desligue o registro geral de gas; (2) Nao acione interruptores eletricos; (3) Abra portas e janelas para ventilar; (4) Saia do imovel; (5) Ligue imediatamente para um tecnico especializado. A RAFATEC oferece deteccao eletronica de vazamentos e reparo imediato em Limeira.",
  },
  {
    question: "A RAFATEC emite laudo tecnico e ART para o Corpo de Bombeiros?",
    answer: "Sim! Todos os servicos da RAFATEC sao realizados com emissao de laudo tecnico de conformidade e, quando exigido, com ART (Anotacao de Responsabilidade Tecnica). Nossa documentacao e aceita pelo Corpo de Bombeiros, Comgas e prefeituras da regiao de Limeira.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </span>
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Duvidas sobre{" "}
            <span className="text-orange-500">gas em Limeira?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Respondemos as perguntas mais comuns sobre encanamento a gas GN e GLP em Limeira.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 bg-white hover:bg-orange-50 transition-colors"
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
              >
                <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                  {faq.question}
                </span>
                <span className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${open === index ? "border-orange-500 bg-orange-500 text-white rotate-45" : "border-gray-300 text-gray-400"}`}>
                  +
                </span>
              </button>
              {open === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed bg-orange-50/50 border-t border-gray-100">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;