import React, { useState } from 'react';
import './LoginSignup.css';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert('Signup failed');
    }
  };

  return (
    <div className="login-background">
      <header className="login-header">
        <h1>Auction Portal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" value={username} required onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupPage;
