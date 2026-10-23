import { useState } from 'react';
import type { FC } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';
import { IdTechLogo } from './IdTechLogo';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenWhitepaper?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenRegister, onOpenWhitepaper }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3.5 sm:pt-5 pointer-events-none">
      <nav className="w-full max-w-5xl rounded-full glass-panel border border-zinc-800/80 bg-black/80 backdrop-blur-2xl shadow-2xl shadow-black/80 px-3 sm:px-4 py-2 flex items-center justify-between pointer-events-auto transition-all duration-300 hover:border-zinc-700">
        {/* Brand: Bespoke Characteristic "id-tech" Logo */}
        <a
          href="#"
          className="flex items-center group py-0.5 px-1"
          title="id-tech — Autonomous AI Workforce Platform"
          aria-label="id-tech Home"
        >
          <IdTechLogo size="md" showText={true} />
        </a>

        {/* Center: Sleek Rounded Pill Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs lg:text-sm font-medium text-zinc-400">
          <a
            href="#fitur"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Fitur
          </a>
          <a
            href="#swarm"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Solusi Tim
          </a>
          <a
            href="#arsitektur"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Keamanan
          </a>
          <a
            href="#harga"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Harga
          </a>
          <a
            href="#ulasan"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            Ulasan
          </a>
          {onOpenWhitepaper && (
            <button
              onClick={onOpenWhitepaper}
              className="px-3 py-1.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-all font-semibold font-mono text-xs"
            >
              Whitepaper
            </button>
          )}
          <a
            href="#faq"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
          >
            FAQ
          </a>
        </div>

        {/* Right: Actions (Theme, Console & Coba Gratis) */}
        <div className="hidden sm:flex items-center gap-2">
          <ThemeSelector />

          <a
            href={CONFIG.appConsoleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-full transition-all flex items-center gap-1.5"
          >
            <span>Console</span>
            <ArrowRight className="w-3 h-3 text-zinc-400" />
          </a>

          <button
            onClick={onOpenRegister}
            className="px-4 py-1.5 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
            <span>Coba Gratis</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex sm:hidden items-center gap-1.5">
          <ThemeSelector compact={true} />

          <button
            onClick={onOpenRegister}
            className="px-3 py-1 text-xs font-semibold text-black bg-white hover:bg-zinc-200 rounded-full cursor-pointer shadow-sm"
          >
            Coba Gratis
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Floating Island Dropdown) */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-4 right-4 rounded-2xl glass-panel border border-zinc-800 bg-black/95 backdrop-blur-2xl p-5 shadow-2xl space-y-4 pointer-events-auto animate-fadeIn">
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
              href="#ulasan"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              Ulasan Pelanggan
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5"
            >
              FAQ
            </a>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={CONFIG.appConsoleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-mono font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 rounded-xl border border-zinc-800 hover:border-zinc-700 transition"
            >
              Buka Console AI Center
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
