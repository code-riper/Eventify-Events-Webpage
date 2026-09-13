import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../redux/slices/eventsSlice';

export default function SortDropdown() {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.events.sortBy);

  const options = [
    { value: 'featured', label: 'Featured & Trending' },
    { value: 'date-asc', label: 'Date: Soonest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <div className="d-flex align-items-center gap-2">
      <span className="text-muted small fw-semibold text-nowrap">Sort by:</span>
      <select
        className="form-select form-select-sm bg-white border rounded-3 fw-semibold shadow-xs"
        style={{ minWidth: '180px', cursor: 'pointer', padding: '0.45rem 0.9rem' }}
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value))}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
