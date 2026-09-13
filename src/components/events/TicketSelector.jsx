import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTicketQuantity } from '../../redux/slices/bookingSlice';
import QuantitySelector from '../common/QuantitySelector';

export default function TicketSelector({ event }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ticketQuantities = useSelector((state) => state.booking.ticketQuantities || {});

  if (!event || !event.ticketTiers) return null;

  // Calculate totals
  const totalTickets = Object.values(ticketQuantities).reduce((a, b) => a + b, 0);

  const subtotal = event.ticketTiers.reduce((acc, tier) => {
    const qty = ticketQuantities[tier.id] || 0;
    return acc + qty * tier.price;
  }, 0);

  const handleQtyChange = (tierId, newQty) => {
    dispatch(setTicketQuantity({ tierId, quantity: newQty }));
  };

  const handleProceedToCheckout = () => {
    if (totalTickets === 0) {
      alert('Please select at least 1 ticket to proceed.');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div id="tickets-section" className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 pb-3 border-bottom">
        <div>
          <h3 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '1.4rem' }}>
            Select Your Tickets
          </h3>
          <p className="text-muted small mb-0">
            Choose your preferred ticket tier. Maximum 10 tickets per transaction.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 text-success fw-bold small">
          <i className="bi bi-shield-check fs-5"></i>
          <span>Guaranteed Authentic Tickets</span>
        </div>
      </div>

      {/* Ticket Tiers List */}
      <div className="d-flex flex-column gap-3 mb-4">
        {event.ticketTiers.map((tier) => {
          const count = ticketQuantities[tier.id] || 0;
          const isSelected = count > 0;

          return (
            <div
              key={tier.id}
              className={`p-4 rounded-4 border transition-normal ${
                isSelected ? 'border-primary bg-primary-subtle bg-opacity-10 shadow-sm' : 'border-light-subtle bg-light'
              }`}
              style={{
                transition: 'all 0.2s ease',
                borderColor: isSelected ? '#4F46E5' : '#e2e8f0'
              }}
            >
              <div className="row g-3 align-items-center">
                <div className="col-12 col-md-7">
                  <div className="d-flex align-items-center gap-2 mb-1">
                    <h4 className="font-heading fw-bold text-dark mb-0 fs-5">
                      {tier.name}
                    </h4>
                    {tier.id === 'vip' && (
                      <span className="badge bg-warning text-dark fw-bold rounded-pill" style={{ fontSize: '0.65rem' }}>
                        FAST FILLING
                      </span>
                    )}
                  </div>
                  <p className="text-muted small mb-2">{tier.description}</p>
                  
                  {tier.perks && tier.perks.length > 0 && (
                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {tier.perks.map((perk, i) => (
                        <span
                          key={i}
                          className="badge bg-white text-secondary border rounded-pill px-2 py-1"
                          style={{ fontSize: '0.72rem' }}
                        >
                          <i className="bi bi-check2 text-primary me-1"></i>
                          {perk}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-5">
                  <div className="d-flex align-items-center justify-content-between justify-content-md-end gap-4">
                    <div className="text-md-end">
                      <div className="font-heading fw-extrabold text-dark fs-4">
                        ₹{tier.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-muted" style={{ fontSize: '0.72rem' }}>
                        {tier.availableCount} passes left
                      </div>
                    </div>

                    <QuantitySelector
                      value={count}
                      min={0}
                      max={Math.min(10, tier.availableCount)}
                      onChange={(newQty) => handleQtyChange(tier.id, newQty)}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Order Subtotal & CTA */}
      <div className="p-4 rounded-4 bg-light border d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div>
          <span className="text-muted small d-block">Current Selection</span>
          <div className="d-flex align-items-baseline gap-2">
            <span className="font-heading fw-extrabold text-dark fs-3">
              ₹{subtotal.toLocaleString('en-IN')}
            </span>
            <span className="text-muted small">
              ({totalTickets} {totalTickets === 1 ? 'ticket' : 'tickets'})
            </span>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary-custom btn-lg px-4 py-3 rounded-3 shadow-md"
          disabled={totalTickets === 0}
          onClick={handleProceedToCheckout}
          style={{ opacity: totalTickets === 0 ? 0.6 : 1 }}
        >
          <span>Continue to Checkout</span>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
