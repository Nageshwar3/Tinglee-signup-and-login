import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Discovery/Discovery.css';
import './Likes.css';
import ProfileDetails from '../Discovery/ProfileDetails';

const Likes = () => {
    const navigate = useNavigate();
    const [selectedProfile, setSelectedProfile] = useState(null);

    const [likes, setLikes] = useState([
        {
            id: 1,
            name: "Jessica",
            age: 24,
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            distance: '5 km away',
            location: 'Manhattan, NY',
            job: 'Student',
            images: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"],
            interests: ['Art', 'Food', 'Music'],
            prompts: [{ question: 'I take pride in', answer: 'My vinyl collection.' }]
        },
        {
            id: 2,
            name: "Chloe",
            age: 22,
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            distance: '8 km away',
            location: 'New York, NY',
            job: 'Graphic Designer',
            images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"],
            interests: ['Hiking', 'Coffee', 'Travel'],
            prompts: [{ question: 'My most irrational fear', answer: 'Running out of coffee.' }]
        },
        {
            id: 3,
            name: "Amelia",
            age: 25,
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            distance: '12 km away',
            location: 'Brooklyn, NY',
            job: 'Marketing',
            images: ["https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"],
            interests: ['Yoga', 'Reading', 'Wine'],
            prompts: []
        },
        {
            id: 4,
            name: "Sophia",
            age: 23,
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            distance: '10 km away',
            location: 'Jersey City, NJ',
            job: 'Photographer',
            images: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"],
            interests: ['Photography', 'Nature', 'Art'],
            prompts: []
        },
        {
            id: 5,
            name: "Isabella",
            age: 26,
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            distance: '15 km away',
            location: 'Queens, NY',
            job: 'Nurse',
            images: ["https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"],
            interests: ['Running', 'Cooking', 'Travel'],
            prompts: []
        },
        {
            id: 6,
            name: "Mia",
            age: 21,
            img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            distance: '3 km away',
            location: 'Manhattan, NY',
            job: 'Model',
            images: ["https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"],
            interests: ['Fashion', 'Design', 'Art'],
            prompts: []
        }
    ]);

    const handleLike = () => {
        if (selectedProfile) {
            setLikes(prev => prev.filter(p => p.id !== selectedProfile.id));
            setSelectedProfile(null);
        }
    };

    const handlePass = () => {
        if (selectedProfile) {
            setLikes(prev => prev.filter(p => p.id !== selectedProfile.id));
            setSelectedProfile(null);
        }
    };

    return (
        <div className="discovery-container likes-page">
            <header className="discovery-header">
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <h1 className="app-title">Likes</h1>
                <button className="icon-btn" onClick={() => navigate('/settings')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                </button>
            </header>

            <div className="likes-subtitle">
                This is a list of people who have liked you. Tap the heart to match!
            </div>

            <div className="likes-container">
                <div className="likes-grid">
                    {likes.map(profile => (
                        <div key={profile.id} className="like-card">
                            <img src={profile.img} alt={profile.name} className="like-card-img" />
                            <div className="like-card-overlay">
                                <div className="like-info">
                                    <span className="like-name">{profile.name}, {profile.age}</span>
                                </div>
                                <div className="like-actions">
                                    <button className="view-profile-btn" onClick={() => setSelectedProfile(profile)}>
                                        View Profile
                                    </button>
                                    <button className="like-action-btn" onClick={() => {
                                        // Direct match action
                                        setLikes(prev => prev.filter(p => p.id !== profile.id));
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProfile && (
                <ProfileDetails
                    profile={selectedProfile}
                    onClose={() => setSelectedProfile(null)}
                    onLike={handleLike}
                    onPass={handlePass}
                />
            )}

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
                <button className="nav-item" onClick={() => navigate('/messages')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Messages</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/love-stories')} title="Stories">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    <span>Stories</span>
                </button>
            </nav>
        </div>
    );
};

export default Likes;
