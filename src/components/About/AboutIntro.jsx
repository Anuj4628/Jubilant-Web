import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutIntroData } from '../../data/aboutData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutIntro() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const linesRef = useRef(null);
  const badgeRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Scrub timeline for the engineered assembling intro
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'bottom 40%',
          scrub: 0.8
        }
      });

      // 1. Technical blueprint grid & line drawings
      tl.fromTo(
        linesRef.current?.querySelectorAll('.intro-blueprint-line'),
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 0.7, duration: 1, stagger: 0.1, ease: 'power2.inOut' },
        0
      );

      // 2. Eyebrow badge assemble
      tl.fromTo(
        badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        0.1
      );

      // 3. Headline words assembling from fragmented positions
      const words = headlineRef.current?.querySelectorAll('.intro-word');
      if (words && words.length) {
        tl.fromTo(
          words,
          {
            y: 70,
            opacity: 0,
            rotateX: 35,
            scale: 0.92
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            stagger: 0.12,
            duration: 1.2,
            ease: 'power3.out'
          },
          0.2
        );
      }

      // 4. Content paragraphs reveal with slight parallax
      tl.fromTo(
        textContentRef.current?.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: 'power2.out' },
        0.5
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="about-intro-phase">
      {/* Blueprint Grid & Measurement Lines */}
      <div ref={linesRef} className="intro-blueprint-bg" aria-hidden="true">
        <div className="blueprint-grid-overlay" />
        <div className="intro-blueprint-line horizontal top-line" />
        <div className="intro-blueprint-line horizontal bottom-line" />
        <div className="intro-blueprint-line vertical left-line" />
        <div className="intro-blueprint-line vertical right-line" />
        
        {/* Technical Coordinate Markers */}
        <span className="coordinate-cross top-left">+ 18° 57' 00" N</span>
        <span className="coordinate-cross top-right">+ 72° 49' 30" E</span>
        <span className="coordinate-cross bottom-left">MUMBAI SPEC // EN-10204</span>
        <span className="coordinate-cross bottom-right">JUBILANT ARCHIVE // 01</span>
      </div>

      <div className="about-intro-container">
        {/* Engineering Eyebrow Tag */}
        <div ref={badgeRef} className="intro-eyebrow-wrap">
          <span className="intro-pulse-dot" />
          <span className="intro-eyebrow-text">{aboutIntroData.eyebrow}</span>
          <span className="intro-code-tag">SECTION 01 // OVERVIEW</span>
        </div>

        {/* Assembling Headline */}
        <h2 ref={headlineRef} className="intro-headline">
          <div className="intro-headline-line">
            {aboutIntroData.headlineLine1.split(' ').map((word, i) => (
              <span key={i} className="intro-word-wrap">
                <span className="intro-word">{word}&nbsp;</span>
              </span>
            ))}
          </div>
          <div className="intro-headline-line accent-line">
            {aboutIntroData.headlineLine2.split(' ').map((word, i) => (
              <span key={i} className="intro-word-wrap">
                <span className={`intro-word ${word.toLowerCase().includes('trust') ? 'highlight-red' : ''}`}>
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </div>
        </h2>

        {/* Lead & Description */}
        <div ref={textContentRef} className="intro-text-block">
          <p className="intro-lead-text">{aboutIntroData.lead}</p>
          <p className="intro-sub-text">{aboutIntroData.description}</p>
          
          <div className="intro-metrics-row">
            <div className="intro-mini-stat">
              <span className="mini-stat-num">25+</span>
              <span className="mini-stat-label">Years of Mastery</span>
            </div>
            <div className="intro-stat-divider" />
            <div className="intro-mini-stat">
              <span className="mini-stat-num">40+</span>
              <span className="mini-stat-label">Global Export Hubs</span>
            </div>
            <div className="intro-stat-divider" />
            <div className="intro-mini-stat">
              <span className="mini-stat-num">100%</span>
              <span className="mini-stat-label">Mill Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
