import type { FC } from 'react';
import {
  ShieldCheck,
  Lock,
  Server,
  KeyRound,
  EyeOff,
  FileText,
  BookOpen,
  Scale,
  ArrowRight
} from 'lucide-react';

interface SecurityArchitectureProps {
  onOpenLegal?: (tab?: 'privacy' | 'terms' | 'sla') => void;
  onOpenWhitepaper?: () => void;
}

export const SecurityArchitecture: FC<SecurityArchitectureProps> = ({
  onOpenLegal,
  onOpenWhitepaper
}) => {
  const securityPillars = [
    {
      icon: <EyeOff className="w-5 h-5 text-emerald-400" />,
      title: 'Zero Training on Customer Data',
      desc: 'Prompt, kode sumber, dan data bisnis Anda tidak pernah digunakan untuk melatih LLM publik pihak ketiga.',
    },
    {
      icon: <Server className="w-5 h-5 text-blue-400" />,
      title: 'Tenant Sandbox Isolation',
      desc: 'Setiap proses komputasi dan eksekusi task berjalan dalam sandbox container terisolasi secara hardware & OS level.',
    },
    {
      icon: <Lock className="w-5 h-5 text-cyan-400" />,
      title: 'End-to-End Encryption',
      desc: 'Enkripsi standar militer AES-256 untuk data at-rest dan TLS 1.3 modern untuk semua komunikasi in-transit.',
    },
    {
      icon: <KeyRound className="w-5 h-5 text-amber-400" />,
      title: 'Granular RBAC & Token Security',
      desc: 'Kontrol akses berbasis peran (Owner, Admin, Operator, Viewer) dengan JWT rotasi dan perlindungan API rate limiting.',
    },
    {
      icon: <FileText className="w-5 h-5 text-purple-400" />,
      title: 'Immutable Audit Logging',
      desc: 'Setiap aksi yang diambil oleh agen AI dicatat secara permanen dalam database audit trail untuk kebutuhan kepatuhan hukum.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      title: 'Anti-DDoS & Edge Firewall',
      desc: 'Dilindungi oleh Cloudflare Enterprise Edge Network dengan mitigasi bot jahat dan rate limiter cerdas.',
    },
  ];

  return (
    <section id="arsitektur" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Enterprise Security & Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Keamanan Data Adalah Prioritas Mutlak
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Kami memahami kerahasiaan data perusahaan Anda. ID-Tech Cloud menerapkan kontrol
            keamanan berlapis yang memenuhi standar kepatuhan industri modern.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="p-3 rounded-xl bg-slate-900 w-fit border border-slate-800 mb-4">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Enterprise Compliance Call-out Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-950/90 to-slate-900/90 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                UU PDP No. 27/2022 Compliant
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                SLA 99.9% Uptime Guarantee
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Zero-Training Guaranteed
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Transparansi Kepatuhan Hukum & Arsitektur Deep-Tech
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Tinjau dokumen legal komprehensif kami atau telusuri spesifikasi teknis bagaimana sistem
              multi-agent swarm ID-Tech mengisolasi memori dan dependensi kode Anda.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            {onOpenLegal && (
              <button
                onClick={() => onOpenLegal('privacy')}
                className="px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
              >
                <Scale className="w-4 h-4 text-cyan-400" />
                <span>Pusat Legal & SLA</span>
              </button>
            )}

            {onOpenWhitepaper && (
              <button
                onClick={onOpenWhitepaper}
                className="px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>Baca Whitepaper v2.4</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
