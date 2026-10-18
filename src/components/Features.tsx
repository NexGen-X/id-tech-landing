import type { FC } from 'react';
import { 
  Network, 
  Cpu, 
  Workflow, 
  LineChart, 
  Brain, 
  Lock 
} from 'lucide-react';

export const Features: FC = () => {
  const featureList = [
    {
      icon: <Network className="w-6 h-6 text-blue-400" />,
      title: 'Autonomous Swarm Orchestration',
      description:
        'Agen AI tidak berjalan sendiri-sendiri. Mereka membentuk swarm kolaboratif: memecah masalah besar, mendelegasikan subtugas, dan saling mereview hasil kerja secara otomatis.',
      badge: 'Multi-Agent',
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: 'Hybrid Multi-LLM Gateway',
      description:
        'Dukungan native ke OpenAI GPT-4o, Anthropic Claude 3.7, Google Gemini 2.5 Flash, dan Ollama lokal. Router cerdas memilih model paling efisien secara biaya dan akurasi.',
      badge: 'Cost Optimizer',
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise Tenant Isolation',
      description:
        'Setiap perusahaan memiliki ruang kerja (workspace) yang terenkripsi dan terisolasi total. Data Anda dijamin 100% privat dan tidak pernah digunakan untuk melatih model AI publik.',
      badge: 'Zero Data Leak',
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'Persistent Memory Graph & Knowledge',
      description:
        'Agen tidak lupa konteks. Memory graph menyimpan dokumentasi arsitektur, basis pengetahuan bisnis, dan riwayat keputusan untuk koordinasi jangka panjang.',
      badge: 'Knowledge Graph',
    },
    {
      icon: <Workflow className="w-6 h-6 text-amber-400" />,
      title: 'Sandbox Tool & Code Execution',
      description:
        'Agen dilengkapi hak eksekusi terminal yang aman, query PostgreSQL, web research otomatis, dan integrasi MCP (Model Context Protocol) untuk output nyata.',
      badge: 'Action-Oriented',
    },
    {
      icon: <LineChart className="w-6 h-6 text-rose-400" />,
      title: 'Real-time Telemetry & Audit Logs',
      description:
        'Visibilitas penuh terhadap setiap detik proses berpikir agen, konsumsi kuota task, jejak audit keamanan, dan metrik latensi secara real-time via SSE.',
      badge: 'Observability',
    },
  ];

  return (
    <section id="fitur" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Arsitektur & Kapabilitas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Fondasi Teknologi Kelas Dunia untuk AI Generasi Baru
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Dirancang dari nol untuk stabilitas enterprise, keamanan data berlapis, dan kecepatan
            eksekusi tanpa kompromi.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[11px] font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
