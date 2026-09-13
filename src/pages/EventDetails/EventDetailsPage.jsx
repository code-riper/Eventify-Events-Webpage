import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initBookingForEvent } from '../../redux/slices/bookingSlice';
import EventHero from '../../components/events/EventHero';
import TicketSelector from '../../components/events/TicketSelector';
import VenueMap from '../../components/events/VenueMap';
import OrganizerCard from '../../components/events/OrganizerCard';
import ScheduleTimeline from '../../components/events/ScheduleTimeline';
import ReviewSection from '../../components/events/ReviewSection';
import EventCard from '../../components/common/EventCard';
import EmptyState from '../../components/common/EmptyState';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ticketSectionRef = useRef(null);

  const { events } = useSelector((state) => state.events);
  const event = events.find((e) => e.id === id) || events[0];

  useEffect(() => {
    if (event) {
      dispatch(initBookingForEvent(event));
    }
  }, [event, dispatch]);

  if (!event) {
    return (
      <div className="container-xl py-5">
        <EmptyState
          icon="bi-exclamation-octagon"
          title="Event Not Found"
          description="The event you are searching for does not exist or has already passed."
          actionText="Back to All Events"
          actionLink="/events"
        />
      </div>
    );
  }

  const scrollToTickets = () => {
    const el = document.getElementById('tickets-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Related events: same category or other trending events
  const relatedEvents = events
    .filter((e) => e.id !== event.id && (e.category === event.category || e.trending))
    .slice(0, 3);

  return (
    <div className="event-details-page" style={{ backgroundColor: '#F8FAFC' }}>
      {/* 1. Hero Section */}
      <EventHero event={event} onBookNowClick={scrollToTickets} />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-bottom py-3">
        <div className="container-xl">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small text-muted mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/events">Events</Link></li>
              <li className="breadcrumb-item">
                <Link to={`/events?category=${event.category}`}>{event.categoryName}</Link>
              </li>
              <li className="breadcrumb-item active text-truncate" style={{ maxWidth: '300px' }} aria-current="page">
                {event.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container-xl py-5">
        <div className="row g-4 g-lg-5">
          {/* Main Column */}
          <div className="col-12 col-lg-8">
            {/* Event Description Card */}
            <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
              <h3 className="font-heading fw-bold text-dark mb-3" style={{ fontSize: '1.4rem' }}>
                About This Event
              </h3>
              <p className="text-secondary mb-4" style={{ lineHeight: '1.8', fontSize: '1.02rem' }}>
                {event.description}
              </p>

              {/* Event Key Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="pt-3 border-top">
                  <h4 className="font-heading fw-bold text-dark fs-5 mb-3">
                    Experience Highlights
                  </h4>
                  <div className="d-flex flex-column gap-2">
                    {event.highlights.map((item, idx) => (
                      <div key={idx} className="d-flex align-items-start gap-2">
                        <i className="bi bi-check-circle-fill text-success fs-6 mt-1"></i>
                        <span className="text-secondary small fw-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ticket Selector Widget */}
            <TicketSelector event={event} />

            {/* Schedule / Timeline */}
            <ScheduleTimeline schedule={event.schedule} />

            {/* Venue & Location Map */}
            <VenueMap venue={event.venue} address={event.address} city={event.city} />

            {/* Organizer Profile */}
            <OrganizerCard organizer={event.organizer} />

            {/* Reviews & Ratings */}
            <ReviewSection eventId={event.id} rating={event.rating} reviewCount={event.reviewCount} />
          </div>

          {/* Sticky Side Column for Quick Info */}
          <div className="col-12 col-lg-4">
            <div className="sticky-top" style={{ top: '96px' }}>
              <div className="bg-white rounded-4 border p-4 shadow-xs mb-4">
                <span className="badge-category badge-music mb-2">{event.categoryName}</span>
                <h4 className="font-heading fw-bold text-dark mb-3 fs-5">
                  Event Snapshot
                </h4>

                <div className="d-flex flex-column gap-3 pb-3 mb-3 border-bottom small">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-light p-2 text-primary">
                      <i className="bi bi-calendar3 fs-5"></i>
                    </div>
                    <div>
                      <div className="text-muted" style={{ fontSize: '0.72rem' }}>DATE & DAY</div>
                      <div className="fw-bold text-dark">{event.displayDate}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-light p-2 text-primary">
                      <i className="bi bi-clock fs-5"></i>
                    </div>
                    <div>
                      <div className="text-muted" style={{ fontSize: '0.72rem' }}>SHOW TIMINGS</div>
                      <div className="fw-bold text-dark">{event.time}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-light p-2 text-primary">
                      <i className="bi bi-geo-alt fs-5"></i>
                    </div>
                    <div>
                      <div className="text-muted" style={{ fontSize: '0.72rem' }}>LOCATION</div>
                      <div className="fw-bold text-dark">{event.venue}, {event.city}</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-3 bg-light p-2 text-primary">
                      <i className="bi bi-tag fs-5"></i>
                    </div>
                    <div>
                      <div className="text-muted" style={{ fontSize: '0.72rem' }}>PASSES STARTING FROM</div>
                      <div className="font-heading fw-extrabold text-primary fs-5">
                        ₹{event.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-coral-custom w-100 py-3 rounded-3 shadow-sm font-heading fw-semibold mb-2"
                  onClick={scrollToTickets}
                >
                  <i className="bi bi-ticket-perforated"></i>
                  Select Passes
                </button>

                <div className="text-center text-muted small" style={{ fontSize: '0.75rem' }}>
                  <i className="bi bi-lock me-1"></i>
                  Official ticketing partner • Guaranteed admission
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related / Recommended Events Section */}
        {relatedEvents.length > 0 && (
          <div className="mt-5 pt-4 border-top">
            <div className="d-flex align-items-end justify-content-between mb-4">
              <div>
                <span className="badge-category badge-sports mb-2">You Might Also Love</span>
                <h3 className="section-title">Similar Experiences</h3>
                <p className="section-subtitle">More popular events happening around the same time.</p>
              </div>
              <Link to="/events" className="btn btn-secondary-custom btn-sm">
                View All Events
              </Link>
            </div>

            <div className="row g-4">
              {relatedEvents.map((rel) => (
                <div key={rel.id} className="col-12 col-md-4">
                  <EventCard event={rel} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
