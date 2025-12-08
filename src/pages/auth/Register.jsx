import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

import logo from "../../assets/tinglee_logo.svg";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Instead of finishing immediately, we show OTP
    setShowOtp(true);
  }

  function handleVerifyOtp() {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      alert("Registered Successfully!");
      navigate("/profile-wizard");
    } else {
      alert("Please enter a valid 4-digit OTP");
    }
  }

  function handleOtpChange(element, index) {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="brand-container">
          <img src={logo} alt="Tinglee Logo" className="brand-logo" />
        </div>

        <form onSubmit={handleSubmit}>
          {!showOtp ? (
            <>
              <input
                className="field"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />

              <input
                className="field"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="field"
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <input
                className="field"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <input
                className="field"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button type="submit" className="primary-btn">
                Sign Up
              </button>
            </>
          ) : (
            <div style={{ marginTop: '20px' }}>
              <p className="otp-message">Enter the 4-digit code sent to your Email/Phone</p>
              <div className="otp-container">
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-digit"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </div>
              <button type="button" onClick={handleVerifyOtp} className="primary-btn">
                Verify
              </button>
              <div className="resend-link" onClick={() => alert("OTP Resent!")}>
                Resend Code
              </div>
              <div
                style={{ marginTop: '15px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px' }}
                onClick={() => setShowOtp(false)}
              >
                Back to Signup
              </div>
            </div>
          )}

          <div className="or-divider">OR</div>

          <div className="social-row">
            <button type="button" className="social-btn">Sign up with Google</button>
            <button type="button" className="social-btn">Sign up with Apple</button>
          </div>

          <p className="bottom-line">
            Have an account?
            <span className="link" onClick={() => navigate("/login")}>
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
