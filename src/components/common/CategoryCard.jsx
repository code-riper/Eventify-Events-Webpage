import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/events?category=${category.slug}`}
      className="text-decoration-none d-block h-100"
    >
      <div
        className="rounded-4 p-4 h-100 d-flex flex-column justify-content-between position-relative overflow-hidden text-white"
        style={{
          minHeight: '170px',
          background: category.gradient || 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          boxShadow: '0 8px 20px -6px rgba(0,0,0,0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 16px 28px -6px rgba(0,0,0,0.22)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 20px -6px rgba(0,0,0,0.15)';
        }}
      >
        {/* Subtle decorative background icon */}
        <i
          className={`bi ${category.icon} position-absolute`}
          style={{
            fontSize: '5.5rem',
            right: '-10px',
            bottom: '-15px',
            opacity: 0.15,
            pointerEvents: 'none'
          }}
        ></i>

        {/* Top Icon Badge */}
        <div
          className="rounded-circle d-inline-flex align-items-center justify-content-center bg-white text-dark shadow-sm"
          style={{ width: '46px', height: '46px', fontSize: '1.25rem' }}
        >
          <i className={`bi ${category.icon}`} style={{ color: category.color || '#4F46E5' }}></i>
        </div>

        {/* Text Details */}
        <div className="mt-3 position-relative" style={{ zIndex: 2 }}>
          <h4 className="font-heading fw-bold text-white mb-1" style={{ fontSize: '1.15rem' }}>
            {category.name}
          </h4>
          <div
            className="d-flex align-items-center justify-content-between text-white-50"
            style={{ fontSize: '0.85rem' }}
          >
            <span>{category.eventCount}+ Events</span>
            <i className="bi bi-arrow-right text-white"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}
