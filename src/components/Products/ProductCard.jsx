import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="product-card" tabIndex={0} aria-label={`${product.name} - ${product.categoryLabel}`}>
      {/* Product Image Container with Zoom Effect */}
      <div className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.alt}
          className={`product-card-img ${imageLoaded ? 'is-loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="product-card-overlay" aria-hidden="true" />
        
        {/* Engineering Specification Badge */}
        <div className="product-spec-badge">
          <span className="badge-pulse-dot" />
          <span className="badge-text">{product.specTag.split('//')[0]}</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="product-card-body">
        <div className="product-meta">
          <span className="product-category-label">{product.categoryLabel}</span>
          <span className="product-accent-line" aria-hidden="true" />
        </div>

        <div className="product-title-row">
          <h3 className="product-name">{product.name}</h3>
          <a
            href="#quote"
            className="product-explore-btn"
            aria-label={`Enquire about ${product.name}`}
          >
            <ArrowUpRight size={18} className="explore-icon" />
          </a>
        </div>
      </div>

      {/* Jubilant Red Bottom Active Line */}
      <div className="product-bottom-accent" aria-hidden="true" />
    </article>
  );
}
