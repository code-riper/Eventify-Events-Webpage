import React from 'react';

export function EventCardSkeleton() {
  return (
    <div className="event-card border rounded-4 bg-white overflow-hidden h-100 placeholder-glow">
      <div className="placeholder col-12" style={{ height: '200px' }}></div>
      <div className="p-4 d-flex flex-column flex-grow-1">
        <div className="d-flex justify-content-between mb-2">
          <span className="placeholder col-4 rounded-pill py-2"></span>
          <span className="placeholder col-2 rounded py-2"></span>
        </div>
        <h5 className="placeholder col-10 mb-3 py-2 rounded"></h5>
        <div className="placeholder col-8 mb-2 py-1 rounded"></div>
        <div className="placeholder col-6 mb-4 py-1 rounded"></div>
        <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
          <span className="placeholder col-3 py-2 rounded"></span>
          <span className="placeholder col-4 py-3 rounded-3"></span>
        </div>
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 6 }) {
  return (
    <div className="row g-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="col-12 col-md-6 col-lg-4">
          <EventCardSkeleton />
        </div>
      ))}
    </div>
  );
}

export default EventCardSkeleton;
