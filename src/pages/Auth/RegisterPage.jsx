import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      alert('Please fill out all required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }

    dispatch(
      login({
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      })
    );
    navigate('/');
  };

  return (
    <div className="register-page py-5 d-flex align-items-center" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="bg-white rounded-4 border p-4 p-md-5 shadow-sm">
              <div className="text-center mb-4">
                <Link to="/" className="d-inline-flex align-items-center gap-2 text-decoration-none mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 text-white shadow-sm"
                    style={{ width: '42px', height: '42px', background: '#4F46E5' }}
                  >
                    <i className="bi bi-ticket-perforated-fill fs-5"></i>
                  </div>
                  <span className="font-heading fw-bold text-dark fs-3">Eventify</span>
                </Link>
                <h2 className="font-heading fw-extrabold text-dark fs-4 mb-1">
                  Create Your Account
                </h2>
                <p className="text-muted small">
                  Join thousands discovering live experiences across India.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-12">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-control py-2"
                      placeholder="e.g. Vikramaditya Rao"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-control py-2"
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="form-control py-2"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Password <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        required
                        className="form-control py-2"
                        placeholder="Min. 8 characters"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="font-heading fw-bold small text-dark d-block mb-1">
                      Confirm Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      required
                      className="form-control py-2"
                      placeholder="Re-type password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label small text-muted" htmlFor="agreeTerms">
                    I agree to the{' '}
                    <a href="#terms" className="text-primary text-decoration-none">Terms of Service</a>{' '}
                    and{' '}
                    <a href="#privacy" className="text-primary text-decoration-none">Privacy Policy</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary-custom w-100 py-3 rounded-3 font-heading fw-bold shadow-sm mb-3"
                >
                  Create My Free Account
                </button>

                <p className="text-center text-muted small mb-0">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary fw-bold text-decoration-none">
                    Log in here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
