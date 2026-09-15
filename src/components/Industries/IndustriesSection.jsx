import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { industriesData } from '../../data/homeSectionsData';
import { ArrowUpRight } from 'lucide-react';
import './IndustriesSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
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

      // Industry tiles reveal
      const tiles = gridRef.current.querySelectorAll('.industry-tile');
      gsap.fromTo(
        tiles,
        { opacity: 0, y: 35, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="industries" ref={sectionRef} className="industries-section" aria-label="Application Industries">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="industries-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">APPLICATION SECTORS</span>
          </div>

          <h2 className="section-display-heading">
            SERVING GLOBAL <span className="text-highlight-red">MISSION-CRITICAL</span> SECTORS
          </h2>

          <p className="section-description">
            Engineered steel solutions supporting demanding applications across critical industries worldwide.
          </p>
        </div>

        {/* Cinematic Industry Tiles Grid (10 Industries) */}
        <div ref={gridRef} className="industries-grid">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="industry-tile"
              tabIndex={0}
              aria-label={`${ind.name} - ${ind.subtitle}`}
            >
              {/* Background Image Container */}
              <div className="industry-image-wrap">
                <img
                  src={ind.image}
                  alt={`${ind.name} industrial setting`}
                  className="industry-bg-image"
                  loading="lazy"
                />
                <div className="industry-dark-wash" aria-hidden="true" />
                <div className="industry-accent-wash" aria-hidden="true" />
              </div>

              {/* Top Code Badge */}
              <div className="industry-code-tag">
                <span className="code-dot" />
                <span className="code-label">{ind.code}</span>
              </div>

              {/* Bottom Content Info */}
              <div className="industry-tile-body">
                <span className="industry-subtitle">{ind.subtitle}</span>
                <div className="industry-title-row">
                  <h3 className="industry-name">{ind.name}</h3>
                  <div className="industry-arrow-btn">
                    <ArrowUpRight size={18} className="industry-arrow-icon" />
                  </div>
                </div>
                {/* Expanding Red Accent Bar */}
                <span className="industry-accent-line" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
