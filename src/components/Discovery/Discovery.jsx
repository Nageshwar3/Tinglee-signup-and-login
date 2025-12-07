import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Discovery.css';
import ProfileDetails from './ProfileDetails';

const Discovery = () => {
    const navigate = useNavigate();

    // Sample profiles data
    const [profiles] = useState([
        {
            id: 1,
            name: 'Jessica',
            age: 26,
            distance: '8 km away',
            images: [
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60',
            ],
            bio: 'Loves hiking and coffee. Looking for someone to explore the city with.',
            job: 'Graphic Designer',
            company: 'Creative Studio',
            school: 'NYU Design School',
            location: 'New York, NY',
            smoking: "Doesn't smoke",
            lookingFor: 'Long-term relationship',
            interests: ['Hiking', 'Coffee', 'Travel', 'Art', 'Photography'],
            prompts: [
                { question: 'My most irrational fear', answer: 'Running out of coffee on a Monday morning.' },
                { question: 'I get way too excited about', answer: 'Finding a new hiking trail with a view.' }
            ],
            isMatch: false,
            maritalStatus: 'Single'
        },
        {
            id: 2,
            name: 'David',
            age: 28,
            distance: '19 km away',
            images: [
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60'
            ],
            bio: 'Tech enthusiast and gamer. Always down for a co-op session.',
            job: 'Software Engineer',
            company: 'Tech Corp',
            school: 'Stanford University',
            location: 'Brooklyn, NY',
            smoking: "Doesn't smoke",
            lookingFor: 'Long-term relationship',
            interests: ['Gaming', 'Tech', 'Sci-Fi', 'Coding', 'Pizza'],
            prompts: [
                { question: 'My simple pleasure', answer: 'Late night coding with lo-fi beats.' }
            ],
            isMatch: true,
            maritalStatus: 'Single'
        },
        {
            id: 3,
            name: 'Sarah',
            age: 24,
            distance: '5 km away',
            images: [
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60'
            ],
            bio: 'Art lover and foodie. Let\'s find the best sushi in town.',
            job: 'Artist',
            company: 'Independent',
            school: 'FIT',
            location: 'Manhattan, NY',
            smoking: "Doesn't smoke",
            lookingFor: 'Casual dating',
            interests: ['Art', 'Food', 'Music', 'Museums', 'Sushi'],
            prompts: [
                { question: 'I take pride in', answer: 'My vinyl collection and art studio.' }
            ],
            isMatch: false,
            maritalStatus: 'Single'
        },
        {
            id: 4,
            name: 'Emma',
            age: 27,
            distance: '3 km away',
            images: [
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60'
            ],
            bio: 'Yoga instructor and bookworm. I love quiet mornings and busy nights.',
            job: 'Yoga Instructor',
            company: 'Zen Studio',
            school: 'Yoga Alliance',
            location: 'Brooklyn, NY',
            smoking: "Doesn't smoke",
            lookingFor: 'Long-term relationship',
            interests: ['Yoga', 'Reading', 'Nature', 'Meditation', 'Tea'],
            prompts: [],
            isMatch: true,
            maritalStatus: 'Single'
        },
        {
            id: 5,
            name: 'Olivia',
            age: 25,
            distance: '10 km away',
            images: [
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60'
            ],
            bio: 'Photographer capturing moments. Nature lover.',
            job: 'Photographer',
            company: 'Freelance',
            school: 'RISD',
            location: 'Queens, NY',
            smoking: "Doesn't smoke",
            lookingFor: 'Long-term relationship',
            interests: ['Photography', 'Nature', 'Art', 'Fashion', 'Design'],
            prompts: [],
            isMatch: false,
            maritalStatus: 'Single'
        }
    ]);

    // State Management
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [showMatch, setShowMatch] = useState(false);
    const [matchedProfile, setMatchedProfile] = useState(null);
    const [showFilters, setShowFilters] = useState(false);
    const [swipeFeedback, setSwipeFeedback] = useState(null);

    // Filters State
    const [filters, setFilters] = useState({
        maxDistance: 50,
        ageRange: [18, 50],
        maritalStatus: ['Single', 'Divorced', 'Widowed', 'Separated']
    });

    // Get filtered profiles
    const filteredProfiles = profiles.filter(profile => {
        const distance = parseInt(profile.distance) <= filters.maxDistance;
        const age = profile.age >= filters.ageRange[0] && profile.age <= filters.ageRange[1];
        const status = filters.maritalStatus.includes(profile.maritalStatus);
        return distance && age && status;
    });

    // Toggle marital status filter
    const toggleMaritalStatus = (status) => {
        setFilters(prev => {
            const updated = prev.maritalStatus.includes(status)
                ? prev.maritalStatus.filter(s => s !== status)
                : [...prev.maritalStatus, status];
            return { ...prev, maritalStatus: updated };
        });
    };

    // Handle swipe
    const handleSwipe = (direction) => {
        setSwipeFeedback(direction);
        const currentProfile = filteredProfiles[currentIndex];

        if (direction === 'right' && currentProfile?.isMatch) {
            setMatchedProfile(currentProfile);
            setTimeout(() => setShowMatch(true), 300);
        }

        setTimeout(() => {
            setSwipeFeedback(null);
            setCurrentIndex(prev => prev + 1);
            setCurrentImageIndex(0);
            setShowDetails(false);
        }, 400);
    };

    // Image navigation
    const handleNextImage = (e) => {
        e.stopPropagation();
        const currentProfile = filteredProfiles[currentIndex];
        if (currentProfile && currentImageIndex < currentProfile.images.length - 1) {
            setCurrentImageIndex(prev => prev + 1);
        }
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        if (currentImageIndex > 0) {
            setCurrentImageIndex(prev => prev - 1);
        }
    };

    const closeMatch = () => {
        setShowMatch(false);
        setMatchedProfile(null);
    };

    const currentProfile = filteredProfiles[currentIndex];
    const noMoreProfiles = currentIndex >= filteredProfiles.length;

    const handleProfileClick = () => {
        navigate('/profile-wizard?view=profile');
    };

    return (
        <div className="discovery-container">
            {/* Header */}
            <header className="discovery-header">
                <h1 className="app-title">Tinglee</h1>
                <div className="header-icons">
                    <button className="icon-btn" onClick={handleProfileClick} title="Profile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Profile</span>
                    </button>
                    <button className="icon-btn" onClick={() => navigate('/settings')} title="Settings">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                        <span>Settings</span>
                    </button>

                </div>
            </header>

            {/* Main Content */}
            <main className="discovery-main">
                {!noMoreProfiles && currentProfile ? (
                    <div className={`profile-card ${swipeFeedback ? `swipe-${swipeFeedback}` : ''}`}>
                        {swipeFeedback === 'right' && <div className="swipe-feedback like">LIKE</div>}
                        {swipeFeedback === 'left' && <div className="swipe-feedback nope">NOPE</div>}

                        <div className="distance-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>{currentProfile.distance}</span>
                        </div>

                        <div className="image-container">
                            <div className="image-progress">
                                {currentProfile.images.map((_, index) => (
                                    <div key={index} className={`progress-bar ${index === currentImageIndex ? 'active' : ''}`}></div>
                                ))}
                            </div>

                            <img src={currentProfile.images[currentImageIndex]} alt={currentProfile.name} className="profile-image" />

                            <div className="tap-area left" onClick={handlePrevImage}></div>
                            <div className="tap-area right" onClick={handleNextImage}></div>

                            <div className="overlay-gradient"></div>

                            <div className="card-footer">
                                <div className="profile-info">
                                    <h2 className="profile-title">{currentProfile.name}, {currentProfile.age}</h2>
                                </div>
                                <button className="info-button" onClick={() => setShowDetails(true)} title="View details">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="no-profiles-message">
                        <div className="empty-state">
                            <p>No more profiles to discover</p>
                            <button className="reset-btn" onClick={() => { setCurrentIndex(0); setCurrentImageIndex(0); }}>
                                Reset
                            </button>
                        </div>
                    </div>
                )}
            </main>

            {/* Action Buttons */}
            {!noMoreProfiles && (
                <div className="action-buttons">
                    <button className="action-btn nope" onClick={() => handleSwipe('left')} title="Pass">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <button className="action-btn like" onClick={() => handleSwipe('right')} title="Like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            )}

            {/* Profile Details Modal */}
            {showDetails && currentProfile && (
                <ProfileDetails profile={currentProfile} onClose={() => setShowDetails(false)} onLike={() => { setShowDetails(false); handleSwipe('right'); }} onPass={() => { setShowDetails(false); handleSwipe('left'); }} />
            )}



            {/* Match Modal */}
            {showMatch && matchedProfile && (
                <div className="match-modal-overlay">
                    <div className="match-modal">
                        <h1 className="match-title">It's a Match! 🎉</h1>
                        <p className="match-subtitle">You and {matchedProfile.name} liked each other.</p>
                        <div className="match-avatars">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200" alt="You" className="avatar" />
                            <div className="match-heart">❤️</div>
                            <img src={matchedProfile.images[0]} alt={matchedProfile.name} className="avatar" />
                        </div>
                        <div className="match-actions">
                            <button className="btn btn-primary" onClick={() => navigate('/chat/' + matchedProfile.id)}>Send a Message</button>
                            <button className="btn btn-secondary" onClick={closeMatch}>Keep Swiping</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Filters Modal */}
            {showFilters && (
                <div className="filters-modal-overlay">
                    <div className="filters-modal">
                        <div className="filters-header">
                            <h2>Filters</h2>
                            <button className="close-btn" onClick={() => setShowFilters(false)}>✕</button>
                        </div>
                        <div className="filter-group">
                            <label>Maximum Distance</label>
                            <div className="filter-value-display">{filters.maxDistance} km</div>
                            <div className="slider-wrapper" style={{ ['--fill']: `${(filters.maxDistance / 500) * 100}%` }}>
                                <input
                                    type="range"
                                    min="1"
                                    max="500"
                                    value={filters.maxDistance}
                                    onChange={(e) => setFilters({ ...filters, maxDistance: parseInt(e.target.value) })}
                                    className="slider"
                                />
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Age Range</label>
                            <div className="age-inputs">
                                <input type="number" min="18" max="100" value={filters.ageRange[0]} onChange={(e) => setFilters({ ...filters, ageRange: [parseInt(e.target.value), filters.ageRange[1]] })} className="age-input" />
                                <span className="range-dash">–</span>
                                <input type="number" min="18" max="100" value={filters.ageRange[1]} onChange={(e) => setFilters({ ...filters, ageRange: [filters.ageRange[0], parseInt(e.target.value)] })} className="age-input" />
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Marital Status</label>
                            <div className="status-chips">
                                {['Single', 'Divorced', 'Widowed', 'Separated'].map(status => (
                                    <button key={status} className={`chip ${filters.maritalStatus.includes(status) ? 'active' : ''}`} onClick={() => toggleMaritalStatus(status)}>{status}</button>
                                ))}
                            </div>
                        </div>
                        <button className="apply-btn" onClick={() => setShowFilters(false)}>Apply Filters</button>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                <button className={`nav-item ${!showDetails && !showMatch && !showFilters ? 'active' : ''}`} onClick={() => { setShowDetails(false); setShowMatch(false); setShowFilters(false); }} title="Discover">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                    <span>Discover</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/likes')} title="Likes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>Likes</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/matches')} title="Matches">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Matches</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/messages')} title="Messages">
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

export default Discovery;
