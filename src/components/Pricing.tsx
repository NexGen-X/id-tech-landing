import { useState } from 'react';
import type { FC } from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';
import type { Plan } from '../types';

interface PricingProps {
  onOpenRegister: (planId?: string) => void;
}

export const Pricing: FC<PricingProps> = ({ onOpenRegister }) => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: Plan[] = [
    {
      id: 'FREE_TRIAL',
      name: 'Free Trial',
      tagline: 'Eksplorasi kemampuan orkestrasi swarm tanpa risiko finansial.',
      monthlyPrice: 0,
      annualPrice: 0,
      taskQuota: '50 Tasks / 14 Hari',
      popular: false,
      ctaText: 'Mulai Uji Coba Gratis',
      features: [
        'Akses 14 hari penuh',
        '50 Autonomous Tasks quota',
        '1 Dedicated Workspace',
        'Akses Multi-LLM Gateway',
        'Standard Sandbox Execution',
        'Community & Docs Support',
      ],
    },
    {
      id: 'STARTER',
      name: 'Starter',
      tagline: 'Ideal untuk startup tahap awal dan tim pengembang kecil.',
      monthlyPrice: 499000,
      annualPrice: 399000,
      taskQuota: '500 Tasks / Bulan',
      popular: false,
      ctaText: 'Pilih Starter',
      features: [
        '500 Autonomous Tasks per bulan',
        'Hingga 3 Tim Swarm Agent',
        '2 Dedicated Workspaces',
        'Penyimpanan Memory Graph 10GB',
        'Web Research & Data Scraper',
        'Email Support (< 24 jam)',
      ],
    },
    {
      id: 'PRO',
      name: 'Pro',
      tagline: 'Pilihan paling populer untuk perusahaan berkembang dan scale-up.',
      monthlyPrice: 1499000,
      annualPrice: 1199000,
      taskQuota: '2.500 Tasks / Bulan',
      popular: true,
      ctaText: 'Pilih Pro (Rekomendasi)',
      features: [
        '2.500 Autonomous Tasks per bulan',
        'Unlimited Tim Swarm Agent',
        'Hingga 10 Workspaces per-tenant',
        'Priority High-Throughput Queue',
        '24/7 SRE Incident Monitoring',
        'Akses REST API & Webhook Integrations',
        'Priority Support & SLAs',
      ],
    },
    {
      id: 'ENTERPRISE',
      name: 'Enterprise',
      tagline: 'Solusi mission-critical untuk korporasi dengan kepatuhan ketat.',
      monthlyPrice: 4999000,
      annualPrice: 3999000,
      taskQuota: 'Unlimited Tasks',
      popular: false,
      ctaText: 'Hubungi Sales Enterprise',
      features: [
        'Kustomisasi Quota Task & Model',
        'Dedicated Private VPC / On-Premise',
        '99.99% Uptime SLA bergaransi',
        'Audit Trail & Single Sign-On (SSO)',
        'Kustomisasi Agen Swarm Internal',
        'Dedicated Solutions Architect 24/7',
      ],
    },
  ];

  const formatRupiah = (num: number) => {
    if (num === 0) return 'Gratis';
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="harga" className="py-20 relative bg-slate-950/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Investasi Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Paket Berlangganan yang Terukur untuk Bisnis Anda
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Mulai dari uji coba gratis. Naikkan paket kapan saja seiring pertumbuhan volume tugas tim Anda.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Bulanan
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 flex items-center bg-slate-800 rounded-full p-1 cursor-pointer transition-colors duration-200 border border-slate-700 focus:outline-none"
            >
              <div
                className={`bg-blue-500 w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              <span>Tahunan</span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Hemat 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => {
            const price = isAnnual ? p.annualPrice : p.monthlyPrice;
            return (
              <div
                key={p.id}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  p.popular
                    ? 'glass-card border-2 border-blue-500/80 shadow-2xl shadow-blue-500/20 -translate-y-2'
                    : 'glass-card border border-slate-800 hover:border-slate-700'
                } p-6`}
              >
                {p.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-200" />
                    Pilihan Terpopuler
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-slate-400 text-xs h-10 leading-relaxed">{p.tagline}</p>

                  <div className="my-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-white font-mono">
                        {formatRupiah(price)}
                      </span>
                      {price > 0 && (
                        <span className="text-xs text-slate-400 font-sans">
                          {isAnnual ? '/bln (tahunan)' : '/bln'}
                        </span>
                      )}
                    </div>
                    <div className="mt-2 text-xs font-semibold text-blue-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{p.taskQuota}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenRegister(p.id)}
                  className={`w-full py-3 rounded-xl font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
                    p.popular
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:scale-[1.02]'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
