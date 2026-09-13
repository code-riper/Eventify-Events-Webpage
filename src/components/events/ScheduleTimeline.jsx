import React from 'react';

export default function ScheduleTimeline({ schedule = [] }) {
  if (!schedule || schedule.length === 0) return null;

  return (
    <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
      <h3 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '1.3rem' }}>
        Event Schedule & Timeline
      </h3>
      <p className="text-muted small mb-4">Timings are approximate and subject to slight variations.</p>

      <div className="position-relative ps-4" style={{ borderLeft: '2px solid #e2e8f0' }}>
        {schedule.map((item, idx) => (
          <div key={idx} className="mb-4 position-relative">
            {/* Timeline Dot */}
            <div
              className="position-absolute bg-white rounded-circle border border-3 border-primary"
              style={{
                width: '16px',
                height: '16px',
                left: '-25px',
                top: '4px'
              }}
            ></div>

            <div className="font-heading fw-bold text-primary small mb-1">
              {item.time}
            </div>
            <div className="font-heading fw-semibold text-dark fs-6">
              {item.activity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
