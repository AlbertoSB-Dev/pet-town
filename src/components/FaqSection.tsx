"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso agendar o banho e tosa com antecedência?",
      a: "Recomendamos o agendamento prévio pelo WhatsApp para garantir a vaga e o horário de sua preferência sem tempo excessivo de espera na clínica, especialmente às sextas-feiras e sábados.",
    },
    {
      q: "Vocês usam sedação ou calmante no banho?",
      a: "Jamais! No Pet Town prezamos pelo manejo compassivo e respeitoso. Nossos profissionais são treinados em técnicas de dessensibilização para que o pet se sinta seguro e relaxado.",
    },
    {
      q: "Quais vacinas meu filhote precisa tomar?",
      a: "Para cães, o protocolo essencial inclui as doses da polivalente (V10 ou V8) e a vacina Antirrábica, além de vacinas contra Giárdia e Gripe Canina. Em felinos, aplicamos a quádrupla/quíntupla felina e antirrábica. Nossos veterinários montam o calendário ideal na primeira consulta.",
    },
    {
      q: "Vocês atendem emergências veterinárias?",
      a: "Nosso atendimento clínico funciona durante todo o horário comercial (segunda a sábado). Casos de urgência e consultas de rotina contam com prioridade da nossa equipe de plantão.",
    },
    {
      q: "As toalhas e materiais de tosa são higienizados?",
      a: "Sim, seguimos padrão hospitalar! Cada pet recebe toalhas individuais 100% higienizadas e embaladas, e todas as lâminas e tesouras passam por esterilização entre cada atendimento.",
    },
  ];

  return (
    <section className="relative bg-[#FDFBF7] py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6]/15 px-4 py-1 text-xs font-bold text-[#0D9488] ring-1 ring-[#14B8A6]/30">
            <HelpCircle className="h-3.5 w-3.5 text-[#14B8A6]" />
            TIRE SUAS DÚVIDAS
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-slate-600">
            Respostas para as dúvidas mais comuns dos tutores de primeira viagem.
          </p>
        </div>

        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-display font-semibold text-slate-800 transition hover:text-[#F26430]"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#F26430]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 bg-[#FFFDFB] px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
