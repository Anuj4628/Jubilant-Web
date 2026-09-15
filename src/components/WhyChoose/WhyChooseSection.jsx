import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseData } from '../../data/homeSectionsData';
import { ShieldCheck, Globe, Award, Cpu, Headphones, Truck, ArrowRight } from 'lucide-react';
import './WhyChooseSection.css';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  ShieldCheck,
  Globe,
  Award,
  Cpu,
  Headphones,
  Truck
};

export default function WhyChooseSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
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

      // Cards progressive stagger entrance
      const cards = gridRef.current.querySelectorAll('.why-choose-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
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
    <section id="about" ref={sectionRef} className="why-choose-section" aria-label="Why Choose Us">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="why-choose-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">UNCOMPROMISING INDUSTRIAL EXCELLENCE</span>
          </div>

          <h2 className="section-display-heading">
            WHY <span className="text-highlight-red">CHOOSE US</span>
          </h2>

          <p className="section-description">
            Built on stringent metallurgy standards, verified quality inspection, and dependable global delivery.
          </p>
        </div>

        {/* 6 Distinctive Cards Grid */}
        <div ref={gridRef} className="why-choose-grid">
          {whyChooseData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.number}
                className={`why-choose-card ${idx === 0 || idx === 3 ? 'card-featured' : ''}`}
                tabIndex={0}
              >
                {/* Top Row: Large Industrial Number & Icon */}
                <div className="card-top-bar">
                  <span className="card-number" aria-hidden="true">{item.number}</span>
                  <div className="card-icon-bubble">
                    <Icon size={22} className="pillar-icon" />
                  </div>
                </div>

                {/* Animated Accent Line */}
                <div className="card-accent-track">
                  <div className="card-accent-bar" />
                </div>

                {/* Body Content */}
                <div className="card-body-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                </div>

                {/* Technical Micro-Detail Tag */}
                <div className="card-footer-spec">
                  <span className="spec-indicator-dot" />
                  <span className="spec-text">{item.badge}</span>
                  <ArrowRight size={14} className="card-arrow" />
                </div>

                {/* Decorative Subtle Corner Accent */}
                <span className="card-corner-corner" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
