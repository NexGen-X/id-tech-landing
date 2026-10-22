import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, Palette, Check, ChevronDown } from 'lucide-react';
import { useTheme, ACCENT_THEMES } from '../context/ThemeContext';
import type { AccentColor } from '../context/ThemeContext';

interface ThemeSelectorProps {
  compact?: boolean;
  className?: string;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ compact = false, className = '' }) => {
  const { themeMode, resolvedMode, accentColor, setThemeMode, setAccentColor, accent } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Sesuaikan Tema & Warna Estetika (Gelap, Terang, Auto)"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 border border-slate-700/80 text-slate-200 transition text-xs font-medium shadow-sm cursor-pointer"
      >
        <span 
          className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm ring-1 ring-white/20" 
          style={{ backgroundColor: accent.hex }} 
        />
        {resolvedMode === 'dark' ? (
          <Moon className="w-3.5 h-3.5 text-slate-300" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-amber-500" />
        )}
        {!compact && (
          <>
            <span className="hidden sm:inline font-mono text-[11px] capitalize">{accent.label.split(' ')[0]}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </>
        )}
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl bg-slate-950/95 dark:bg-slate-950/95 border border-slate-800 shadow-2xl p-4 space-y-4 z-50 animate-fadeIn text-xs backdrop-blur-2xl">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Palette className="w-4 h-4 text-cyan-400" />
              <span>Personalisasi Tema</span>
            </div>
            <span className="text-[10px] font-mono uppercase text-slate-400">UI / UX</span>
          </div>

          {/* Theme Mode Selector (Dark, Light, System) */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Mode Tampilan</span>
            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setThemeMode('dark')}
                className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition text-[11px] font-medium cursor-pointer ${
                  themeMode === 'dark'
                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Gelap</span>
              </button>

              <button
                onClick={() => setThemeMode('light')}
                className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition text-[11px] font-medium cursor-pointer ${
                  themeMode === 'light'
                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Terang</span>
              </button>

              <button
                onClick={() => setThemeMode('system')}
                className={`py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition text-[11px] font-medium cursor-pointer ${
                  themeMode === 'system'
                    ? 'bg-slate-800 text-white shadow-sm ring-1 ring-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Auto</span>
              </button>
            </div>
          </div>

          {/* Aesthetic Accent Color Selector */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Aksen Estetika</span>
              <span className="text-[10px] font-mono text-cyan-400">{accent.label}</span>
            </div>

            <div className="grid grid-cols-6 gap-1.5">
              {(Object.keys(ACCENT_THEMES) as AccentColor[]).map((key) => {
                const conf = ACCENT_THEMES[key];
                const isSelected = accentColor === key;
                return (
                  <button
                    key={key}
                    onClick={() => setAccentColor(key)}
                    title={`${conf.name} (${conf.label})`}
                    className={`group relative h-8 rounded-xl flex items-center justify-center transition border cursor-pointer ${
                      isSelected
                        ? 'border-white ring-2 ring-cyan-500/40'
                        : 'border-transparent hover:border-slate-700'
                    }`}
                    style={{ backgroundColor: conf.hex }}
                  >
                    {isSelected && (
                      <Check className={`w-3.5 h-3.5 ${key === 'monochrome' ? 'text-black' : 'text-white'} drop-shadow`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Info Footer */}
          <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
            <span>Disimpan di LocalStorage</span>
            <span className="text-emerald-400 font-semibold">Instan</span>
          </div>
        </div>
      )}
    </div>
  );
};
