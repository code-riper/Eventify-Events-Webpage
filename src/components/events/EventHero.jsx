import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/slices/favoritesSlice';

export default function EventHero({ event, onBookNowClick }) {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds);
  const isFavorite = favoriteIds.includes(event.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div
      className="position-relative text-white overflow-hidden"
      style={{
        background: `linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.92) 100%), url(${event.bannerImage || event.image}) center/cover no-repeat`,
        minHeight: '440px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '3rem 0'
      }}
    >
      <div className="container-xl position-relative" style={{ zIndex: 2 }}>
        <div className="row g-4 align-items-end">
          <div className="col-12 col-lg-8">
            {/* Category & Action Buttons */}
            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
              <span className={`badge-category ${event.categoryBadge} fs-6 shadow-sm`}>
                {event.categoryName}
              </span>

              <button
                type="button"
                className={`btn btn-sm ${isFavorite ? 'btn-danger' : 'btn-light'} rounded-pill px-3 py-1 font-heading fw-semibold`}
                onClick={() => dispatch(toggleFavorite(event.id))}
              >
                <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'} me-1`}></i>
                {isFavorite ? 'Saved' : 'Save Event'}
              </button>

              <button
                type="button"
                className="btn btn-sm btn-outline-light rounded-pill px-3 py-1 font-heading fw-semibold"
                onClick={handleShare}
              >
                <i className="bi bi-share me-1"></i>
                {copied ? 'Link Copied!' : 'Share'}
              </button>

              <div className="d-inline-flex align-items-center gap-1 bg-dark bg-opacity-50 px-3 py-1 rounded-pill small">
                <i className="bi bi-star-fill text-warning"></i>
                <span className="fw-bold">{event.rating}</span>
                <span className="text-white-50">({event.reviewCount} verified reviews)</span>
              </div>
            </div>

            {/* Event Title */}
            <h1 className="font-heading fw-extrabold text-white mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: '1.2' }}>
              {event.title}
            </h1>

            {/* Quick Metadata Bar */}
            <div className="d-flex flex-wrap align-items-center gap-4 text-white-50 small mt-2">
              <div className="d-flex align-items-center gap-2 text-white">
                <i className="bi bi-calendar3 fs-5 text-warning"></i>
                <div>
                  <div className="fw-bold">{event.displayDate}</div>
                  <div className="text-white-50">{event.time}</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 text-white">
                <i className="bi bi-geo-alt-fill fs-5 text-danger"></i>
                <div>
                  <div className="fw-bold">{event.venue}</div>
                  <div className="text-white-50">{event.location}</div>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 text-white">
                <i className="bi bi-ticket-perforated-fill fs-5 text-info"></i>
                <div>
                  <div className="text-white-50">Starts at</div>
                  <div className="font-heading fw-bold text-warning fs-5">₹{event.price.toLocaleString('en-IN')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 text-lg-end">
            <button
              type="button"
              className="btn btn-coral-custom btn-lg px-5 py-3 rounded-4 shadow-lg w-100 w-lg-auto"
              onClick={onBookNowClick}
            >
              <i className="bi bi-ticket-perforated"></i>
              Select Tickets
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
