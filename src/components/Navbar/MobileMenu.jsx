import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { navLinks, brandDetails } from '../../data/navigationData';
import Button from '../UI/Button';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose, activeLink, setActiveLink }) {
  const menuRef = useRef(null);
  const linksContainerRef = useRef(null);
  const footerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Kill any running animations
      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Set initial state
      gsap.set(el, { display: 'flex', opacity: 0, y: -20 });
      gsap.set(linksContainerRef.current?.children || [], { opacity: 0, y: 25 });
      gsap.set(footerRef.current, { opacity: 0, y: 20 });

      // Animate in
      tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out'
      })
      .to(linksContainerRef.current?.children || [], {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.35,
        ease: 'power3.out'
      }, '-=0.2')
      .to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.15');

    } else {
      document.body.style.overflow = '';

      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(el, { display: 'none' });
        }
      });
      timelineRef.current = tl;

      tl.to(linksContainerRef.current?.children || [], {
        opacity: 0,
        y: -15,
        stagger: 0.03,
        duration: 0.2,
        ease: 'power2.in'
      })
      .to(el, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: 'power2.in'
      }, '-=0.1');
    }

    return () => {
      document.body.style.overflow = '';
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, [isOpen]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className={`mobile-menu-overlay ${isOpen ? 'is-open' : ''}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div className="mobile-menu-inner">
        {/* Navigation items */}
        <ul ref={linksContainerRef} className="mobile-nav-list">
          {navLinks.map((link, index) => {
            const isActive = activeLink === link.id;
            return (
              <li key={link.id} className="mobile-nav-item">
                <a
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  <span className="mobile-link-number">0{index + 1}</span>
                  <span className="mobile-link-title">{link.label}</span>
                  <span className="mobile-link-accent" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Footer info & CTA */}
        <div ref={footerRef} className="mobile-menu-footer">
          <Button
            href={brandDetails.quoteCta.href}
            variant="primary"
            size="md"
            icon="arrow"
            onClick={onClose}
            className="mobile-quote-btn"
          >
            {brandDetails.quoteCta.label}
          </Button>

          <div className="mobile-brand-meta">
            <span className="mobile-brand-name">JUBILANT STEELS</span>
            <span className="mobile-brand-desc">{brandDetails.tagline}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
