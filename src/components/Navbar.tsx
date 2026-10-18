import { useState } from 'react';
import type { FC } from 'react';
import { Cpu, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3.5 sm:pt-5 pointer-events-none">
      <nav className="w-full max-w-5xl rounded-full glass-panel border border-slate-700/60 bg-slate-950/80 backdrop-blur-2xl shadow-2xl shadow-black/60 px-3 sm:px-4 py-2 flex items-center justify-between pointer-events-auto transition-all duration-300">
        {/* Brand: Minimalist Glowing Emblem (Logo Only, No Clutter) */}
        <a
          href="#"
          className="flex items-center gap-2 group p-1"
          title="ID-Tech Cloud — Autonomous AI Workforce Platform"
          aria-label="ID-Tech Cloud Home"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/50 group-hover:scale-105 transition-all duration-300 border border-white/20">
            <Cpu className="w-4 h-4 text-white" />
            {/* Live operational pulse dot */}
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 border-2 border-slate-950" />
            </span>
          </div>
        </a>

        {/* Center: Sleek Rounded Pill Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs lg:text-sm font-medium text-slate-300">
          <a
            href="#fitur"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Fitur
          </a>
          <a
            href="#swarm"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Solusi Tim
          </a>
          <a
            href="#arsitektur"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Keamanan
          </a>
          <a
            href="#harga"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Harga
          </a>
          <a
            href="#faq"
            className="px-3.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            FAQ
          </a>
        </div>

        {/* Right: Actions (Console & Coba Gratis) */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={CONFIG.appConsoleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all flex items-center gap-1.5 border border-slate-700/60"
          >
            <span>Console</span>
            <ArrowRight className="w-3 h-3 text-slate-400" />
          </a>

          <button
            onClick={onOpenRegister}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-full shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
            <span>Coba Gratis</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-1">
          <button
            onClick={onOpenRegister}
            className="px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full"
          >
            Coba Gratis
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Floating Island Dropdown) */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-4 right-4 rounded-2xl glass-panel border border-slate-700/80 bg-slate-950/95 backdrop-blur-2xl p-5 shadow-2xl space-y-4 pointer-events-auto animate-fadeIn">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              Fitur Unggulan
            </a>
            <a
              href="#swarm"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              Solusi Tim AI
            </a>
            <a
              href="#arsitektur"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              Keamanan Enterprise
            </a>
            <a
              href="#harga"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              Harga Paket
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href={CONFIG.appConsoleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-medium text-slate-200 bg-slate-800/80 rounded-xl border border-slate-700"
            >
              Buka Console AI Center
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
