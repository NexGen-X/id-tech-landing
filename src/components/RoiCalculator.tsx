import { useState } from 'react';
import type { FC } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign, ArrowRight } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenRegister: () => void;
}

export const RoiCalculator: FC<RoiCalculatorProps> = ({ onOpenRegister }) => {
  const [taskCount, setTaskCount] = useState(500);

  // Estimasi konservatif:
  // 1 task engineering/research/ops membutuhkan rata-rata 1.5 jam tenaga kerja manusia
  const humanHoursSaved = Math.round(taskCount * 1.5);
  // Biaya tenaga kerja manusia rata-rata Rp 75.000 / jam
  const estimatedHumanCost = humanHoursSaved * 75000;
  // Biaya SaaS ID-Tech Cloud
  let idTechCost = 499000; // Starter
  if (taskCount > 500) idTechCost = 1499000; // Pro
  if (taskCount > 2500) idTechCost = 3999000; // Custom / Scale

  const savings = Math.max(0, estimatedHumanCost - idTechCost);
  const savingsPercent = Math.round((savings / estimatedHumanCost) * 100);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Kalkulator Efisiensi Bisnis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Hitung Penghematan Operasional Anda
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Gunakan kalkulator interaktif untuk melihat seberapa banyak waktu dan anggaran yang
            dapat Anda hemat setiap bulan menggunakan tim AI otonom.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-slate-700/80 shadow-2xl">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor="taskSlider" className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-400" />
                <span>Volume Pekerjaan Bulanan (Tasks & Pipelines):</span>
              </label>
              <span className="text-2xl font-extrabold font-mono text-blue-400">
                {taskCount.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">tasks / bln</span>
              </span>
            </div>

            <input
              id="taskSlider"
              type="range"
              min="100"
              max="3000"
              step="50"
              value={taskCount}
              onChange={(e) => setTaskCount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />

            <div className="flex justify-between text-xs text-slate-400 font-mono">
              <span>100 tasks</span>
              <span>1.500 tasks</span>
              <span>3.000 tasks</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Jam Kerja Terhemat</span>
              </div>
              <div className="text-2xl font-bold text-white font-mono">
                ~{humanHoursSaved.toLocaleString()} <span className="text-xs font-normal text-slate-400">Jam</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Ekuivalen 1-2 FTE insinyur/analis</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-1">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                <span>Biaya ID-Tech Cloud</span>
              </div>
              <div className="text-2xl font-bold text-blue-400 font-mono">
                {formatRupiah(idTechCost)}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Paket SaaS bulanan tanpa biaya tersembunyi</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Estimasi Penghematan</span>
              </div>
              <div className="text-2xl font-extrabold text-emerald-300 font-mono">
                {formatRupiah(savings)}
              </div>
              <p className="text-[11px] text-emerald-400/80 font-medium mt-1">
                Hemat ~{savingsPercent}% anggaran operasional!
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Uji efisiensi sekarang dengan kuota 50 task gratis selama 14 hari penuh.
            </p>
            <button
              onClick={onOpenRegister}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2"
            >
              <span>Klaim Uji Coba Gratis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
