import React, { useEffect } from 'react';
import './AuctionPage.css';
import watch from './asset/watch.jpg';
import bottle from './asset/bottle.jpg';
import phone from './asset/phone.jpg';
import jewel from './asset/jewel.jpg';
import laptop from './asset/laptop.jpg';
import smart from './asset/smart.jpg';
import aircooler from './asset/aircooler.jpg';
import mountain from './asset/mountain.jpg';
import auction from './asset/auction.jpg';
import { Link } from 'react-router-dom';

function AuctionPage() {
  useEffect(() => {
    const timers = document.querySelectorAll('.timer');
    const intervals = [];

    timers.forEach((timer) => {
      const targetTime = new Date(timer.dataset.time).getTime();

      const updateTimer = () => {
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance <= 0) {
          timer.innerText = 'Started';
          return;
        }

        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        timer.innerText = `${hours}h ${minutes}m ${seconds}s`;
      };

      updateTimer(); // Initial run
      const interval = setInterval(updateTimer, 1000);
      intervals.push(interval);
    });

    // Clear all intervals on unmount
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div>
      <header>
        <h1>Online Auction Portal</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Log-in</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Live Auctions */}
      <section className="auction-section">
        <h2>🔥 Live Auctions</h2>
        <div className="auction-items">
          <AuctionCard image={watch} name="Luxury Watch" price="₹2000" />
          <AuctionCard image={bottle} name="Steel Water Bottle" price="₹300" />
        </div>
      </section>

      {/* Upcoming Auctions */}
      <section className="auction-section">
        <h2>⏳ Upcoming Auctions</h2>
        <div className="auction-items">
          <AuctionCard image={phone} name="Smartphone" timer="2025-06-26T18:00:00" />
          <AuctionCard image={jewel} name="Gold Necklace" timer="2025-06-26T20:00:00" />
          <AuctionCard image={laptop} name="Laptop" timer="2025-06-26T22:00:00" />
        </div>
      </section>

      {/* Closed Auctions */}
      <section className="auction-section">
        <h2>🚫 Closed Auctions</h2>
        <div className="auction-items">
          <AuctionCard image={smart} name="Smartwatch" ended />
          <AuctionCard image={aircooler} name="Air Cooler" ended />
          <AuctionCard image={mountain} name="Mountain Bicycle" ended />
        </div>
      </section>
    </div>
  );
}

function AuctionCard({ image, name, price, timer, ended }) {
  return (
    <div className="auction-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {ended ? (
        <p>Auction Ended</p>
      ) : timer ? (
        <p>Starts in: <span className="timer" data-time={timer}>Loading...</span></p>
      ) : (
        <>
          <p>Base Price: {price}</p>
          <button>Bid Now</button>
        </>
      )}
    </div>
  );
}

export default AuctionPage;
