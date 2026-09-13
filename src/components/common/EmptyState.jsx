import React from 'react';
import { Link } from 'react-router-dom';

export default function EmptyState({
  icon = 'bi-calendar-x',
  title = 'No events found',
  description = 'We could not find any events matching your criteria. Try adjusting your filters or search terms.',
  actionText = 'Explore All Events',
  actionLink = '/events',
  onActionClick
}) {
  return (
    <div className="text-center py-5 px-3 my-4 bg-white rounded-4 border border-light-subtle shadow-xs">
      <div
        className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
        style={{
          width: '74px',
          height: '74px',
          background: '#f8fafc',
          border: '2px dashed #cbd5e1',
          color: '#64748b'
        }}
      >
        <i className={`bi ${icon}`} style={{ fontSize: '2rem' }}></i>
      </div>
      <h3 className="font-heading fw-bold text-dark mb-2" style={{ fontSize: '1.4rem' }}>
        {title}
      </h3>
      <p className="text-muted mx-auto mb-4" style={{ maxWidth: '440px', fontSize: '0.95rem' }}>
        {description}
      </p>
      {actionText && (
        actionLink ? (
          <Link to={actionLink} className="btn btn-primary-custom px-4 py-2">
            <i className="bi bi-compass"></i>
            {actionText}
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-primary-custom px-4 py-2"
            onClick={onActionClick}
          >
            {actionText}
          </button>
        )
      )}
    </div>
  );
}
