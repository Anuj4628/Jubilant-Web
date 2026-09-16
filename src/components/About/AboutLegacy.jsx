import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutLegacyMilestones } from '../../data/aboutData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutLegacy() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const track = trackRef.current;
    if (!el || !track) return;

    // Use matchMedia to conditionally pin on desktop while flowing naturally on mobile
    const mm = gsap.matchMedia();

    mm.add('(min-width: 992px)', () => {
      // Calculate total horizontal scroll distance
      const scrollDistance = track.scrollWidth - window.innerWidth + 120;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });

      // Horizontal track movement
      tl.to(track, {
        x: -scrollDistance,
        ease: 'none'
      });

      // Progressive progress line fill
      if (progressBarRef.current) {
        tl.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: 'none' },
          0
        );
      }

      // Parallax & mask reveals on each milestone card
      const cards = track.querySelectorAll('.legacy-milestone-card');
      cards.forEach((card, index) => {
        const img = card.querySelector('.milestone-img');
        if (img) {
          tl.fromTo(
            img,
            { scale: 1.15, clipPath: 'inset(10% 0% 10% 0%)' },
            { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power2.out' },
            index * 0.2
          );
        }
      });
    });

    // Tablet & Mobile: lightweight scrub reveals per card in vertical stream
    mm.add('(max-width: 991px)', () => {
      const cards = track.querySelectorAll('.legacy-milestone-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%'
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef} className="about-legacy-phase">
      {/* Sticky Header inside Pinned Container */}
      <div className="legacy-header-bar">
        <div className="legacy-header-container">
          <div className="legacy-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">A QUARTER-CENTURY OF METALLURGY</span>
          </div>
          <h3 className="legacy-heading">
            The Steel Legacy of <span className="highlight-red">Jubilant Steels</span>
          </h3>
          <p className="legacy-subhead">
            Scroll to traverse our 25-year evolution from domestic stockholding to an international export authority.
          </p>

          {/* Desktop Timeline Progress Bar */}
          <div className="legacy-progress-track">
            <div ref={progressBarRef} className="legacy-progress-fill" />
          </div>
        </div>
      </div>

      {/* Horizontal / Flowing Milestone Track */}
      <div className="legacy-track-viewport">
        <div ref={trackRef} className="legacy-cards-track">
          {aboutLegacyMilestones.map((item, index) => (
            <article key={item.year} className="legacy-milestone-card">
              {/* Year Stamp */}
              <div className="milestone-year-header">
                <span className="milestone-step-pill">MILESTONE 0{index + 1}</span>
                <span className="milestone-year-huge">{item.year}</span>
              </div>

              {/* Card Body */}
              <div className="milestone-body">
                <div className="milestone-tag-wrap">
                  <span className="milestone-tag">{item.tag}</span>
                  <span className="milestone-metric-chip">{item.metric}</span>
                </div>

                <h4 className="milestone-title">{item.title}</h4>
                <p className="milestone-desc">{item.description}</p>

                {/* Industrial Photo with Masking */}
                <div className="milestone-img-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="milestone-img"
                    loading="lazy"
                  />
                  <div className="milestone-img-overlay" />
                  <span className="milestone-spec-badge">{item.spec}</span>
                </div>
              </div>

              {/* Connecting Track Node */}
              <div className="milestone-axis-point">
                <span className="axis-ring" />
                <span className="axis-dot" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
