import { MessageCircle, Phone, Send, HeartHandshake } from "lucide-react";

function InstagramIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contato" className="relative bg-[#FFF7F2] py-20 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F26430]/15 px-4 py-1 text-xs font-bold text-[#DC5322] ring-1 ring-[#F26430]/30">
          <HeartHandshake className="h-4 w-4" />
          ESTAMOS À SUA DISPOSIÇÃO
        </span>

        <h2 className="mt-4 font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
          Fale com a gente
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
          Agende banho, tosa ou consulta veterinária diretamente pelo WhatsApp ou
          tire suas dúvidas com nossa equipe.
        </p>

        {/* 3 Channels Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/558130715830?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20atendimento%20do%20Pet%20Town."
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center rounded-[2rem] bg-[#F26430] p-8 text-white shadow-xl shadow-[#F26430]/25 transition-all duration-300 hover:-translate-y-2 hover:bg-[#DC5322] hover:shadow-2xl hover:shadow-[#F26430]/35"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 transition-transform duration-300 group-hover:scale-110">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">WhatsApp</h3>
            <p className="mt-1 text-sm font-semibold text-white/90">
              (81) 3071-5830
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
              Resposta Rápida <Send className="h-3 w-3" />
            </span>
          </a>

          {/* Telefone Card */}
          <a
            href="tel:+558130715830"
            className="group relative flex flex-col items-center rounded-[2rem] bg-[#14B8A6] p-8 text-white shadow-xl shadow-[#14B8A6]/25 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0D9488] hover:shadow-2xl hover:shadow-[#14B8A6]/35"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 transition-transform duration-300 group-hover:scale-110">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">Telefone Fixo</h3>
            <p className="mt-1 text-sm font-semibold text-white/90">
              (81) 3071-5830
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white">
              Ligação Direta
            </span>
          </a>

          {/* Instagram Card */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center rounded-[2rem] bg-[#1E293B] p-8 text-white shadow-xl shadow-slate-900/20 transition-all duration-300 hover:-translate-y-2 hover:bg-[#0F172A] hover:shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 transition-transform duration-300 group-hover:scale-110">
              <InstagramIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">Instagram</h3>
            <p className="mt-1 text-sm font-semibold text-white/90">
              Siga o Pet Town
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
              Dicas & Rotina Pet
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
