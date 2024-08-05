import React, { useState } from "react";
import "../Mid-phase/Fp.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setSuccessMessage("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage(
        "If this email is registered, you will receive a password reset link."
      );
    }, 2000);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={emailError ? "error" : ""}
            required
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
