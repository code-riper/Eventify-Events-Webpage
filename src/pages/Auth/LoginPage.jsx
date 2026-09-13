import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('ajmal@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    dispatch(
      login({
        email,
        name: email.split('@')[0]
      })
    );
    navigate('/');
  };

  const handleSocialLogin = (provider) => {
    dispatch(
      login({
        name: `${provider} User`,
        email: `user@${provider.toLowerCase()}.com`
      })
    );
    navigate('/');
  };

  return (
    <div className="login-page py-5 d-flex align-items-center" style={{ backgroundColor: '#F8FAFC', minHeight: '85vh' }}>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="bg-white rounded-4 border p-4 p-md-5 shadow-sm">
              {/* Brand mark */}
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
                  Welcome Back
                </h2>
                <p className="text-muted small">
                  Sign in to access your booked tickets and saved events.
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="d-grid gap-2 mb-4">
                <button
                  type="button"
                  className="btn btn-light border py-2 d-flex align-items-center justify-content-center gap-2 font-heading fw-semibold small"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <i className="bi bi-google text-danger"></i>
                  <span>Continue with Google</span>
                </button>
                <button
                  type="button"
                  className="btn btn-light border py-2 d-flex align-items-center justify-content-center gap-2 font-heading fw-semibold small"
                  onClick={() => handleSocialLogin('Apple')}
                >
                  <i className="bi bi-apple"></i>
                  <span>Continue with Apple</span>
                </button>
              </div>

              <div className="position-relative text-center my-4">
                <hr className="text-muted" />
                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">
                  or sign in with email
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="font-heading fw-bold small text-dark d-block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control py-2"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="font-heading fw-bold small text-dark mb-0">
                      Password
                    </label>
                    <a
                      href="#forgot"
                      className="text-primary small text-decoration-none"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Password reset link sent to your registered email address.');
                      }}
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="form-control py-2"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label small text-muted" htmlFor="rememberMe">
                    Remember me on this browser
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary-custom w-100 py-3 rounded-3 font-heading fw-bold shadow-sm mb-3"
                >
                  Sign In to Eventify
                </button>

                <p className="text-center text-muted small mb-0">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary fw-bold text-decoration-none">
                    Create free account
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
