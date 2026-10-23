import type { FC } from 'react';
import { 
  Network, 
  Cpu, 
  Workflow, 
  LineChart, 
  Brain, 
  Lock,
  GitPullRequest,
  DollarSign,
  Clock
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
        'Dukungan native ke Azure OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Groq LPU, dan DeepSeek. Router cerdas memilih model paling efisien secara biaya dan akurasi.',
      badge: 'Failover <200ms',
    },
    {
      icon: <GitPullRequest className="w-6 h-6 text-purple-400" />,
      title: 'GitHub & GitLab CI/CD PR Bot',
      description:
        'Terintegrasi langsung ke repositori Anda. Ketika PR dibuka, agen Reviewer dan Security otomatis memindai diff kode, mengaudit race conditions, dan memberi inline review.',
      badge: 'GitOps Native',
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-400" />,
      title: 'AI FinOps & Anti-Bill-Shock Guard',
      description:
        'Visibilitas konsumsi token dan estimasi biaya per-agen dan per-model secara real-time. Dilengkapi budget cap dan auto-fallback ke model open-weights saat kuota tercapai.',
      badge: 'Cost Guard',
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-400" />,
      title: 'Scheduled Autonomous Daemons',
      description:
        'Agen bekerja 24/7 di latar belakang sesuai cron schedule: morning standup digest, SRE health sentinel setiap 10 menit, dan pemindaian kerentanan CVE mingguan.',
      badge: '24/7 Automation',
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise Zero-Training Isolation',
      description:
        'Setiap perusahaan memiliki ruang kerja (workspace) yang terenkripsi dan terisolasi total. Data dan kode sumber dijamin 100% privat dan tidak pernah melatih model AI publik.',
      badge: 'UU PDP & GDPR',
    },
    {
      icon: <Brain className="w-6 h-6 text-indigo-400" />,
      title: 'AST Codebase Memory Graph',
      description:
        'Tree-sitter syntax parsing yang memetakan hubungan fungsi, hierarki kelas, dan tipe data lintas berkas sehingga agen memahami arsitektur proyek tanpa batasan context window.',
      badge: 'AST Deep-Tech',
    },
    {
      icon: <Workflow className="w-6 h-6 text-amber-400" />,
      title: 'Sandbox Tool & Code Execution',
      description:
        'Agen dilengkapi hak eksekusi terminal mikro terisolasi, query database otomatis, web research, dan integrasi MCP (Model Context Protocol) untuk output kode nyata.',
      badge: 'Action-Oriented',
    },
    {
      icon: <LineChart className="w-6 h-6 text-rose-400" />,
      title: 'Real-time Telemetry & War Room',
      description:
        'Visibilitas penuh terhadap proses berpikir agen, konsumsi kuota task, jejak audit keamanan immutable, dan live incident triage collaborative war room via SSE.',
      badge: 'Observability',
    },
  ];

  return (
    <section id="fitur" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            Arsitektur & Kapabilitas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fondasi Teknologi Kelas Dunia untuk AI Generasi Baru
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Dirancang dari nol untuk stabilitas enterprise, keamanan data berlapis, dan kecepatan
            eksekusi tanpa kompromi.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-zinc-800/80 hover:border-zinc-700 bg-zinc-950/60 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-medium text-zinc-400 bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-800">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-zinc-200 transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
