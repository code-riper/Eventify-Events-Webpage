import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setSelectedCity, setSelectedDateFilter } from '../../redux/slices/eventsSlice';
import { citiesList } from '../../data/mockEvents';

export default function SearchBar({ initialQuery = '', className = '', isHero = false }) {
  const [query, setQuery] = useState(initialQuery);
  const [city, setCity] = useState('All Cities');
  const [dateFilter, setDateFilter] = useState('all');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
    dispatch(setSelectedCity(city));
    dispatch(setSelectedDateFilter(dateFilter));

    const params = new URLSearchParams();
    if (query.trim()) params.append('q', query.trim());
    if (city !== 'All Cities') params.append('city', city);
    if (dateFilter !== 'all') params.append('date', dateFilter);

    navigate(`/search?${params.toString()}`);
  };

  if (isHero) {
    return (
      <form
        onSubmit={handleSearch}
        className={`bg-white rounded-4 shadow-lg p-2 p-md-3 border ${className}`}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <div className="row g-2 align-items-center">
          {/* Keyword Search */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center px-3 py-2 bg-light rounded-3 border-0">
              <i className="bi bi-search text-primary me-2 fs-5"></i>
              <div className="w-100">
                <label className="d-block text-uppercase text-muted fw-semibold" style={{ fontSize: '0.65rem' }}>
                  What are you looking for?
                </label>
                <input
                  type="text"
                  className="form-control border-0 bg-transparent p-0 shadow-none fw-semibold"
                  style={{ fontSize: '0.95rem' }}
                  placeholder="Events, artists, venues..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* City / Location */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="d-flex align-items-center px-3 py-2 bg-light rounded-3 border-0">
              <i className="bi bi-geo-alt text-primary me-2 fs-5"></i>
              <div className="w-100">
                <label className="d-block text-uppercase text-muted fw-semibold" style={{ fontSize: '0.65rem' }}>
                  City / Location
                </label>
                <select
                  className="form-select border-0 bg-transparent p-0 shadow-none fw-semibold"
                  style={{ fontSize: '0.95rem', cursor: 'pointer' }}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {citiesList.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Date Selector */}
          <div className="col-12 col-sm-6 col-md-2">
            <div className="d-flex align-items-center px-3 py-2 bg-light rounded-3 border-0">
              <i className="bi bi-calendar-event text-primary me-2 fs-5"></i>
              <div className="w-100">
                <label className="d-block text-uppercase text-muted fw-semibold" style={{ fontSize: '0.65rem' }}>
                  Date
                </label>
                <select
                  className="form-select border-0 bg-transparent p-0 shadow-none fw-semibold"
                  style={{ fontSize: '0.95rem', cursor: 'pointer' }}
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="all">Any Date</option>
                  <option value="today">Today</option>
                  <option value="this-weekend">Weekend</option>
                  <option value="this-month">This Month</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12 col-md-2">
            <button
              type="submit"
              className="btn btn-primary-custom w-100 py-3 rounded-3 shadow-sm text-nowrap"
            >
              <i className="bi bi-search"></i>
              <span>Find Events</span>
            </button>
          </div>
        </div>
      </form>
    );
  }

  // Standard Compact / Inline SearchBar
  return (
    <form onSubmit={handleSearch} className={`position-relative ${className}`}>
      <div className="input-group bg-white rounded-pill border shadow-xs overflow-hidden p-1">
        <span className="input-group-text bg-transparent border-0 ps-3 pe-2 text-muted">
          <i className="bi bi-search text-primary"></i>
        </span>
        <input
          type="text"
          className="form-control border-0 shadow-none bg-transparent ps-0"
          placeholder="Search events, artists, venues..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ fontSize: '0.95rem' }}
        />
        <button className="btn btn-primary-custom rounded-pill px-4" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
