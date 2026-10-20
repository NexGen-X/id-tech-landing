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

export function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');
  const [whitepaperOpen, setWhitepaperOpen] = useState(false);

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
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onOpenWhitepaper={handleOpenWhitepaper}
      />

      {/* Main Content Sections */}
      <main>
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

export default App;
