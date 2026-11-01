import {
  PawPrint,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Heart,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF7F2] via-[#FDFBF7] to-[#FDFBF7] py-14 md:py-24">
      {/* Background Decorative Blur Orbs */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#14B8A6]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-[#F26430]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-12">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6]/15 px-4 py-1.5 text-xs font-bold text-[#0D9488] ring-1 ring-[#14B8A6]/30">
            <PawPrint className="h-4 w-4 text-[#14B8A6]" />
            <span>QUEM CUIDA COM AMOR EM CASA FORTE</span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#1E293B] sm:text-5xl lg:text-6xl text-balance">
            Um pet shop com{" "}
            <span className="relative inline-block text-[#F26430]">
              tudo
              <svg
                className="absolute -bottom-2 left-0 w-full text-[#F26430]/30"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
                height="8"
              >
                <path
                  d="M0 10 Q 50 0 100 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>{" "}
            que seu melhor amigo precisa!
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Pet shop, banho e tosa e clínica veterinária no coração de Casa Forte,
            Recife. Muito carinho, saúde preventiva, estética pet e bem-estar
            num ambiente seguro e acolhedor.
          </p>

          {/* Key Value Highlights */}
          <div className="mt-6 flex flex-wrap gap-y-2 gap-x-5 text-sm font-semibold text-slate-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#14B8A6]" />
              Veterinários Atenciosos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#14B8A6]" />
              Produtos Hipoalergênicos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#14B8A6]" />
              Ambiente Climatizado
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/558130715830?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Pet%20Town."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#F26430] px-7 py-3.5 font-display text-base font-bold text-white shadow-lg shadow-[#F26430]/30 transition hover:bg-[#DC5322] hover:shadow-xl hover:shadow-[#F26430]/40 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#1E293B] bg-transparent px-6 py-3 font-display text-base font-bold text-[#1E293B] transition hover:bg-[#1E293B] hover:text-white"
            >
              <Sparkles className="h-4 w-4 text-[#14B8A6]" />
              Nossos Tratamentos
            </a>
          </div>

          {/* Social Proof Mini Bar */}
          <div className="mt-10 flex items-center gap-4 border-t border-slate-200/80 pt-6">
            <div className="flex -space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F26430] text-xs font-bold text-white ring-2 ring-white">
                🐶
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14B8A6] text-xs font-bold text-white ring-2 ring-white">
                🐱
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E293B] text-xs font-bold text-white ring-2 ring-white">
                🐾
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">
                    ★
                  </span>
                ))}
                <span className="ml-1 text-sm font-bold text-slate-800">
                  4.9 / 5.0
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Mais de 1.200 tutores apaixonados em Casa Forte e região
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase */}
        <div className="relative lg:col-span-5">
          {/* Decorative Teal Offset Shape */}
          <div
            className="absolute -inset-3 -rotate-2 rounded-[2.5rem] bg-gradient-to-tr from-[#14B8A6] to-[#2DD4BF] opacity-80 shadow-2xl"
            aria-hidden="true"
          />

          {/* Card Container */}
          <div className="relative overflow-hidden rounded-[2.2rem] bg-white p-3 shadow-2xl ring-1 ring-black/5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.8rem] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop"
                alt="Golden retriever feliz recebendo carinho no Pet Town"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block rounded-full bg-[#F26430] px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  Atendimento de Segunda a Sábado
                </span>
                <p className="mt-1 font-display text-lg font-bold">
                  Carinho genuíno para seu pet
                </p>
              </div>
            </div>

            {/* Floating Mini Badge: Banho & Tosa */}
            <div className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14B8A6]/20 text-[#0D9488]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">100% Seguro</p>
                <p className="text-[11px] text-slate-500">Equipe certificada</p>
              </div>
            </div>

            {/* Floating Mini Badge: Agendamento Rápido */}
            <div className="absolute -bottom-4 -right-2 flex items-center gap-3 rounded-2xl bg-[#1E293B] p-3.5 text-white shadow-xl ring-2 ring-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F26430] text-white">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold">Agendamento Fácil</p>
                <p className="text-[11px] text-slate-300">Resposta ágil no zap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
