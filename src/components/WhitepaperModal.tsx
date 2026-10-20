import { useState } from 'react';
import type { FC } from 'react';
import {
  X,
  FileCode2,
  Cpu,
  Network,
  ShieldCheck,
  Zap,
  Layers,
  Copy,
  Check,
  BookOpen,
  Server
} from 'lucide-react';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhitepaperModal: FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!isOpen) return null;

  const handleCopyCitation = () => {
    const citation = `@techreport{idtech2026swarm,
  author = {ID-Tech Research and Engineering Team},
  title = {Autonomous Multi-Agent Swarms with AST Codebase Memory Graph and Resilient Multi-Provider Fallback for Enterprise Software Engineering},
  institution = {PT NexGen Digital Nusantara},
  year = {2026},
  url = {https://id-tech.cloud}
}`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col max-h-[92vh] overflow-hidden z-10">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 bg-slate-950/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Technical Architecture Whitepaper</h3>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Release v2.4
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Arsitektur Sistem & Spesifikasi Rekayasa Autonomous AI Workforce
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300 text-sm leading-relaxed">
          {/* Title & Metadata Banner */}
          <div className="border-b border-slate-800/80 pb-6">
            <span className="text-xs font-mono text-cyan-400 tracking-wide uppercase">
              Whitepaper Rekayasa Sistem ID-Tech Cloud
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1 leading-snug">
              Autonomous Swarm Multi-Agent Architecture with AST Codebase Memory Graph and Resilient Multi-Provider LLM Routing
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span><strong>Penulis:</strong> Tim Rekayasa & Arsitektur AI ID-Tech</span>
              <span>•</span>
              <span><strong>Klasifikasi:</strong> Enterprise Deep-Tech</span>
              <span>•</span>
              <span><strong>Penyedia Cloud:</strong> Microsoft Azure / Cloudflare / AWS</span>
            </div>
          </div>

          {/* Section 1: Executive Abstract */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>1. Ringkasan Eksekutif (Abstract)</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Asisten AI konvensional (autocomplete satu arah) gagal menangani kompleksitas kode
              enterprise berskala jutaan baris karena keterbatasan <em>context window</em>, ketidakmampuan
              memahami dependensi antar-berkas, dan ketiadaan verifikasi mandiri. <strong>ID-Tech Cloud</strong> memperkenalkan
              paradigma <em>Autonomous Swarm Workforce</em> yang mengorkestrasi agen-agen AI spesialis yang
              berkolaborasi secara sinkron untuk mereview, memvalidasi keamanan, mendiagnosis SRE, dan
              memperbaiki bug secara mandiri dengan tingkat akurasi deterministik.
            </p>
          </div>

          {/* Section 2: Visual System Architecture */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <Network className="w-4 h-4 text-blue-400" />
              <span>2. Diagram Topologi Arsitektur 4-Lapis</span>
            </h4>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto leading-loose">
              <div className="text-cyan-400 font-bold mb-2">
                ┌────────────────────────────────────────────────────────────────────────┐
                │             [ LAYER 1: INGESTION & DEVELOPER ECOSYSTEM ]               │
                │   GitHub Webhooks  •  GitLab CI/CD  •  REST/gRPC API  •  Web Console   │
                └───────────────────────────────────┬────────────────────────────────────┘
                                                    │ TLS 1.3 (Signed Payload)
                ┌───────────────────────────────────▼────────────────────────────────────┐
                │          [ LAYER 2: AST CODEBASE MEMORY GRAPH ENGINE ]                 │
                │  Tree-sitter Parsing  ──►  Symbol Dependency Graph  ──►  Vector Store  │
                │  (Deep Cross-file Semantic Linkages & Impact Radius Calculation)      │
                └───────────────────────────────────┬────────────────────────────────────┘
                                                    │
                ┌───────────────────────────────────▼────────────────────────────────────┐
                │            [ LAYER 3: COGNITIVE MULTI-AGENT SWARM ]                    │
                │  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌──────────┐│
                │  │ Arch Strategist│ │ Code Reviewer  │ │ Security Audit │ │ SRE Agent││
                │  └───────┬────────┘ └───────┬────────┘ └───────┬────────┘ └────┬─────┘│
                │          └──────────────────┼──────────────────┘               │      │
                │              Autonomous Peer Review & Consensus                │      │
                └───────────────────────────────────┬────────────────────────────┼──────┘
                                                    │                            │
                ┌───────────────────────────────────▼────────────────────────────▼──────┐
                │    [ LAYER 4: MULTI-PROVIDER LLM ROUTER & ISOLATED SANDBOX ]           │
                │  • Microsoft Azure OpenAI (GPT-4o) ──► Primary High-Reasoning         │
                │  • Anthropic Claude 3.5 Sonnet     ──► Code Synthesizer Failover      │
                │  • Ultra-Fast Open Weights (Groq)  ──► Real-Time Linter (&lt;200ms)    │
                │  • gVisor Ephemeral MicroVM        ──► Zero-Trust Safe Execution      │
                └───────────────────────────────────────────────────────────────────────┘
              </div>
            </div>
          </div>

          {/* Section 3: Deep-Tech Pillars */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>3. Keunggulan Teknologi Proprietary (Tech Moat)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <FileCode2 className="w-4 h-4" />
                  <span>AST Codebase Memory Graph</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Bukan hanya sekadar RAG teks biasa. ID-Tech membedah kode menjadi Abstract Syntax
                  Trees (AST) untuk melacak relasi fungsi, hierarki kelas, dan tipe data lintas berkas.
                  Agen memahami efek domino perubahan kode hingga radius 10 repositori terhubung.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>Dynamic Multi-Model Failover Router</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Menjamin ketersediaan 99.9%. Ketika satu provider LLM mengalami lonjakan latensi atau
                  rate limit, router mendeteksi anomali dalam 50ms dan langsung mengalihkan komputasi
                  ke model sekunder tanpa membatalkan proses review engineer.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero-Trust Ephemeral MicroVM</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Setiap task kompilasi atau automated test dijalankan dalam kontainer ephemeral mikro
                  yang musnah seketika setelah task tuntas. Mencegah eksfiltrasi data antar pelanggan
                  dengan isolasi tingkat kernel.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold">
                  <Server className="w-4 h-4" />
                  <span>Autonomous SRE & Auto-Remediation</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Menganalisis log produksi, query database lambat, dan memori leak. Agen SRE mampu
                  membuat usulan PR perbaikan indeks SQL dan parameter caching yang siap dimerge oleh
                  Lead Engineer.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Benchmarks */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>4. Hasil Uji Performa & Benchmarks Produksi</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-2xl font-black text-cyan-400 font-mono">65%</span>
                <span className="block text-[11px] text-slate-400 mt-1">Pangkas Cycle Time PR</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-2xl font-black text-emerald-400 font-mono">&lt; 200ms</span>
                <span className="block text-[11px] text-slate-400 mt-1">Failover Latency</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-2xl font-black text-indigo-400 font-mono">0</span>
                <span className="block text-[11px] text-slate-400 mt-1">Data Leak / Regression</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-2xl font-black text-amber-400 font-mono">99.4%</span>
                <span className="block text-[11px] text-slate-400 mt-1">Verified CSAT</span>
              </div>
            </div>
          </div>

          {/* Section 5: Citation Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 uppercase">
                Sitasi Ilmiah & Teknis (BibTeX)
              </span>
              <button
                onClick={handleCopyCitation}
                className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {copiedCitation ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin BibTeX</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-[11px] font-mono text-slate-400 overflow-x-auto p-2 bg-slate-900/80 rounded-lg">
{`@techreport{idtech2026swarm,
  author = {ID-Tech Research and Engineering Team},
  title = {Autonomous Multi-Agent Swarms with AST Codebase Memory Graph and Resilient Multi-Provider Fallback for Enterprise Software Engineering},
  institution = {PT NexGen Digital Nusantara},
  year = {2026},
  url = {https://id-tech.cloud}
}`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            <span>Diterbitkan oleh PT NexGen Digital Nusantara • ID-Tech Cloud Engineering</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyCitation}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors flex items-center gap-1.5"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Salin Sitasi</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
            >
              Tutup Whitepaper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
