import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cancelBooking } from '../../redux/slices/ticketsSlice';
import EmptyState from '../../components/common/EmptyState';

export default function TicketsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.tickets);

  const [activeTab, setActiveTab] = useState('All'); // 'All', 'Upcoming', 'Past', 'Cancelled'
  const [cancelModalId, setCancelModalId] = useState(null);

  const filteredTickets = tickets.filter((t) => {
    if (activeTab === 'All') return true;
    return t.status.toLowerCase() === activeTab.toLowerCase();
  });

  const handleConfirmCancel = () => {
    if (cancelModalId) {
      dispatch(cancelBooking(cancelModalId));
      setCancelModalId(null);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Upcoming':
        return <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-1 fw-bold">Confirmed</span>;
      case 'Past':
        return <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle rounded-pill px-3 py-1 fw-bold">Attended</span>;
      case 'Cancelled':
        return <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1 fw-bold">Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <div className="my-tickets-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div>
            <h1 className="font-heading fw-extrabold text-dark mb-1 fs-2">
              My Booked Tickets
            </h1>
            <p className="text-muted small mb-0">
              Manage your upcoming event admissions, past bookings, and entry passes.
            </p>
          </div>
          <Link to="/events" className="btn btn-primary-custom btn-sm px-4 py-2 font-heading">
            <i className="bi bi-plus-lg"></i>
            Book More Events
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="d-flex flex-wrap gap-2 mb-4 pb-2 border-bottom">
          {['All', 'Upcoming', 'Past', 'Cancelled'].map((tab) => {
            const count =
              tab === 'All'
                ? tickets.length
                : tickets.filter((t) => t.status.toLowerCase() === tab.toLowerCase()).length;

            return (
              <button
                key={tab}
                type="button"
                className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold position-relative ${
                  activeTab === tab ? 'btn-primary' : 'btn-white bg-white border text-secondary'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <span>{tab}</span>
                <span
                  className={`badge rounded-pill ms-2 ${
                    activeTab === tab ? 'bg-white text-primary' : 'bg-light text-muted border'
                  }`}
                  style={{ fontSize: '0.72rem' }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Ticket Cards List */}
        {filteredTickets.length > 0 ? (
          <div className="d-flex flex-column gap-4">
            {filteredTickets.map((ticket) => (
              <div
                key={ticket.bookingId}
                className="bg-white rounded-4 border p-4 shadow-xs transition-normal"
                style={{ transition: 'all 0.2s ease' }}
              >
                <div className="row g-4 align-items-center">
                  {/* Event Thumbnail */}
                  <div className="col-12 col-md-3">
                    <img
                      src={ticket.eventImage}
                      alt={ticket.eventTitle}
                      className="rounded-3 w-100 object-fit-cover"
                      style={{ height: '140px', objectFit: 'cover' }}
                    />
                  </div>

                  {/* Ticket Details */}
                  <div className="col-12 col-md-6">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      {getStatusBadge(ticket.status)}
                      <span className="text-muted small font-heading fw-bold">
                        ID: {ticket.bookingId}
                      </span>
                    </div>

                    <h3 className="font-heading fw-bold text-dark fs-5 mb-2">
                      {ticket.eventTitle}
                    </h3>

                    <div className="d-flex flex-wrap align-items-center gap-3 text-muted small mb-2">
                      <span className="d-flex align-items-center gap-1">
                        <i className="bi bi-calendar3 text-primary"></i>
                        {ticket.date}
                      </span>
                      <span>•</span>
                      <span className="d-flex align-items-center gap-1">
                        <i className="bi bi-clock text-primary"></i>
                        {ticket.time}
                      </span>
                    </div>

                    <div className="text-secondary small mb-2">
                      <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                      {ticket.venue}
                    </div>

                    <div className="d-flex flex-wrap align-items-center gap-2 small">
                      <span className="badge bg-light text-dark border">
                        {ticket.ticketType}
                      </span>
                      <span className="badge bg-light text-dark border">
                        {ticket.quantity} {ticket.quantity === 1 ? 'Ticket' : 'Tickets'}
                      </span>
                      <span className="fw-bold text-dark font-heading ms-2">
                        Total: ₹{(ticket.totalAmount || (ticket.pricePerTicket * ticket.quantity)).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="col-12 col-md-3 text-md-end">
                    <div className="d-flex flex-column gap-2 justify-content-center">
                      <Link
                        to={`/tickets/${ticket.bookingId}`}
                        className="btn btn-primary-custom w-100 py-2 small"
                      >
                        <i className="bi bi-qr-code"></i>
                        View Digital Pass
                      </Link>

                      <button
                        type="button"
                        className="btn btn-secondary-custom w-100 py-2 small"
                        onClick={() => window.print()}
                      >
                        <i className="bi bi-download"></i>
                        Download PDF
                      </button>

                      {ticket.status === 'Upcoming' && (
                        <button
                          type="button"
                          className="btn btn-outline-danger w-100 py-2 small"
                          onClick={() => setCancelModalId(ticket.bookingId)}
                        >
                          Cancel Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="bi-ticket-perforated"
            title={`No ${activeTab !== 'All' ? activeTab.toLowerCase() : ''} bookings found`}
            description="You don't have any bookings in this section. Explore our catalog of trending live events to book your next pass!"
            actionText="Discover Events"
            actionLink="/events"
          />
        )}
      </div>

      {/* Cancel Confirmation Modal */}
      {cancelModalId && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center animate-fade-in p-3"
          style={{ zIndex: 1070 }}
        >
          <div className="bg-white rounded-4 p-4 p-md-5 max-w-sm w-100 shadow-xl border" style={{ maxWidth: '440px' }}>
            <div className="text-center mb-4">
              <div
                className="rounded-circle bg-danger-subtle text-danger d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '60px', height: '60px', fontSize: '1.8rem' }}
              >
                <i className="bi bi-exclamation-triangle-fill"></i>
              </div>
              <h4 className="font-heading fw-bold text-dark mb-2">Cancel Ticket Booking?</h4>
              <p className="text-muted small mb-0">
                Are you sure you want to cancel booking <strong>{cancelModalId}</strong>? As per our policy, a 100% refund will be credited to your original payment mode within 3-5 business days.
              </p>
            </div>

            <div className="d-grid gap-2">
              <button
                type="button"
                className="btn btn-danger py-2 fw-semibold"
                onClick={handleConfirmCancel}
              >
                Yes, Cancel Booking
              </button>
              <button
                type="button"
                className="btn btn-light py-2 fw-semibold border"
                onClick={() => setCancelModalId(null)}
              >
                Keep Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
