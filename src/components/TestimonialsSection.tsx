import { Star, Quote, Heart } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mariana Albuquerque",
      pet: "Tutor do Bento (Golden Retriever)",
      neighborhood: "Casa Forte, Recife",
      text: "O melhor banho e tosa da Zona Norte! O Bento sempre voltava assustado de outros pet shops, mas no Pet Town ele entra abanando o rabo. Dá pra ver o respeito e o amor da equipe.",
      rating: 5,
    },
    {
      name: "Rodrigo Cavalcanti",
      pet: "Tutor da Mel & Frederico (Spitz Alemão)",
      neighborhood: "Parnamirim, Recife",
      text: "A tosa na tesoura é impecável, respeita o padrão da raça certinho. Além disso, a veterinária é super atenciosa e diagnosticou uma alergia da Mel logo na primeira consulta.",
      rating: 5,
    },
    {
      name: "Camila Guimarães",
      pet: "Tutora da Nina (Gatinha SRD)",
      neighborhood: "Poço da Panela, Recife",
      text: "Atendimento sensacional para felinos! Ambiente calmo, sem barulho excessivo que estresse os gatinhos. Vacinação em dia e farmácia com tudo que preciso.",
      rating: 5,
    },
  ];

  return (
    <section id="avaliacoes" className="relative bg-[#FDFBF7] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F26430]/15 px-4 py-1 text-xs font-bold text-[#DC5322] ring-1 ring-[#F26430]/30">
            <Heart className="h-3.5 w-3.5 fill-current text-[#F26430]" />
            AVALIAÇÕES DE QUEM CONFIA
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
            O que dizem os tutores
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
            A satisfação e o bem-estar dos bichinhos de Casa Forte e redondezas
            são o nosso maior orgulho.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ring-1 ring-slate-100"
            >
              <div>
                <Quote className="h-8 w-8 text-[#F26430]/20 mb-2" />
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-display font-bold text-[#1E293B]">
                  {item.name}
                </p>
                <p className="text-xs font-medium text-[#F26430]">{item.pet}</p>
                <p className="text-[11px] text-slate-400">{item.neighborhood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
