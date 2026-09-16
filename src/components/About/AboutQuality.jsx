import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutQualityPrinciples } from '../../data/aboutData';
import {
  Crosshair,
  Gauge,
  FileCheck,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ChevronUp,
  Sparkles
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const principleIcons = {
  precision: Crosshair,
  consistency: Gauge,
  traceability: FileCheck,
  reliability: ShieldCheck,
  excellence: Cpu
};

export default function AboutQuality() {
  const containerRef = useRef(null);
  const dialRef = useRef(null);
  const dialInnerRef = useRef(null);
  const principlesRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeCardId, setActiveCardId] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Scrub timeline for the precision engineering assembly
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 25%',
          scrub: 0.9
        }
      });

      // 1. Central Circular Caliper Dial rotates & locks into 0 deg
      if (dialRef.current) {
        tl.fromTo(
          dialRef.current,
          { rotate: -140, scale: 0.8, opacity: 0.3 },
          { rotate: 0, scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' },
          0
        );
      }

      if (dialInnerRef.current) {
        tl.fromTo(
          dialInnerRef.current,
          { rotate: 180, strokeDashoffset: 400 },
          { rotate: 0, strokeDashoffset: 0, duration: 1.8, ease: 'power2.out' },
          0.1
        );
      }

      // 2. The 5 Principles physically assemble from alternating offset directions
      const cards = principlesRef.current?.querySelectorAll('.quality-principle-card');
      if (cards) {
        cards.forEach((card, index) => {
          const isEven = index % 2 === 0;
          tl.fromTo(
            card,
            {
              x: isEven ? -30 : 30,
              y: 35,
              opacity: 0,
              scale: 0.96
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out'
            },
            0.2 + index * 0.12
          );
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  // Subtle 3D tilt interaction for mouse hover
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Extremely controlled subtle 1.5 - 2.5 deg tilt
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.25,
      ease: 'power1.out',
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.45,
      ease: 'power2.out'
    });
  };

  const handleCardToggle = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div ref={containerRef} className="about-quality-phase">
      <div className="about-quality-container">
        {/* Header */}
        <div className="quality-header">
          <div className="quality-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">METALLURGICAL RIGOR & ZERO DEFECTS</span>
          </div>
          <h3 className="quality-heading">
            Our Quality <span className="highlight-red">Promise</span>
          </h3>
          <p className="quality-subhead">
            Engineered compliance across high-stress environments. Calibrated to international ASTM, ASME, DIN, and ISO specifications.
          </p>
        </div>

        {/* Central Precision Calibration Gauge Bar */}
        <div className="quality-dial-header-zone" aria-hidden="true">
          <div className="quality-dial-wrapper">
            <div ref={dialRef} className="quality-dial-frame">
              <svg className="dial-svg" viewBox="0 0 320 320" fill="none">
                {/* Outer Calibrated Ring */}
                <circle
                  cx="160"
                  cy="160"
                  r="140"
                  stroke="rgba(211, 18, 42, 0.2)"
                  strokeWidth="2"
                  strokeDasharray="4 8"
                />
                {/* Inner Rotating Gauge Track */}
                <circle
                  ref={dialInnerRef}
                  cx="160"
                  cy="160"
                  r="110"
                  stroke="var(--color-red, #D3122A)"
                  strokeWidth="3"
                  strokeDasharray="400"
                  strokeLinecap="round"
                />
                {/* Technical Ticks */}
                <circle cx="160" cy="160" r="80" stroke="rgba(15, 23, 42, 0.12)" strokeWidth="1" />
                <line x1="160" y1="20" x2="160" y2="40" stroke="var(--color-red)" strokeWidth="2" />
                <line x1="160" y1="280" x2="160" y2="300" stroke="var(--color-red)" strokeWidth="2" />
                <line x1="20" y1="160" x2="40" y2="160" stroke="var(--color-red)" strokeWidth="2" />
                <line x1="280" y1="160" x2="300" y2="160" stroke="var(--color-red)" strokeWidth="2" />
              </svg>

              <div className="dial-center-core">
                <span className="dial-core-num">0.00</span>
                <span className="dial-core-label">TOLERANCE // MM</span>
                <span className="dial-core-status">CALIBRATED & VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Completely Redesigned Quality Promise Cards */}
        <div ref={principlesRef} className="quality-principles-grid" role="region" aria-label="Quality Promise Cards">
          {aboutQualityPrinciples.map((principle, index) => {
            const IconComp = principleIcons[principle.id] || ShieldCheck;
            const isActive = activeCardId === principle.id;

            return (
              <div
                key={principle.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`quality-principle-card ${isActive ? 'is-active' : ''}`}
                tabIndex={0}
                role="article"
                aria-label={`${principle.title}: ${principle.subtitle}`}
                onClick={() => handleCardToggle(principle.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardToggle(principle.id);
                  }
                }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Laser Corner Registration Accents */}
                <div className="card-laser-corner corner-tl" aria-hidden="true" />
                <div className="card-laser-corner corner-tr" aria-hidden="true" />

                {/* Upper Card Body (Default & Elevated State) */}
                <div className="card-upper-body">
                  {/* Top Metadata Header */}
                  <div className="card-meta-row">
                    <span className="card-spec-code">SPEC // {principle.number}</span>
                    <span className="card-tag-pill">{principle.tag}</span>
                  </div>

                  {/* Central Large Technical Visual Stage */}
                  <div className="principle-icon-stage" aria-hidden="true">
                    <div className="icon-reticle-ring" />
                    <div className="icon-crosshair-h" />
                    <div className="icon-crosshair-v" />
                    <div className="icon-glyph-wrapper">
                      <IconComp size={32} className="principle-glyph" />
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h4 className="principle-title">{principle.title}</h4>
                  <span className="principle-subtitle">{principle.subtitle}</span>
                  <p className="principle-desc">{principle.description}</p>
                </div>

                {/* Animated Colored Lower Panel (The Layered Expansion) */}
                <div className="card-lower-panel" aria-live="polite">
                  {/* Glowing Top Razor Edge */}
                  <div className="panel-edge-glow" aria-hidden="true" />

                  {/* Default Collapsed Teaser View */}
                  <div className="panel-teaser-bar">
                    <span className="teaser-label">INSPECTION CRITERIA</span>
                    <div className="teaser-icon-wrap">
                      <ChevronUp size={16} className="teaser-chevron" />
                    </div>
                  </div>

                  {/* Hover/Active Expanded Content */}
                  <div className="panel-expanded-body">
                    <div className="panel-divider">
                      <span className="divider-line" />
                      <span className="divider-dot" />
                      <span className="divider-line" />
                    </div>

                    <ul className="panel-details-list">
                      {principle.details.map((detail, dIdx) => (
                        <li key={dIdx} className="panel-detail-item" style={{ '--delay': `${dIdx * 0.06}s` }}>
                          <CheckCircle2 size={15} className="detail-check-icon" />
                          <span className="detail-text">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Status Tag */}
                    <div className="panel-status-bar">
                      <Sparkles size={13} className="status-sparkle" />
                      <span className="panel-status-text">{principle.statusTag}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

