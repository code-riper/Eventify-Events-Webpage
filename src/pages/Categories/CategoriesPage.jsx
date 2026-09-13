import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CategoriesPage() {
  const { categories, events } = useSelector((state) => state.events);

  return (
    <div className="categories-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '640px' }}>
          <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill fw-bold small mb-2 d-inline-block font-heading">
            Browse by Passion
          </span>
          <h1 className="font-heading fw-extrabold text-dark mb-2 fs-2">
            Explore Categories
          </h1>
          <p className="text-muted">
            Find the experiences that spark your curiosity — from electrifying stadium concerts to intimate hands-on creative masterclasses.
          </p>
        </div>

        {/* Categories Grid with Rich Visual Cards */}
        <div className="row g-4 mb-5">
          {categories.map((cat) => {
            const count = events.filter((e) => e.category === cat.slug).length;

            return (
              <div key={cat.id} className="col-12 col-md-6 col-lg-3">
                <Link
                  to={`/events?category=${cat.slug}`}
                  className="text-decoration-none"
                >
                  <div
                    className="card rounded-4 border overflow-hidden h-100 shadow-xs transition-normal position-relative"
                    style={{
                      transition: 'all 0.3s ease',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 28px -6px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(15, 23, 42, 0.08)';
                    }}
                  >
                    {/* Category Image Header */}
                    <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-100 h-100 object-fit-cover"
                        style={{ transition: 'transform 0.4s ease' }}
                      />
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(15,23,42,0.85) 100%)'
                        }}
                      ></div>

                      {/* Icon Floating Badge */}
                      <div
                        className="position-absolute top-0 start-0 m-3 rounded-circle bg-white text-dark shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: '42px', height: '42px', fontSize: '1.2rem' }}
                      >
                        <i className={`bi ${cat.icon}`} style={{ color: cat.color }}></i>
                      </div>

                      {/* Event Count Overlaid */}
                      <div className="position-absolute bottom-0 start-0 m-3 text-white">
                        <span className="badge bg-white bg-opacity-25 rounded-pill px-3 py-1 small">
                          {count || cat.eventCount}+ Events Active
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 d-flex flex-column flex-grow-1 bg-white">
                      <h3 className="font-heading fw-bold text-dark fs-5 mb-2">
                        {cat.name}
                      </h3>
                      <p className="text-secondary small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                        {cat.description}
                      </p>
                      <div className="d-flex align-items-center text-primary fw-semibold small font-heading">
                        <span>Explore {cat.name}</span>
                        <i className="bi bi-arrow-right ms-2"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
