import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedCategory,
  setSelectedCity,
  setSelectedPriceRange,
  setSelectedDateFilter,
  setSearchQuery,
  resetFilters
} from '../../redux/slices/eventsSlice';

export default function FilterChips() {
  const dispatch = useDispatch();
  const {
    searchQuery,
    selectedCategory,
    selectedCity,
    selectedPriceRange,
    selectedDateFilter,
    categories
  } = useSelector((state) => state.events);

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory);

  const priceLabels = {
    free: 'Free',
    'under-500': 'Under ₹500',
    '500-1000': '₹500 – ₹1,000',
    '1000-2500': '₹1,000 – ₹2,500',
    '2500-plus': '₹2,500+'
  };

  const dateLabels = {
    today: 'Today',
    'this-weekend': 'This Weekend',
    'this-month': 'This Month'
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== 'all' ||
    selectedCity !== 'All Cities' ||
    selectedPriceRange !== 'all' ||
    selectedDateFilter !== 'all';

  if (!hasActiveFilters) return null;

  return (
    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
      <span className="text-muted small fw-bold text-uppercase">Active filters:</span>

      {searchQuery && (
        <span className="badge bg-white text-dark border rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 shadow-xs">
          <span>Search: "{searchQuery}"</span>
          <i
            className="bi bi-x-circle-fill text-muted hover-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(setSearchQuery(''))}
          ></i>
        </span>
      )}

      {selectedCategory !== 'all' && activeCategoryObj && (
        <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2">
          <span>{activeCategoryObj.name}</span>
          <i
            className="bi bi-x-circle-fill hover-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(setSelectedCategory('all'))}
          ></i>
        </span>
      )}

      {selectedCity !== 'All Cities' && (
        <span className="badge bg-white text-dark border rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 shadow-xs">
          <span>City: {selectedCity}</span>
          <i
            className="bi bi-x-circle-fill text-muted hover-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(setSelectedCity('All Cities'))}
          ></i>
        </span>
      )}

      {selectedPriceRange !== 'all' && (
        <span className="badge bg-white text-dark border rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 shadow-xs">
          <span>Price: {priceLabels[selectedPriceRange] || selectedPriceRange}</span>
          <i
            className="bi bi-x-circle-fill text-muted hover-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(setSelectedPriceRange('all'))}
          ></i>
        </span>
      )}

      {selectedDateFilter !== 'all' && (
        <span className="badge bg-white text-dark border rounded-pill px-3 py-2 d-inline-flex align-items-center gap-2 shadow-xs">
          <span>Date: {dateLabels[selectedDateFilter] || selectedDateFilter}</span>
          <i
            className="bi bi-x-circle-fill text-muted hover-danger"
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(setSelectedDateFilter('all'))}
          ></i>
        </span>
      )}

      <button
        type="button"
        className="btn btn-sm text-danger text-decoration-underline p-0 ms-2 fw-semibold"
        style={{ fontSize: '0.85rem' }}
        onClick={() => dispatch(resetFilters())}
      >
        Clear all
      </button>
    </div>
  );
}
