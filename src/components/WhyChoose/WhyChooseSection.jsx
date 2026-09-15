import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { whyChooseData } from '../../data/homeSectionsData';
import { ShieldCheck, Globe, Award, Settings, Headphones, Truck, ArrowRight } from 'lucide-react';
import './WhyChooseSection.css';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  ShieldCheck,
  Globe,
  Award,
  Cpu: Settings,
  Settings,
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

      // Cards progressive stagger entrance with subtle 3D depth
      const cards = gridRef.current.querySelectorAll('.why-choose-card');
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
            Engineered around stringent international metallurgy codes, certified third-party testing, and dependable global project delivery.
          </p>
        </div>

        {/* 3x2 Alternating Dark/Light Checkerboard Grid */}
        <div ref={gridRef} className="why-choose-grid">
          {whyChooseData.map((item, idx) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            // Checkerboard: Row 1 (0: Dark, 1: Light, 2: Dark), Row 2 (3: Light, 4: Dark, 5: Light)
            const isDark = idx % 2 === 0;

            return (
              <div
                key={item.number}
                className={`why-choose-card ${isDark ? 'card-theme-dark' : 'card-theme-light'}`}
                tabIndex={0}
              >
                {/* Top Row: Pill Badge on Left, Icon Container on Right */}
                <div className="card-top-row">
                  <div className="card-criterion-pill">
                    <span className="criterion-dot" />
                    <span className="criterion-text">CRITERION // {item.number}</span>
                  </div>

                  <div className="card-icon-frame">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Red Accent Line below Pill */}
                <div className="card-red-accent-line" />

                {/* Title & Description */}
                <h3 className="card-main-title">{item.title}</h3>
                <p className="card-main-desc">{item.description}</p>

                {/* Bottom Row: Spec Pill on Left, Red Circle Arrow on Right */}
                <div className="card-bottom-row">
                  <div className="card-spec-pill">
                    <span className="spec-dot" />
                    <span className="spec-label">{item.badge}</span>
                  </div>

                  <div className="card-action-circle" aria-label="Learn more">
                    <ArrowRight size={18} strokeWidth={2.4} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
