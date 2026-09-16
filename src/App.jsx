import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutSection from './components/About/AboutSection';
import MaterialsSection from './components/Materials/MaterialsSection';
import ProductsSection from './components/Products/ProductsSection';
import WhyChooseSection from './components/WhyChoose/WhyChooseSection';
import IndustriesSection from './components/Industries/IndustriesSection';
import ValueAddedSection from './components/ValueAdded/ValueAddedSection';
import ClientNetworkSection from './components/Clients/ClientNetworkSection';
import GlobalExportSection from './components/Export/GlobalExportSection';
import FinalCTASection from './components/CTA/FinalCTASection';
import Footer from './components/Footer/Footer';
import FloatingContactButtons from './components/UI/FloatingContactButtons';
import './App.css';

/**
 * Jubilant Steels - Application Root
 * Dedicated multi-route structure:
 * - Home (/) : Full commercial homepage (Hero, Materials, Products, Sectors, Services, Clients, Export, CTA)
 * - About (/about or /about.html) : Dedicated cinematic 9-phase company storytelling experience
 */
export default function App() {
  // Determine initial page from URL pathname or hash
  const getInitialPage = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('about') || hash === '#about') {
      return 'about';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Centralized page and section navigation handler
  const navigateTo = useCallback((targetPage, sectionId = null) => {
    if (targetPage === 'about') {
      if (window.location.pathname !== '/about') {
        window.history.pushState({ page: 'about' }, '', '/about');
      }
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // Navigate to Home
      const targetUrl = sectionId ? `/#${sectionId}` : '/';
      if (window.location.pathname !== '/' || sectionId) {
        window.history.pushState({ page: 'home', section: sectionId }, '', targetUrl);
      }
      setCurrentPage('home');

      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, []);

  // Listen to browser Back and Forward navigation buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('about') || hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentPage('home');
        if (hash) {
          setTimeout(() => {
            const el = document.getElementById(hash.replace('#', ''));
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 80);
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="app-container">
      {/* 1. Global Navbar with integrated page navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* 2. Page Switcher: Independent, cleanly isolated DOM & lifecycle */}
      {currentPage === 'about' ? (
        /* Dedicated Independent About Page */
        <main id="main-content" className="about-page-main">
          <AboutSection onNavigate={navigateTo} />
        </main>
      ) : (
        /* Full Commercial Home Page (About is NEVER loaded here) */
        <main id="main-content" className="home-page-main">
          <Hero />
          <MaterialsSection />
          <ProductsSection />
          <WhyChooseSection />
          <IndustriesSection />
          <ValueAddedSection />
          <ClientNetworkSection />
          <GlobalExportSection />
          <FinalCTASection />
        </main>
      )}

      {/* 3. Corporate Footer */}
      <Footer currentPage={currentPage} onNavigate={navigateTo} />

      {/* 4. Floating Direct Contact Buttons (WhatsApp & Direct Call) */}
      <FloatingContactButtons />
    </div>
  );
}

