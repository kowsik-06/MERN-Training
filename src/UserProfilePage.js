import React, { useState } from 'react';
import './UserProfilePage.css';
import { Link } from 'react-router-dom'; // ✅ import Link

function UserProfilePage() {
  const [username, setUsername] = useState('Kowsik');
  const [email, setEmail] = useState('kowsik@example.com');
  const [bio, setBio] = useState('Bidding enthusiast. Collector of cool stuff.');
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-background">
      <div className="glass-card">
        <div className="profile-photo">
          <div className="avatar-anim">🧑‍💼</div>
        </div>
        <h2>👤 User Profile</h2>
        {editMode ? (
          <form className="profile-form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
            <label>Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />

            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />

            <label>Bio</label>
            <textarea rows="3" value={bio} onChange={(e) => setBio(e.target.value)} />

            <button type="submit">💾 Save</button>
          </form>
        ) : (
          <div className="profile-info">
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Bio:</strong> {bio}</p>
            <button onClick={() => setEditMode(true)}>✏️ Edit Profile</button>
          </div>
        )}

        {/* ✅ Back to Home Button */}
        <Link to="/" className="back-home-btn">🏠 Back to Home</Link>
      </div>
    </div>
  );
}

export default UserProfilePage;
