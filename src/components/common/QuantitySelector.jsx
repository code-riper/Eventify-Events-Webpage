import React from 'react';

export default function QuantitySelector({
  value = 0,
  min = 0,
  max = 10,
  onChange,
  disabled = false,
  size = 'md'
}) {
  const handleDecrement = (e) => {
    e.stopPropagation();
    if (value > min && !disabled) {
      onChange(value - 1);
    }
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    if (value < max && !disabled) {
      onChange(value + 1);
    }
  };

  const isSmall = size === 'sm';

  return (
    <div
      className="d-inline-flex align-items-center bg-white rounded-pill border"
      style={{
        padding: isSmall ? '2px 4px' : '4px 8px',
        borderColor: '#e2e8f0',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
      }}
    >
      <button
        type="button"
        className="btn p-0 d-flex align-items-center justify-content-center rounded-circle border-0"
        style={{
          width: isSmall ? '26px' : '32px',
          height: isSmall ? '26px' : '32px',
          backgroundColor: value <= min ? '#f1f5f9' : '#eef2ff',
          color: value <= min ? '#94a3b8' : '#4f46e5',
          cursor: value <= min || disabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.15s ease'
        }}
        onClick={handleDecrement}
        disabled={value <= min || disabled}
        aria-label="Decrease quantity"
      >
        <i className="bi bi-dash fw-bold" style={{ fontSize: isSmall ? '13px' : '16px' }}></i>
      </button>

      <span
        className="text-center font-heading fw-bold px-2"
        style={{
          minWidth: isSmall ? '24px' : '32px',
          fontSize: isSmall ? '0.85rem' : '0.95rem',
          color: '#0f172a'
        }}
      >
        {value}
      </span>

      <button
        type="button"
        className="btn p-0 d-flex align-items-center justify-content-center rounded-circle border-0"
        style={{
          width: isSmall ? '26px' : '32px',
          height: isSmall ? '26px' : '32px',
          backgroundColor: value >= max ? '#f1f5f9' : '#4f46e5',
          color: value >= max ? '#94a3b8' : '#ffffff',
          cursor: value >= max || disabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.15s ease'
        }}
        onClick={handleIncrement}
        disabled={value >= max || disabled}
        aria-label="Increase quantity"
      >
        <i className="bi bi-plus fw-bold" style={{ fontSize: isSmall ? '13px' : '16px' }}></i>
      </button>
    </div>
  );
}
