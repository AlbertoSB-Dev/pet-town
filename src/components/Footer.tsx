import { PawPrint, Heart, MapPin, Phone, Clock } from "lucide-react";

function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800 bg-[#1E293B] text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F26430] text-white">
                <PawPrint className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  Pet<span className="text-[#F26430]">Town</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#14B8A6]">
                  Casa Forte • Recife
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Pet shop, estética animal de excelência e clínica veterinária
              integrada. O seu companheiro em boas mãos todos os dias.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#F26430]"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/558130715830"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-[#14B8A6]"
                aria-label="WhatsApp"
              >
                <PawPrint className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <a href="#sobre" className="transition hover:text-[#F26430]">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition hover:text-[#F26430]">
                  Banho & Tosa Especializado
                </a>
              </li>
              <li>
                <a href="#servicos" className="transition hover:text-[#F26430]">
                  Clínica Veterinária & Vacinas
                </a>
              </li>
              <li>
                <a href="#agendamento" className="transition hover:text-[#F26430]">
                  Simulador de Agendamento
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="transition hover:text-[#F26430]">
                  Depoimentos de Tutores
                </a>
              </li>
              <li>
                <a href="#local" className="transition hover:text-[#F26430]">
                  Como Chegar em Casa Forte
                </a>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Atendimento
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#14B8A6] mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">
                    Segunda a Sexta
                  </strong>
                  08:00 às 18:00
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#14B8A6] mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Sábado</strong>
                  08:00 às 17:00
                </div>
              </li>
            </ul>
          </div>

          {/* Localização & Contato */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Localização
            </h4>
            <div className="mt-4 space-y-3 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-[#F26430] mt-0.5" />
                <span>
                  Rua Jader de Andrade, nº 71
                  <br />
                  Casa Forte – Recife/PE
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#14B8A6]" />
                <a
                  href="tel:+558130715830"
                  className="transition hover:text-white"
                >
                  (81) 3071-5830
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-center text-xs text-slate-500 sm:flex-row">
          <p>© {currentYear} Pet Town — Pet Shop e Clínica Veterinária. Todos os direitos reservados.</p>
          <p className="mt-2 flex items-center gap-1 sm:mt-0">
            Feito com <Heart className="h-3.5 w-3.5 fill-current text-[#F26430]" /> para os pets de Casa Forte
          </p>
        </div>
      </div>
    </footer>
  );
}
