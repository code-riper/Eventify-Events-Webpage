import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found-page py-5 d-flex align-items-center" style={{ minHeight: '80vh', backgroundColor: '#F8FAFC' }}>
      <div className="container-xl text-center">
        <div
          className="rounded-circle d-inline-flex align-items-center justify-content-center bg-primary-subtle text-primary mb-4"
          style={{ width: '90px', height: '90px', fontSize: '2.5rem' }}
        >
          <i className="bi bi-compass"></i>
        </div>
        <h1 className="display-3 font-heading fw-extrabold text-dark mb-2">404</h1>
        <h2 className="font-heading fw-bold text-dark fs-3 mb-3">Page Not Found</h2>
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: '460px' }}>
          Looks like this event or page has moved or doesn't exist anymore. Let's get you back to the hottest events!
        </p>
        <Link to="/" className="btn btn-primary-custom px-4 py-3 rounded-pill font-heading fw-semibold">
          <i className="bi bi-house me-1"></i>
          Back to Eventify Home
        </Link>
      </div>
    </div>
  );
}
