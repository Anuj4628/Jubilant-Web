import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutImpactNumbers } from '../../data/aboutData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutNumbers() {
  const containerRef = useRef(null);
  const numbersGridRef = useRef(null);
  const connectLineRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Connect line drawing across the stats
      if (connectLineRef.current) {
        gsap.fromTo(
          connectLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: el,
              start: 'top 75%'
            }
          }
        );
      }

      // Dynamic counter scrub animation for each metric
      const statCards = numbersGridRef.current?.querySelectorAll('.impact-number-card');
      if (statCards) {
        statCards.forEach((card, index) => {
          const numEl = card.querySelector('.impact-dynamic-val');
          const targetVal = aboutImpactNumbers[index].value;

          const counterObj = { val: 0 };

          gsap.fromTo(
            card,
            { y: 50, opacity: 0, scale: 0.92 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%'
              }
            }
          );

          // Counter tween
          gsap.to(counterObj, {
            val: targetVal,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true
            },
            onUpdate: () => {
              if (numEl) {
                numEl.textContent = Math.floor(counterObj.val);
              }
            }
          });
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="about-numbers-phase">
      <div className="about-numbers-container">
        {/* Header */}
        <div className="numbers-header">
          <div className="numbers-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">GLOBAL METRICS & INDUSTRIAL TRAJECTORY</span>
          </div>
          <h3 className="numbers-heading">
            Numerical Impact & <span className="highlight-red">Scale</span>
          </h3>
          <p className="numbers-subhead">
            Quantifiable reliability measured across global tonnage, client partnerships, and cross-border deliveries.
          </p>
        </div>

        {/* Visual Connecting Line */}
        <div ref={connectLineRef} className="numbers-connecting-axis" aria-hidden="true" />

        {/* 4 Cards Grid */}
        <div ref={numbersGridRef} className="impact-numbers-grid">
          {aboutImpactNumbers.map((item, index) => (
            <div key={item.label} className="impact-number-card">
              <div className="card-top-id">
                <span className="stat-code">STAT // 0{index + 1}</span>
                <span className="stat-beacon" />
              </div>

              {/* Huge Number with Suffix */}
              <div className="impact-digits-wrap">
                <span className="impact-dynamic-val">0</span>
                <span className="impact-suffix">{item.suffix}</span>
              </div>

              {/* Title & Detail */}
              <h4 className="impact-label">{item.label}</h4>
              <p className="impact-detail">{item.detail}</p>

              {/* Technical Bottom Rule */}
              <div className="impact-card-rule" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
