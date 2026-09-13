import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedCategory,
  setSelectedCity,
  setSelectedPriceRange,
  setSelectedDateFilter,
  resetFilters
} from '../../redux/slices/eventsSlice';
import { citiesList } from '../../data/mockEvents';

export default function FilterSidebar({ isMobileModal = false, onCloseMobile }) {
  const dispatch = useDispatch();
  const {
    selectedCategory,
    selectedCity,
    selectedPriceRange,
    selectedDateFilter,
    categories
  } = useSelector((state) => state.events);

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: 'free', label: 'Free' },
    { value: 'under-500', label: 'Under ₹500' },
    { value: '500-1000', label: '₹500 – ₹1,000' },
    { value: '1000-2500', label: '₹1,000 – ₹2,500' },
    { value: '2500-plus', label: '₹2,500+' }
  ];

  const dateOptions = [
    { value: 'all', label: 'Any Date' },
    { value: 'today', label: 'Today' },
    { value: 'this-weekend', label: 'This Weekend' },
    { value: 'this-month', label: 'This Month' }
  ];

  return (
    <div className={`filter-sidebar ${isMobileModal ? 'p-3' : 'rounded-4 bg-white p-4 border shadow-xs'}`}>
      <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
        <h4 className="font-heading fw-bold mb-0 d-flex align-items-center gap-2" style={{ fontSize: '1.2rem' }}>
          <i className="bi bi-funnel text-primary"></i>
          Filters
        </h4>
        <button
          type="button"
          className="btn btn-sm btn-link text-danger text-decoration-none p-0 fw-semibold"
          onClick={() => dispatch(resetFilters())}
        >
          Reset
        </button>
      </div>

      {/* Location / City Filter */}
      <div className="mb-4">
        <label className="font-heading fw-bold small text-uppercase text-muted d-block mb-2">
          City
        </label>
        <select
          className="form-select bg-light border-0 py-2 fw-semibold rounded-3 shadow-none"
          value={selectedCity}
          onChange={(e) => dispatch(setSelectedCity(e.target.value))}
        >
          {citiesList.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="font-heading fw-bold small text-uppercase text-muted d-block mb-2">
          Category
        </label>
        <div className="d-flex flex-column gap-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="categoryRadio"
              id="cat-all"
              checked={selectedCategory === 'all'}
              onChange={() => dispatch(setSelectedCategory('all'))}
            />
            <label className="form-check-label small fw-semibold" htmlFor="cat-all">
              All Categories
            </label>
          </div>
          {categories.map((cat) => (
            <div className="form-check d-flex align-items-center justify-content-between" key={cat.id}>
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="categoryRadio"
                  id={`cat-${cat.slug}`}
                  checked={selectedCategory === cat.slug}
                  onChange={() => dispatch(setSelectedCategory(cat.slug))}
                />
                <label className="form-check-label small ms-1" htmlFor={`cat-${cat.slug}`}>
                  {cat.name}
                </label>
              </div>
              <span className="badge bg-light text-muted rounded-pill px-2 py-1" style={{ fontSize: '0.7rem' }}>
                {cat.eventCount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="font-heading fw-bold small text-uppercase text-muted d-block mb-2">
          Price Range
        </label>
        <div className="d-flex flex-column gap-2">
          {priceOptions.map((opt) => (
            <div className="form-check" key={opt.value}>
              <input
                className="form-check-input"
                type="radio"
                name="priceRadio"
                id={`price-${opt.value}`}
                checked={selectedPriceRange === opt.value}
                onChange={() => dispatch(setSelectedPriceRange(opt.value))}
              />
              <label className="form-check-label small" htmlFor={`price-${opt.value}`}>
                {opt.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Date Filter */}
      <div className="mb-2">
        <label className="font-heading fw-bold small text-uppercase text-muted d-block mb-2">
          Date
        </label>
        <div className="d-flex flex-column gap-2">
          {dateOptions.map((d) => (
            <div className="form-check" key={d.value}>
              <input
                className="form-check-input"
                type="radio"
                name="dateRadio"
                id={`date-${d.value}`}
                checked={selectedDateFilter === d.value}
                onChange={() => dispatch(setSelectedDateFilter(d.value))}
              />
              <label className="form-check-label small" htmlFor={`date-${d.value}`}>
                {d.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {isMobileModal && (
        <div className="mt-4 pt-3 border-top">
          <button
            type="button"
            className="btn btn-primary-custom w-100 py-2"
            onClick={onCloseMobile}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
}
