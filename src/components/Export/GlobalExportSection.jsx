import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { exportRegions, exportMetrics } from '../../data/homeSectionsData';
import { MapPin, Anchor, ArrowUpRight } from 'lucide-react';
import './GlobalExportSection.css';

gsap.registerPlugin(ScrollTrigger);

// Destination coordinates mapped on SVG viewBox 0 0 1000 500
const hubCoordinates = [
  { id: 'in-hub', name: 'Mumbai / Gujarat Hub (Origin)', x: 670, y: 240, isOrigin: true },
  { id: 'na-hub', name: 'Houston & New York', region: 'North America', x: 230, y: 180 },
  { id: 'sa-hub', name: 'Santos & Valparaíso', region: 'South America', x: 330, y: 350 },
  { id: 'eu-hub', name: 'Rotterdam & Antwerp', region: 'Europe', x: 505, y: 155 },
  { id: 'me-hub', name: 'Jebel Ali & Dammam', region: 'Middle East', x: 605, y: 225 },
  { id: 'af-hub', name: 'Durban & Alexandria', region: 'Africa', x: 530, y: 320 },
  { id: 'sea-hub', name: 'Singapore & Yokohama', region: 'Asia & Southeast Asia', x: 770, y: 265 },
  { id: 'au-hub', name: 'Sydney & Melbourne', region: 'Australia / Oceania', x: 865, y: 385 }
];

export default function GlobalExportSection() {
  const [selectedHub, setSelectedHub] = useState(exportRegions[0]);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const mapRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

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

      // Map SVG entrance & path drawing
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mapRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Metrics counter reveal
      gsap.fromTo(
        metricsRef.current.children,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const origin = hubCoordinates[0];

  return (
    <section id="export" ref={sectionRef} className="global-export-section" aria-label="Countries We Export To">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="export-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">INTERNATIONAL SUPPLY & LOGISTICS</span>
          </div>

          <h2 className="section-display-heading">
            COUNTRIES <span className="text-highlight-red">WE EXPORT TO</span>
          </h2>

          <p className="section-description">
            Supporting global industries through dependable steel supply, seaworthy packaging, and synchronized international logistics.
          </p>
        </div>

        {/* Global Network Map Showcase */}
        <div ref={mapRef} className="global-map-card">
          <div className="map-card-top-status">
            <div className="status-indicator">
              <span className="pulse-beacon" />
              <span className="status-text">LIVE EXPORT CORRIDORS & STRATEGIC DISPATCH</span>
            </div>
            <div className="origin-badge">
              <Anchor size={14} />
              <span>HEADQUARTERS & MILL PORT: MUMBAI / GUJARAT</span>
            </div>
          </div>

          {/* Interactive Network Map Visualization */}
          <div className="map-svg-container">
            <svg
              viewBox="0 0 1000 500"
              className="network-map-svg"
              preserveAspectRatio="xMidYMid meet"
              aria-label="Interactive world map showing steel supply routes"
            >
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D3122A" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#E81935" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="glow" />
                  <feComposite in="SourceGraphic" in2="glow" operator="over" />
                </filter>
              </defs>

              {/* World Map Graticule Grid */}
              <g className="map-graticule-grid" opacity="0.35">
                {[100, 200, 300, 400].map(y => (
                  <line key={`lat-${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="rgba(203, 213, 225, 0.4)" strokeDasharray="3 3" />
                ))}
                {[200, 400, 600, 800].map(x => (
                  <line key={`lon-${x}`} x1={x} y1="0" x2={x} y2="500" stroke="rgba(203, 213, 225, 0.4)" strokeDasharray="3 3" />
                ))}
              </g>

              {/* Simplified Continental Outlines */}
              <g className="continents-silhouette" fill="rgba(241, 245, 249, 0.95)" stroke="rgba(203, 213, 225, 0.6)" strokeWidth="1">
                {/* North America */}
                <path d="M 120,80 L 290,70 L 320,130 L 250,210 L 200,240 L 150,180 Z" />
                {/* South America */}
                <path d="M 270,250 L 350,270 L 380,360 L 340,440 L 290,370 Z" />
                {/* Europe */}
                <path d="M 450,90 L 560,80 L 580,160 L 490,190 L 450,140 Z" />
                {/* Africa */}
                <path d="M 470,200 L 590,210 L 580,360 L 520,410 L 460,280 Z" />
                {/* Asia */}
                <path d="M 590,70 L 850,70 L 890,180 L 780,270 L 660,240 L 600,160 Z" />
                {/* Australia */}
                <path d="M 790,320 L 910,320 L 920,410 L 820,420 Z" />
              </g>

              {/* Radiating Curved Arcs from Origin to Worldwide Destinations */}
              <g className="connection-arcs">
                {hubCoordinates.slice(1).map(hub => {
                  const mx = (origin.x + hub.x) / 2;
                  const my = Math.min(origin.y, hub.y) - 50;
                  const pathData = `M ${origin.x},${origin.y} Q ${mx},${my} ${hub.x},${hub.y}`;
                  return (
                    <g key={`arc-${hub.id}`}>
                      {/* Ambient track */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke="rgba(211, 18, 42, 0.22)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      {/* Active animated pulsing path */}
                      <path
                        d={pathData}
                        fill="none"
                        stroke="url(#routeGradient)"
                        strokeWidth="2"
                        className="animated-arc-pulse"
                      />
                    </g>
                  );
                })}
              </g>

              {/* Destination Hub Markers */}
              {hubCoordinates.map(hub => {
                const isOrigin = hub.isOrigin;
                return (
                  <g
                    key={`node-${hub.id}`}
                    transform={`translate(${hub.x}, ${hub.y})`}
                    className="map-node-group"
                  >
                    {/* Pulsing ring */}
                    <circle
                      r={isOrigin ? "14" : "10"}
                      fill={isOrigin ? "rgba(211, 18, 42, 0.2)" : "rgba(15, 23, 42, 0.15)"}
                      className={isOrigin ? "origin-pulse" : "hub-pulse"}
                    />
                    {/* Node Core */}
                    <circle
                      r={isOrigin ? "6" : "4.5"}
                      fill={isOrigin ? "#D3122A" : "#0F172A"}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      filter="url(#glow)"
                    />
                    {/* Label */}
                    <text
                      y={isOrigin ? "-16" : "18"}
                      textAnchor="middle"
                      className={`map-node-label ${isOrigin ? 'label-origin' : ''}`}
                    >
                      {hub.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Region Tabs / Destination Selector */}
          <div className="export-regions-strip">
            {exportRegions.map((reg) => {
              const isSelected = selectedHub.region === reg.region;
              return (
                <button
                  key={reg.region}
                  type="button"
                  className={`region-pill-btn ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => setSelectedHub(reg)}
                >
                  <MapPin size={14} className="region-pin" />
                  <span className="region-name">{reg.region}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Region Detailed Card */}
          <div className="selected-region-card">
            <div className="card-region-info">
              <span className="region-subtitle">EXPORT DESTINATION HUB</span>
              <h4 className="region-title">{selectedHub.region}</h4>
              <p className="region-hub-text">
                Primary Shipping Terminals: <strong>{selectedHub.hub}</strong>
              </p>
            </div>

            <div className="region-countries-list">
              <span className="key-markets-label">KEY IMPORTING MARKETS:</span>
              <div className="country-tags">
                {selectedHub.destinations.map(country => (
                  <span key={country} className="country-tag">
                    {country}
                  </span>
                ))}
              </div>
            </div>

            <a href="#quote" className="region-inquiry-cta">
              <span>Freight Schedule & Port Delivery</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Export Metrics Counter Grid */}
        <div ref={metricsRef} className="export-metrics-grid">
          {exportMetrics.map(m => (
            <div key={m.label} className="metric-box">
              <div className="metric-val-row">
                <span className="metric-num">{m.value}</span>
                <span className="metric-suffix">{m.suffix}</span>
              </div>
              <p className="metric-lbl">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
