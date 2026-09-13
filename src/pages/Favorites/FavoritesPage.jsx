import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EventCard from '../../components/common/EventCard';
import EmptyState from '../../components/common/EmptyState';

export default function FavoritesPage() {
  const dispatch = useDispatch();
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds);
  const events = useSelector((state) => state.events.events);

  const favoritedEvents = events.filter((e) => favoriteIds.includes(e.id));

  return (
    <div className="favorites-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div>
            <h1 className="font-heading fw-extrabold text-dark mb-1 fs-2">
              Saved Events ({favoritedEvents.length})
            </h1>
            <p className="text-muted small mb-0">
              Keep track of events you love and book tickets whenever you're ready.
            </p>
          </div>

          {favoritedEvents.length > 0 && (
            <Link to="/events" className="btn btn-primary-custom btn-sm px-4 py-2 font-heading">
              <i className="bi bi-compass"></i>
              Discover More
            </Link>
          )}
        </div>

        {/* Favorites Grid or Empty State */}
        {favoritedEvents.length > 0 ? (
          <div className="row g-4">
            {favoritedEvents.map((evt) => (
              <div key={evt.id} className="col-12 col-md-6 col-lg-4">
                <EventCard event={evt} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="bi-heart"
            title="Your favorite events will appear here"
            description="Explore our handpicked concerts, tech summits, sports marathons, and comedy nights. Click the heart icon on any event card to save it here!"
            actionText="Explore Events"
            actionLink="/events"
          />
        )}
      </div>
    </div>
  );
}
