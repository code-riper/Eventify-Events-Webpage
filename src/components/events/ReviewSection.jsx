import React from 'react';
import { mockReviews } from '../../data/mockReviews';

export default function ReviewSection({ eventId, rating = 4.9, reviewCount = 1200 }) {
  const reviews = mockReviews.filter((r) => !eventId || r.eventId === eventId);
  // If no direct reviews match, show sample reviews
  const displayReviews = reviews.length > 0 ? reviews : mockReviews.slice(0, 3);

  const breakdown = [
    { stars: 5, percentage: 84 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 }
  ];

  return (
    <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h3 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '1.3rem' }}>
            Ratings & Attendee Reviews
          </h3>
          <p className="text-muted small mb-0">Verified feedback from community members who attended.</p>
        </div>
      </div>

      {/* Rating Summary Breakdown */}
      <div className="row g-4 align-items-center p-4 rounded-4 bg-light mb-4">
        <div className="col-12 col-md-4 text-center border-end-md">
          <div className="display-4 font-heading fw-extrabold text-dark lh-1 mb-2">
            {rating}
          </div>
          <div className="text-warning mb-1">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
          </div>
          <div className="text-muted small">Based on {reviewCount} ratings</div>
        </div>

        <div className="col-12 col-md-8">
          <div className="d-flex flex-column gap-2">
            {breakdown.map((item) => (
              <div key={item.stars} className="d-flex align-items-center gap-2 small">
                <span className="text-muted" style={{ width: '50px' }}>
                  {item.stars} Stars
                </span>
                <div className="progress flex-grow-1" style={{ height: '8px', borderRadius: '4px' }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${item.percentage}%` }}
                    aria-valuenow={item.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <span className="text-muted text-end" style={{ width: '40px' }}>
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* User Reviews List */}
      <div className="d-flex flex-column gap-4">
        {displayReviews.map((rev) => (
          <div key={rev.id} className="pb-3 border-bottom">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={rev.userAvatar}
                  alt={rev.userName}
                  className="rounded-circle border"
                  style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                />
                <div>
                  <div className="font-heading fw-bold text-dark small">{rev.userName}</div>
                  <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                    {rev.userCity} • {rev.date}
                  </div>
                </div>
              </div>
              <div className="text-warning small">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <i key={i} className="bi bi-star-fill me-1"></i>
                ))}
              </div>
            </div>
            <p className="text-secondary small mb-0">{rev.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
