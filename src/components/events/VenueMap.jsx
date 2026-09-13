import React from 'react';

export default function VenueMap({ venue, address, city }) {
  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent(`${venue}, ${address || city}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '1.3rem' }}>
            Venue & Location
          </h3>
          <p className="text-muted small mb-0">Check directions and reach comfortably before gate closure.</p>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-primary rounded-pill px-3 py-2 font-heading fw-semibold d-inline-flex align-items-center gap-1"
          onClick={handleOpenGoogleMaps}
        >
          <i className="bi bi-geo-alt"></i>
          <span>Get Directions</span>
        </button>
      </div>

      <div className="mb-4">
        <div className="font-heading fw-bold text-dark fs-5 mb-1">{venue}</div>
        <p className="text-secondary small mb-0 d-flex align-items-start gap-2">
          <i className="bi bi-pin-map-fill text-danger fs-6 mt-1"></i>
          <span>{address || `${venue}, ${city}`}</span>
        </p>
      </div>

      {/* Styled Interactive Map Placeholder */}
      <div
        className="rounded-4 overflow-hidden position-relative border"
        style={{
          height: '240px',
          background: '#e2e8f0',
          backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
        onClick={handleOpenGoogleMaps}
      >
        <div className="text-center p-4 bg-white rounded-4 shadow-sm border border-light-subtle">
          <div
            className="rounded-circle bg-danger-subtle text-danger d-inline-flex align-items-center justify-content-center mb-2"
            style={{ width: '48px', height: '48px', fontSize: '1.4rem' }}
          >
            <i className="bi bi-geo-alt-fill"></i>
          </div>
          <div className="font-heading fw-bold text-dark">{venue}</div>
          <div className="text-muted small mb-2">{city}</div>
          <span className="badge bg-primary text-white rounded-pill px-3 py-1 small">
            Click to Open in Google Maps
          </span>
        </div>
      </div>
    </div>
  );
}
