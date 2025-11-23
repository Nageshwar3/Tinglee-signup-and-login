import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Discovery/Discovery.css';
import './Likes.css';

const Likes = () => {
    const navigate = useNavigate();

    const mockLikes = [
        { id: 1, name: "Sarah", age: 24, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
        { id: 2, name: "Jessica", age: 22, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
        { id: 3, name: "Emily", age: 26, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
        { id: 4, name: "Olivia", age: 23, img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
        { id: 5, name: "Sophia", age: 25, img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
        { id: 6, name: "Ava", age: 21, img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }
    ];

    return (
        <div className="discovery-container">
            <header className="discovery-header">
                <h1 className="app-title">Likes</h1>
                <div className="header-right">
                    <div className="gold-badge">12 Likes</div>
                </div>
            </header>

            <div className="likes-container">
                <div className="likes-header-banner">
                    <h2>Upgrade to Gold</h2>
                    <p>See who likes you and match instantly!</p>
                </div>

                <div className="likes-grid">
                    {mockLikes.map(profile => (
                        <div key={profile.id} className="like-card">
                            <img src={profile.img} alt={profile.name} />
                            <div className="like-card-overlay">
                                <span className="like-card-name">{profile.name}</span>
                                <span className="like-card-age">{profile.age}</span>
                            </div>
                            <div className="gold-badge">Recently</div>
                        </div>
                    ))}
                </div>
            </div>

            <nav className="bottom-nav">
                <button className="nav-item" onClick={() => navigate('/discovery')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    </svg>
                    <span>Discover</span>
                </button>
                <button className="nav-item active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>Likes</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/matches')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Matches</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/profile-wizard')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Profile</span>
                </button>
            </nav>
        </div>
    );
};

export default Likes;
