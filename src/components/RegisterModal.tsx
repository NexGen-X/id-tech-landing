import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { X, Sparkles, CheckCircle2, AlertCircle, ArrowRight, Loader2, Lock, Building, Mail, User } from 'lucide-react';
import type { RegisterFormData } from '../types';
import { CONFIG } from '../config';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
}

export const RegisterModal: FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  selectedPlanId,
}) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    workspaceName: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    token: string;
    workspaceName: string;
    email: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError('Mohon lengkapi seluruh field formulir.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password minimal harus 6 karakter.');
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      workspaceName: formData.workspaceName.trim() || `${formData.name.trim()}'s Workspace`,
    };

    setLoading(true);

    try {
      const response = await fetch(`${CONFIG.apiUrl}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message ||
            (response.status === 409
              ? 'Email ini sudah terdaftar. Silakan login ke console.'
              : 'Gagal melakukan pendaftaran. Silakan coba sesaat lagi.')
        );
      }

      // Success
      setSuccessData({
        token: data.token,
        workspaceName: data.workspace?.name || payload.workspaceName,
        email: payload.email,
      });
    } catch (err: any) {
      setError(err.message || 'Terjadi gangguan jaringan saat menghubungi server AI Center.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoToConsole = () => {
    if (successData?.token) {
      // Set token to localStorage under standard key or redirect with auth parameter
      window.location.href = `${CONFIG.appConsoleUrl}/?auth_token=${encodeURIComponent(
        successData.token
      )}`;
    } else {
      window.location.href = CONFIG.appConsoleUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl glass-panel border border-slate-700 p-6 sm:p-8 shadow-2xl bg-slate-950/95 overflow-hidden">
        {/* Glowing top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!successData ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {selectedPlanId ? `Daftar untuk Paket: ${selectedPlanId}` : 'Mulai 14-Day Free Trial'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Buat Akun Perusahaan Anda
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Dapatkan 50 tasks kuota otomatis & dedicated workspace tanpa kartu kredit.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nama Lengkap Operator
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Email Bisnis / Kantor
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="nama@perusahaan.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nama Perusahaan / Workspace
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Contoh: PT Sinergi Digital"
                    value={formData.workspaceName}
                    onChange={(e) => setFormData({ ...formData, workspaceName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Password Akun
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    placeholder="Minimal 6 karakter"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Mendaftarkan Workspace Anda...</span>
                    </>
                  ) : (
                    <>
                      <span>Buat Akun & Mulai Sekarang</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-5 text-center text-xs text-slate-400">
              Sudah memiliki akun?{' '}
              <a
                href={CONFIG.appConsoleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-semibold"
              >
                Masuk langsung ke Console
              </a>
            </div>
          </div>
        ) : (
          /* Registration Success Screen */
          <div className="text-center py-6 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Akun Berhasil Dibuat!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto">
                Workspace <strong className="text-blue-400 font-semibold">{successData.workspaceName}</strong> telah
                aktif dengan kuota <strong className="text-emerald-400 font-semibold">50 Tasks Free Trial</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">Operator Email:</span>
                <span className="text-white">{successData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Workspace Status:</span>
                <span className="text-emerald-400 font-bold">READY (Active)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Quota Limit:</span>
                <span className="text-blue-400">50 Tasks / 14 Days</span>
              </div>
            </div>

            <button
              onClick={handleGoToConsole}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 shadow-xl shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Buka AI Console Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
