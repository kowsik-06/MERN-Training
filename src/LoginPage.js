import React, { useState } from 'react';
import './LoginSignup.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => { 
    e.preventDefault();
    alert(`Logged in as: ${email}`);
  };

  return (
    <div className="login-background"> {/* ✅ Add this wrapper */}
      {/* 🔻 Header */}
      <header className="login-header">
        <h1>Auction Portal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* 🔻 Login Form */}
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Register</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
