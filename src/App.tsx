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

export function App() {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>();

  const handleOpenRegister = (planId?: string) => {
    setSelectedPlanId(planId);
    setRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setRegisterModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar onOpenRegister={() => handleOpenRegister()} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenRegister={() => handleOpenRegister()} />
        <Features />
        <AgentSwarmShowcase onOpenRegister={() => handleOpenRegister()} />
        <RoiCalculator onOpenRegister={() => handleOpenRegister()} />
        <Pricing onOpenRegister={handleOpenRegister} />
        <CustomerReviews />
        <SecurityArchitecture />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Registration / Customer Onboarding Modal */}
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={handleCloseRegister}
        selectedPlanId={selectedPlanId}
      />
    </div>
  );
}

export default App;
