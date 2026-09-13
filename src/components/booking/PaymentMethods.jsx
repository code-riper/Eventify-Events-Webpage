import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPaymentMethod, setPaymentDetails } from '../../redux/slices/bookingSlice';

export default function PaymentMethods() {
  const dispatch = useDispatch();
  const { paymentMethod, upiId, selectedBank, selectedWallet } = useSelector(
    (state) => state.booking
  );

  const banks = ['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Kotak Mahindra'];
  const wallets = ['Paytm', 'PhonePe Wallet', 'Amazon Pay', 'Mobikwik'];

  return (
    <div className="bg-white rounded-4 border p-4 p-md-5 shadow-xs mb-4">
      <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
        <div>
          <h3 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '1.3rem' }}>
            Payment Method
          </h3>
          <p className="text-muted small mb-0">Select your preferred payment gateway.</p>
        </div>
        <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-1 rounded-pill small fw-bold">
          Demo Mode Active
        </span>
      </div>

      {/* Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button
          type="button"
          className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold ${
            paymentMethod === 'upi' ? 'btn-primary' : 'btn-outline-secondary'
          }`}
          onClick={() => dispatch(setPaymentMethod('upi'))}
        >
          <i className="bi bi-qr-code me-2"></i>
          UPI / QR
        </button>

        <button
          type="button"
          className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold ${
            paymentMethod === 'card' ? 'btn-primary' : 'btn-outline-secondary'
          }`}
          onClick={() => dispatch(setPaymentMethod('card'))}
        >
          <i className="bi bi-credit-card me-2"></i>
          Credit / Debit Card
        </button>

        <button
          type="button"
          className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold ${
            paymentMethod === 'netbanking' ? 'btn-primary' : 'btn-outline-secondary'
          }`}
          onClick={() => dispatch(setPaymentMethod('netbanking'))}
        >
          <i className="bi bi-bank me-2"></i>
          Net Banking
        </button>

        <button
          type="button"
          className={`btn btn-sm px-4 py-2 rounded-pill font-heading fw-semibold ${
            paymentMethod === 'wallet' ? 'btn-primary' : 'btn-outline-secondary'
          }`}
          onClick={() => dispatch(setPaymentMethod('wallet'))}
        >
          <i className="bi bi-wallet2 me-2"></i>
          Wallets
        </button>
      </div>

      {/* Content depending on selected method */}
      {paymentMethod === 'upi' && (
        <div className="p-4 bg-light rounded-4 border animate-fade-in">
          <label className="font-heading fw-bold small text-dark d-block mb-2">
            Enter Virtual Payment Address (UPI ID)
          </label>
          <div className="input-group mb-3" style={{ maxWidth: '420px' }}>
            <span className="input-group-text bg-white border-end-0 text-primary">
              <i className="bi bi-at fs-5"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="e.g. yourname@okhdfcbank"
              value={upiId}
              onChange={(e) =>
                dispatch(setPaymentDetails({ field: 'upiId', value: e.target.value }))
              }
            />
            <button className="btn btn-outline-primary fw-semibold" type="button">
              Verify
            </button>
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
            <span className="text-muted small">Or scan instantly using:</span>
            <span className="badge bg-white border text-dark px-3 py-2 rounded-pill">Google Pay</span>
            <span className="badge bg-white border text-dark px-3 py-2 rounded-pill">PhonePe</span>
            <span className="badge bg-white border text-dark px-3 py-2 rounded-pill">Paytm</span>
            <span className="badge bg-white border text-dark px-3 py-2 rounded-pill">BHIM</span>
          </div>
        </div>
      )}

      {paymentMethod === 'card' && (
        <div className="p-4 bg-light rounded-4 border animate-fade-in">
          <div className="row g-3" style={{ maxWidth: '520px' }}>
            <div className="col-12">
              <label className="font-heading fw-bold small text-dark d-block mb-1">
                Card Number
              </label>
              <div className="input-group">
                <span className="input-group-text bg-white text-muted">
                  <i className="bi bi-credit-card"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="4532 •••• •••• 8921"
                  defaultValue="4532 9012 8831 2940"
                />
              </div>
            </div>

            <div className="col-12">
              <label className="font-heading fw-bold small text-dark d-block mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name as printed on card"
                defaultValue="Ajmal Khan"
              />
            </div>

            <div className="col-6">
              <label className="font-heading fw-bold small text-dark d-block mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="MM/YY"
                defaultValue="08/28"
              />
            </div>

            <div className="col-6">
              <label className="font-heading fw-bold small text-dark d-block mb-1">
                CVV / CVC
              </label>
              <input
                type="password"
                maxLength="4"
                className="form-control"
                placeholder="123"
                defaultValue="789"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === 'netbanking' && (
        <div className="p-4 bg-light rounded-4 border animate-fade-in">
          <label className="font-heading fw-bold small text-dark d-block mb-2">
            Select Your Bank
          </label>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {banks.map((b) => (
              <button
                key={b}
                type="button"
                className={`btn btn-sm px-3 py-2 rounded-3 font-heading fw-semibold ${
                  selectedBank === b ? 'btn-primary' : 'btn-white bg-white border text-dark'
                }`}
                onClick={() => dispatch(setPaymentDetails({ field: 'selectedBank', value: b }))}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      )}

      {paymentMethod === 'wallet' && (
        <div className="p-4 bg-light rounded-4 border animate-fade-in">
          <label className="font-heading fw-bold small text-dark d-block mb-2">
            Select Wallet
          </label>
          <div className="d-flex flex-wrap gap-2">
            {wallets.map((w) => (
              <button
                key={w}
                type="button"
                className={`btn btn-sm px-3 py-2 rounded-3 font-heading fw-semibold ${
                  selectedWallet === w ? 'btn-primary' : 'btn-white bg-white border text-dark'
                }`}
                onClick={() =>
                  dispatch(setPaymentDetails({ field: 'selectedWallet', value: w }))
                }
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
