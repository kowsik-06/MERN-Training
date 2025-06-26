import React from 'react';
import './MyBidsPage.css';

import watch from './asset/watch.jpg';
import bottle from './asset/bottle.jpg';
import smart from './asset/smart.jpg';
import mountain from './asset/mountain.jpg';

function MyBidsPage() {
  return (
    <div className="mybids-page">
      <header>
        <h1>🧾 My Bids</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/auctions">Auctions</a></li>
          </ul>
        </nav>
      </header>

      <section className="bid-section">
        <h2>🕒 Currently Bidding On</h2>
        <div className="bid-items">
          <BidCard image={watch} name="Luxury Watch" status="Live" />
          <BidCard image={bottle} name="Steel Water Bottle" status="Live" />
        </div>
      </section>

      <section className="bid-section">
        <h2>🏆 Bids You Won</h2>
        <div className="bid-items">
          <BidCard image={smart} name="Smartwatch" status="Won" />
          <BidCard image={mountain} name="Mountain Bicycle" status="Won" />
        </div>
      </section>
    </div>
  );
}

function BidCard({ image, name, status }) {
  return (
    <div className="bid-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Status: <span className={`status ${status.toLowerCase()}`}>{status}</span></p>
    </div>
  );
}

export default MyBidsPage;
