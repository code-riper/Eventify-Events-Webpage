import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const stats = [
    { number: '1,200+', label: 'Verified Events Hosted' },
    { number: '250K+', label: 'Passionate Attendees' },
    { number: '18+', label: 'Indian Metropolitan Cities' },
    { number: '99.8%', label: 'Customer Satisfaction Score' }
  ];

  const team = [
    {
      name: 'Aarav Singhania',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      bio: 'Ex-LiveNation, passionate about connecting independent musicians with live stadium audiences.'
    },
    {
      name: 'Dr. Meera Nambiar',
      role: 'Co-Founder & Chief Product Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
      bio: 'Human-computer interaction researcher obsessed with building frictionless ticket checkout flows.'
    },
    {
      name: 'Devraj Patel',
      role: 'Head of Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      bio: 'High-scale infrastructure builder ensuring zero drops during flash concert sales.'
    },
    {
      name: 'Sneha Kapur',
      role: 'Head of Artist & Creator Relations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
      bio: 'Championing emerging indie creators, comedy troupes, and lifestyle festivals nationwide.'
    }
  ];

  return (
    <div className="about-page" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Hero Section */}
      <section className="py-5 py-lg-6 text-white text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)' }}>
        <div className="container-xl position-relative" style={{ zIndex: 2 }}>
          <span className="badge bg-white bg-opacity-10 text-white rounded-pill px-3 py-1 fw-bold small mb-3 d-inline-block font-heading">
            Our Mission & Story
          </span>
          <h1 className="font-heading fw-extrabold text-white mb-3" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: '1.2' }}>
            Eventify helps people discover and <br />
            <span style={{ color: '#818CF8' }}>experience great events.</span>
          </h1>
          <p className="text-white-50 fs-5 mx-auto mb-4" style={{ maxWidth: '680px', lineHeight: '1.6' }}>
            We believe that life’s richest memories happen when people come together to share music, celebrate athletics, master new craft skills, and laugh out loud.
          </p>
          <Link to="/events" className="btn btn-coral-custom btn-lg px-4 py-3 rounded-pill font-heading">
            Explore All Events
          </Link>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-5 bg-white border-bottom">
        <div className="container-xl">
          <div className="row g-4 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="col-6 col-md-3">
                <div className="font-heading fw-extrabold text-primary display-5 mb-1">
                  {item.number}
                </div>
                <div className="text-muted small fw-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eventify */}
      <section className="py-5">
        <div className="container-xl">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '640px' }}>
            <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill fw-bold small mb-2 d-inline-block font-heading">
              Why Choose Us
            </span>
            <h2 className="section-title">Built for Real Fans & Creators</h2>
            <p className="section-subtitle">
              We eliminated the headaches of clunky ticketing to make every step effortless.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: 'bi-shield-check',
                title: '100% Guaranteed Entry',
                desc: 'Every pass is direct from official organizers with encrypted QR codes. Zero scalpers, zero fakes.'
              },
              {
                icon: 'bi-lightning-charge',
                title: 'Sub-second Instant Booking',
                desc: 'Book tickets in under 30 seconds with Google Pay, PhonePe, and instant UPI verification.'
              },
              {
                icon: 'bi-ticket-perforated',
                title: 'Paperless Digital Passes',
                desc: 'All your tickets in one place. Add to Apple Wallet, WhatsApp, or download offline PDFs.'
              },
              {
                icon: 'bi-arrow-repeat',
                title: 'Fair Cancellation Policies',
                desc: 'Life happens. Get hassle-free refunds when organizers reschedule or cancel shows.'
              }
            ].map((feature, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-3">
                <div className="bg-white rounded-4 border p-4 h-100 shadow-xs">
                  <div
                    className="rounded-3 bg-primary-subtle text-primary d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '50px', height: '50px', fontSize: '1.4rem' }}
                  >
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <h4 className="font-heading fw-bold text-dark fs-5 mb-2">{feature.title}</h4>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container-xl">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '640px' }}>
            <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill fw-bold small mb-2 d-inline-block font-heading">
              The People Behind Eventify
            </span>
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle">
              Concertgoers, tech builders, marathon runners, and event enthusiasts building the future of live ticketing.
            </p>
          </div>

          <div className="row g-4">
            {team.map((member, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-3">
                <div className="bg-light rounded-4 border p-4 text-center h-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle mb-3 border border-3 border-white shadow-sm"
                    style={{ width: '110px', height: '110px', objectFit: 'cover' }}
                  />
                  <h4 className="font-heading fw-bold text-dark fs-5 mb-1">{member.name}</h4>
                  <div className="text-primary small fw-semibold font-heading mb-2">{member.role}</div>
                  <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-5">
        <div className="container-xl">
          <div className="p-4 p-md-5 rounded-4 bg-primary text-white text-center shadow-lg position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)' }}>
            <h2 className="font-heading fw-extrabold mb-3">Ready for your next unforgettable memory?</h2>
            <p className="text-white-50 fs-5 mb-4 mx-auto" style={{ maxWidth: '580px' }}>
              Discover live concerts, workshops, and games happening in your city this weekend.
            </p>
            <Link to="/events" className="btn btn-coral-custom btn-lg px-5 py-3 rounded-pill font-heading fw-bold shadow">
              Explore All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
