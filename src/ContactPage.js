import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

function ContactPage() {
  return (
    <div className="contact-body">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether it's feedback or a question — reach out!</p>
      </header>

      <section className="contact-section">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message..." required />
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Email: support@auctionportal.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </section>

      {/* 🔁 Back to Home Button */}
      <div className="back-home-btn">
        <Link to="/">
          <button>← Back to Home</button>
        </Link>
      </div>

      <footer className="contact-footer">
        <p>© 2025 Auction Portal. Crafted with care 🛒</p>
      </footer>
    </div>
  );
}

export default ContactPage;
