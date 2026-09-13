import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import OrderSummary from '../../components/booking/OrderSummary';
import PaymentMethods from '../../components/booking/PaymentMethods';
import {
  updateAttendeeInfo,
  updateBillingInfo,
  setLastConfirmedBooking
} from '../../redux/slices/bookingSlice';
import { addNewBooking } from '../../redux/slices/ticketsSlice';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    currentEvent,
    ticketQuantities,
    attendeeInfo,
    billingInfo,
    paymentMethod
  } = useSelector((state) => state.booking);

  const [validated, setValidated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // If no current event or no tickets selected, fallback to the first event with 1 ticket
  const events = useSelector((state) => state.events.events);
  const event = currentEvent || events[0];

  const totalTickets = Object.values(ticketQuantities || {}).reduce((a, b) => a + b, 0) || 1;
  const activeQuantities = Object.keys(ticketQuantities || {}).length > 0
    ? ticketQuantities
    : { [event.ticketTiers[0].id]: 1 };

  // Calculate totals
  const subtotal = event.ticketTiers.reduce((acc, tier) => {
    const qty = activeQuantities[tier.id] || 0;
    return acc + qty * tier.price;
  }, 0);

  const serviceFee = Math.round(subtotal * 0.1);
  const gst = Math.round(serviceFee * 0.18);
  const grandTotal = subtotal + serviceFee + gst;

  const handleAttendeeChange = (e) => {
    dispatch(updateAttendeeInfo({ [e.target.name]: e.target.value }));
  };

  const handleBillingChange = (e) => {
    dispatch(updateBillingInfo({ [e.target.name]: e.target.value }));
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setValidated(true);

    if (!attendeeInfo.name || !attendeeInfo.email || !attendeeInfo.phone) {
      alert('Please fill in all required contact information.');
      return;
    }

    setIsProcessing(true);

    // Simulate gateway processing delay
    setTimeout(() => {
      const bookingId = `EVT-${Math.floor(10000 + Math.random() * 90000)}`;

      // Determine main tier
      const tierKeys = Object.keys(activeQuantities).filter((k) => activeQuantities[k] > 0);
      const mainTier = event.ticketTiers.find((t) => t.id === tierKeys[0]) || event.ticketTiers[0];

      const newBooking = {
        bookingId,
        eventId: event.id,
        eventTitle: event.title,
        category: event.category,
        eventImage: event.image,
        date: event.displayDate,
        time: event.time,
        venue: event.venue + ', ' + event.city,
        ticketType: mainTier.name,
        tierId: mainTier.id,
        quantity: totalTickets,
        pricePerTicket: mainTier.price,
        subtotal,
        fees: serviceFee,
        taxes: gst,
        totalAmount: grandTotal,
        status: 'Upcoming',
        bookingDate: new Date().toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        }),
        attendeeName: attendeeInfo.name,
        attendeeEmail: attendeeInfo.email,
        attendeePhone: attendeeInfo.phone,
        seatInfo: `${mainTier.name} Section - Entry Gate A`,
        paymentMethod
      };

      dispatch(addNewBooking(newBooking));
      dispatch(setLastConfirmedBooking(newBooking));
      setIsProcessing(false);
      navigate(`/booking-confirmation/${bookingId}`);
    }, 1200);
  };

  return (
    <div className="checkout-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Breadcrumb & Flow Indicator */}
        <div className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small text-muted mb-2">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to={`/events/${event.id}`}>{event.title}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Checkout</li>
            </ol>
          </nav>

          <div className="d-flex align-items-center justify-content-between">
            <h1 className="font-heading fw-extrabold text-dark mb-0 fs-2">
              Complete Your Booking
            </h1>
            <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill small">
              Step 2 of 2: Details & Payment
            </span>
          </div>
        </div>

        <form onSubmit={handleConfirmBooking}>
          <div className="row g-4 g-lg-5">
            {/* Left Column: Forms & Payment */}
            <div className="col-12 col-lg-8">
              {/* 1. Contact & Attendee Information */}
              <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                  <div>
                    <h3 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '1.3rem' }}>
                      1. Attendee Information
                    </h3>
                    <p className="text-muted small mb-0">
                      Your digital tickets and QR pass will be delivered to this email and phone.
                    </p>
                  </div>
                  <i className="bi bi-person-circle fs-3 text-primary"></i>
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-control py-2"
                      placeholder="e.g. Rahul Sharma"
                      value={attendeeInfo.name}
                      onChange={handleAttendeeChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-control py-2"
                      placeholder="e.g. rahul@gmail.com"
                      value={attendeeInfo.email}
                      onChange={handleAttendeeChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Mobile Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="form-control py-2"
                      placeholder="+91 98765 43210"
                      value={attendeeInfo.phone}
                      onChange={handleAttendeeChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      City of Residence
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="form-control py-2"
                      placeholder="e.g. Mumbai"
                      value={attendeeInfo.city}
                      onChange={handleAttendeeChange}
                    />
                  </div>
                </div>
              </div>

              {/* 2. Billing Details */}
              <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
                <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                  <div>
                    <h3 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '1.3rem' }}>
                      2. Billing Information
                    </h3>
                    <p className="text-muted small mb-0">For GST invoice generation and verification.</p>
                  </div>
                  <i className="bi bi-receipt fs-3 text-primary"></i>
                </div>

                <div className="row g-3">
                  <div className="col-12">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Billing Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="form-control py-2"
                      placeholder="Flat, building, street..."
                      value={billingInfo.address}
                      onChange={handleBillingChange}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="form-control py-2"
                      placeholder="City"
                      value={billingInfo.city}
                      onChange={handleBillingChange}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      className="form-control py-2"
                      placeholder="State"
                      value={billingInfo.state}
                      onChange={handleBillingChange}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Postal / PIN Code
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      className="form-control py-2"
                      placeholder="400001"
                      value={billingInfo.postalCode}
                      onChange={handleBillingChange}
                    />
                  </div>
                </div>
              </div>

              {/* 3. Payment Methods Component */}
              <PaymentMethods />
            </div>

            {/* Right Column: Order Summary & Checkout Trigger */}
            <div className="col-12 col-lg-4">
              <OrderSummary event={event} ticketQuantities={activeQuantities} isSticky={true} />

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="btn btn-primary-custom w-100 py-3 rounded-3 shadow-lg fs-5 font-heading fw-bold d-flex align-items-center justify-content-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span>Securing Your Passes...</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-shield-check fs-5"></i>
                      <span>Confirm & Pay ₹{grandTotal.toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>

                <p className="text-center text-muted small mt-2 mb-0" style={{ fontSize: '0.75rem' }}>
                  By clicking confirm, you agree to Eventify's Terms and verified entry protocols.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
