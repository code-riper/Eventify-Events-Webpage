import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProfile, updatePreferences } from '../../redux/slices/authSlice';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { tickets } = useSelector((state) => state.tickets);
  const favoriteIds = useSelector((state) => state.favorites.favoriteIds);

  const [activeTab, setActiveTab] = useState('personal'); // 'personal', 'preferences', 'security'
  const [formData, setFormData] = useState({
    name: user?.name || 'Ajmal Khan',
    email: user?.email || 'ajmal@example.com',
    phone: user?.phone || '+91 98765 43210',
    city: user?.city || 'Mumbai',
    bio: user?.bio || 'Tech enthusiast, indie music fan, and marathon runner exploring live events across India.'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showSaveAlert, setShowSaveAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    setShowSaveAlert(true);
    setTimeout(() => setShowSaveAlert(false), 4000);
  };

  const handlePreferenceToggle = (key) => {
    dispatch(
      updatePreferences({
        [key]: !user?.preferences?.[key]
      })
    );
  };

  return (
    <div className="profile-page py-4 py-md-5" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Profile Header Card */}
        <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
            <div className="d-flex align-items-center gap-4">
              <div className="position-relative">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop&q=80'}
                  alt={user?.name}
                  className="rounded-circle border border-3 border-primary"
                  style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                />
                <button
                  type="button"
                  className="btn btn-sm btn-primary rounded-circle position-absolute bottom-0 end-0 p-1 d-flex align-items-center justify-content-center shadow"
                  style={{ width: '28px', height: '28px' }}
                  title="Change avatar"
                  onClick={() => alert('Profile photo update dialog')}
                >
                  <i className="bi bi-camera-fill small"></i>
                </button>
              </div>

              <div>
                <h1 className="font-heading fw-extrabold text-dark mb-1 fs-3">
                  {user?.name || 'Ajmal Khan'}
                </h1>
                <div className="d-flex flex-wrap align-items-center gap-3 text-muted small">
                  <span><i className="bi bi-envelope me-1"></i>{user?.email}</span>
                  <span>•</span>
                  <span><i className="bi bi-geo-alt me-1"></i>{user?.city || 'Mumbai, India'}</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Counters */}
            <div className="d-flex gap-4 border-start-md ps-md-4">
              <div className="text-center">
                <div className="font-heading fw-bold text-dark fs-4">{tickets.length}</div>
                <div className="text-muted small">Bookings</div>
              </div>
              <div className="text-center">
                <div className="font-heading fw-bold text-primary fs-4">{favoriteIds.length}</div>
                <div className="text-muted small">Saved</div>
              </div>
              <div className="text-center">
                <div className="font-heading fw-bold text-success fs-4">
                  {tickets.filter((t) => t.status === 'Upcoming').length}
                </div>
                <div className="text-muted small">Upcoming</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="d-flex gap-2 mb-4 border-bottom pb-2">
          <button
            type="button"
            className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold ${
              activeTab === 'personal' ? 'btn-primary' : 'btn-white bg-white border text-secondary'
            }`}
            onClick={() => setActiveTab('personal')}
          >
            <i className="bi bi-person me-2"></i>
            Personal Info
          </button>

          <button
            type="button"
            className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold ${
              activeTab === 'preferences' ? 'btn-primary' : 'btn-white bg-white border text-secondary'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            <i className="bi bi-sliders me-2"></i>
            Preferences & Alerts
          </button>

          <button
            type="button"
            className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold ${
              activeTab === 'security' ? 'btn-primary' : 'btn-white bg-white border text-secondary'
            }`}
            onClick={() => setActiveTab('security')}
          >
            <i className="bi bi-shield-lock me-2"></i>
            Security & Password
          </button>
        </div>

        {/* Tab 1: Personal Information */}
        {activeTab === 'personal' && (
          <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs animate-fade-in">
            {showSaveAlert && (
              <div className="alert alert-success d-flex align-items-center gap-2 mb-4 rounded-3">
                <i className="bi bi-check-circle-fill"></i>
                <div>Your profile details have been successfully saved!</div>
              </div>
            )}

            <form onSubmit={handleProfileSubmit}>
              <h3 className="font-heading fw-bold text-dark mb-3 fs-5">
                Edit Personal Details
              </h3>

              <div className="row g-3 mb-4">
                <div className="col-12 col-md-6">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control py-2"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control py-2"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control py-2"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Home City
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="form-control py-2"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-12">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Bio / Short Intro
                  </label>
                  <textarea
                    name="bio"
                    rows="3"
                    className="form-control"
                    value={formData.bio}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-primary-custom px-4 py-2 font-heading">
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* Tab 2: Preferences & Notification Settings */}
        {activeTab === 'preferences' && (
          <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs animate-fade-in">
            <h3 className="font-heading fw-bold text-dark mb-4 fs-5">
              Notification & Event Preferences
            </h3>

            <div className="d-flex flex-column gap-3 mb-4">
              <div className="p-3 rounded-3 bg-light d-flex align-items-center justify-content-between">
                <div>
                  <div className="font-heading fw-bold text-dark small">Email Ticket Confirmations</div>
                  <div className="text-muted small">Receive PDF tickets and booking invoices directly in your inbox.</div>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={user?.preferences?.notifyEmail ?? true}
                    onChange={() => handlePreferenceToggle('notifyEmail')}
                    style={{ width: '40px', height: '22px' }}
                  />
                </div>
              </div>

              <div className="p-3 rounded-3 bg-light d-flex align-items-center justify-content-between">
                <div>
                  <div className="font-heading fw-bold text-dark small">WhatsApp Gate Entry Pass</div>
                  <div className="text-muted small">Receive instantaneous QR code passes on WhatsApp 2 hours before the event.</div>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={user?.preferences?.notifyWhatsapp ?? true}
                    onChange={() => handlePreferenceToggle('notifyWhatsapp')}
                    style={{ width: '40px', height: '22px' }}
                  />
                </div>
              </div>

              <div className="p-3 rounded-3 bg-light d-flex align-items-center justify-content-between">
                <div>
                  <div className="font-heading fw-bold text-dark small">Early Bird Concert Alerts</div>
                  <div className="text-muted small">Get notified 24 hours before tickets open to the general public.</div>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={user?.preferences?.newsletter ?? true}
                    onChange={() => handlePreferenceToggle('newsletter')}
                    style={{ width: '40px', height: '22px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Security & Password */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs animate-fade-in">
            <h3 className="font-heading fw-bold text-dark mb-3 fs-5">
              Change Password
            </h3>

            <div className="row g-3 mb-4" style={{ maxWidth: '480px' }}>
              <div className="col-12">
                <label className="font-heading fw-bold small text-dark d-block mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                />
              </div>

              <div className="col-12">
                <label className="font-heading fw-bold small text-dark d-block mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="At least 8 characters"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                />
              </div>

              <div className="col-12">
                <label className="font-heading fw-bold small text-dark d-block mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary-custom px-4 py-2 font-heading"
              onClick={() => {
                alert('Password updated successfully!');
                setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
              }}
            >
              Update Password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
