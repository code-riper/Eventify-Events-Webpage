import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DigitalTicket from '../../components/common/DigitalTicket';

export default function ConfirmationPage() {
  const { id } = useParams();
  const { lastConfirmedBooking } = useSelector((state) => state.booking);
  const { tickets } = useSelector((state) => state.tickets);

  // Find booking by ID or use last confirmed booking or first ticket
  const booking =
    (id && tickets.find((t) => t.bookingId === id)) ||
    lastConfirmedBooking ||
    tickets[0];

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="confirmation-page py-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Success Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '640px' }}>
          <div
            className="rounded-circle d-inline-flex align-items-center justify-content-center bg-success text-white shadow-lg mb-3 animate-fade-in"
            style={{ width: '80px', height: '80px', fontSize: '2.4rem' }}
          >
            <i className="bi bi-check-lg"></i>
          </div>

          <h1 className="font-heading fw-extrabold text-dark mb-2" style={{ fontSize: '2.4rem' }}>
            Booking Confirmed!
          </h1>
          <p className="text-secondary fs-5 mb-3">
            Your passes are ready. A confirmation email with receipt and QR entry codes has been sent to{' '}
            <strong className="text-dark">{booking?.attendeeEmail || 'your email'}</strong>.
          </p>

          <div className="d-inline-flex align-items-center gap-2 bg-white px-4 py-2 rounded-pill border shadow-xs">
            <span className="text-muted small fw-semibold">BOOKING REFERENCE:</span>
            <span className="font-heading fw-bold text-primary fs-6">{booking?.bookingId}</span>
          </div>
        </div>

        {/* Digital Ticket Pass Presentation */}
        {booking && (
          <div className="mb-5">
            <DigitalTicket booking={booking} onDownload={handleDownload} />
          </div>
        )}

        {/* Quick Action Navigation Buttons */}
        <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
          <Link to="/tickets" className="btn btn-primary-custom px-4 py-3 rounded-pill font-heading fw-semibold">
            <i className="bi bi-ticket-detailed"></i>
            View in My Tickets
          </Link>

          <button
            type="button"
            className="btn btn-secondary-custom px-4 py-3 rounded-pill font-heading fw-semibold"
            onClick={handleDownload}
          >
            <i className="bi bi-printer"></i>
            Print / Save Ticket
          </button>

          <Link to="/" className="btn btn-outline-secondary px-4 py-3 rounded-pill font-heading fw-semibold">
            <i className="bi bi-house"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
