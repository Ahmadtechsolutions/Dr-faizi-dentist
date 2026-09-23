import React, { useState, useEffect } from 'react';
import { DOCTOR_DATA, INITIAL_REVIEWS, PatientReview, BeforeAfterCase } from './data/doctorData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConsultationModal } from './components/ConsultationModal';
import { ReviewModal } from './components/ReviewModal';
import { LightboxModal } from './components/LightboxModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RhinoplastyPage } from './pages/RhinoplastyPage';
import { ComplexRhinoplastyPage } from './pages/ComplexRhinoplastyPage';
import { RevisionRhinoplastyPage } from './pages/RevisionRhinoplastyPage';
import { FunctionalRhinoplastyPage } from './pages/FunctionalRhinoplastyPage';
import { FessPage } from './pages/FessPage';
import { BeforeAfterPage } from './pages/BeforeAfterPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Initialize path from window.location.pathname or fallback
  const getCleanPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace('#', '');
    if (hash && hash.startsWith('/')) return hash;
    const path = window.location.pathname;
    return path && path !== '' ? path : '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getCleanPath());
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('Primary Rhinoplasty');
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [lightboxCase, setLightboxCase] = useState<BeforeAfterCase | null>(null);
  const [reviewsList, setReviewsList] = useState<PatientReview[]>(INITIAL_REVIEWS);

  // Sync route on popstate
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCleanPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title for SEO on route change
  useEffect(() => {
    const titles: { [key: string]: string } = {
      '/': `${DOCTOR_DATA.brand} | ENT Surgeon & Rhinoplasty Specialist`,
      '/about': `About ${DOCTOR_DATA.name} | ENT Surgeon & Associate Professor`,
      '/rhinoplasty': `Primary Rhinoplasty | ${DOCTOR_DATA.brand}`,
      '/complex-rhinoplasty': `Complex Rhinoplasty | ${DOCTOR_DATA.brand}`,
      '/revision-rhinoplasty': `Revision Rhinoplasty | ${DOCTOR_DATA.brand}`,
      '/functional-rhinoplasty': `Functional Rhinoplasty & Airway | ${DOCTOR_DATA.brand}`,
      '/fess': `FESS Sinus Surgery | ${DOCTOR_DATA.brand}`,
      '/before-after': `Before & After Gallery | ${DOCTOR_DATA.brand}`,
      '/reviews': `Patient Reviews & Testimonials | ${DOCTOR_DATA.brand}`,
      '/faqs': `Rhinoplasty & FESS FAQs | ${DOCTOR_DATA.brand}`,
      '/contact': `Contact & Consultation | ${DOCTOR_DATA.brand}`,
    };

    document.title = titles[currentPath] || `${DOCTOR_DATA.brand} | ENT Surgeon & Rhinoplasty Specialist`;
  }, [currentPath]);

  // Clean navigation handler
  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', path);
      } catch (e) {
        // Fallback to hash if pushState fails in certain iframe sandboxes
        window.location.hash = path;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) setConsultationService(serviceTitle);
    setConsultationOpen(true);
  };

  const handleReviewSubmitted = (newReview: PatientReview) => {
    setReviewsList((prev) => [newReview, ...prev]);
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenLightbox={(caseItem) => setLightboxCase(caseItem)}
          />
        );
      case '/about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case '/rhinoplasty':
        return (
          <RhinoplastyPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case '/complex-rhinoplasty':
        return (
          <ComplexRhinoplastyPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case '/revision-rhinoplasty':
        return (
          <RevisionRhinoplastyPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case '/functional-rhinoplasty':
        return (
          <FunctionalRhinoplastyPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case '/fess':
        return (
          <FessPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        );
      case '/before-after':
        return (
          <BeforeAfterPage
            onOpenLightbox={(caseItem) => setLightboxCase(caseItem)}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case '/reviews':
        return (
          <ReviewsPage
            reviews={reviewsList}
            onOpenReviewModal={() => setReviewModalOpen(true)}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case '/faqs':
        return (
          <FaqsPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        );
      case '/contact':
        return <ContactPage />;
      default:
        // Fallback to home page if unrecognized
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenLightbox={(caseItem) => setLightboxCase(caseItem)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />

      {/* Modals & Dialogs */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        preselectedService={consultationService}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onReviewSubmitted={handleReviewSubmitted}
      />

      <LightboxModal
        caseData={lightboxCase}
        onClose={() => setLightboxCase(null)}
      />
    </div>
  );
}
