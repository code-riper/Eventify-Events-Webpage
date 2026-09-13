import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cancelBooking } from '../../redux/slices/ticketsSlice';
import DigitalTicket from '../../components/common/DigitalTicket';
import EmptyState from '../../components/common/EmptyState';

export default function TicketDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tickets } = useSelector((state) => state.tickets);
  const booking = tickets.find((t) => t.bookingId === id);

  const [cancelled, setCancelled] = useState(false);

  if (!booking) {
    return (
      <div className="container-xl py-5">
        <EmptyState
          icon="bi-ticket-detailed"
          title="Ticket Not Found"
          description={`We couldn't locate any ticket with reference "${id}". Please check your booking history.`}
          actionText="Back to My Tickets"
          actionLink="/tickets"
        />
      </div>
    );
  }

  const handleCancelTicket = (bookingId) => {
    if (window.confirm(`Are you sure you want to cancel booking ${bookingId}?`)) {
      dispatch(cancelBooking(bookingId));
      setCancelled(true);
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="ticket-details-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Navigation Breadcrumbs */}
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small text-muted mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/tickets">My Tickets</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{booking.bookingId}</li>
            </ol>
          </nav>

          <Link to="/tickets" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
            <i className="bi bi-arrow-left me-1"></i>
            All My Bookings
          </Link>
        </div>

        {/* Digital Ticket Pass */}
        <div className="mb-5">
          <DigitalTicket
            booking={booking}
            onDownload={handleDownload}
            onCancel={handleCancelTicket}
          />
        </div>

        {/* Entry Guidelines & Terms Box */}
        <div className="mx-auto bg-white rounded-4 border p-4 shadow-xs" style={{ maxWidth: '680px' }}>
          <h4 className="font-heading fw-bold text-dark fs-6 mb-3 d-flex align-items-center gap-2">
            <i className="bi bi-info-circle text-primary"></i>
            Important Venue Entry Guidelines
          </h4>
          <ul className="text-secondary small mb-0 ps-3 d-flex flex-column gap-2">
            <li>Please arrive at the venue at least 45 minutes prior to gate closing time.</li>
            <li>Present this digital ticket QR code or a printed PDF pass alongside a valid government photo ID at the entry turnstile.</li>
            <li>Outside food, beverages, sharp objects, and professional recording cameras are strictly prohibited on the event premises.</li>
            <li>In case of weather rescheduling, your ticket remains automatically valid for the reserve date.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
