import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Cpu, ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';

interface NavbarProps {
  onOpenRegister: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel border-b border-slate-800/80 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                ID-TECH<span className="text-blue-400 font-black">.CLOUD</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase -mt-1">
                AI Agent Swarm OS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#fitur" className="hover:text-blue-400 transition-colors">
              Fitur Unggulan
            </a>
            <a href="#swarm" className="hover:text-blue-400 transition-colors">
              Solusi Tim AI
            </a>
            <a href="#arsitektur" className="hover:text-blue-400 transition-colors">
              Keamanan Enterprise
            </a>
            <a href="#harga" className="hover:text-blue-400 transition-colors">
              Harga Paket
            </a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={CONFIG.appConsoleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg border border-slate-700/60 transition-all flex items-center gap-2"
            >
              <span>Masuk ke Console</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={onOpenRegister}
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Coba Gratis 14 Hari</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-4 pb-6 space-y-4">
          <a
            href="#fitur"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-blue-400 py-1"
          >
            Fitur Unggulan
          </a>
          <a
            href="#swarm"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-blue-400 py-1"
          >
            Solusi Tim AI
          </a>
          <a
            href="#arsitektur"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-blue-400 py-1"
          >
            Keamanan Enterprise
          </a>
          <a
            href="#harga"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-blue-400 py-1"
          >
            Harga Paket
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-300 hover:text-blue-400 py-1"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={CONFIG.appConsoleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-sm font-medium text-slate-200 bg-slate-800/80 rounded-lg border border-slate-700"
            >
              Masuk ke Console
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg shadow-blue-600/30"
            >
              Coba Gratis 14 Hari
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
