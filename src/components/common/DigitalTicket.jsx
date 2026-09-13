import React from 'react';

export default function DigitalTicket({ booking, onDownload, onCancel }) {
  if (!booking) return null;

  return (
    <div
      className="digital-ticket-card mx-auto bg-white rounded-4 overflow-hidden border shadow-lg"
      style={{ maxWidth: '680px', position: 'relative' }}
    >
      {/* Ticket Header with Event Image & Gradient */}
      <div
        className="position-relative p-4 p-md-5 text-white"
        style={{
          background: `linear-gradient(180deg, rgba(15, 23, 42, 0.4) 0%, rgba(15, 23, 42, 0.95) 100%), url(${booking.eventImage}) center/cover no-repeat`,
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >
        <div className="position-absolute top-0 start-0 m-3 m-md-4 d-flex align-items-center gap-2">
          <span
            className="badge rounded-pill px-3 py-2 text-uppercase fw-bold font-heading"
            style={{
              background:
                booking.status === 'Cancelled'
                  ? '#ef4444'
                  : booking.status === 'Past'
                  ? '#64748b'
                  : '#10b981',
              color: '#ffffff',
              fontSize: '0.75rem',
              letterSpacing: '0.05em'
            }}
          >
            {booking.status === 'Cancelled' ? 'Booking Cancelled' : booking.status === 'Past' ? 'Completed Event' : 'Verified Pass'}
          </span>
        </div>

        <div className="position-absolute top-0 end-0 m-3 m-md-4 text-end">
          <div className="text-white-50 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}>
            Booking Reference
          </div>
          <div className="font-heading fw-bold text-white fs-6">
            {booking.bookingId}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="font-heading fw-bold text-white mb-2" style={{ fontSize: '1.6rem' }}>
            {booking.eventTitle}
          </h2>
          <div className="d-flex flex-wrap align-items-center gap-3 text-white-50 small">
            <span className="d-flex align-items-center gap-1 text-white">
              <i className="bi bi-calendar3 text-warning"></i>
              {booking.date}
            </span>
            <span>•</span>
            <span className="d-flex align-items-center gap-1 text-white">
              <i className="bi bi-clock text-warning"></i>
              {booking.time}
            </span>
          </div>
        </div>
      </div>

      {/* Perforated Divider Bar */}
      <div
        className="d-flex align-items-center justify-content-between position-relative px-3 py-2 bg-light border-top border-bottom"
        style={{ overflow: 'hidden' }}
      >
        {/* Left Cutout Circle */}
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-main)',
            marginLeft: '-25px',
            border: '1px solid #cbd5e1'
          }}
        ></div>

        {/* Dashed Line */}
        <div
          className="flex-grow-1 mx-3"
          style={{ borderTop: '2px dashed #cbd5e1' }}
        ></div>

        {/* Right Cutout Circle */}
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-main)',
            marginRight: '-25px',
            border: '1px solid #cbd5e1'
          }}
        ></div>
      </div>

      {/* Ticket Body & QR Code */}
      <div className="p-4 p-md-5">
        <div className="row g-4 align-items-center">
          {/* Information Columns */}
          <div className="col-12 col-md-8">
            <div className="row g-3">
              <div className="col-6">
                <span className="text-muted text-uppercase d-block fw-semibold" style={{ fontSize: '0.7rem' }}>
                  Venue / Location
                </span>
                <span className="font-heading fw-bold text-dark d-block" style={{ fontSize: '0.95rem' }}>
                  {booking.venue}
                </span>
              </div>

              <div className="col-6">
                <span className="text-muted text-uppercase d-block fw-semibold" style={{ fontSize: '0.7rem' }}>
                  Ticket Type
                </span>
                <span className="font-heading fw-bold text-primary d-block" style={{ fontSize: '0.95rem' }}>
                  {booking.ticketType || 'Standard Entry'}
                </span>
              </div>

              <div className="col-6">
                <span className="text-muted text-uppercase d-block fw-semibold" style={{ fontSize: '0.7rem' }}>
                  Attendee Name
                </span>
                <span className="font-heading fw-bold text-dark d-block" style={{ fontSize: '0.95rem' }}>
                  {booking.attendeeName || 'Guest Attendee'}
                </span>
              </div>

              <div className="col-6">
                <span className="text-muted text-uppercase d-block fw-semibold" style={{ fontSize: '0.7rem' }}>
                  Quantity
                </span>
                <span className="font-heading fw-bold text-dark d-block" style={{ fontSize: '0.95rem' }}>
                  {booking.quantity} {booking.quantity === 1 ? 'Ticket' : 'Tickets'}
                </span>
              </div>

              {booking.seatInfo && (
                <div className="col-12">
                  <span className="text-muted text-uppercase d-block fw-semibold" style={{ fontSize: '0.7rem' }}>
                    Seat Allocation
                  </span>
                  <span className="font-heading fw-semibold text-secondary d-block" style={{ fontSize: '0.9rem' }}>
                    {booking.seatInfo}
                  </span>
                </div>
              )}

              <div className="col-12">
                <div className="p-3 bg-light rounded-3 d-flex justify-content-between align-items-center">
                  <span className="text-muted small">Total Paid Amount:</span>
                  <span className="font-heading fw-bold text-dark fs-5">
                    ₹{(booking.totalAmount || (booking.pricePerTicket * booking.quantity)).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code & Barcode Placeholder */}
          <div className="col-12 col-md-4 text-center">
            <div
              className="p-3 bg-white border rounded-3 shadow-xs d-inline-block mx-auto"
              style={{ maxWidth: '180px' }}
            >
              {/* Realistic CSS / SVG QR Code Representation */}
              <div
                className="d-flex align-items-center justify-content-center bg-light rounded p-2 mb-2"
                style={{ width: '140px', height: '140px', border: '1px solid #e2e8f0' }}
              >
                <svg
                  viewBox="0 0 100 100"
                  width="100%"
                  height="100%"
                  fill="#0F172A"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM40 0h10v20H40zM50 10h20v10H50zM0 40h20v10H0zM30 40h20v10H30zM60 40h10v10H60zM80 40h20v20H80zM40 30h10v30H40zM20 60h20v10H20zM50 60h20v10H50zM40 70h20v10H40zM70 70h10v30H70zM20 90h10v10H20zM50 90h20v10H50zM90 80h10v20H90z" />
                </svg>
              </div>
              <div className="text-muted fw-bold" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                SCAN AT ENTRY GATE
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-4 pt-3 border-top d-flex flex-wrap align-items-center justify-content-between gap-2">
          <div className="d-flex align-items-center gap-2">
            <button
              type="button"
              className="btn btn-sm btn-primary-custom"
              onClick={() => onDownload ? onDownload(booking) : window.print()}
            >
              <i className="bi bi-download"></i>
              Download PDF Pass
            </button>
            <button
              type="button"
              className="btn btn-sm btn-secondary-custom"
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Ticket link copied to clipboard!');
                }
              }}
            >
              <i className="bi bi-share"></i>
              Share Pass
            </button>
          </div>

          {booking.status === 'Upcoming' && onCancel && (
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={() => onCancel(booking.bookingId)}
            >
              <i className="bi bi-x-circle me-1"></i>
              Cancel Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
