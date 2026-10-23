import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  Activity,
  Layers,
  ChevronRight,
  Code2
} from 'lucide-react';
import { CONFIG } from '../config';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenRegister }) => {
  // Simulated dynamic terminal logs
  const [activeStep, setActiveStep] = useState(0);

  const swarmActivities = [
    {
      agent: 'Lead Architect (AI)',
      icon: <Layers className="w-4 h-4 text-amber-400" />,
      bg: 'bg-amber-500/10 border-amber-500/30',
      color: 'text-amber-400',
      action: 'Menganalisis requirements proyek & menyusun blueprint arsitektur sistem...',
      status: 'DONE',
    },
    {
      agent: 'Senior Developer (AI)',
      icon: <Code2 className="w-4 h-4 text-blue-400" />,
      bg: 'bg-blue-500/10 border-blue-500/30',
      color: 'text-blue-400',
      action: 'Menulis endpoint REST API, schema database PostgreSQL, dan service queue...',
      status: 'DONE',
    },
    {
      agent: 'Security Auditor (AI)',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
      bg: 'bg-emerald-500/10 border-emerald-500/30',
      color: 'text-emerald-400',
      action: 'Audit zero SQL injection, sanitasi input, rate limiting & verifikasi JWT...',
      status: 'DONE',
    },
    {
      agent: 'Autonomous SRE (AI)',
      icon: <Zap className="w-4 h-4 text-purple-400" />,
      bg: 'bg-purple-500/10 border-purple-500/30',
      color: 'text-purple-400',
      action: 'Otomasi deployment ke cloud cluster & validasi 99.99% latency SLA...',
      status: 'ACTIVE',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % swarmActivities.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [swarmActivities.length]);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial gradients - Vercel / Railway Minimal Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/10 via-emerald-500/5 to-transparent blur-[140px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-purple-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-300 shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Next-Gen Enterprise AI Workforce Platform</span>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Otomasi Operasional Bisnis dengan{' '}
            <span className="bg-gradient-to-b from-white via-white to-zinc-400 bg-clip-text text-transparent">
              Tim AI Otonom 24/7
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Bukan sekadar chatbot tanya-jawab. Rekrut swarm AI yang mandiri merancang kode,
            analisis pasar, audit keamanan, dan eksekusi tugas kompleks dalam satu command center.
          </p>

          {/* Call to Actions (Vercel & Railway High-Contrast Clean) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-black bg-white hover:bg-zinc-200 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-neutral-800" />
              <span>Mulai Uji Coba Gratis 14 Hari</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#fitur"
              className="w-full sm:w-auto px-7 py-3.5 text-base font-medium text-zinc-300 hover:text-white glass-card hover:bg-zinc-900/80 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2 font-mono text-sm"
            >
              <Layers className="w-4 h-4 text-zinc-400" />
              <span>Jelajahi Arsitektur</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-1.5 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free 50 Tasks (Tanpa Kartu Kredit)</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>Isolasi Workspace Per-Tenant</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Akses Multi-LLM (Claude, GPT, Gemini)</span>
            </div>
          </div>
        </div>

        {/* Live Swarm Interactive Terminal Showcase (Railway / Vercel Canvas Style) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl glass-panel border border-zinc-800/80 shadow-2xl overflow-hidden shadow-black/80">
            {/* Terminal Top Bar */}
            <div className="bg-zinc-950/90 px-4 py-3 border-b border-zinc-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  id-tech-cloud://swarm-orchestrator/realtime-feed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                  Swarm Engine Online
                </span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-4 bg-black/80">
              <div className="text-zinc-400 pb-2 border-b border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span>Task: [ENTERPRISE_PIPELINE] Deploy Multi-Agent Microservice</span>
                <span className="text-emerald-400 font-medium">Orkestrasi Otomatis</span>
              </div>

              {swarmActivities.map((act, index) => {
                const isSelected = activeStep === index;
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-xl transition-all duration-300 flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-zinc-900/80 border border-zinc-700 shadow-lg'
                        : 'bg-zinc-950/40 border border-zinc-800/40 opacity-70'
                    }`}
                  >
                    <div className={`p-2 rounded-lg border ${act.bg} shrink-0`}>
                      {act.icon}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${act.color}`}>
                          {act.agent}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            act.status === 'DONE'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : 'bg-cyan-500/20 text-cyan-300 animate-pulse'
                          }`}
                        >
                          {act.status}
                        </span>
                      </div>
                      <p className="text-slate-300 font-mono text-xs leading-relaxed">
                        {act.action}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 border-t border-slate-800/80">
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Latency: 14ms | Swarm Sync: 100% | Memory Graph: Active</span>
                </span>
                <a
                  href={CONFIG.appConsoleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold hover:underline shrink-0"
                >
                  <span>Buka Full Console</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
