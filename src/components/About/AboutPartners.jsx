import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { aboutPartnersList } from '../../data/aboutData';

/**
 * AboutPartners: Professional Continuous Logo Marquee
 * - Continuous infinite Right -> Left smooth gliding (not dependent on user scrolling)
 * - Crystal clear, crisp, sharp logos on clean cards (no cloudy fog, no blurry overlays)
 * - Subtle, sophisticated center zoom/focus effect (0.92 -> 1.05 -> 0.92)
 * - Seamless loop with zero jumps or gaps
 */
export default function AboutPartners() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const rafRef = useRef(null);

  // Triple the items to ensure seamless infinite coverage across all resolutions
  const tripledPartners = [
    ...aboutPartnersList,
    ...aboutPartnersList,
    ...aboutPartnersList
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // 1. Continuous smooth infinite horizontal translation from Right to Left
    const tween = gsap.to(track, {
      xPercent: -33.33333333,
      duration: 35,
      ease: 'none',
      repeat: -1
    });
    tweenRef.current = tween;

    // 2. Subtle center zoom/focus effect as logos pass through the main viewing area
    const cards = track.querySelectorAll('.partner-slider-card');
    const updateCenterFocus = () => {
      const windowCenter = window.innerWidth / 2;
      const focusRadius = window.innerWidth * 0.38;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(cardCenter - windowCenter);

        if (distanceFromCenter < focusRadius) {
          // Normalize 0 at center to 1 at edge of focus radius
          const factor = 1 - distanceFromCenter / focusRadius;
          // Scale from 0.94 up to 1.05 at center
          const scale = 0.94 + factor * 0.11;
          const imgEl = card.querySelector('.partner-slider-logo');
          if (imgEl) {
            imgEl.style.transform = `scale(${scale})`;
          }
          card.style.borderColor = factor > 0.6 ? 'rgba(211, 18, 42, 0.4)' : 'rgba(226, 232, 240, 0.9)';
        } else {
          const imgEl = card.querySelector('.partner-slider-logo');
          if (imgEl) {
            imgEl.style.transform = 'scale(0.94)';
          }
          card.style.borderColor = 'rgba(226, 232, 240, 0.9)';
        }
      });

      rafRef.current = requestAnimationFrame(updateCenterFocus);
    };

    rafRef.current = requestAnimationFrame(updateCenterFocus);

    return () => {
      tween.kill();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="about-partners-phase">
      <div className="about-partners-container">
        {/* Header */}
        <div className="partners-header">
          <div className="partners-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">ENTERPRISE SUPPLY NETWORK</span>
          </div>
          <h3 className="partners-heading">
            Trusted and Approved by <span className="highlight-red">Industry Leaders</span>
          </h3>
          <p className="partners-subhead">
            Continuous certified alloy supplies powering Fortune 500 energy conglomerates, heavy engineering titans, and national infrastructure projects.
          </p>
        </div>

        {/* Clean, Continuous Logo Slider Viewport (Crystal clear viewing area, zero cloudy fog) */}
        <div className="partners-slider-viewport">
          <div ref={trackRef} className="partners-slider-track">
            {tripledPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="partner-slider-card"
                title={partner.name}
              >
                <div className="partner-logo-box">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="partner-slider-logo"
                    loading="lazy"
                  />
                </div>
                <span className="partner-card-label">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Metric Bar - Clean corporate aesthetic */}
        <div className="partners-trust-strip">
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✓</span>
            <span>100% Verified Mill Test Certifications</span>
          </div>
          <div className="trust-strip-divider" />
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✓</span>
            <span>Third-Party Inspection by Lloyds / TUV / DNV / BV</span>
          </div>
          <div className="trust-strip-divider" />
          <div className="trust-strip-item">
            <span className="trust-strip-icon">✓</span>
            <span>Zero-Defect International Shipment Record</span>
          </div>
        </div>
      </div>
    </div>
  );
}
