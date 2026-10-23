import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AgentSwarmShowcase } from './components/AgentSwarmShowcase';
import { RoiCalculator } from './components/RoiCalculator';
import { Pricing } from './components/Pricing';
import { CustomerReviews } from './components/CustomerReviews';
import { SecurityArchitecture } from './components/SecurityArchitecture';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { RegisterModal } from './components/RegisterModal';
import { LegalModal } from './components/LegalModal';
import type { LegalTab } from './components/LegalModal';
import { WhitepaperModal } from './components/WhitepaperModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useResponsive } from './hooks/useResponsive';
import { Sparkles, Terminal, Layers, Tag, ExternalLink } from 'lucide-react';
import { CONFIG } from './config';

function LandingContent() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

  const { isMobile } = useResponsive();
  const { accent } = useTheme();

  const handleOpenRegister = (planId?: string) => {
    setSelectedPlanId(planId);
    setRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setRegisterModalOpen(false);
  };

  const handleOpenLegal = (tab: LegalTab = 'privacy') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  const handleOpenWhitepaper = () => {
    setWhitepaperOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#000000] text-neutral-100 selection:bg-neutral-800 selection:text-white relative">
      {/* Vercel / Railway Pitch-Black Charcoal Dot Matrix Background (Contained strictly to viewport) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-[size:1.75rem_1.75rem] opacity-80" />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(60rem,100vw)] h-[20rem] rounded-full blur-3xl opacity-25" 
          style={{ background: `radial-gradient(ellipse at top, ${accent.hex}40, transparent 70%)` }}
        />
      </div>

      {/* Top Fixed Navbar */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenWhitepaper={handleOpenWhitepaper}
      />

      {/* Main Content Sections */}
      <main className={isMobile ? 'pb-24' : ''}>
        <Hero onOpenRegister={() => handleOpenRegister()} />
        <Features />
        <AgentSwarmShowcase onOpenRegister={() => handleOpenRegister()} />
        <RoiCalculator onOpenRegister={() => handleOpenRegister()} />
        <Pricing onOpenRegister={handleOpenRegister} />
        <CustomerReviews />
        <SecurityArchitecture
          onOpenLegal={handleOpenLegal}
          onOpenWhitepaper={handleOpenWhitepaper}
        />
        <Faq />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={handleOpenLegal}
        onOpenWhitepaper={handleOpenWhitepaper}
      />

      {/* Mobile Adaptive Docked Bottom Bar */}
      {isMobile && (
        <aside 
          aria-label="Navigasi Cepat Mobile"
          className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 dark:bg-slate-950/95 border-t border-slate-800 backdrop-blur-2xl px-2 py-1.5 flex items-center justify-around shadow-2xl safe-bottom transition-all duration-300"
        >
          <a
            href="#fitur"
            className="flex flex-col items-center justify-center py-1 px-2 text-[10px] font-medium text-slate-300 hover:text-white"
          >
            <Layers className="w-4 h-4 mb-0.5 text-blue-400" />
            <span>Fitur</span>
          </a>

          <a
            href="#swarm"
            className="flex flex-col items-center justify-center py-1 px-2 text-[10px] font-medium text-slate-300 hover:text-white"
          >
            <Terminal className="w-4 h-4 mb-0.5 text-cyan-400" />
            <span>Swarm</span>
          </a>

          <a
            href="#harga"
            className="flex flex-col items-center justify-center py-1 px-2 text-[10px] font-medium text-slate-300 hover:text-white"
          >
            <Tag className="w-4 h-4 mb-0.5 text-emerald-400" />
            <span>Harga</span>
          </a>

          <a
            href={CONFIG.appConsoleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 px-2 text-[10px] font-medium text-slate-300 hover:text-white"
          >
            <ExternalLink className="w-4 h-4 mb-0.5 text-purple-400" />
            <span>Console</span>
          </a>

          <button
            onClick={() => handleOpenRegister()}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold text-white shadow-md active:scale-95 transition-all"
            style={{ backgroundColor: accent.hex }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Coba Gratis</span>
          </button>
        </aside>
      )}

      {/* Interactive Registration / Customer Onboarding Modal */}
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={handleCloseRegister}
        selectedPlanId={selectedPlanId}
      />

      {/* Enterprise Legal & Compliance Modal (Privacy, ToS, SLA) */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        initialTab={legalTab}
      />

      {/* Technical Architecture Whitepaper Modal */}
      <WhitepaperModal
        isOpen={whitepaperOpen}
        onClose={() => setWhitepaperOpen(false)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LandingContent />
    </ThemeProvider>
  );
}

export default App;
