import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Registered Successfully!");
    navigate("/login");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <div className="brand-container">
          <img src="/src/assets/tinglee_logo.svg" alt="Tinglee Logo" className="brand-logo" />
        </div>

        <form onSubmit={handleSubmit}>
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

          <select
            className="field"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button type="submit" className="primary-btn">
            Sign Up
          </button>

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
