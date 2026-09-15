import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { productsData, productCategories } from '../../data/homeSectionsData';
import ProductCard from './ProductCard';
import Button from '../UI/Button';
import './ProductsSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter(item => item.category === selectedCategory);

  // GSAP ScrollTrigger animation on section entrance
  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
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

      // Product cards stagger reveal
      const cards = gridRef.current.querySelectorAll('.product-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
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
  }, [selectedCategory]);

  return (
    <section id="products" ref={sectionRef} className="products-section" aria-label="Our Products">
      <div className="section-container">
        {/* Section Header */}
        <div ref={headerRef} className="products-header">
          <div className="section-eyebrow">
            <span className="eyebrow-accent-bar" />
            <span className="eyebrow-text">ENGINEERING INVENTORY & PRODUCTION</span>
          </div>

          <h2 className="section-display-heading">
            OUR <span className="text-highlight-red">PRODUCTS</span>
          </h2>

          <p className="section-description">
            Precision-engineered steel products for demanding industrial and engineering applications.
          </p>

          {/* Category Filter Tabs */}
          <div className="product-category-tabs" role="tablist" aria-label="Product categories">
            {productCategories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={selectedCategory === cat.id}
                className={`category-tab-btn ${selectedCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                {selectedCategory === cat.id && <span className="tab-indicator" />}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div ref={gridRef} className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="products-bottom-cta">
          <div className="cta-box-content">
            <h4 className="cta-box-title">Need custom sizes, heavy walls or certified heat lots?</h4>
            <p className="cta-box-desc">Our metallurgical engineering team can source and fabricate to ASTM, ASME, DIN and ISO standards.</p>
          </div>
          <Button href="#quote" variant="primary" size="md" icon="arrow">
            Request Custom Quotation
          </Button>
        </div>
      </div>
    </section>
  );
}
