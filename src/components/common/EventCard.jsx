import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/slices/favoritesSlice';
import { initBookingForEvent } from '../../redux/slices/bookingSlice';

export default function EventCard({ event }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds);
  const isFavorite = favoriteIds.includes(event.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(event.id));
  };

  const handleBookClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(initBookingForEvent(event));
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="event-card">
      {/* Image Container with Badges */}
      <div className="event-card-img-wrapper">
        <Link to={`/events/${event.id}`}>
          <img
            src={event.image}
            alt={event.title}
            className="event-card-img"
            loading="lazy"
          />
        </Link>

        {/* Date Calendar Box (Top Left) */}
        <div
          className="position-absolute top-0 start-0 m-3 bg-white rounded-3 text-center shadow-sm overflow-hidden"
          style={{ width: '48px', zIndex: 2 }}
        >
          <div
            className="text-white font-heading fw-bold"
            style={{ fontSize: '0.65rem', background: '#4F46E5', padding: '2px 0' }}
          >
            {event.month}
          </div>
          <div
            className="font-heading fw-bold text-dark"
            style={{ fontSize: '1.1rem', lineHeight: '1.2', padding: '2px 0 4px' }}
          >
            {event.day}
          </div>
        </div>

        {/* Category Badge & Favorite Button (Top Right) */}
        <div className="position-absolute top-0 end-0 m-3 d-flex align-items-center gap-2" style={{ zIndex: 2 }}>
          <button
            type="button"
            className={`btn-fav ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            title={isFavorite ? 'Remove from saved' : 'Save event'}
          >
            <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i>
          </button>
        </div>

        {/* Category Pill Overlaid bottom left of image */}
        <div className="position-absolute bottom-0 start-0 m-3" style={{ zIndex: 2 }}>
          <span className={`badge-category ${event.categoryBadge} shadow-sm`}>
            {event.categoryName}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3 p-md-4 d-flex flex-column flex-grow-1">
        {/* Rating and Reviews */}
        <div className="d-flex align-items-center justify-content-between text-muted small mb-2">
          <div className="d-flex align-items-center gap-1">
            <i className="bi bi-star-fill text-warning" style={{ fontSize: '0.85rem' }}></i>
            <span className="fw-bold text-dark">{event.rating}</span>
            <span className="text-muted">({event.reviewCount})</span>
          </div>
          <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '0.8rem' }}>
            <i className="bi bi-geo-alt-fill text-primary"></i>
            <span>{event.city}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-heading fw-bold text-dark mb-2" style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>
          <Link
            to={`/events/${event.id}`}
            className="text-dark text-decoration-none hover-primary line-clamp-2"
            title={event.title}
          >
            {event.title}
          </Link>
        </h3>

        {/* Date and Time */}
        <div className="d-flex align-items-center gap-2 text-secondary small mb-1">
          <i className="bi bi-calendar3 text-muted"></i>
          <span>{event.displayDate}</span>
          <span className="text-muted">•</span>
          <span>{event.time.split('-')[0].trim()}</span>
        </div>

        {/* Venue */}
        <div className="d-flex align-items-center gap-2 text-muted small mb-3">
          <i className="bi bi-building text-muted"></i>
          <span className="line-clamp-1">{event.venue}</span>
        </div>

        {/* Bottom Section: Starting Price + Action */}
        <div className="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
          <div>
            <div className="price-sub">Starting from</div>
            <div className="price-tag">₹{event.price.toLocaleString('en-IN')}</div>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-primary-custom px-3 py-2"
            onClick={handleBookClick}
          >
            Book Now
            <i className="bi bi-arrow-right small"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
