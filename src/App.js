import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './HomePage';
import AuctionPage from "./AuctionPage";
import MyBidsPage from './MyBidsPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ContactPage from './ContactPage';
import UserProfilePage from './UserProfilePage';
import HallOfFamePage from './HallOfFamePage';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auctions" element={<AuctionPage />} />
        <Route path="/my-bids" element={<MyBidsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/halloffame" element={<HallOfFamePage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
