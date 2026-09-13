import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [navSearch, setNavSearch] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds);
  const tickets = useSelector((state) => state.tickets.tickets);
  const upcomingCount = tickets.filter((t) => t.status === 'Upcoming').length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavSearch = (e) => {
    e.preventDefault();
    if (navSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(navSearch.trim())}`);
      setNavSearch('');
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <>
      <header
        className={`fixed-top glass-nav ${isScrolled ? 'scrolled' : ''}`}
        style={{ zIndex: 1030 }}
      >
        <div className="container-xl">
          <div className="d-flex align-items-center justify-content-between py-3">
            {/* Brand Logo */}
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 text-white shadow-sm"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)'
                }}
              >
                <i className="bi bi-ticket-perforated-fill fs-5"></i>
              </div>
              <div className="d-flex flex-column">
                <span className="font-heading fw-extrabold text-dark fs-4 lh-1 tracking-tight">
                  Event<span style={{ color: '#4F46E5' }}>ify</span>
                </span>
                <span className="text-muted text-uppercase" style={{ fontSize: '0.62rem', letterSpacing: '0.12em' }}>
                  Discover • Book • Experience
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="d-none d-lg-flex align-items-center gap-4">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `text-decoration-none fw-semibold font-heading ${
                    isActive ? 'text-primary' : 'text-dark'
                  }`
                }
              >
                Explore Events
              </NavLink>

              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  `text-decoration-none fw-semibold font-heading ${
                    isActive ? 'text-primary' : 'text-dark'
                  }`
                }
              >
                Categories
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-decoration-none fw-semibold font-heading ${
                    isActive ? 'text-primary' : 'text-dark'
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-decoration-none fw-semibold font-heading ${
                    isActive ? 'text-primary' : 'text-dark'
                  }`
                }
              >
                Help & Contact
              </NavLink>
            </nav>

            {/* Search Input (Desktop) */}
            <form onSubmit={handleNavSearch} className="d-none d-xl-flex align-items-center" style={{ width: '260px' }}>
              <div className="input-group input-group-sm bg-light rounded-pill border px-2 py-1">
                <span className="input-group-text bg-transparent border-0 text-muted p-0 ps-1">
                  <i className="bi bi-search text-primary"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0 bg-transparent shadow-none small"
                  placeholder="Search events..."
                  value={navSearch}
                  onChange={(e) => setNavSearch(e.target.value)}
                />
              </div>
            </form>

            {/* Actions: Favorites, My Tickets & Auth Profile */}
            <div className="d-flex align-items-center gap-2 gap-md-3">
              {/* Favorites Icon */}
              <Link
                to="/favorites"
                className="btn btn-light rounded-circle p-0 position-relative d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', border: '1px solid #e2e8f0' }}
                title="Saved Events"
                aria-label="Favorites"
              >
                <i className="bi bi-heart text-secondary fs-6"></i>
                {favoriteIds.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '0.65rem' }}
                  >
                    {favoriteIds.length}
                  </span>
                )}
              </Link>

              {/* My Tickets Button */}
              <Link
                to="/tickets"
                className="btn btn-light rounded-pill px-3 py-2 d-none d-md-inline-flex align-items-center gap-2 border font-heading fw-semibold small"
                style={{ borderColor: '#e2e8f0' }}
                title="My Booked Tickets"
              >
                <i className="bi bi-ticket-detailed text-primary fs-6"></i>
                <span>My Tickets</span>
                {upcomingCount > 0 && (
                  <span className="badge bg-primary rounded-pill" style={{ fontSize: '0.65rem' }}>
                    {upcomingCount}
                  </span>
                )}
              </Link>

              {/* User Profile or Login/Register */}
              {isAuthenticated ? (
                <div className="position-relative">
                  <button
                    type="button"
                    className="btn p-0 d-flex align-items-center gap-2 border-0 bg-transparent"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    aria-expanded={isProfileOpen}
                  >
                    <img
                      src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80'}
                      alt={user?.name || 'User'}
                      className="rounded-circle border border-2 border-primary"
                      style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                    />
                    <i className="bi bi-chevron-down text-muted small d-none d-sm-inline"></i>
                  </button>

                  {/* Profile Dropdown Menu */}
                  {isProfileOpen && (
                    <div
                      className="position-absolute end-0 mt-2 py-2 bg-white rounded-4 shadow-lg border animate-fade-in"
                      style={{ minWidth: '220px', zIndex: 1050 }}
                    >
                      <div className="px-3 py-2 border-bottom">
                        <div className="font-heading fw-bold text-dark line-clamp-1">{user?.name}</div>
                        <div className="text-muted small line-clamp-1">{user?.email}</div>
                      </div>

                      <Link
                        to="/profile"
                        className="dropdown-item px-3 py-2 d-flex align-items-center gap-2 small text-dark"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <i className="bi bi-person text-muted"></i>
                        Profile & Settings
                      </Link>

                      <Link
                        to="/tickets"
                        className="dropdown-item px-3 py-2 d-flex align-items-center gap-2 small text-dark"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <i className="bi bi-ticket-perforated text-muted"></i>
                        My Bookings
                      </Link>

                      <Link
                        to="/favorites"
                        className="dropdown-item px-3 py-2 d-flex align-items-center gap-2 small text-dark"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <i className="bi bi-heart text-muted"></i>
                        Saved Events
                      </Link>

                      <div className="dropdown-divider my-1"></div>

                      <button
                        type="button"
                        className="dropdown-item px-3 py-2 d-flex align-items-center gap-2 small text-danger"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right"></i>
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="d-flex align-items-center gap-2">
                  <Link to="/login" className="btn btn-outline-secondary btn-sm px-3 rounded-pill fw-semibold font-heading">
                    Log In
                  </Link>
                  <Link to="/register" className="btn btn-primary-custom btn-sm px-3 rounded-pill font-heading">
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="btn btn-light rounded-circle p-0 d-lg-none d-flex align-items-center justify-content-center"
                style={{ width: '40px', height: '40px', border: '1px solid #e2e8f0' }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Navigation"
              >
                <i className={`bi ${isMobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-5`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas / Drawer */}
      {isMobileMenuOpen && (
        <div
          className="d-lg-none position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 animate-fade-in"
          style={{ zIndex: 1040 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-white h-100 p-4 d-flex flex-column shadow-xl"
            style={{ maxWidth: '320px', width: '85%' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="d-flex align-items-center justify-content-between pb-3 border-bottom mb-3">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 text-white"
                  style={{ width: '36px', height: '36px', background: '#4F46E5' }}
                >
                  <i className="bi bi-ticket-perforated-fill"></i>
                </div>
                <span className="font-heading fw-bold fs-5">Eventify</span>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-light rounded-circle"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {/* Mobile Search */}
            <form onSubmit={handleNavSearch} className="mb-4">
              <div className="input-group bg-light rounded-pill border px-3 py-1">
                <input
                  type="text"
                  className="form-control border-0 bg-transparent shadow-none small"
                  placeholder="Search events..."
                  value={navSearch}
                  onChange={(e) => setNavSearch(e.target.value)}
                />
                <button type="submit" className="btn btn-sm text-primary p-0">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            {/* Mobile Links */}
            <div className="d-flex flex-column gap-3 font-heading fw-semibold mb-auto">
              <Link
                to="/events"
                className="text-decoration-none text-dark d-flex align-items-center gap-3 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-compass text-primary fs-5"></i>
                Explore Events
              </Link>
              <Link
                to="/categories"
                className="text-decoration-none text-dark d-flex align-items-center gap-3 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-grid text-primary fs-5"></i>
                Categories
              </Link>
              <Link
                to="/tickets"
                className="text-decoration-none text-dark d-flex align-items-center gap-3 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-ticket-detailed text-primary fs-5"></i>
                My Tickets
              </Link>
              <Link
                to="/favorites"
                className="text-decoration-none text-dark d-flex align-items-center gap-3 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-heart text-primary fs-5"></i>
                Saved Events
              </Link>
              <Link
                to="/about"
                className="text-decoration-none text-dark d-flex align-items-center gap-3 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-info-circle text-primary fs-5"></i>
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-decoration-none text-dark d-flex align-items-center gap-3 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="bi bi-headset text-primary fs-5"></i>
                Contact & Support
              </Link>
            </div>

            {/* Mobile Auth Bottom Section */}
            <div className="pt-3 border-top">
              {isAuthenticated ? (
                <div className="d-flex align-items-center justify-content-between">
                  <Link
                    to="/profile"
                    className="d-flex align-items-center gap-2 text-decoration-none text-dark"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img
                      src={user?.avatar}
                      alt={user?.name}
                      className="rounded-circle border"
                      style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                    />
                    <div className="small fw-bold">{user?.name}</div>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="d-grid gap-2">
                  <Link
                    to="/login"
                    className="btn btn-outline-secondary py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-primary-custom py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
