import {
  Bath,
  Stethoscope,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Scissors,
  Syringe,
  ShieldAlert,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "banho-e-tosa",
      title: "Banho & Tosa",
      subtitle: "Estética e Higiene Profissional",
      description:
        "Cuidado e beleza 360° com produtos hipoalergênicos de alta qualidade, toalhas lacradas individuais e profissionais que entendem o comportamento animal.",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop",
      badge: "Mais Procurado",
      icon: Bath,
      items: [
        "Banho com água morna e temperatura controlada",
        "Tosa higiênica e tosa da raça para cães e gatos (Tosa Leão, Bebê ou Tesoura)",
        "Desembolo suave de nós e hidratação profunda sem estresse",
        "Limpeza de ouvidos e corte seguro de unhas",
      ],
      whatsappMsg: "Olá! Gostaria de agendar um Banho e Tosa no Pet Town.",
    },
    {
      id: "clinica-veterinaria",
      title: "Clínica Veterinária",
      subtitle: "Medicina Preventiva & Diagnóstica",
      description:
        "Equipe médica veterinária qualificada para cuidar da saúde do seu pet com prontidão, precisão nos diagnósticos e carinho em cada consulta.",
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1000&auto=format&fit=crop",
      badge: "Equipe Especializada",
      icon: Stethoscope,
      items: [
        "Consultas clínicas completas de rotina e urgência",
        "Protocolo vacinal importado (V10, Raiva, Giárdia)",
        "Exames laboratoriais e acompanhamento preventivo",
        "Atestados de saúde para viagens aéreas e terrestres",
      ],
      whatsappMsg: "Olá! Preciso agendar uma Consulta Veterinária no Pet Town.",
    },
    {
      id: "pet-shop",
      title: "Pet Shop & Farmácia",
      subtitle: "Nutrição e Acessórios Selecionados",
      description:
        "As melhores marcas de rações Super Premium, petiscos naturais, farmácia veterinária completa com medicamentos de procedência e brinquedos enriquecedores.",
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&w=1000&auto=format&fit=crop",
      badge: "Variedade Premium",
      icon: ShoppingBag,
      items: [
        "Rações Super Premium secas e úmidas das melhores marcas",
        "Farmácia veterinária completa e antipulgas/carrapatos",
        "Petiscos 100% naturais e mastigadores para ansiedade",
        "Caminhas, roupinhas, guias e brinquedos de enriquecimento",
      ],
      whatsappMsg: "Olá! Gostaria de consultar a disponibilidade de produtos no Pet Shop.",
    },
  ];

  return (
    <section id="servicos" className="relative bg-[#FDFBF7] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F26430]/15 px-4 py-1 text-xs font-bold text-[#DC5322] ring-1 ring-[#F26430]/30">
            <Sparkles className="h-3.5 w-3.5 text-[#F26430]" />
            SAÚDE, HIGIENE E BEM-ESTAR
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
            Nossos tratamentos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Tudo o que você precisa para manter seu pet limpo, cheiroso, saudável
            e cheio de energia em um só local de fácil acesso em Casa Forte.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-[2.2rem] bg-white shadow-xl shadow-slate-200/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F26430]/15 ring-1 ring-slate-100"
              >
                {/* Image Header with Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 font-display text-xs font-bold text-[#1E293B] shadow-md backdrop-blur-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Content Box */}
                <div className="relative flex flex-1 flex-col p-7">
                  {/* Floating Icon */}
                  <div className="-mt-14 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F26430] text-white shadow-lg shadow-[#F26430]/30 ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                    {service.subtitle}
                  </span>

                  <h3 className="mt-1 font-display text-2xl font-bold text-[#1E293B]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <div className="mt-6 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
                    {service.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-medium text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#14B8A6] mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 pt-2">
                    <a
                      href={`https://wa.me/558130715830?text=${encodeURIComponent(
                        service.whatsappMsg
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1E293B] py-3 font-display text-sm font-semibold text-white shadow-md transition hover:bg-[#F26430] hover:shadow-lg hover:shadow-[#F26430]/30"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Agendar {service.title}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Additional Specialized Care Banner */}
        <div className="mt-12 rounded-[2rem] bg-gradient-to-r from-[#14B8A6] to-[#0D9488] p-8 text-white shadow-xl lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide">
              <Sparkles className="h-3.5 w-3.5" /> Cuidados Especiais
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Cuidado especial para Gatos, Idosos e Pets Sensíveis
            </h3>
            <p className="mt-2 text-sm text-teal-50 sm:text-base leading-relaxed">
              Trabalhamos com manejo humanizado e protocolo Cat-Friendly (ambiente calmo, sem latidos,
              com difusor de feromônios Feliway), além de atenção especial a pets cardiopatas, idosos ou
              com medo de secador.
            </p>
          </div>
          <div className="mt-6 lg:mt-0">
            <a
              href="https://wa.me/558130715830?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20cuidados%20especiais%20para%20meu%20pet."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display font-bold text-[#0D9488] shadow-lg transition hover:bg-slate-100 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Tirar Dúvida no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
