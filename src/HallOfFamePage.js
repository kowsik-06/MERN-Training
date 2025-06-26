import React from 'react';
import './HallOfFamePage.css';
import { Link } from 'react-router-dom';

// ✅ Import images directly
import rolexImg from './asset/rolex.jpg';
import ps5Img from './asset/goldps5.jpg';
import hpImg from './asset/hpbooks.jpg';

const pastAuctions = [
  {
    id: 1,
    title: 'Vintage Rolex Watch',
    image: rolexImg,
    finalBid: '₹2,45,000',
    date: 'May 14, 2025',
    story: 'This classic 1960s Rolex was owned by a naval officer and has a unique engraving.'
  },
  {
    id: 2,
    title: 'Limited Edition PS5 - Gold Plated',
    image: ps5Img,
    finalBid: '₹3,10,000',
    date: 'April 8, 2025',
    story: 'A one-of-a-kind collector’s edition, auctioned during our Golden Week event.'
  },
  {
    id: 3,
    title: 'Signed Harry Potter Book Set',
    image: hpImg,
    finalBid: '₹1,85,000',
    date: 'March 25, 2025',
    story: 'Signed by J.K. Rowling herself, this set was owned by a famous book blogger.'
  }
];

function HallOfFamePage() {
  return (
    <div className="hof-background">
      <h1 className="hof-title">🏆 Auction Hall of Fame</h1>
      <div className="hof-container">
        {pastAuctions.map((item) => (
          <div key={item.id} className="hof-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p><strong>Final Bid:</strong> {item.finalBid}</p>
            <p><strong>Date Sold:</strong> {item.date}</p>
            <p className="story">{item.story}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-home">← Back to Home</Link>
    </div>
  );
}

export default HallOfFamePage;
