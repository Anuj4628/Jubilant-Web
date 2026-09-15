import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { valueAddedData } from '../../data/homeSectionsData';
import { CheckCircle2, FileCheck, Layers, PackageCheck, Ship, Sliders, ShieldAlert, ArrowRight } from 'lucide-react';
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

const serviceSpecs = {
  "material-sourcing": "PRIMARY MILL AUDITED",
  "quality-inspection": "DNV • TUV • LLOYDS TPI",
  "testing-documentation": "EN 10204 3.1 & 3.2 MTR",
  "custom-requirements": "PRECISION PROFILING",
  "project-supply": "TURNKEY EPC PACKAGES",
  "export-packaging": "ISPM-15 FUMIGATED",
  "logistics-support": "MULTI-MODAL FREIGHT"
};

export default function ValueAddedSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Cards staggered reveal with subtle 3D depth
      const cards = gridRef.current.querySelectorAll('.value-service-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.96, rotateX: 5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
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
        {/* Standardized Section Header */}
        <div ref={headerRef} className="value-added-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">BEYOND BASIC MATERIAL SUPPLY</span>
          </div>

          <h2 className="section-display-heading">
            VALUE ADDED <span className="text-highlight-red">SERVICES</span>
          </h2>

          <p className="section-description">
            End-to-end metallurgical solutions supporting complex engineering procurement, mill-certified third-party inspection, and synchronized project dispatch.
          </p>
        </div>

        {/* Alternating Dark/Light Cards Grid */}
        <div ref={gridRef} className="value-services-grid">
          {valueAddedData.map((service, idx) => {
            const Icon = serviceIcons[service.id] || CheckCircle2;
            const specBadge = serviceSpecs[service.id] || "CERTIFIED METALLURGY";
            // Alternating checkerboard theme
            const isDark = idx % 2 === 0;

            return (
              <div
                key={service.id}
                className={`value-service-card ${isDark ? 'card-theme-dark' : 'card-theme-light'}`}
                tabIndex={0}
              >
                {/* Top Row: Pill Badge on Left, Icon on Right */}
                <div className="card-top-row">
                  <div className="card-criterion-pill">
                    <span className="criterion-dot" />
                    <span className="criterion-text">SERVICE // {service.number}</span>
                  </div>

                  <div className="card-icon-frame">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Red Accent Line */}
                <div className="card-red-accent-line" />

                {/* Title & Description */}
                <h3 className="card-main-title">{service.title}</h3>
                <p className="card-main-desc">{service.description}</p>

                {/* Bottom Row: Spec Pill on Left, Red Circle Arrow on Right */}
                <div className="card-bottom-row">
                  <div className="card-spec-pill">
                    <span className="spec-dot" />
                    <span className="spec-label">{specBadge}</span>
                  </div>

                  <a href="#quote" className="card-action-circle" aria-label={`Inquire about ${service.title}`}>
                    <ArrowRight size={18} strokeWidth={2.4} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
