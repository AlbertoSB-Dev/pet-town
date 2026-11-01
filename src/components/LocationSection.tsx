import { MapPin, Clock, Navigation, Phone, Car, Compass } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="local" className="relative bg-[#F4EFE6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column Info */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#14B8A6]/20 px-3.5 py-1 text-xs font-bold text-[#0D9488] ring-1 ring-[#14B8A6]/30">
              <Compass className="h-3.5 w-3.5 text-[#14B8A6]" />
              FÁCIL ACESSO
            </span>

            <h2 className="mt-4 font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Venha nos visitar
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Estamos localizados em um dos pontos mais agradáveis e tranquilos
              de Casa Forte, em Recife, com fácil parada e comodidade para você e
              seu companheiro.
            </p>

            <ul className="mt-8 space-y-6 text-slate-700">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F26430] text-white shadow-md shadow-[#F26430]/25">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">
                    Endereço
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Rua Jader de Andrade, nº 71
                    <br />
                    <strong className="font-semibold text-slate-900">
                      Casa Forte – Recife / PE
                    </strong>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#14B8A6] text-white shadow-md shadow-[#14B8A6]/25">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">
                    Horários de Atendimento
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Segunda a Sexta:{" "}
                    <strong className="text-slate-800">8h às 18h</strong>
                    <br />
                    Sábados:{" "}
                    <strong className="text-slate-800">8h às 17h</strong>
                    <br />
                    <span className="text-xs text-slate-500">
                      Domingos e feriados sob agendamento prévio
                    </span>
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1E293B] text-white shadow-md">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">
                    Comodidade
                  </h3>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Embarque e desembarque rápido e seguro para seu pet na porta
                    da clínica.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua%20Jader%20de%20Andrade%2C%2071%20-%20Casa%20Forte%2C%20Recife%20-%20PE"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1E293B] px-6 py-3 font-display text-sm font-bold text-white shadow-lg transition hover:bg-[#F26430] hover:shadow-xl hover:-translate-y-0.5"
              >
                <Navigation className="h-4 w-4" />
                Abrir no Google Maps
              </a>
              <a
                href="https://waze.com/ul?q=Rua%20Jader%20de%20Andrade%2071%20Casa%20Forte%20Recife"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-5 py-3 font-display text-sm font-bold text-slate-700 transition hover:border-[#14B8A6] hover:text-[#0D9488]"
              >
                Traçar Rota no Waze
              </a>
            </div>
          </div>

          {/* Right Column Map Card */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-2xl ring-1 ring-black/5">
              <div className="h-[380px] w-full">
                <iframe
                  title="Mapa Pet Town Casa Forte Recife"
                  src="https://www.google.com/maps?q=Rua%20Jader%20de%20Andrade%2C%2071%20-%20Casa%20Forte%2C%20Recife%20-%20PE&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between bg-slate-50 p-4 px-6 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">
                  📍 Pet Town Pet Shop e Clínica
                </span>
                <span>Casa Forte • Recife - PE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
