import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import EventCard from '../../components/common/EventCard';
import CategoryCard from '../../components/common/CategoryCard';
import SearchBar from '../../components/common/SearchBar';
import { initBookingForEvent } from '../../redux/slices/bookingSlice';

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { events, categories } = useSelector((state) => state.events);

  // Filters for home sections
  const trendingEvents = events.filter((e) => e.trending).slice(0, 4);
  const featuredEvent = events.find((e) => e.featured) || events[0];
  const popularNearYou = events.filter((e) => e.popularNearYou).slice(0, 4);

  const [selectedNearCity, setSelectedNearCity] = useState('Mumbai');
  const cityFilteredNearYou = events
    .filter((e) => selectedNearCity === 'All' || e.city.toLowerCase() === selectedNearCity.toLowerCase())
    .slice(0, 4);

  const handleBookFeatured = () => {
    if (featuredEvent) {
      dispatch(initBookingForEvent(featuredEvent));
      navigate(`/events/${featuredEvent.id}`);
    }
  };

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section
        className="position-relative text-white py-5 py-lg-6 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0B1120 0%, #1E1B4B 100%)',
          minHeight: '620px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Decorative background glow accents */}
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(79, 70, 229, 0.25) 0%, rgba(79, 70, 229, 0) 70%)',
            top: '-150px',
            left: '10%',
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }}
        ></div>
        <div
          className="position-absolute rounded-circle"
          style={{
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(255, 90, 95, 0.2) 0%, rgba(255, 90, 95, 0) 70%)',
            bottom: '-100px',
            right: '10%',
            filter: 'blur(50px)',
            pointerEvents: 'none'
          }}
        ></div>

        <div className="container-xl position-relative" style={{ zIndex: 2 }}>
          <div className="text-center mx-auto mb-4 mb-lg-5" style={{ maxWidth: '820px' }}>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white bg-opacity-10 border border-white border-opacity-10 mb-3 animate-fade-in">
              <span className="badge bg-coral rounded-pill" style={{ background: '#FF5A5F' }}>NEW</span>
              <span className="text-white-50 small fw-semibold">Over 1,200+ Live Events Happening Across India</span>
            </div>

            <h1
              className="font-heading fw-extrabold text-white mb-3"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.03em'
              }}
            >
              Discover Events <br />
              <span style={{ color: '#818CF8' }}>You'll Remember.</span>
            </h1>

            <p className="text-white-50 fs-5 mb-4 mx-auto" style={{ maxWidth: '620px', lineHeight: '1.6' }}>
              Your passport to live stadium concerts, cutting-edge tech conferences, marathon runs, indie festivals, and intimate workshops.
            </p>

            {/* Hero Multi-Input Search Box */}
            <div className="mb-4">
              <SearchBar isHero={true} />
            </div>

            {/* Quick Category Suggestions */}
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 pt-2">
              <span className="text-white-50 small fw-semibold me-1">Popular searches:</span>
              <Link to="/events?category=music" className="badge bg-white bg-opacity-10 text-white rounded-pill px-3 py-2 text-decoration-none hover-white">
                🎵 Arijit Singh
              </Link>
              <Link to="/events?category=technology" className="badge bg-white bg-opacity-10 text-white rounded-pill px-3 py-2 text-decoration-none hover-white">
                🤖 AI Summit
              </Link>
              <Link to="/events?category=sports" className="badge bg-white bg-opacity-10 text-white rounded-pill px-3 py-2 text-decoration-none hover-white">
                🏃 Marathon 2026
              </Link>
              <Link to="/events?category=theater" className="badge bg-white bg-opacity-10 text-white rounded-pill px-3 py-2 text-decoration-none hover-white">
                🎭 Comedy Special
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR CATEGORIES */}
      <section className="py-5 bg-white border-bottom">
        <div className="container-xl">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="badge-category badge-music mb-2">Curated Collections</span>
              <h2 className="section-title">Popular Categories</h2>
              <p className="section-subtitle">Explore verified experiences tailored to what you love most.</p>
            </div>
            <Link to="/categories" className="btn btn-secondary-custom font-heading fw-semibold">
              View All Categories <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <div className="row g-3 g-md-4">
            {categories.slice(0, 8).map((cat) => (
              <div key={cat.id} className="col-6 col-md-4 col-lg-3">
                <CategoryCard category={cat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING EVENTS */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-xl">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="badge bg-danger-subtle text-danger border border-danger-subtle rounded-pill px-3 py-1 font-heading fw-bold small mb-2 d-inline-block">
                🔥 Hot Selling
              </span>
              <h2 className="section-title">Trending Events</h2>
              <p className="section-subtitle">The most talked-about events filling up fast this month.</p>
            </div>
            <Link to="/events" className="btn btn-primary-custom">
              View All Events <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row g-4">
            {trendingEvents.map((evt) => (
              <div key={evt.id} className="col-12 col-md-6 col-lg-3">
                <EventCard event={evt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED EVENT PROMOTIONAL BANNER */}
      {featuredEvent && (
        <section className="py-5 bg-white">
          <div className="container-xl">
            <div
              className="rounded-4 overflow-hidden position-relative shadow-xl text-white"
              style={{
                background: `linear-gradient(90deg, rgba(15, 23, 42, 0.96) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(15, 23, 42, 0.4) 100%), url(${featuredEvent.bannerImage || featuredEvent.image}) center/cover no-repeat`,
                minHeight: '440px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div className="p-4 p-md-5" style={{ maxWidth: '640px' }}>
                <div className="d-inline-flex align-items-center gap-2 bg-warning text-dark font-heading fw-bold px-3 py-1 rounded-pill small mb-3">
                  <i className="bi bi-award-fill"></i>
                  FEATURED EXPERIENCE OF THE MONTH
                </div>

                <h2 className="font-heading fw-extrabold text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: '1.2' }}>
                  {featuredEvent.title}
                </h2>

                <p className="text-white-50 mb-4 fs-6 line-clamp-3">
                  {featuredEvent.description}
                </p>

                <div className="d-flex flex-wrap align-items-center gap-4 text-white small mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-calendar3 text-warning fs-5"></i>
                    <span>{featuredEvent.displayDate}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-geo-alt-fill text-danger fs-5"></i>
                    <span>{featuredEvent.venue}, {featuredEvent.city}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-tag-fill text-info fs-5"></i>
                    <span className="fw-bold">Starts ₹{featuredEvent.price}</span>
                  </div>
                </div>

                <div className="d-flex flex-wrap align-items-center gap-3">
                  <button
                    type="button"
                    className="btn btn-coral-custom btn-lg px-4 py-3 rounded-3 shadow-lg"
                    onClick={handleBookFeatured}
                  >
                    <i className="bi bi-ticket-perforated-fill"></i>
                    Book Passes Now
                  </button>

                  <Link
                    to={`/events/${featuredEvent.id}`}
                    className="btn btn-outline-light btn-lg px-4 py-3 rounded-3"
                  >
                    View Full Schedule
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. POPULAR NEAR YOU (WITH CITY SWITCHER) */}
      <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container-xl">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4 gap-3">
            <div>
              <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 font-heading fw-bold small mb-2 d-inline-block">
                📍 Local Highlights
              </span>
              <h2 className="section-title">Popular Near You</h2>
              <p className="section-subtitle">Catch incredible experiences happening right in your city.</p>
            </div>

            {/* City Selector Pills */}
            <div className="d-flex flex-wrap gap-2">
              {['Mumbai', 'Pune', 'Bangalore', 'Delhi'].map((city) => (
                <button
                  key={city}
                  type="button"
                  className={`btn btn-sm px-3 py-1 rounded-pill font-heading fw-semibold ${
                    selectedNearCity === city ? 'btn-primary' : 'btn-white bg-white border text-secondary'
                  }`}
                  onClick={() => setSelectedNearCity(city)}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {cityFilteredNearYou.length > 0 ? (
              cityFilteredNearYou.map((evt) => (
                <div key={evt.id} className="col-12 col-md-6 col-lg-3">
                  <EventCard event={evt} />
                </div>
              ))
            ) : (
              popularNearYou.map((evt) => (
                <div key={evt.id} className="col-12 col-md-6 col-lg-3">
                  <EventCard event={evt} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container-xl">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
            <span className="badge bg-primary-subtle text-primary px-3 py-1 rounded-pill fw-bold small mb-2 d-inline-block font-heading">
              Simple & Seamless
            </span>
            <h2 className="section-title">How Eventify Works</h2>
            <p className="section-subtitle">
              From finding your next weekend plan to walking through the venue gates in 4 effortless steps.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Browse hundreds of verified events, filter by genre, city, or date, and discover trending experiences.',
                icon: 'bi-compass',
                color: '#4F46E5',
                bg: '#EEF2FF'
              },
              {
                step: '02',
                title: 'Select',
                desc: 'Choose your desired ticket tier (VIP, Premium, General), compare perks, and choose seat quantities.',
                icon: 'bi-ticket-detailed',
                color: '#7C3AED',
                bg: '#EDE9FE'
              },
              {
                step: '03',
                title: 'Book',
                desc: 'Instant and secure checkout via UPI, Cards, or Net Banking with transparent pricing and zero hidden fees.',
                icon: 'bi-credit-card-2-front',
                color: '#FF5A5F',
                bg: '#FFF1F2'
              },
              {
                step: '04',
                title: 'Experience',
                desc: 'Receive digital passes with verified QR codes instantly on your phone. Flash at entry and enjoy!',
                icon: 'bi-stars',
                color: '#10B981',
                bg: '#D1FAE5'
              }
            ].map((item) => (
              <div key={item.step} className="col-12 col-sm-6 col-lg-3">
                <div className="p-4 rounded-4 bg-light border h-100 position-relative">
                  <div
                    className="font-heading fw-extrabold position-absolute top-0 end-0 m-3"
                    style={{ fontSize: '2.5rem', color: '#cbd5e1', opacity: 0.5 }}
                  >
                    {item.step}
                  </div>
                  <div
                    className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: item.bg,
                      color: item.color,
                      fontSize: '1.5rem'
                    }}
                  >
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h4 className="font-heading fw-bold text-dark fs-5 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-secondary small mb-0" style={{ lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
