import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { valueAddedData } from '../../data/homeSectionsData';
import { CheckCircle2, ChevronRight, FileCheck, Layers, PackageCheck, Ship, Sliders, ShieldAlert } from 'lucide-react';
import './ValueAddedSection.css';

gsap.registerPlugin(ScrollTrigger);

const serviceIcons = {
  "material-sourcing": Layers,
  "quality-inspection": ShieldAlert,
  "testing-documentation": FileCheck,
  "custom-requirements": Sliders,
  "project-supply": CheckCircle2,
  "export-packaging": PackageCheck,
  "logistics-support": Ship
};

export default function ValueAddedSection() {
  const [activeServiceId, setActiveServiceId] = useState(valueAddedData[0].id);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const showcaseRef = useRef(null);

  const activeService = valueAddedData.find(s => s.id === activeServiceId) || valueAddedData[0];
  const ActiveIcon = serviceIcons[activeService.id] || CheckCircle2;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Showcase reveal
      gsap.fromTo(
        showcaseRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: 'top 84%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="value-added-section" aria-label="Value Added Services">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="value-added-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">BEYOND BASIC MATERIAL SUPPLY</span>
          </div>

          <h2 className="section-display-heading">
            VALUE ADDED <span className="text-highlight-red">SERVICES</span>
          </h2>

          <p className="section-description">
            End-to-end technical capabilities supporting complex procurement, project staging, and third-party inspection.
          </p>
        </div>

        {/* Asymmetric Technical Showcase Layout */}
        <div ref={showcaseRef} className="services-showcase-container">
          {/* Left Column: Interactive Service Navigation List */}
          <div className="services-nav-list" role="tablist" aria-label="Value added service list">
            {valueAddedData.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  className={`service-nav-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveServiceId(service.id)}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                >
                  <span className="service-nav-num">{service.number}</span>
                  <div className="service-nav-label-wrap">
                    <span className="service-nav-title">{service.title}</span>
                    <span className="service-nav-tagline">{service.tagline}</span>
                  </div>
                  <ChevronRight size={16} className="service-nav-chevron" />
                  <span className="service-nav-indicator" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep-Dive Feature Panel */}
          <div className="services-feature-panel">
            <div className="panel-accent-top" />
            
            <div className="panel-inner-content">
              <div className="panel-header-badge">
                <div className="panel-icon-wrap">
                  <ActiveIcon size={28} className="panel-icon" />
                </div>
                <div className="panel-meta-text">
                  <span className="panel-step-tag">SERVICE {activeService.number} // CAPABILITY</span>
                  <span className="panel-highlight-tag">{activeService.highlight}</span>
                </div>
              </div>

              <h3 className="panel-title">{activeService.title}</h3>
              <p className="panel-desc">{activeService.description}</p>

              {/* Technical Specifications Highlights Grid */}
              <div className="panel-specs-grid">
                <div className="panel-spec-card">
                  <span className="spec-label">DOCUMENTATION</span>
                  <span className="spec-val">EN 10204 3.1 & 3.2</span>
                </div>
                <div className="panel-spec-card">
                  <span className="spec-label">INSPECTION AGENCIES</span>
                  <span className="spec-val">DNV • TUV • LLOYDS</span>
                </div>
                <div className="panel-spec-card">
                  <span className="spec-label">PACKAGING SPEC</span>
                  <span className="spec-val">ISPM-15 SEAWORTHY</span>
                </div>
                <div className="panel-spec-card">
                  <span className="spec-label">SUPPLY LEAD TIME</span>
                  <span className="spec-val">RAPID STAGED DISPATCH</span>
                </div>
              </div>

              {/* Bottom Quote Direct Action */}
              <div className="panel-bottom-action">
                <span className="panel-help-text">Have special testing or custom fabrication requirements?</span>
                <a href="#quote" className="panel-action-btn">
                  Consult With Our Engineers <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Subtle Industrial Watermark */}
            <span className="panel-watermark" aria-hidden="true">
              {activeService.number}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
