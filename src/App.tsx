/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CookieBanner from './components/CookieBanner';
import LegalModal from './components/LegalModal';
import VirtualAssistant from './components/VirtualAssistant';

const Categories = lazy(() => import('./components/Categories'));
const About = lazy(() => import('./components/About'));
const Features = lazy(() => import('./components/Features'));
const VisitStore = lazy(() => import('./components/VisitStore'));
const ContactCTA = lazy(() => import('./components/ContactCTA'));
const Location = lazy(() => import('./components/Location'));

export default function App() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | 'cookies' }>({
    isOpen: false,
    type: 'privacy'
  });

  const openLegal = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalModal({ isOpen: true, type });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-green selection:text-white">
      <header className="fixed top-0 w-full z-50">
        <AnnouncementBar />
        <Navbar />
      </header>
      <main>
        <Hero />
        <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div></div>}>
          <Categories />
          <About />
          <Features />
          <VisitStore />
          <ContactCTA />
          <Location />
        </Suspense>
      </main>
      <Footer onOpenLegal={openLegal} />
      
      <VirtualAssistant />
      <CookieBanner />
      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={() => setLegalModal({ ...legalModal, isOpen: false })} 
        type={legalModal.type} 
      />
    </div>
  );
}
