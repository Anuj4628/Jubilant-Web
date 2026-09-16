import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
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
 * Complete high-end international steel manufacturer & exporter homepage
 */
export default function App() {
  return (
    <div className="app-container">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <main id="main-content">
        <Hero />

        {/* 3. Section 01: Materials We Work With (Dual Continuous Marquees) */}
        <MaterialsSection />

        {/* 4. Section 02: Our Products (13 Industrial Products with Category Tabs) */}
        <ProductsSection />

        {/* 5. Section 03: Why Choose Us (6 Distinctive Industrial Cards) */}
        <WhyChooseSection />

        {/* 6. Section 04: Application Industries (10 Mission-Critical Sectors) */}
        <IndustriesSection />

        {/* 7. Section 05: Value Added Services (Asymmetric Technical Capability Showcase) */}
        <ValueAddedSection />

        {/* 8. Section 06: Client Network (Continuous Partner Marquee & Trust Strip) */}
        <ClientNetworkSection />

        {/* 9. Section 07: Countries We Export To (Global Supply Map & Regional Hubs) */}
        <GlobalExportSection />

        {/* 10. Section 08: Final Call to Action */}
        <FinalCTASection />
      </main>

      {/* 11. Corporate Footer */}
      <Footer />

      {/* 12. Floating Direct Contact Buttons (WhatsApp & Call) */}
      <FloatingContactButtons />
    </div>
  );
}

