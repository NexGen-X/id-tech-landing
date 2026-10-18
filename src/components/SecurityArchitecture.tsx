import type { FC } from 'react';
import { ShieldCheck, Lock, Server, KeyRound, EyeOff, FileText } from 'lucide-react';

export const SecurityArchitecture: FC = () => {
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
      </div>
    </section>
  );
};
