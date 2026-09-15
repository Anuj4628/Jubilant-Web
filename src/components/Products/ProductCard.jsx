import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="product-card" tabIndex={0} aria-label={product.name}>
      {/* Product Image Container with Large Visual Area & Subtle Zoom */}
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
        {product.specTag && (
          <div className="product-spec-badge">
            <span className="badge-pulse-dot" />
            <span className="badge-text">{product.specTag.split('//')[0].trim()}</span>
          </div>
        )}
      </div>

      {/* Product Content Details (NO category label - Product name is visually dominant) */}
      <div className="product-card-body">
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

        {product.specTag && product.specTag.includes('//') && (
          <p className="product-spec-sub">
            {product.specTag.split('//')[1].trim()}
          </p>
        )}
      </div>

      {/* Jubilant Red Top / Bottom Hover Line */}
      <div className="product-card-hover-line" aria-hidden="true" />
    </article>
  );
}

