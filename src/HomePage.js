import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { FaInstagram, FaGoogle } from "react-icons/fa";

function HomePage() {
  return (
    <div className="home-body">
      <header>
        <h1>Auction Portal</h1>
        <nav>
          <ul>
            <li><Link to="/auctions">Auction</Link></li>
            <li><Link to="/my-bids">My-Bid</Link></li>
            <li><Link to="/login">Log-in</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </nav>
      </header>

      <div className="slogan-container">
        <h2 className="slogan">
          Every Click Counts, Every Bid Matters.<br />
          Own What You Deserve.<br />
          Bid Smart. Win Big. Own the Best.
        </h2>
      </div>

      {/* 🔻 Footer Section */}
      <footer className="footer">
        <p>© 2025 Auction Portal. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noreferrer">
            <FaGoogle />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

