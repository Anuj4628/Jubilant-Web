import React, { useRef } from 'react';
import { materialsRow1, materialsRow2 } from '../../data/homeSectionsData';
import { Layers, Shield, Sparkles, Cpu, Atom, Flame, Anchor, Wind, Zap, Box } from 'lucide-react';
import './MaterialsSection.css';

// Icon map for materials
const materialIcons = {
  SS: Layers,
  DX: Shield,
  SD: Sparkles,
  NA: Anchor,
  INC: Flame,
  HAST: Atom,
  TI: Wind,
  AS: Cpu,
  CU: Zap,
  CS: Box
};

export default function MaterialsSection() {
  const sectionRef = useRef(null);

  // Duplicate items 4 times to guarantee a seamless continuous infinite marquee on all screen widths
  const renderMarqueeRow = (items, directionClass) => {
    const repeated = [...items, ...items, ...items, ...items];
    return (
      <div className={`marquee-track-wrapper ${directionClass}`}>
        <div className="marquee-track">
          {repeated.map((mat, index) => {
            const Icon = materialIcons[mat.code] || Layers;
            return (
              <div
                key={`${mat.code}-${index}`}
                className="material-panel-pill"
                tabIndex={0}
                aria-label={`${mat.name} - ${mat.grades}`}
              >
                <div className="pill-badge-code">
                  <Icon size={16} className="pill-icon" />
                  <span className="code-text">{mat.code}</span>
                </div>

                <div className="pill-content">
                  <div className="pill-header">
                    <h3 className="pill-name">{mat.name}</h3>
                    <span className="pill-accent-dot" />
                  </div>
                  <p className="pill-grades">{mat.grades}</p>
                  <span className="pill-property">{mat.property}</span>
                </div>

                <div className="pill-hover-glow" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="materials" ref={sectionRef} className="materials-section" aria-label="Materials We Work With">
      {/* Section Header */}
      <div className="section-container">
        <div className="materials-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">METALLURGICAL GRADES & ALLOYS</span>
          </div>

          <h2 className="section-display-heading">
            MATERIAL <span className="text-highlight-red">WE WORK WITH</span>
          </h2>

          <p className="section-description">
            High-performance materials engineered for demanding industrial applications.
          </p>
        </div>
      </div>

      {/* Dual Continuous Infinite Marquees */}
      <div className="materials-marquees-container" aria-label="Continuous list of metallurgical grades">
        {/* Row 1: Right to Left */}
        <div className="marquee-row-wrapper" aria-hidden="false">
          {renderMarqueeRow(materialsRow1, 'marquee-reverse')}
        </div>

        {/* Row 2: Left to Right */}
        <div className="marquee-row-wrapper" aria-hidden="false">
          {renderMarqueeRow(materialsRow2, 'marquee-forward')}
        </div>
      </div>

      {/* Subtle Bottom Ambient Gradient Line */}
      <div className="section-bottom-divider" aria-hidden="true" />
    </section>
  );
}
