import React, { useState, useEffect, useRef } from 'react';
import { navLinks, brandDetails } from '../../data/navigationData';
import Button from '../UI/Button';
import MobileMenu from './MobileMenu';
import TopContactBar from './TopContactBar';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeLink = currentPage === 'about' ? 'about' : 'home';
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (onNavigate) {
      if (link.id === 'about') {
        onNavigate('about');
      } else if (link.id === 'home') {
        onNavigate('home');
      } else {
        // Other section links (products, materials, certificate, contact)
        if (currentPage === 'about') {
          onNavigate('home', link.id);
        } else {
          const target = document.getElementById(link.id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <>
      <header
        ref={navRef}
        className={`navbar-wrapper ${isScrolled ? 'is-scrolled' : 'at-top'}`}
        id="main-navbar"
      >
        {/* Top Quick Contact Strip */}
        <TopContactBar />

        <div className="navbar-container">

          {/* Logo Area */}
          <a
            href="/"
            className="navbar-logo-link"
            aria-label="Jubilant Steels Home"
            onClick={handleLogoClick}
          >
            <div className="navbar-logo-wrap">
              <img
                src={brandDetails.logoUrl}
                alt="Jubilant Steels"
                className="navbar-brand-logo"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-nav-desktop" aria-label="Main Navigation">
            <ul className="navbar-links-list">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <li key={link.id} className="navbar-item">
                    <a
                      href={link.id === 'about' ? '/about' : link.href}
                      className={`navbar-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      <span className="navbar-link-text">{link.label}</span>
                      <span className="navbar-link-indicator" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Right CTA */}
          <div className="navbar-actions-desktop">
            <Button
              href={brandDetails.quoteCta.href}
              variant="nav-quote"
              size="sm"
              icon="arrow"
              onClick={(e) => {
                if (currentPage === 'about' && onNavigate) {
                  e.preventDefault();
                  onNavigate('home', 'contact');
                }
              }}
            >
              {brandDetails.quoteCta.label}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`navbar-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="hamburger-box">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeLink={activeLink}
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </>
  );
}
