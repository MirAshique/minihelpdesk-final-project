import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "123" && password === "123") {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <section className="login-card">
        <div className="login-icon">🎫</div>

        <h1 className="app-title">MiniHelpDesk</h1>

        <p className="login-subtitle">
          Ticket Management System
        </p>

        <div className="demo-box">
          <strong>Demo Credentials</strong>
          <br />
          Username: 123
          <br />
          Password: 123
        </div>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          <button className="btn login-btn" type="submit">
            Login
          </button>
        </form>

        <p className="login-footer">
          Web Technologies I Final Project
          <br />
          Developed by Mir Ashique Hussain Talpur & Afaque Ahmed
        </p>
      </section>
    </div>
  );
}

export default Login;