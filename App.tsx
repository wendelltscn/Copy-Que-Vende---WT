
import React from 'react';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import PromiseSection from './components/PromiseSection';
import LearningSection from './components/LearningSection';
import AuthorSection from './components/AuthorSection';
import ValueSection from './components/ValueSection';
import ObjectionSection from './components/ObjectionSection';
import ProofSection from './components/ProofSection';
import OfferSection from './components/OfferSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark overflow-x-hidden">
      <main>
        <HeroSection />
        <PainSection />
        <PromiseSection />
        <LearningSection />
        <AuthorSection />
        <ValueSection />
        <ObjectionSection />
        <ProofSection />
        <OfferSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
