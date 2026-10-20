import { useState } from 'react';
import type { FC } from 'react';
import {
  X,
  Shield,
  FileText,
  Clock,
  Lock,
  CheckCircle2,
  ExternalLink,
  Building,
  Scale
} from 'lucide-react';
import { CONFIG } from '../config';

export type LegalTab = 'privacy' | 'terms' | 'sla';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col max-h-[90vh] overflow-hidden z-10">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Pusat Kepatuhan Hukum & Privasi</h3>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Legal v2.4
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {CONFIG.appName} • {CONFIG.company}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 bg-slate-950/40 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Kebijakan Privasi & Data (UU PDP)</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'terms'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Syarat & Ketentuan Layanan (ToS)</span>
          </button>

          <button
            onClick={() => setActiveTab('sla')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'sla'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Service Level Agreement (SLA 99.9%)</span>
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed">
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Highlight Box Zero Training */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent border border-emerald-500/25 flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-white text-sm font-bold mb-1">
                    Komitmen Zero-Training Data Enterprise
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Kode sumber (source code), repositori, konfigurasi env, dan percakapan rekayasa
                    tim Anda <strong>TIDAK PERNAH</strong> digunakan untuk melatih, menyempurnakan, atau
                    mengembangkan model AI pihak ketiga mana pun. Hak kepemilikan intelektual (IP) tetap
                    100% milik Anda.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">1. Landasan Hukum & Kepatuhan</h4>
                <p className="text-xs text-slate-400 mb-2">
                  Terakhir Diperbarui: 20 Oktober 2026 • Berlaku Efektif: Seluruh Pengguna Layanan
                </p>
                <p className="text-xs text-slate-300">
                  Kebijakan Privasi ini mengatur bagaimana {CONFIG.company} ("Kami") mengumpulkan,
                  menyimpan, memproses, dan melindungi data pribadi serta aset digital Anda pada
                  layanan {CONFIG.appName} ({CONFIG.appConsoleUrl}). Kebijakan ini disusun dengan
                  mematuhi ketentuan <strong>Undang-Undang Republik Indonesia Nomor 27 Tahun 2022
                  tentang Perlindungan Data Pribadi (UU PDP)</strong> serta standar regulasi internasional
                  <strong> General Data Protection Regulation (GDPR - EU 2016/679)</strong>.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">2. Kategori Data yang Diproses</h4>
                <ul className="space-y-2 text-xs text-slate-300 list-disc pl-5">
                  <li>
                    <strong>Informasi Akun:</strong> Nama, alamat surat elektronik (email), nama entitas
                    organisasi/perusahaan, dan nomor telepon seluler untuk otentikasi multi-faktor (MFA).
                  </li>
                  <li>
                    <strong>Metadata Repositori:</strong> Struktur direktori proyek, nama berkas, abstrak
                    sintaks (AST) untuk Codebase Memory Graph. Kode dieksekusi secara terenkripsi dalam
                    sandbox terisolasi per-tenant.
                  </li>
                  <li>
                    <strong>Informasi Transaksi:</strong> Data pembayaran diproses langsung oleh payment
                    gateway berlisensi Bank Indonesia (Midtrans). Kami tidak pernah menyimpan nomor kartu kredit penuh di server kami.
                  </li>
                  <li>
                    <strong>Audit Log & Metrik Performa:</strong> Riwayat eksekusi agen AI, timestamp, dan
                    status task untuk transparansi audit perusahaan Anda.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">3. Protokol Keamanan & Enkripsi Data</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
                      <Lock className="w-4 h-4" />
                      <span>Enkripsi In-Transit</span>
                    </div>
                    <p className="text-slate-400">
                      Seluruh transmisi lalu lintas jaringan dienkripsi menggunakan protokol TLS 1.3
                      dengan cipher suite terkini dan HSTS aktif.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                      <Shield className="w-4 h-4" />
                      <span>Enkripsi At-Rest</span>
                    </div>
                    <p className="text-slate-400">
                      Database, cache memori, dan storage terenkripsi menggunakan AES-256 bit dengan
                      rotasi kunci enkripsi berkala melalui HSM (Hardware Security Module).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">4. Hak Pengguna atas Data (Right to Erasure)</h4>
                <p className="text-xs text-slate-300 mb-2">
                  Sesuai Pasal 37–43 UU PDP, Anda memiliki hak penuh untuk:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-400 list-disc pl-5">
                  <li>Mengunduh salinan data dan riwayat komputasi Anda (Data Portability).</li>
                  <li>Menghapus seluruh riwayat memori agen dan repositori secara permanen dari server (Zero-Trace Deletion).</li>
                  <li>Mencabut akses webhook GitHub/GitLab kapan saja dengan 1 klik.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">5. Subprosesor Resmi</h4>
                <p className="text-xs text-slate-300 mb-2">
                  Kami hanya bermitra dengan penyedia infrastruktur bersertifikasi ISO 27001 dan SOC2:
                </p>
                <div className="text-xs text-slate-400 space-y-1">
                  <p>• <strong>Cloudflare Inc:</strong> Edge CDN, DDoS Shield, dan DNS Routing.</p>
                  <p>• <strong>Microsoft Azure / AWS:</strong> Komputasi aman dan infrastruktur LLM terisolasi.</p>
                  <p>• <strong>Midtrans (PT Midtrans):</strong> Gerbang pembayaran resmi berizin Bank Indonesia.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h4 className="text-white font-bold text-base mb-2">1. Ketentuan Umum & Penerimaan</h4>
                <p className="text-xs text-slate-300">
                  Dengan mendaftar, mengakses, atau menggunakan layanan {CONFIG.appName}, Anda
                  menyatakan telah membaca, memahami, dan menyetujui untuk terikat dengan Syarat dan
                  Ketentuan Layanan ("Perjanjian") ini antara Anda atau badan hukum yang Anda wakili
                  dengan {CONFIG.company}.
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">2. Hak Kekayaan Intelektual (IP Rights)</h4>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs">
                  <p className="text-slate-300">
                    <strong className="text-white">Kepemilikan Pelanggan:</strong> Anda mempertahankan
                    seluruh hak kepemilikan intelektual atas kode sumber asli, data masukan, serta seluruh
                    kode dan keluaran (*artifacts*) yang dihasilkan oleh Agen AI ID-Tech untuk repositori Anda.
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-white">Kepemilikan Platform:</strong> ID-Tech Cloud memiliki
                    hak cipta atas platform, antarmuka pengguna, model orkestrasi swarm, algoritma
                    penjadwalan, dan dokumentasi yang disediakan.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">3. Batasan Penggunaan yang Wajar (AUP)</h4>
                <p className="text-xs text-slate-300 mb-2">
                  Pengguna dilarang keras memanfaatkan Agen AI ID-Tech untuk:
                </p>
                <ul className="space-y-1.5 text-xs text-slate-400 list-disc pl-5">
                  <li>Mengembangkan atau menyebarkan malware, ransomware, botnet, atau eksploitasi siber destruktif.</li>
                  <li>Melakukan reverse-engineering atau ekstraksi model proprietary platform ID-Tech.</li>
                  <li>Aktivitas penipuan (phishing) atau tindakan yang melanggar hukum yurisdiksi Indonesia maupun internasional.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">4. Pembayaran, Faktur, & Pembatalan</h4>
                <ul className="space-y-2 text-xs text-slate-300 list-disc pl-5">
                  <li>Langganan ditagihkan di muka secara bulanan atau tahunan sesuai paket yang dipilih.</li>
                  <li>Faktur pajak resmi diterbitkan oleh {CONFIG.company} atas permintaan akun perusahaan.</li>
                  <li>Anda dapat membatalkan langganan kapan saja melalui menu Billing Console sebelum periode perpanjangan berikutnya.</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">5. Hukum yang Berlaku & Arbitrase</h4>
                <p className="text-xs text-slate-300">
                  Perjanjian ini diatur dan ditafsirkan berdasarkan hukum Negara Kesatuan Republik
                  Indonesia. Setiap sengketa yang timbul akan diselesaikan secara musyawarah mufakat,
                  atau melalui Badan Arbitrase Nasional Indonesia (BANI).
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: SLA */}
          {activeTab === 'sla' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-sm">Komitmen Uptime Layanan Bulanan</h4>
                  <p className="text-xs text-slate-400">Diperbarui setiap kuartal dengan audit transparan</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-cyan-400 font-mono">99.9%</span>
                  <p className="text-[10px] text-emerald-400 uppercase font-semibold">SLA Dijamin Kontrak</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-3">1. Matriks Tingkat Keparahan & Waktu Respons</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-800 rounded-xl overflow-hidden">
                    <thead className="bg-slate-950 text-slate-300 uppercase font-semibold text-[11px]">
                      <tr>
                        <th className="py-2.5 px-3 border-b border-slate-800">Tingkat Insiden</th>
                        <th className="py-2.5 px-3 border-b border-slate-800">Definisi</th>
                        <th className="py-2.5 px-3 border-b border-slate-800">Respon Pertama</th>
                        <th className="py-2.5 px-3 border-b border-slate-800">Target Resolusi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-300">
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-rose-400">P1 - Critical</td>
                        <td className="py-2.5 px-3">Layanan inti swarm lumpuh total, API tidak merespons</td>
                        <td className="py-2.5 px-3 font-mono text-white">&lt; 15 menit</td>
                        <td className="py-2.5 px-3 font-mono text-cyan-400">&lt; 2 jam</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-amber-400">P2 - Major</td>
                        <td className="py-2.5 px-3">Penurunan performa signifikan atau salah satu agen degradasi</td>
                        <td className="py-2.5 px-3 font-mono text-white">&lt; 1 jam</td>
                        <td className="py-2.5 px-3 font-mono text-cyan-400">&lt; 6 jam</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-blue-400">P3 - Minor</td>
                        <td className="py-2.5 px-3">Fitur non-kritis terganggu, alur utama tetap berjalan</td>
                        <td className="py-2.5 px-3 font-mono text-white">&lt; 4 jam</td>
                        <td className="py-2.5 px-3 font-mono text-cyan-400">&lt; 24 jam</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-slate-400">P4 - Low</td>
                        <td className="py-2.5 px-3">Pertanyaan teknis, panduan arsitektur, atau fitur baru</td>
                        <td className="py-2.5 px-3 font-mono text-white">&lt; 12 jam</td>
                        <td className="py-2.5 px-3 font-mono text-slate-400">Sesuai Rilis</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">2. Skema Kompensasi Layanan (Service Credit)</h4>
                <p className="text-xs text-slate-300 mb-2">
                  Jika uptime bulanan kami berada di bawah komitmen 99.9%, pelanggan berhak mengklaim
                  kredit tagihan berikut:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <span className="text-slate-400 block mb-1">99.0% - 99.89%</span>
                    <span className="text-lg font-bold text-cyan-400">10% Kredit</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <span className="text-slate-400 block mb-1">95.0% - 98.99%</span>
                    <span className="text-lg font-bold text-amber-400">25% Kredit</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center">
                    <span className="text-slate-400 block mb-1">&lt; 95.0%</span>
                    <span className="text-lg font-bold text-rose-400">50% Kredit</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold text-base mb-2">3. Pemeliharaan Terencana (Scheduled Maintenance)</h4>
                <p className="text-xs text-slate-300">
                  Peningkatan arsitektur berkala dilakukan pada jam beban terendah (Minggu pukul
                  01:00 - 04:00 WIB) dan diberitahukan minimal 48 jam sebelumnya melalui status portal
                  serta email notifikasi pelanggan.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer info & CTA */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-slate-500" />
            <span>Resmi Diterbitkan oleh Tim Legal {CONFIG.company}</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${CONFIG.contactEmail}?subject=Pertanyaan%20Legal%20ID-Tech`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Hubungi Tim Legal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
            >
              Tutup Dokumen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
