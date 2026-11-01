import { Heart, Stethoscope, Sparkles, Home, Shield, Award } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: Award,
      title: "Equipe",
      subtitle: "qualificada",
      description:
        "Veterinários e esteticistas com especializações e amor pelo que fazem.",
    },
    {
      icon: Heart,
      title: "Cuidado",
      subtitle: "360°",
      description:
        "Saúde preventiva, estética delicada, nutrição e bem-estar integrados.",
    },
    {
      icon: Home,
      title: "Ambiente",
      subtitle: "acolhedor",
      description:
        "Espaço calmo, climatizado e pensado para reduzir o estresse do seu pet.",
    },
  ];

  return (
    <section id="sobre" className="relative bg-[#1E293B] py-20 text-white">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Heading */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6]/20 px-3.5 py-1 text-xs font-bold text-[#2DD4BF] ring-1 ring-[#14B8A6]/40">
              <Sparkles className="h-3.5 w-3.5" />
              CONHEÇA NOSSA ESSÊNCIA
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight">
              Feito por quem{" "}
              <span className="text-[#F26430]">cuida com amor</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              O <strong className="text-white font-semibold">Pet Town</strong>{" "}
              nasceu para ser a extensão do seu lar. Aqui em Casa Forte,
              entendemos que seu pet não é apenas um animal de estimação — ele é
              um membro indispensável da sua família.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Desde um banho revigorante com toalhas esterilizadas individuais
              até consultas veterinárias detalhadas e exames de rotina, cada
              procedimento é feito com paciência, carinho e respeito ao tempo do
              animal.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F26430]/20 text-[#F26430] ring-1 ring-[#F26430]/30">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">
                  Protocolo de Higiene Rigoroso
                </h3>
                <p className="text-xs text-slate-400">
                  Esterilização completa de lâminas e toalhas descartáveis
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-3">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] hover:-translate-y-1 hover:shadow-xl ring-1 ring-white/10"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F26430] text-white shadow-md shadow-[#F26430]/30 transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="font-display text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="font-display text-sm font-semibold text-[#14B8A6] mt-0.5">
                      {pillar.subtitle}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-slate-300">
                      {pillar.description}
                    </p>

                    <div className="mt-4 h-1 w-8 rounded-full bg-[#F26430]/50 transition-all group-hover:w-16 group-hover:bg-[#F26430]" />
                  </div>
                );
              })}
            </div>

            {/* Quote Box */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] p-6 text-sm text-slate-300">
              <p className="italic">
                &ldquo;Nosso compromisso é entregar tranquilidade para o tutor e
                uma experiência agradável, sem traumas ou medo, para cães e gatos de
                todos os portes e idades.&rdquo;
              </p>
              <p className="mt-3 font-display font-bold text-[#F26430] text-right text-xs uppercase tracking-wider">
                — Equipe Pet Town Casa Forte
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
