import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Booking Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: 'Booking Inquiry', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const faqs = [
    {
      q: 'How do I receive my booked tickets?',
      a: 'Once your payment is verified, your digital ticket with an entry QR code is immediately available under "My Tickets" and sent to your registered email and WhatsApp number.'
    },
    {
      q: 'Can I cancel or reschedule my tickets?',
      a: 'Yes, upcoming tickets can be cancelled up to 24 hours prior to the event commencement date from your "My Tickets" dashboard for eligible events with full or partial refunds.'
    },
    {
      q: 'Do I need to carry a printed physical copy?',
      a: 'No! Eventify supports 100% paperless digital passes. Simply show the QR code on your mobile phone screen at the venue gate turnstiles.'
    },
    {
      q: 'What should I do if my payment was deducted but booking failed?',
      a: 'In the rare case of a gateway timeout, any deducted amount is automatically refunded by your issuing bank within 24 to 48 hours. You can also reach our 24/7 support desk with your transaction reference.'
    }
  ];

  return (
    <div className="contact-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '640px' }}>
          <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill fw-bold small mb-2 d-inline-block font-heading">
            24/7 Dedicated Support
          </span>
          <h1 className="font-heading fw-extrabold text-dark mb-2 fs-2">
            We're Here to Help
          </h1>
          <p className="text-muted">
            Have a question about your tickets, an organizer partnership, or need venue assistance? Reach out anytime.
          </p>
        </div>

        {/* Support Channels Cards */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-4">
            <div className="bg-white rounded-4 border p-4 text-center h-100 shadow-xs">
              <div
                className="rounded-circle bg-primary-subtle text-primary d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '56px', height: '56px', fontSize: '1.5rem' }}
              >
                <i className="bi bi-envelope-fill"></i>
              </div>
              <h4 className="font-heading fw-bold text-dark fs-5 mb-1">Email Support</h4>
              <p className="text-muted small mb-3">Our team typically responds in under 2 hours.</p>
              <a href="mailto:support@eventify.internal" className="fw-semibold text-primary text-decoration-none font-heading">
                support@eventify.in
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-white rounded-4 border p-4 text-center h-100 shadow-xs">
              <div
                className="rounded-circle bg-success-subtle text-success d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '56px', height: '56px', fontSize: '1.5rem' }}
              >
                <i className="bi bi-whatsapp"></i>
              </div>
              <h4 className="font-heading fw-bold text-dark fs-5 mb-1">WhatsApp Desk</h4>
              <p className="text-muted small mb-3">Instant gate entry support & ticket delivery.</p>
              <a href="https://wa.me/919876543210" className="fw-semibold text-success text-decoration-none font-heading">
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="bg-white rounded-4 border p-4 text-center h-100 shadow-xs">
              <div
                className="rounded-circle bg-warning-subtle text-warning d-inline-flex align-items-center justify-content-center mb-3"
                style={{ width: '56px', height: '56px', fontSize: '1.5rem' }}
              >
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <h4 className="font-heading fw-bold text-dark fs-5 mb-1">Headquarters</h4>
              <p className="text-muted small mb-2">Eventify Tech Hub, Bandra Kurla Complex</p>
              <span className="text-dark small fw-semibold">Mumbai, Maharashtra 400051</span>
            </div>
          </div>
        </div>

        {/* Contact Form & FAQ Row */}
        <div className="row g-4 g-lg-5">
          {/* Contact Form */}
          <div className="col-12 col-lg-6">
            <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs h-100">
              <h3 className="font-heading fw-bold text-dark mb-2 fs-4">
                Send Us a Message
              </h3>
              <p className="text-muted small mb-4">
                Fill out the form below and our customer success desk will get back to you promptly.
              </p>

              {submitted && (
                <div className="alert alert-success d-flex align-items-center gap-2 mb-4 rounded-3">
                  <i className="bi bi-check-circle-fill fs-5"></i>
                  <div>Thank you! Your message has been received. Ticket ticket #49281 opened.</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Your Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control py-2"
                    placeholder="e.g. Ananya Roy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control py-2"
                    placeholder="ananya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Subject / Query Type
                  </label>
                  <select
                    className="form-select py-2"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Booking Inquiry">Booking Inquiry</option>
                    <option value="Ticket Cancellation / Refund">Ticket Cancellation / Refund</option>
                    <option value="Host an Event on Eventify">Host an Event on Eventify</option>
                    <option value="Technical Support">Technical Support</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="form-control"
                    placeholder="Describe how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary-custom w-100 py-3 rounded-3 font-heading fw-bold">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="col-12 col-lg-6">
            <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs h-100">
              <h3 className="font-heading fw-bold text-dark mb-2 fs-4">
                Frequently Asked Questions
              </h3>
              <p className="text-muted small mb-4">
                Quick answers to common questions about ticket bookings and admissions.
              </p>

              <div className="accordion accordion-flush" id="faqAccordion">
                {faqs.map((faq, idx) => (
                  <div className="accordion-item border-bottom mb-3 pb-2" key={idx}>
                    <h2 className="accordion-header" id={`heading${idx}`}>
                      <button
                        className="accordion-button collapsed px-0 font-heading fw-bold text-dark bg-transparent shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${idx}`}
                        aria-expanded="false"
                        aria-controls={`collapse${idx}`}
                        style={{ fontSize: '1rem' }}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse${idx}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${idx}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body px-0 text-secondary small" style={{ lineHeight: '1.7' }}>
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
