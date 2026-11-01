"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  PawPrint,
  Heart,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Accent Strip */}
      <div className="flex h-1.5 w-full">
        <div className="flex-1 bg-[#14B8A6]"></div>
        <div className="flex-[2] bg-[#F26430]"></div>
        <div className="flex-1 bg-[#14B8A6]"></div>
      </div>

      {/* Top Info Bar (Desktop) */}
      <div className="hidden border-b border-slate-100 bg-[#FDFBF7] py-2 text-xs font-medium text-slate-600 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="h-3.5 w-3.5 text-[#F26430]" />
              Rua Jader de Andrade, 71 — Casa Forte, Recife
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <Clock className="h-3.5 w-3.5 text-[#14B8A6]" />
              Seg a Sex: 8h às 18h | Sáb: 8h às 17h
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+558130715830"
              className="flex items-center gap-1 text-slate-700 transition hover:text-[#F26430]"
            >
              <Phone className="h-3.5 w-3.5 text-[#F26430]" />
              (81) 3071-5830
            </a>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-[#0D9488]">
              <Heart className="h-3 w-3 fill-current text-[#14B8A6]" />
              Cuidado com amor e dedicação
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#1E293B]/95 py-3 shadow-xl backdrop-blur-md"
            : "bg-[#1E293B] py-4"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white transition hover:opacity-95"
            aria-label="Pet Town Início"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F26430] to-[#FF8C61] shadow-md shadow-[#F26430]/30 ring-2 ring-white/10">
              <PawPrint className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                Pet<span className="text-[#F26430]">Town</span>
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#14B8A6] mt-0.5">
                Casa Forte • Recife
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-7 font-display text-[15px] font-medium text-slate-200 md:flex">
            <a
              href="#sobre"
              className="transition hover:text-[#F26430] hover:scale-105"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="transition hover:text-[#F26430] hover:scale-105"
            >
              Tratamentos
            </a>
            <a
              href="#agendamento"
              className="transition hover:text-[#F26430] hover:scale-105"
            >
              Simulador
            </a>
            <a
              href="#avaliacoes"
              className="transition hover:text-[#F26430] hover:scale-105"
            >
              Depoimentos
            </a>
            <a
              href="#local"
              className="transition hover:text-[#F26430] hover:scale-105"
            >
              Localização
            </a>
            <a
              href="#contato"
              className="transition hover:text-[#F26430] hover:scale-105"
            >
              Contato
            </a>
          </div>

          {/* Action Button & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/558130715830?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Pet%20Town!"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#F26430] px-5 py-2.5 font-display text-sm font-semibold text-white shadow-md shadow-[#F26430]/25 transition hover:bg-[#DC5322] hover:shadow-lg hover:shadow-[#F26430]/35 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar no WhatsApp
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 md:hidden"
              aria-label="Abrir Menu de Navegação"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[290px] flex-col bg-[#1E293B] p-6 text-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Menu Mobile"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F26430]">
              <PawPrint className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold">
              Pet<span className="text-[#F26430]">Town</span>
            </span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg p-1 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Fechar Menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6 flex flex-col gap-3 font-display text-lg">
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-[#F26430]"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-[#F26430]"
          >
            Tratamentos
          </a>
          <a
            href="#agendamento"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-[#F26430]"
          >
            Simulador de Agendamento
          </a>
          <a
            href="#avaliacoes"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-[#F26430]"
          >
            Depoimentos
          </a>
          <a
            href="#local"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-[#F26430]"
          >
            Localização & Horários
          </a>
          <a
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-xl px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-[#F26430]"
          >
            Contato
          </a>
        </nav>

        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="text-xs text-slate-400 mb-3">
            Rua Jader de Andrade, 71 • Casa Forte
          </p>
          <a
            href="https://wa.me/558130715830?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Pet%20Town!"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F26430] py-3.5 font-display font-medium text-white shadow-lg transition hover:bg-[#DC5322]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
}
