import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the login credentials
    if (email === "admin@gmail.com" && password === "123") {
      // Successful login, save data in localStorage and navigate to Dashboard
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control ${errorMessage ? "is-invalid" : ""}`}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${errorMessage ? "is-invalid" : ""}`}
            required
          />
        </div>
        {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
        <button type="submit">Login</button>
        <div className="mt-3">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
