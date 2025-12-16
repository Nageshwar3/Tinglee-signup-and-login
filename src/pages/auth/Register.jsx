import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import { validatePassword } from "../../utils/passwordValidation";




export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const validation = validatePassword(password);
    if (!validation.isValid) {
      setPasswordError(validation.message);
      return;
    }
    setPasswordError("");
    // Simulate successful registration without backend
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      alert("Registered Successfully! (Simulated) Please Login.");
      navigate("/login");

    } catch (error) {
      console.error("Register Error:", error);
      alert("Registration Failed");
    }
  }

  function handleVerifyOtp() {
    // OTP logic retained if needed later
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
          <span className="brand-name">tinglee</span>
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

              <div className="password-container">
                <input
                  className="field"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  )}
                </span>
              </div>
              {passwordError && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "5px", marginBottom: "5px" }}>
                  {passwordError}
                </p>
              )}

              <div className="password-container">
                <input
                  className="field"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  )}
                </span>
              </div>

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
