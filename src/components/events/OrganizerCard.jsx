import React, { useState } from 'react';

export default function OrganizerCard({ organizer }) {
  const [following, setFollowing] = useState(false);

  if (!organizer) return null;

  return (
    <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="font-heading fw-bold text-dark mb-0" style={{ fontSize: '1.3rem' }}>
          Organized By
        </h3>
        <button
          type="button"
          className={`btn btn-sm ${following ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-3 py-1 font-heading fw-semibold`}
          onClick={() => setFollowing(!following)}
        >
          <i className={`bi ${following ? 'bi-check-lg' : 'bi-plus'} me-1`}></i>
          {following ? 'Following' : 'Follow'}
        </button>
      </div>

      <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-3 pt-2">
        <img
          src={organizer.image}
          alt={organizer.name}
          className="rounded-circle border"
          style={{ width: '64px', height: '64px', objectFit: 'cover' }}
        />
        <div>
          <h4 className="font-heading fw-bold text-dark mb-1 fs-5">{organizer.name}</h4>
          <p className="text-secondary small mb-2">{organizer.bio}</p>
          <div className="d-flex align-items-center gap-3 small text-muted">
            <span>
              <strong className="text-dark">{organizer.eventsCount}</strong> Events Hosted
            </span>
            <span>•</span>
            <span>
              <strong className="text-dark">{organizer.followersCount}</strong> Followers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
