import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Login Successful");
    navigate("/discovery");
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h1 className="brand">Tinglee</h1>

        <form onSubmit={handleLogin}>
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

          <p className="forgot-password">Forgot Password?</p>

          <button type="submit" className="primary-btn">
            Log In
          </button>

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
