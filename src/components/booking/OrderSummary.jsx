import React from 'react';

export default function OrderSummary({
  event,
  ticketQuantities = {},
  isSticky = true
}) {
  if (!event) return null;

  // Compute breakdown
  const tiers = event.ticketTiers || [];
  const selectedTiers = tiers.filter((t) => (ticketQuantities[t.id] || 0) > 0);

  const subtotal = selectedTiers.reduce((sum, t) => {
    return sum + (ticketQuantities[t.id] || 0) * t.price;
  }, 0);

  const serviceFee = Math.round(subtotal * 0.1); // 10% platform fee
  const gst = Math.round(serviceFee * 0.18); // 18% GST on service fee
  const grandTotal = subtotal + serviceFee + gst;

  return (
    <div
      className={`rounded-4 bg-white border p-4 shadow-xs ${isSticky ? 'sticky-top' : ''}`}
      style={{ top: isSticky ? '96px' : 'auto' }}
    >
      <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
        <h4 className="font-heading fw-bold text-dark mb-0 fs-5">
          Order Summary
        </h4>
        <span className="badge bg-light text-muted border rounded-pill px-2 py-1 small">
          {selectedTiers.reduce((acc, t) => acc + (ticketQuantities[t.id] || 0), 0)} Tickets
        </span>
      </div>

      {/* Mini Event Info */}
      <div className="d-flex gap-3 align-items-center mb-3 pb-3 border-bottom">
        <img
          src={event.image}
          alt={event.title}
          className="rounded-3 border"
          style={{ width: '64px', height: '64px', objectFit: 'cover' }}
        />
        <div>
          <h6 className="font-heading fw-bold text-dark mb-1 line-clamp-1" style={{ fontSize: '0.95rem' }}>
            {event.title}
          </h6>
          <div className="text-muted small">
            <i className="bi bi-calendar3 me-1 text-primary"></i>
            {event.displayDate}
          </div>
          <div className="text-muted small line-clamp-1">
            <i className="bi bi-geo-alt me-1 text-danger"></i>
            {event.venue}
          </div>
        </div>
      </div>

      {/* Tier Breakdown */}
      <div className="d-flex flex-column gap-2 mb-3 pb-3 border-bottom">
        {selectedTiers.map((tier) => {
          const qty = ticketQuantities[tier.id];
          const totalTierPrice = qty * tier.price;

          return (
            <div key={tier.id} className="d-flex align-items-center justify-content-between small">
              <div>
                <span className="fw-semibold text-dark">{tier.name}</span>
                <span className="text-muted ms-1">× {qty}</span>
              </div>
              <span className="font-heading fw-semibold text-dark">
                ₹{totalTierPrice.toLocaleString('en-IN')}
              </span>
            </div>
          );
        })}
      </div>

      {/* Charges Breakdown */}
      <div className="d-flex flex-column gap-2 small mb-3 pb-3 border-bottom text-muted">
        <div className="d-flex justify-content-between">
          <span>Ticket Subtotal</span>
          <span className="fw-semibold text-dark">₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Convenience Fee (10%)</span>
          <span className="fw-semibold text-dark">₹{serviceFee.toLocaleString('en-IN')}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Integrated GST (18%)</span>
          <span className="fw-semibold text-dark">₹{gst.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <div className="font-heading fw-extrabold text-dark fs-5">Total Amount</div>
          <div className="text-muted" style={{ fontSize: '0.72rem' }}>Inclusive of all taxes</div>
        </div>
        <div className="font-heading fw-extrabold text-primary fs-3">
          ₹{grandTotal.toLocaleString('en-IN')}
        </div>
      </div>

      {/* Security note */}
      <div className="d-flex align-items-center gap-2 text-muted small bg-light p-2 rounded-3">
        <i className="bi bi-shield-lock-fill text-success fs-6"></i>
        <span style={{ fontSize: '0.78rem' }}>100% Secure Checkout with 256-bit encryption</span>
      </div>
    </div>
  );
}
