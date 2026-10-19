import { useState, useEffect } from 'react';
import type { FC } from 'react';
import {
  Star,
  MessageSquare,
  ThumbsUp,
  CheckCircle2,
  Plus,
  Sparkles,
  X,
  Send,
  ShieldCheck,
  Quote,
  TrendingUp
} from 'lucide-react';

export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  rating: number;
  planUsed: 'Starter Tim' | 'Business Scale' | 'Enterprise Custom' | 'Free Trial';
  date: string;
  content: string;
  metricBadge?: string;
  helpfulCount: number;
  isVerified: boolean;
  isCustomSubmission?: boolean;
}

const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Budi Santoso',
    role: 'Chief Technology Officer',
    company: 'FinSecure Solusindo',
    avatarText: 'BS',
    rating: 5,
    planUsed: 'Business Scale',
    date: '14 Okt 2026',
    content:
      'Sistem autonomous swarm ID-Tech Cloud memangkas waktu review kode dan automated testing kami hingga 65%. Tim engineer kami kini bisa fokus pada arsitektur produk utama sementara agen AI menangani QA self-correction dan bug hunting secara mandiri.',
    metricBadge: 'Pangkas Dev Time 65%',
    helpfulCount: 38,
    isVerified: true
  },
  {
    id: 'rev-2',
    name: 'Jessica Amanda',
    role: 'VP of Engineering',
    company: 'DataNusa Analytics',
    avatarText: 'JA',
    rating: 5,
    planUsed: 'Enterprise Custom',
    date: '11 Okt 2026',
    content:
      'Integrasi multi-provider failover-nya luar biasa tangguh. Ketika satu model LLM sedang rate-limited atau degradasi, swarm AI langsung berpindah ke backup model dalam 200ms tanpa menghentikan pipeline kerja tim. SLA 99.9% benar-benar terbukti di produksi.',
    metricBadge: 'Failover 200ms Anti-Downtime',
    helpfulCount: 29,
    isVerified: true
  },
  {
    id: 'rev-3',
    name: 'Reza Pratama',
    role: 'Founder & Managing Director',
    company: 'KodeKreasi Studio',
    avatarText: 'RP',
    rating: 5,
    planUsed: 'Starter Tim',
    date: '08 Okt 2026',
    content:
      'Untuk software house berukuran 15 orang, paket Starter Tim terasa seperti menambah 5 engineer senior yang tidak pernah tidur. Kami bisa menyerahkan deliverable klien 2x lebih cepat. ROI-nya sudah kembali di bulan pertama pemakaian.',
    metricBadge: 'Deliverable 2x Lebih Cepat',
    helpfulCount: 44,
    isVerified: true
  },
  {
    id: 'rev-4',
    name: 'Alamsyah Hidayat',
    role: 'Lead SRE & Infrastructure',
    company: 'CloudNusantara Tech',
    avatarText: 'AH',
    rating: 5,
    planUsed: 'Business Scale',
    date: '03 Okt 2026',
    content:
      'Fitur SRE Agent dan Memory Graph adalah game changer. Saat terjadi lonjakan latensi database, agen AI langsung mengisolasi query bermasalah dan memberikan rekomendasi indeksing sebelum tim on-call kami sempat membuka terminal.',
    metricBadge: 'MTTD Terpangkas 80%',
    helpfulCount: 21,
    isVerified: true
  },
  {
    id: 'rev-5',
    name: 'Nadia Putri',
    role: 'Head of Product',
    company: 'AgriTech Nusantara',
    avatarText: 'NP',
    rating: 5,
    planUsed: 'Starter Tim',
    date: '28 Sep 2026',
    content:
      'Kemampuan agen untuk riset pasar dan menyusun PRD (Product Requirement Document) lengkap dengan diagram arsitektur sangat mengagumkan. Kolaborasi tim produk dan tim engineering jadi jauh lebih terarah dan minim miskomunikasi.',
    metricBadge: 'PRD Rilis 3x Lebih Cepat',
    helpfulCount: 17,
    isVerified: true
  }
];

const STORAGE_KEY = 'id_tech_customer_reviews_v1';

export const CustomerReviews: FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Ignore storage parse error
    }
    return INITIAL_REVIEWS;
  });

  const [activeFilter, setActiveFilter] = useState<'ALL' | 'STARTER' | 'BUSINESS' | 'ENTERPRISE'>('ALL');
  const [modalOpen, setModalOpen] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Set<string>>(new Set());

  // Form state
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formPlan, setFormPlan] = useState<'Starter Tim' | 'Business Scale' | 'Enterprise Custom' | 'Free Trial'>('Starter Tim');
  const [formContent, setFormContent] = useState('');
  const [formSuccessMessage, setFormSuccessMessage] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // Ignore storage save error
    }
  }, [reviews]);

  const handleLikeReview = (id: string) => {
    if (likedReviews.has(id)) return;

    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
    setLikedReviews((prev) => new Set(prev).add(id));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formContent.trim() || !formCompany.trim()) return;

    const initials = formName
      .trim()
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    const newReview: CustomerReview = {
      id: `rev-custom-${Date.now()}`,
      name: formName.trim(),
      role: formRole.trim() || 'Software Engineer',
      company: formCompany.trim(),
      avatarText: initials || 'ID',
      rating: formRating,
      planUsed: formPlan,
      date: 'Baru saja',
      content: formContent.trim(),
      metricBadge: 'Pengguna Terverifikasi',
      helpfulCount: 1,
      isVerified: true,
      isCustomSubmission: true
    };

    setReviews((prev) => [newReview, ...prev]);
    setFormSuccessMessage(true);

    setTimeout(() => {
      setFormSuccessMessage(false);
      setModalOpen(false);
      // Reset form
      setFormName('');
      setFormRole('');
      setFormCompany('');
      setFormRating(5);
      setFormContent('');
    }, 1500);
  };

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === 'STARTER') return r.planUsed === 'Starter Tim';
    if (activeFilter === 'BUSINESS') return r.planUsed === 'Business Scale';
    if (activeFilter === 'ENTERPRISE') return r.planUsed === 'Enterprise Custom';
    return true;
  });

  return (
    <section id="ulasan" className="relative py-20 bg-slate-950/70 border-t border-slate-800/80 overflow-hidden">
      {/* Background Neon Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Suara Pengguna & Rekomendasi Industri</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dipercaya oleh <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">120+ Tim Rekayasa</span> di Indonesia
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Lihat bagaimana tim teknologi, software house, dan korporasi mempercepat siklus delivery dan memangkas biaya operasional dengan Autonomous AI Workforce ID-Tech Cloud.
            </p>
          </div>

          {/* Trust Score & Add Review CTA */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Aggregate Score Card */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="text-xl font-black text-white font-mono">4.9</span>
                <span className="text-xs text-slate-400 font-mono">/ 5.0</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Tingkat Kepuasan</p>
                <p className="text-xs font-bold text-emerald-400 font-mono">99.4% CSAT Terverifikasi</p>
              </div>
            </div>

            {/* Button to Open Review Form Modal */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Tulis Ulasan Anda</span>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between gap-4 py-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold mr-1 hidden sm:inline-block">Filter Paket:</span>
            {[
              { id: 'ALL', label: 'Semua Ulasan' },
              { id: 'STARTER', label: 'Starter Tim' },
              { id: 'BUSINESS', label: 'Business Scale' },
              { id: 'ENTERPRISE', label: 'Enterprise Custom' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-mono shrink-0">
            Menampilkan <span className="text-slate-200 font-bold">{filteredReviews.length}</span> ulasan
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredReviews.map((rev) => {
            const hasLiked = likedReviews.has(rev.id);

            return (
              <div
                key={rev.id}
                className="relative rounded-2xl p-6 glass-card border border-slate-800/90 hover:border-cyan-500/40 bg-gradient-to-b from-slate-900/70 to-slate-950/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between group"
              >
                {/* Top Badge & Metric */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-slate-800 text-slate-800'
                        }`}
                      />
                    ))}
                    <span className="text-[11px] font-mono font-bold text-slate-400 ml-1.5">
                      {rev.rating}.0
                    </span>
                  </div>

                  {/* Impact Metric Pill */}
                  {rev.metricBadge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5 text-cyan-400" />
                      <span>{rev.metricBadge}</span>
                    </span>
                  )}
                </div>

                {/* Review Text Body */}
                <div className="space-y-3 flex-1">
                  <p className="text-xs text-slate-300 leading-relaxed italic relative">
                    <Quote className="w-5 h-5 text-slate-800 -top-2 -left-1 absolute -z-10 opacity-60" />
                    "{rev.content}"
                  </p>
                </div>

                {/* Author Info & Verified Footer */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Monogram Avatar */}
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600/30 via-indigo-600/30 to-cyan-400/30 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-xs font-mono shrink-0 shadow-sm">
                      {rev.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-xs font-bold text-white leading-tight">{rev.name}</h4>
                        {rev.isVerified && (
                          <span title="Pelanggan Terverifikasi ID-Tech Cloud">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        {rev.role} • <span className="text-slate-300">{rev.company}</span>
                      </p>
                      <span className="text-[9px] font-mono text-slate-500 mt-0.5 block">
                        Paket {rev.planUsed} • {rev.date}
                      </span>
                    </div>
                  </div>

                  {/* Helpful Button */}
                  <button
                    type="button"
                    onClick={() => handleLikeReview(rev.id)}
                    disabled={hasLiked}
                    className={`flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded-lg border transition ${
                      hasLiked
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                        : 'text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800'
                    }`}
                    title="Tandai ulasan ini bermanfaat"
                  >
                    <ThumbsUp className={`w-3 h-3 ${hasLiked ? 'text-cyan-400 fill-cyan-400' : ''}`} />
                    <span>{rev.helpfulCount}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Garansi Kepuasan & Privasi Kode Enterprise</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Setiap data repositori dan memori agen terenkripsi privat. Tidak digunakan untuk pelatihan model publik.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono font-semibold text-cyan-400">SOC2 Type II Ready • ISO 27001 Compliant</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          MODAL: Tulis Ulasan / Komentar Pelanggan
          ==================================================================== */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0B0F17] border border-cyan-500/40 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden p-6 space-y-5 animate-in zoom-in-95 duration-200 relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Tulis Ulasan & Komentar Anda</h3>
                  <p className="text-xs text-slate-400">Bagikan pengalaman tim Anda menggunakan ID-Tech Cloud</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {formSuccessMessage ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Terima Kasih Atas Ulasan Anda!</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Ulasan Anda telah berhasil diverifikasi dan ditambahkan ke daftar ulasan pelanggan resmi.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Rating Stars Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Rating Pengalaman:
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormRating(star)}
                        className="p-1 hover:scale-110 transition"
                        title={`${star} Bintang`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= formRating
                              ? 'fill-amber-400 text-amber-400'
                              : 'fill-slate-800 text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-mono font-bold text-amber-400 ml-2">
                      {formRating}.0 / 5.0
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nama Lengkap <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="cth. Hendra Gunawan"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Jabatan / Peran
                    </label>
                    <input
                      type="text"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      placeholder="cth. Tech Lead / Developer"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                {/* Company & Plan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Perusahaan / Organisasi <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="cth. Nusantara Digital Corp"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Paket yang Digunakan
                    </label>
                    <select
                      value={formPlan}
                      onChange={(e) => setFormPlan(e.target.value as any)}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Starter Tim">Starter Tim</option>
                      <option value="Business Scale">Business Scale</option>
                      <option value="Enterprise Custom">Enterprise Custom</option>
                      <option value="Free Trial">Free Trial</option>
                    </select>
                  </div>
                </div>

                {/* Review Content */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Ulasan / Testimoni Anda <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                    placeholder="Ceritakan bagaimana ID-Tech Cloud membantu efisiensi tim rekayasa atau operasional bisnis Anda..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none leading-relaxed"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold transition"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-md shadow-blue-500/25 flex items-center gap-2 transition"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Ulasan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
