import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

import logo from "../../assets/tinglee_logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");

  const [view, setView] = useState("login"); // 'login' | 'verify-otp' | 'forgot-request' | 'forgot-reset'
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    // Instead of logging in immediately, we show OTP
    setOtp(["", "", "", ""]);
    setView("verify-otp");
  }

  function handleVerifyOtp() {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      alert("Login Successful");
      navigate("/profile-wizard", { state: { view: 1 } });
    } else {
      alert("Please enter a valid 4-digit OTP");
    }
  }

  function handleSendResetOtp() {
    if (!userInput) {
      alert("Please enter your email or phone number first");
      return;
    }
    // Simulate sending OTP
    setOtp(["", "", "", ""]);
    setView("forgot-reset");
    alert(`OTP sent to ${userInput}`);
  }

  function handleResetPassword() {
    const enteredOtp = otp.join("");
    if (enteredOtp.length !== 4) {
      alert("Please enter a valid 4-digit OTP");
      return;
    }
    if (!newPassword) {
      alert("Please enter a new password");
      return;
    }
    // Simulate reset
    alert("Password Reset Successfully! Please Login.");
    setPassword("");
    setNewPassword("");
    setView("login");
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

        <form onSubmit={handleLogin}>
          {view === "login" && (
            <>
              <input
                className="field"
                type="text"
                placeholder="Email or Phone Number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
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

              <p className="forgot-password" onClick={() => setView('forgot-request')}>
                Forgot Password?
              </p>

              <button type="submit" className="primary-btn">
                Log In
              </button>
            </>
          )}

          {view === "verify-otp" && (
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
                Verify & Login
              </button>
              <div className="resend-link" onClick={() => alert("OTP Resent!")}>
                Resend Code
              </div>
              <div
                style={{ marginTop: '15px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px' }}
                onClick={() => setView('login')}
              >
                Back to Login
              </div>
            </div>
          )}

          {view === "forgot-request" && (
            <>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '10px' }}>Reset Password</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
                Enter your email or phone number to receive a reset code.
              </p>
              <input
                className="field"
                type="text"
                placeholder="Email or Phone Number"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                required
              />
              <button type="button" onClick={handleSendResetOtp} className="primary-btn">
                Send Reset Code
              </button>
              <div
                style={{ marginTop: '15px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px' }}
                onClick={() => setView('login')}
              >
                Back to Login
              </div>
            </>
          )}

          {view === "forgot-reset" && (
            <div style={{ marginTop: '20px' }}>
              <p className="otp-message">Enter the code sent to {userInput}</p>
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

              <input
                className="field"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ marginTop: '20px' }}
              />

              <button type="button" onClick={handleResetPassword} className="primary-btn">
                Reset Password
              </button>

              <div
                style={{ marginTop: '15px', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px' }}
                onClick={() => setView('login')}
              >
                Cancel
              </div>
            </div>
          )}

          <div className="or-divider">OR</div>

          <div className="social-row">
            <button type="button" className="social-btn">Login with Google</button>
            <button type="button" className="social-btn">Login with Apple</button>
          </div>

          <p className="bottom-line">
            Don't have an account?
            <span className="link" onClick={() => navigate("/register")}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
