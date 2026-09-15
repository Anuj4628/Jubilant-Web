import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clientsData } from '../../data/homeSectionsData';
import { ShieldCheck, Building2 } from 'lucide-react';
import './ClientNetworkSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ClientNetworkSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 25 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Repeat 4 times for a seamless infinite loop
  const repeatedClients = [...clientsData, ...clientsData, ...clientsData, ...clientsData];

  return (
    <section id="certificate" ref={sectionRef} className="client-network-section" aria-label="Client Network">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="client-network-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">ECOSYSTEM & INDUSTRIAL TRUST</span>
          </div>

          <h2 className="section-display-heading">
            CLIENT <span className="text-highlight-red">NETWORK</span>
          </h2>

          <p className="section-description">
            Trusted by leading organizations across engineering, infrastructure, energy and industrial sectors.
          </p>
        </div>
      </div>

      {/* Continuous Seamless Infinite Logo Marquee (Right -> Left) */}
      <div className="client-marquee-container" aria-label="Partner and client organizations">
        <div className="client-marquee-track">
          {repeatedClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="client-badge-card"
              tabIndex={0}
              aria-label={`${client.name} - ${client.sector}`}
            >
              <div className="badge-icon-box">
                <Building2 size={20} className="badge-org-icon" />
              </div>

              <div className="badge-info">
                <div className="badge-name-row">
                  <span className="client-brand-name">{client.name}</span>
                  <span className="client-dot-accent" />
                </div>
                <span className="client-sector-label">{client.sector}</span>
                <span className="client-badge-tag">{client.tag}</span>
              </div>

              <div className="badge-bottom-glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>

      {/* Trust metric badges */}
      <div className="section-container">
        <div className="client-trust-strip">
          <div className="trust-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span className="trust-text">Approved Vendor for Major Public & Private Sector Enterprises</span>
          </div>
          <div className="trust-item">
            <ShieldCheck size={20} className="trust-icon" />
            <span className="trust-text">ISO 9001:2015 & ASME Compliant Quality Management Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
