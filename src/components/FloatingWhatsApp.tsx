"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip hint on hover / display */}
      <span className="hidden rounded-full bg-white px-4 py-2 font-display text-xs font-bold text-slate-800 shadow-xl ring-1 ring-black/5 md:inline-block transition-transform hover:scale-105">
        Agende pelo Zap 🐾
      </span>

      <a
        href="https://wa.me/558130715830?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Pet%20Town."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp com o Pet Town"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 hover:bg-[#20BD5A] pulse-whatsapp"
      >
        <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-12" />
        <span className="sr-only">WhatsApp Pet Town</span>
      </a>
    </aside>
  );
}
