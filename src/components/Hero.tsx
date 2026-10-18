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
  ChevronRight
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
      avatar: '🏛️',
      color: 'text-amber-400',
      action: 'Menganalisis requirements proyek & menyusun blueprint arsitektur sistem...',
      status: 'DONE',
    },
    {
      agent: 'Senior Developer (AI)',
      avatar: '⚡',
      color: 'text-blue-400',
      action: 'Menulis endpoint REST API, schema database PostgreSQL, dan service queue...',
      status: 'DONE',
    },
    {
      agent: 'Security Auditor (AI)',
      avatar: '🛡️',
      color: 'text-emerald-400',
      action: 'Audit zero SQL injection, sanitasi input, rate limiting & verifikasi JWT...',
      status: 'DONE',
    },
    {
      agent: 'Autonomous SRE (AI)',
      avatar: '🚀',
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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Pill Announcement */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-semibold text-blue-300 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Next-Gen Enterprise AI Workforce Platform</span>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Otomasi Operasional Bisnis dengan{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Tim AI Otonom 24/7
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Bukan sekadar chatbot tanya-jawab. Rekrut swarm AI yang mandiri merancang kode,
            analisis pasar, audit keamanan, dan eksekusi tugas kompleks dalam satu command center.
          </p>

          {/* Call to Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-cyan-200" />
              <span>Mulai Uji Coba Gratis 14 Hari</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#fitur"
              className="w-full sm:w-auto px-7 py-3.5 text-base font-medium text-slate-200 hover:text-white glass-card hover:bg-slate-800/80 rounded-xl border border-slate-700/80 transition-all flex items-center justify-center gap-2"
            >
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Jelajahi Arsitektur</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free 50 Tasks (Tanpa Kartu Kredit)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Isolasi Workspace Per-Tenant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Akses Multi-LLM (Claude, GPT, Gemini)</span>
            </div>
          </div>
        </div>

        {/* Live Swarm Interactive Terminal Showcase */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-2xl glass-panel border border-slate-700/80 shadow-2xl overflow-hidden shadow-blue-900/20">
            {/* Terminal Top Bar */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
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
            <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-4 bg-slate-950/70">
              <div className="text-slate-400 pb-2 border-b border-slate-800/80 flex items-center justify-between">
                <span>Task: [ENTERPRISE_PIPELINE] Deploy Multi-Agent Microservice</span>
                <span className="text-blue-400 font-medium">Orkestrasi Otomatis</span>
              </div>

              {swarmActivities.map((act, index) => {
                const isSelected = activeStep === index;
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-xl transition-all duration-300 flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-blue-950/40 border border-blue-500/30 shadow-lg'
                        : 'bg-slate-900/30 border border-slate-800/40 opacity-70'
                    }`}
                  >
                    <div className="text-lg select-none">{act.avatar}</div>
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

              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  Latency: 14ms | Swarm Sync: 100% | Memory Graph: Active
                </span>
                <a
                  href={CONFIG.appConsoleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold hover:underline"
                >
                  Buka Full Console
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
