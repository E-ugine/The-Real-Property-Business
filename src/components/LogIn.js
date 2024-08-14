import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogIn({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const user = { username };
    setUser(user);
    navigate("/");
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username / Email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-options">
          <a href="/forgot-password">Forgot password</a>
          <div className="social-login">
            <button className="google-login">Google</button>
          </div>
        </div>
        <div className="register-option">
          <span>Do not have an account?</span> <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
