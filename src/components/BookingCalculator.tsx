"use client";

import { useState } from "react";
import {
  Calculator,
  MessageCircle,
  Sparkles,
  Calendar,
  Clock,
  Check,
  PawPrint,
} from "lucide-react";

export default function BookingCalculator() {
  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const [petSize, setPetSize] = useState<"small" | "medium" | "large">("small");
  const [petName, setPetName] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "banho-tosa",
  ]);
  const [period, setPeriod] = useState<"manha" | "tarde">("manha");

  const servicesList = [
    {
      id: "banho-tosa",
      name: "Banho & Tosa Completa",
      desc: "Higienização, tosa da raça e acabamento",
      estimated: "A partir de R$ 75",
    },
    {
      id: "banho-higienica",
      name: "Banho & Tosa Higiênica",
      desc: "Banho morno, patinhas, barriga e orelhas",
      estimated: "A partir de R$ 55",
    },
    {
      id: "hidratacao",
      name: "Hidratação de Pelos Premium",
      desc: "Tratamento profundo com brilho e perfume suave",
      estimated: "A partir de R$ 35",
    },
    {
      id: "consulta",
      name: "Consulta Veterinária",
      desc: "Avaliação clínica completa com médico veterinário",
      estimated: "Sob consulta",
    },
    {
      id: "vacina",
      name: "Vacinação Importada / Vermífugo",
      desc: "V10, Antirrábica, Giárdia ou Gripe",
      estimated: "Sob consulta",
    },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const getPetSizeLabel = () => {
    if (petSize === "small") return "Porte Pequeno (até 10kg)";
    if (petSize === "medium") return "Porte Médio (10 a 20kg)";
    return "Porte Grande (acima de 20kg)";
  };

  const getSelectedNames = () => {
    return selectedServices
      .map((s) => servicesList.find((item) => item.id === s)?.name)
      .filter(Boolean)
      .join(", ");
  };

  const generateWhatsAppUrl = () => {
    const petTypeLabel = petType === "dog" ? "Cachorro" : "Gato";
    const namePart = petName.trim() ? `Meu pet se chama *${petName.trim()}*.` : "";
    const sizePart = petType === "dog" ? `Porte: *${getPetSizeLabel()}*.` : "";
    const periodLabel = period === "manha" ? "pela Manhã" : "pela Tarde";

    const text = `Olá, Pet Town! 🐾
Gostaria de agendar um atendimento:
${namePart}
- Tipo: *${petTypeLabel}*
${sizePart ? `- ${sizePart}\n` : ""}- Serviços de interesse: *${getSelectedNames()}*
- Preferência de turno: *${periodLabel}*

Poderiam me informar os horários disponíveis? Obrigado!`;

    return `https://wa.me/558130715830?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="agendamento" className="relative bg-[#FFF9F5] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6]/15 px-4 py-1 text-xs font-bold text-[#0D9488] ring-1 ring-[#14B8A6]/30">
            <Calculator className="h-3.5 w-3.5 text-[#14B8A6]" />
            PRATICIDADE TOTAL
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
            Simulador de Agendamento
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600">
            Personalize os cuidados para o seu bichinho e envie direto para o
            nosso WhatsApp em um clique!
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 ring-1 ring-slate-100">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Form Left Side */}
            <div className="space-y-6 lg:col-span-7">
              {/* Pet Type */}
              <div>
                <label className="block font-display text-sm font-bold text-slate-700">
                  1. Qual é o seu pet?
                </label>
                <div className="mt-2.5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPetType("dog")}
                    className={`flex items-center justify-center gap-2.5 rounded-2xl border-2 py-3 font-display font-semibold transition ${
                      petType === "dog"
                        ? "border-[#F26430] bg-[#FFEDE5] text-[#DC5322]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-xl">🐶</span> Cachorro
                  </button>
                  <button
                    type="button"
                    onClick={() => setPetType("cat")}
                    className={`flex items-center justify-center gap-2.5 rounded-2xl border-2 py-3 font-display font-semibold transition ${
                      petType === "cat"
                        ? "border-[#14B8A6] bg-[#E6FFFA] text-[#0D9488]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-xl">🐱</span> Gato
                  </button>
                </div>
              </div>

              {/* Pet Name Optional */}
              <div>
                <label className="block font-display text-sm font-bold text-slate-700">
                  2. Nome do seu pet (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Pipoca, Thor, Luna..."
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#FDFBF7] px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#F26430] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F26430]/20"
                />
              </div>

              {/* Dog Size (Only if Dog) */}
              {petType === "dog" && (
                <div>
                  <label className="block font-display text-sm font-bold text-slate-700">
                    3. Porte do cãozinho
                  </label>
                  <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                    {[
                      { id: "small", label: "Pequeno", desc: "Até 10kg" },
                      { id: "medium", label: "Médio", desc: "10 a 20kg" },
                      { id: "large", label: "Grande", desc: "20kg +" },
                    ].map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() =>
                          setPetSize(size.id as "small" | "medium" | "large")
                        }
                        className={`rounded-2xl border-2 p-3 text-center transition ${
                          petSize === size.id
                            ? "border-[#F26430] bg-[#FFEDE5] text-[#DC5322]"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <p className="font-display text-sm font-bold">
                          {size.label}
                        </p>
                        <p className="text-[11px] opacity-75">{size.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Selection */}
              <div>
                <label className="block font-display text-sm font-bold text-slate-700">
                  {petType === "dog" ? "4" : "3"}. Selecione os serviços
                </label>
                <div className="mt-2.5 space-y-2.5">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`flex cursor-pointer items-center justify-between rounded-2xl border-2 p-3.5 transition ${
                          isSelected
                            ? "border-[#F26430] bg-[#FFF7F2]"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-lg border ${
                              isSelected
                                ? "border-[#F26430] bg-[#F26430] text-white"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && <Check className="h-4 w-4 stroke-[3]" />}
                          </div>
                          <div>
                            <p className="font-display text-sm font-bold text-slate-800">
                              {service.name}
                            </p>
                            <p className="text-xs text-slate-500">{service.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-[#0D9488]">
                          {service.estimated}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Period Preference */}
              <div>
                <label className="block font-display text-sm font-bold text-slate-700">
                  {petType === "dog" ? "5" : "4"}. Preferência de turno
                </label>
                <div className="mt-2.5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPeriod("manha")}
                    className={`flex items-center justify-center gap-2 rounded-2xl border-2 py-2.5 font-display text-sm font-semibold transition ${
                      period === "manha"
                        ? "border-[#14B8A6] bg-[#E6FFFA] text-[#0D9488]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <Clock className="h-4 w-4" /> Manhã (8h às 12h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPeriod("tarde")}
                    className={`flex items-center justify-center gap-2 rounded-2xl border-2 py-2.5 font-display text-sm font-semibold transition ${
                      period === "tarde"
                        ? "border-[#14B8A6] bg-[#E6FFFA] text-[#0D9488]"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <Clock className="h-4 w-4" /> Tarde (13h às 18h)
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Box Right Side */}
            <div className="flex flex-col justify-between rounded-3xl bg-[#1E293B] p-6 text-white lg:col-span-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                  <PawPrint className="h-4 w-4" />
                  Resumo do Agendamento
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {petName.trim() ? petName.trim() : "Seu Pet"} no Pet Town
                </h3>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm">
                  <div className="flex justify-between text-slate-300">
                    <span>Espécie:</span>
                    <span className="font-semibold text-white">
                      {petType === "dog" ? "Cachorro" : "Gato"}
                    </span>
                  </div>

                  {petType === "dog" && (
                    <div className="flex justify-between text-slate-300">
                      <span>Porte:</span>
                      <span className="font-semibold text-white">
                        {petSize === "small"
                          ? "Pequeno (até 10kg)"
                          : petSize === "medium"
                          ? "Médio (10 a 20kg)"
                          : "Grande (20kg+)"}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-300">
                    <span>Turno:</span>
                    <span className="font-semibold text-white">
                      {period === "manha" ? "Manhã" : "Tarde"}
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-3">
                    <span className="text-xs text-slate-400">
                      Serviços selecionados ({selectedServices.length}):
                    </span>
                    <ul className="mt-2 space-y-1.5 text-xs text-slate-200">
                      {selectedServices.map((id) => {
                        const item = servicesList.find((s) => s.id === id);
                        return (
                          <li key={id} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#F26430]" />
                            {item?.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#F26430] py-4 font-display text-base font-bold text-white shadow-lg shadow-[#F26430]/30 transition hover:bg-[#DC5322] hover:shadow-xl hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar no WhatsApp Agora
                </a>
                <p className="mt-2 text-center text-[11px] text-slate-400">
                  Sem compromisso • Confirmação instantânea de vaga
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
