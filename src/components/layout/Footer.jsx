import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto position-relative" style={{ backgroundColor: '#0B1120' }}>
      <div className="container-xl">
        {/* Top Newsletter Bar */}
        <div className="p-4 p-md-5 rounded-4 mb-5" style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <span className="badge bg-white text-primary fw-bold text-uppercase px-3 py-2 rounded-pill mb-2" style={{ fontSize: '0.7rem' }}>
                Join 50,000+ Event Enthusiasts
              </span>
              <h3 className="font-heading fw-bold text-white mb-2" style={{ fontSize: '1.8rem' }}>
                Never Miss a Spectacular Event
              </h3>
              <p className="text-white-50 mb-0" style={{ fontSize: '0.95rem' }}>
                Get curated concert line-ups, exclusive pre-sale ticket access, and early-bird discounts directly in your inbox.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              {subscribed ? (
                <div className="alert alert-success d-flex align-items-center gap-2 mb-0 rounded-3 py-3">
                  <i className="bi bi-check-circle-fill fs-5"></i>
                  <div>
                    <span className="fw-bold">You're on the VIP list!</span> Check your inbox soon for your 10% welcome voucher.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="d-flex flex-column flex-sm-row gap-2">
                  <input
                    type="email"
                    required
                    className="form-control form-control-lg bg-white border-0 shadow-sm"
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ fontSize: '0.95rem', borderRadius: '10px' }}
                  />
                  <button type="submit" className="btn btn-coral-custom btn-lg text-nowrap px-4 py-2">
                    <i className="bi bi-send-fill"></i>
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="row g-4 mb-5">
          {/* Col 1: Brand & Bio */}
          <div className="col-12 col-lg-4">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 text-white"
                style={{ width: '38px', height: '38px', background: '#4F46E5' }}
              >
                <i className="bi bi-ticket-perforated-fill fs-5"></i>
              </div>
              <span className="font-heading fw-bold text-white fs-4">Eventify</span>
            </Link>
            <p className="text-white-50 small mb-4 pe-lg-4" style={{ lineHeight: '1.7' }}>
              Eventify is India’s premier startup platform for discovering and booking concerts, tech conferences, sports marathons, comedy specials, and creative workshops. Discover. Book. Experience.
            </p>
            <div className="d-flex align-items-center gap-2">
              <a href="#instagram" className="btn btn-sm btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }} aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#twitter" className="btn btn-sm btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }} aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#linkedin" className="btn btn-sm btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }} aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#youtube" className="btn btn-sm btn-outline-light rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }} aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Discover */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="font-heading fw-bold text-white fs-6 mb-3">Discover</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><Link to="/events" className="text-white-50 text-decoration-none hover-white">All Events</Link></li>
              <li><Link to="/events?category=music" className="text-white-50 text-decoration-none hover-white">Concerts & Gigs</Link></li>
              <li><Link to="/events?category=technology" className="text-white-50 text-decoration-none hover-white">Tech Summits</Link></li>
              <li><Link to="/events?category=sports" className="text-white-50 text-decoration-none hover-white">Sports Marathons</Link></li>
              <li><Link to="/events?category=theater" className="text-white-50 text-decoration-none hover-white">Comedy Specials</Link></li>
              <li><Link to="/categories" className="text-white-50 text-decoration-none hover-white">All Categories</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Cities */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="font-heading fw-bold text-white fs-6 mb-3">Top Cities</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><Link to="/events?city=Mumbai" className="text-white-50 text-decoration-none hover-white">Mumbai Events</Link></li>
              <li><Link to="/events?city=Bangalore" className="text-white-50 text-decoration-none hover-white">Bengaluru Events</Link></li>
              <li><Link to="/events?city=Pune" className="text-white-50 text-decoration-none hover-white">Pune Events</Link></li>
              <li><Link to="/events?city=Delhi" className="text-white-50 text-decoration-none hover-white">Delhi NCR Events</Link></li>
              <li><Link to="/events?city=Hyderabad" className="text-white-50 text-decoration-none hover-white">Hyderabad Events</Link></li>
              <li><Link to="/events?city=Chennai" className="text-white-50 text-decoration-none hover-white">Chennai Events</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="font-heading fw-bold text-white fs-6 mb-3">Company</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><Link to="/about" className="text-white-50 text-decoration-none hover-white">About Eventify</Link></li>
              <li><Link to="/about#team" className="text-white-50 text-decoration-none hover-white">Leadership Team</Link></li>
              <li><Link to="/about#careers" className="text-white-50 text-decoration-none hover-white">Careers</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none hover-white">Media Inquiries</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none hover-white">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Col 5: Help & Legal */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5 className="font-heading fw-bold text-white fs-6 mb-3">Help & Support</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-white-50">
              <li><Link to="/contact" className="text-white-50 text-decoration-none hover-white">Customer Support</Link></li>
              <li><Link to="/contact#faq" className="text-white-50 text-decoration-none hover-white">Ticket FAQs</Link></li>
              <li><Link to="/tickets" className="text-white-50 text-decoration-none hover-white">Booking Status</Link></li>
              <li><Link to="/contact" className="text-white-50 text-decoration-none hover-white">Refund Policy</Link></li>
              <li><span className="text-white-50" style={{ cursor: 'pointer' }} onClick={() => alert('Eventify Terms & Conditions: Verified tickets, transparent pricing, safe entry guarantee.')}>Terms of Service</span></li>
              <li><span className="text-white-50" style={{ cursor: 'pointer' }} onClick={() => alert('Eventify Privacy Policy: User data is encrypted and protected with industry-standard protocols.')}>Privacy Policy</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-white-50 small">
          <div>
            © {new Date().getFullYear()} Eventify Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="d-flex align-items-center gap-1">
              <i className="bi bi-shield-check text-success"></i> 100% Buyer Guarantee
            </span>
            <span>•</span>
            <span className="d-flex align-items-center gap-1">
              <i className="bi bi-lock-fill text-primary"></i> 256-Bit SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
