import { useState } from 'react';
import type { FC } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apa perbedaan ID-Tech Cloud dengan ChatGPT atau asisten AI biasa?',
      a: 'Chatbot biasa hanya merespons pertanyaan satu per satu secara pasif. ID-Tech Cloud adalah Sistem Operasi Swarm AI Otonom: agen-agen AI bekerja bersama secara mandiri (swarms), merancang solusi, mengeksekusi kode di sandbox terminal, melakukan query database, memeriksa keamanan, dan menghasilkan output nyata tanpa perlu Anda dampingi setiap saat.',
    },
    {
      q: 'Apakah saya membutuhkan kartu kredit untuk uji coba gratis 14 hari?',
      a: 'Sama sekali tidak. Anda cukup mendaftarkan nama, email bisnis, dan nama perusahaan. Anda langsung mendapatkan akses ke seluruh fitur dasar dengan kuota 50 task gratis selama 14 hari.',
    },
    {
      q: 'Bagaimana keamanan data dan kerahasiaan kode perusahaan saya?',
      a: 'Kami menjamin isolasi workspace ketat per-tenant. Data prompt dan kode sumber Anda tidak pernah disimpan untuk melatih model AI publik mana pun. Seluruh lalu lintas data dienkripsi dengan standar TLS 1.3 dan AES-256.',
    },
    {
      q: 'Model LLM apa saja yang didukung oleh platform ini?',
      a: 'Platform kami menggunakan arsitektur Hybrid Multi-LLM Gateway. Anda dapat memanfaatkan model frontier terkemuka seperti Claude 3.7 Sonnet, OpenAI GPT-4o, Google Gemini 2.5 Flash, hingga model open-source lokal via Ollama untuk kebutuhan on-premise.',
    },
    {
      q: 'Bisakah saya mengkustomisasi peran dan tools agen AI sesuai kebutuhan internal?',
      a: 'Tentu saja. Melalui console ID-Tech Cloud, Anda dapat membuat agen baru, menyematkan system prompt khusus, mengonfigurasi tools MCP (Model Context Protocol), serta menghubungkan webhook atau database internal Anda.',
    },
    {
      q: 'Bagaimana jika kuota task bulanan saya habis sebelum akhir periode?',
      a: 'Anda dapat melakukan upgrade paket seketika atau menambahkan kuota *task add-on* langsung dari dashboard penagihan (*Billing Console*) tanpa mengganggu proses pekerjaan tim agen yang sedang berjalan.',
    },
  ];

  return (
    <section id="faq" className="py-20 relative bg-slate-950/40 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Pusat Informasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-slate-400 text-base">
            Semua yang perlu Anda ketahui tentang implementasi Autonomous AI Workforce.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl glass-card border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-semibold text-white text-sm sm:text-base flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
