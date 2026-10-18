import { useState } from 'react';
import type { FC } from 'react';
import { 
  Code2, 
  Search, 
  ShieldAlert, 
  BarChart3, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface AgentSwarmShowcaseProps {
  onOpenRegister: () => void;
}

export const AgentSwarmShowcase: FC<AgentSwarmShowcaseProps> = ({ onOpenRegister }) => {
  const [selectedSwarm, setSelectedSwarm] = useState(0);

  const swarms = [
    {
      id: 'engineering',
      name: 'Software Engineering Swarm',
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      tagline: 'Tim pengembang software otonom dari perancangan arsitektur hingga deployment.',
      roles: [
        { role: 'Lead Architect', desc: 'Merancang schema DB, API contracts, dan arsitektur microservices.' },
        { role: 'Senior Fullstack Dev', desc: 'Menulis kode backend Node.js/Go dan frontend React/TypeScript.' },
        { role: 'Security & QA Auditor', desc: 'Menjalankan dynamic security scan, linter, dan automated test.' },
        { role: 'DevOps & SRE Bot', desc: 'Mengelola container Docker, CI/CD pipeline, dan health monitoring.' },
      ],
      output: 'Pull Request siap deploy, dokumentasi API Swagger, dan laporan uji beban.',
    },
    {
      id: 'market-research',
      name: 'Market Intelligence & Research Swarm',
      icon: <Search className="w-5 h-5 text-cyan-400" />,
      tagline: 'Pantau kompetitor, tren industri, dan harga pasar secara otomatis 24/7.',
      roles: [
        { role: 'Autonomous Web Crawler', desc: 'Scrape data publik, press release kompetitor, dan feed berita industri.' },
        { role: 'Data Analyst & Synthesizer', desc: 'Menghilangkan noise, mendeteksi korelasi harga dan perilaku pasar.' },
        { role: 'Executive Briefing AI', desc: 'Menyusun laporan ringkas PDF/Markdown untuk C-Level dan tim strategi.' },
      ],
      output: 'Daily Briefing kompetitor, matriks perbandingan fitur, dan visualisasi sentimen pasar.',
    },
    {
      id: 'sre-incident',
      name: '24/7 SRE & Incident Response Swarm',
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
      tagline: 'Deteksi anomali server, investigasi root-cause, dan pemulihan otomatis seketika.',
      roles: [
        { role: 'Telemetry Watchdog', desc: 'Monitoring latensi API, error rate 5xx, dan memory leak tanpa jeda.' },
        { role: 'Root-Cause Forensic AI', desc: 'Analisis log stacktrace, memory dump, dan riwayat git commit terbaru.' },
        { role: 'Auto-Remediator', desc: 'Menjalankan failover, restart pod macet, atau flush redis cache bermasalah.' },
      ],
      output: 'Incident Post-Mortem otomatis, MTTR turun hingga 80%, dan SLA 99.99% terjaga.',
    },
    {
      id: 'data-finance',
      name: 'Financial & Business Ops Swarm',
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      tagline: 'Otomasi laporan finansial, cash-flow forecast, dan KPI operasional perusahaan.',
      roles: [
        { role: 'SQL & Data Pipeline Agent', desc: 'Query data transaksi dari PostgreSQL/MySQL secara aman tanpa eksposur PII.' },
        { role: 'Forecasting & Anomaly AI', desc: 'Prediksi churn rate pelanggan dan proyeksi cash-flow 3 bulan ke depan.' },
        { role: 'KPI Dashboard Builder', desc: 'Membuat ringkasan grafik mingguan langsung ke email manajemen.' },
      ],
      output: 'Executive Financial Summary, deteksi kebocoran biaya cloud, dan auto-reconcile.',
    },
  ];

  const current = swarms[selectedSwarm];

  return (
    <section id="swarm" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Solusi Siap Pakai
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Pilih Tim AI Sesuai Kebutuhan Industri Anda
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tidak perlu melatih AI dari nol. Setiap template tim sudah dilengkapi peran (*roles*),
            tools khusus, dan alur kerja teruji untuk hasil terukur.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {swarms.map((swarm, idx) => {
            const isSelected = selectedSwarm === idx;
            return (
              <button
                key={swarm.id}
                onClick={() => setSelectedSwarm(idx)}
                className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {swarm.icon}
                <span>{swarm.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Swarm Showcase Card */}
        <div className="mt-10 max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-slate-700/80 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                {current.icon}
                <span>{current.name}</span>
              </h3>
              <p className="text-slate-300 text-sm mt-1">{current.tagline}</p>
            </div>
            <button
              onClick={onOpenRegister}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Deploy Tim Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.roles.map((r, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>{r.role}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-blue-950/30 border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs text-slate-300">
              <strong className="text-blue-300">Deliverable Output:</strong> {current.output}
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 whitespace-nowrap">
              Ready in 1-Click
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
