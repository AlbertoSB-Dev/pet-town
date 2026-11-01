"use client";

import { useState } from "react";
import Link from "next/link";

export default function TasteTestPage() {
  const [temperament, setTemperament] = useState<"sensivel" | "curioso" | "agitado">("sensivel");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const temperaments = {
    sensivel: {
      label: "Sensível ou Idoso",
      desc: "Atendimento em sala com ruído controlado, difusor de feromônios e 20 minutos extras de adaptação antes de qualquer exame clínico.",
      time: "45 minutos de acolhimento",
      care: "Sem secadores sonoros · Contato suave",
    },
    curioso: {
      label: "Sociável e Curioso",
      desc: "Interação estimulante com petiscos hipoalergênicos e enriquecimento olfativo durante a tosa ou vacinação.",
      time: "30 minutos dinâmicos",
      care: "Manejo positivo · Recompensa imediata",
    },
    agitado: {
      label: "Reativo a Ambientes Clínicos",
      desc: "Protocolo Zero Estresse: recepção direta na sala de atendimento, sem cruzamento com outros animais no saguão.",
      time: "Horário exclusivo",
      care: "Entrada reservada · Dessensibilização gradual",
    },
  };

  const galleryImages = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Small_dog_watching_a_hand-held_treat_at_a_veterinary_clinic_in_Newark%2C_New_Jersey.jpg",
      alt: "Pequeno cão em atendimento calmo recebendo reforço positivo",
      title: "Recompensa & Calma",
    },
    {
      url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop",
      alt: "Cão durante procedimento estético com produto hipoalergênico",
      title: "Higiene Cirúrgica",
    },
    {
      url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop",
      alt: "Golden retriever em repouso após atendimento",
      title: "Conforto Acústico",
    },
    {
      url: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=800&auto=format&fit=crop",
      alt: "Avaliação preventiva de rotina",
      title: "Clínica Geral",
    },
  ];

  const faqs = [
    {
      q: "Como funciona a filosofia de atendimento anti-estresse?",
      a: "Não utilizamos gaiolas de espera, contenção mecânica forçada ou sedativos para procedimentos estéticos. Nossos profissionais respeitam a linguagem corporal do pet e pausam o banho sempre que identificam sinais de fadiga ou ansiedade.",
    },
    {
      q: "Quais são as diretrizes de higienização dos instrumentos?",
      a: "Trabalhamos com toalhas descartáveis biodegradáveis individuais seladas e esterilização hospitalar de lâminas de tosa e tesouras em autoclave após cada atendimento.",
    },
    {
      q: "É possível acompanhar a consulta do início ao fim?",
      a: "Incentivamos a presença ativa do tutor em todas as etapas clínicas e preventivas. Acreditamos que a voz e o cheiro do tutor são os maiores tranquilizantes naturais para cães e gatos.",
    },
    {
      q: "Qual o protocolo para cães com cardiopatia ou mobilidade reduzida?",
      a: "Temos mesas com elevação suave e antiderrapantes especiais, além de controle rigoroso da temperatura da água e secagem manual delicada para evitar qualquer estresse respiratório.",
    },
  ];

  return (
    <div className="min-h-[100svh] bg-[#f7f7f7] text-[#0d2a1c] selection:bg-[#f6e016] selection:text-[#0d2a1c] font-['Hanken_Grotesk',sans-serif]">
      {/* Google Font Embed */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Top Bar Navigation */}
      <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-16 bg-[#f7f7f7]/95 transition-all">
        <div className="flex items-center gap-3">
          <span className="h-3.5 w-3.5 rounded-full bg-[#f6e016]" />
          <span className="text-base font-bold tracking-tight">
            Pet Town <span className="text-black/40 font-normal">Casa Forte</span>
          </span>
        </div>

        <nav aria-label="Navegação do site" className="flex items-center gap-8 text-sm font-semibold">
          <a href="#manifesto" className="hidden sm:inline-block hover:text-[#5f6b64] transition">
            Manifesto
          </a>
          <a href="#galeria" className="hidden sm:inline-block hover:text-[#5f6b64] transition">
            Acervo
          </a>
          <a href="#pilares" className="hidden sm:inline-block hover:text-[#5f6b64] transition">
            Pilares
          </a>
          <a href="#simulador" className="hidden sm:inline-block hover:text-[#5f6b64] transition">
            Simulador
          </a>
          <Link
            href="/"
            className="rounded-full bg-[#0d2a1c] px-5 py-2.5 text-white hover:bg-[#f6e016] hover:text-[#0d2a1c] transition-all hover:scale-105"
          >
            Voltar ao Site Original
          </Link>
        </nav>
      </header>

      {/* Hero Section: The Sentence as Layout (Taste-Skill Blueprint) */}
      <section className="relative flex min-h-[92svh] flex-col justify-center px-6 pt-32 pb-16 md:px-16">
        <div className="mx-auto w-full max-w-6xl">
          {/* Headline fits 2 lines at all viewports (1440, 768, 390) */}
          <h1 className="text-[clamp(2.1rem,7.5vw,7.2rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-[#0d2a1c]">
            CUIDADO{" "}
            <span className="inline-block h-[0.8em] w-[2.2em] align-middle overflow-hidden rounded-2xl mx-1.5 transition-transform hover:scale-105 duration-300">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop"
                alt="Olhar sereno do pet em repouso no Pet Town"
                className="h-full w-full object-cover"
              />
            </span>{" "}
            SEM PRESSA.
          </h1>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-8">
            <div className="md:col-span-8">
              <p className="text-xl md:text-3xl text-[#0d2a1c] font-medium leading-relaxed max-w-2xl">
                Redefinimos a estética pet e a medicina veterinária em Recife. Sem gaiolas, com
                técnica cirúrgica e afeto irrestrito.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col md:items-end gap-2">
              <span className="font-bold text-sm bg-[#f6e016] px-5 py-2.5 rounded-full text-[#0d2a1c] transition-transform hover:scale-105">
                Atendimento Humanizado
              </span>
              <p className="text-[#5f6b64] text-sm">
                Rua Jader de Andrade, 71 · Casa Forte, Recife
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section: Drop-Cap Portrait Layout (Centered, No Overflow) */}
      <section id="manifesto" className="bg-[#ebebeb] py-32 px-6 md:px-16">
        <div className="mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start w-full">
            {/* Column 1-4: Facts */}
            <div className="md:col-span-4 space-y-8 text-sm">
              <div>
                <p className="font-bold text-[#0d2a1c]">Localização</p>
                <p className="text-[#5f6b64] mt-1">
                  Casa Forte, Zona Norte de Recife
                </p>
              </div>
              <div>
                <p className="font-bold text-[#0d2a1c]">Filosofia</p>
                <p className="text-[#5f6b64] mt-1">
                  Manejo Fear-Free e Conforto Acústico
                </p>
              </div>
              <div>
                <p className="font-bold text-[#0d2a1c]">Agendamentos</p>
                <p className="text-[#5f6b64] mt-1">
                  Vagas limitadas para preservação da calma
                </p>
              </div>
            </div>

            {/* Column 5-12: Big Editorial Statement */}
            <div className="md:col-span-8 w-full">
              <div className="flex flex-col sm:flex-row gap-8 items-start w-full">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=600&auto=format&fit=crop"
                  alt="Veterinário e paciente canino em atendimento"
                  className="w-full sm:w-48 h-56 rounded-2xl object-cover shrink-0 transition-transform duration-300 hover:scale-105"
                />
                <div>
                  <p className="text-xl md:text-3xl font-medium leading-[1.3] text-[#0d2a1c]">
                    <strong className="font-extrabold">O Pet Town nasceu</strong> da convicção de
                    que um pet shop não precisa ser barulhento ou estressante.
                  </p>
                  <p className="mt-6 text-base text-[#5f6b64] leading-relaxed">
                    Cada animal tem seu tempo respeitado por veterinários e esteticistas
                    especializados em comportamento e bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section: Curated Gallery Strip (Real Photographs Floor) */}
      <section id="galeria" className="py-28 px-6 md:px-16 bg-[#f7f7f7]">
        <div className="mx-auto max-w-6xl w-full">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0d2a1c] mb-12">
            ROTINA NO ATELIÊ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl bg-[#ebebeb] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm text-[#0d2a1c]">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features: Bold Statements on Full-Bleed Colour Fields */}
      <section id="pilares" className="w-full">
        {/* Field 1: Bottle Ink Ground */}
        <div className="bg-[#0d2a1c] text-white py-28 px-6 md:px-16 min-h-[70svh] flex flex-col justify-between">
          <div className="mx-auto w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-6">
            <span className="text-sm font-bold text-[#f6e016]">
              Pilar 01 · Silêncio Clínico
            </span>
            <p className="text-base md:text-lg text-white/80 max-w-md leading-relaxed">
              Eliminamos o estresse do confinamento com isolamento acústico e frequência calmante.
            </p>
          </div>
          <div className="mx-auto w-full max-w-6xl mt-16">
            <h2 className="text-[clamp(2.2rem,6.5vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-[#f6e016]">
              ZERO GAIOLAS.
              <br />
              MANEJO PURO.
            </h2>
          </div>
        </div>

        {/* Field 2: Saturated Yellow Accent Ground */}
        <div className="bg-[#f6e016] text-[#0d2a1c] py-28 px-6 md:px-16 min-h-[70svh] flex flex-col justify-between">
          <div className="mx-auto w-full max-w-6xl flex flex-col md:flex-row justify-between items-start gap-6">
            <span className="text-sm font-bold text-[#0d2a1c]">
              Pilar 02 · Padrão Cirúrgico
            </span>
            <p className="text-base md:text-lg text-[#0d2a1c]/80 max-w-md leading-relaxed">
              Cosméticos hipoalergênicos e materiais esterilizados em autoclave após cada sessão.
            </p>
          </div>
          <div className="mx-auto w-full max-w-6xl mt-16 text-right">
            <h2 className="text-[clamp(2.2rem,6.5vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.03em] text-[#0d2a1c]">
              BIODISPONÍVEL.
              <br />
              SEGURO E LEVE.
            </h2>
          </div>
        </div>
      </section>

      {/* The Live Thing: Interactive Simulator */}
      <section id="simulador" className="py-32 px-6 md:px-16 bg-[#f7f7f7]">
        <div className="mx-auto max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Acolhimento Individual
            </h2>
            <p className="text-slate-600 mt-4 text-lg">
              Identifique o perfil do seu animal e visualize o plano de adaptação antes da primeira
              visita.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 md:p-14 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full">
              {(Object.keys(temperaments) as Array<keyof typeof temperaments>).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTemperament(key)}
                  className={`rounded-2xl p-5 text-left transition-all duration-300 font-bold text-base hover:scale-[1.02] ${
                    temperament === key
                      ? "bg-[#0d2a1c] text-[#f6e016]"
                      : "bg-[#ebebeb] text-[#0d2a1c] hover:bg-slate-200"
                  }`}
                >
                  <p className="text-xs opacity-75 mb-1">Perfil</p>
                  <p>{temperaments[key].label}</p>
                </button>
              ))}
            </div>

            <div className="space-y-6 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0d2a1c]">
                Plano: {temperaments[temperament].label}
              </h3>
              <p className="text-lg text-[#5f6b64] leading-relaxed">
                {temperaments[temperament].desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 w-full">
                <div className="rounded-2xl bg-[#f7f7f7] p-6">
                  <span className="text-xs font-bold text-[#5f6b64]">
                    Tempo Dedicado
                  </span>
                  <p className="text-xl font-bold text-[#0d2a1c] mt-1">
                    {temperaments[temperament].time}
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f7f7f7] p-6">
                  <span className="text-xs font-bold text-[#5f6b64]">
                    Cuidados Especiais
                  </span>
                  <p className="text-xl font-bold text-[#0d2a1c] mt-1">
                    {temperaments[temperament].care}
                  </p>
                </div>
              </div>

              <div className="pt-6 w-full">
                <a
                  href={`https://wa.me/558130715830?text=${encodeURIComponent(
                    `Olá Pet Town! Simulei o atendimento para o perfil "${temperaments[temperament].label}" e gostaria de agendar um horário.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#0d2a1c] px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-[#f6e016] hover:text-[#0d2a1c] hover:scale-105"
                >
                  Agendar com Este Protocolo no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ: Wide Heading, Indented Questions (Taste-Skill Blueprint) */}
      <section id="duvidas" className="py-32 px-6 md:px-16 bg-[#ebebeb]">
        <div className="mx-auto max-w-6xl w-full">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] text-[#0d2a1c]">
              DÚVIDAS E CONDUTA CLÍNICA
            </h2>
            <p className="text-base text-[#5f6b64] mt-3 leading-relaxed">
              Transparência completa sobre nossos métodos e cuidados diários.
            </p>
          </div>

          <div className="space-y-4 w-full">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-7 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between text-left font-bold text-xl text-[#0d2a1c]"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl">{openFaq === idx ? "—" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <p className="mt-5 text-base leading-relaxed text-[#5f6b64]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section: The Email as Display Type */}
      <footer className="bg-[#0d2a1c] text-white min-h-[85svh] flex flex-col justify-between p-6 md:p-20">
        <div className="flex justify-between items-start max-w-6xl mx-auto w-full">
          <div>
            <p className="text-2xl md:text-3xl font-medium mt-2 max-w-md">
              Pronto para uma experiência veterinária acolhedora e sem traumas?
            </p>
          </div>
          <span className="text-sm text-white/50 hidden sm:inline-block">
            Pet Town Est. 2018
          </span>
        </div>

        {/* Display Email */}
        <div className="max-w-6xl mx-auto w-full py-16">
          <a
            href="https://wa.me/558130715830"
            target="_blank"
            rel="noreferrer"
            className="block text-[clamp(1.75rem,5.5vw,5.5rem)] break-all sm:break-normal font-extrabold tracking-tight leading-none text-white hover:text-[#f6e016] transition-colors duration-300"
          >
            FALE@PETTOWN.COM.BR
          </a>
          <p className="text-base text-white/70 mt-4">
            WhatsApp e Telefone: (81) 3071-5830 · Segunda a Sábado
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto w-full pt-8 text-sm text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Pet Town Casa Forte. Direção editorial via Taste-Skill.</p>
          <div className="flex gap-8 font-medium">
            <Link href="/" className="hover:text-white transition">
              Ver Landing Page Principal
            </Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              Instagram
            </a>
            <a href="https://wa.me/558130715830" target="_blank" rel="noreferrer" className="hover:text-white transition">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
