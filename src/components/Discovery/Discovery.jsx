import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Discovery.css';

const Discovery = () => {
    const navigate = useNavigate();

    const [profiles, setProfiles] = useState([
        {
            id: 8,
            name: 'Sanil Jacob',
            age: 22,
            distance: '25 km away',
            images: [
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
                'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60'
            ],
            bio: 'Music lover and traveler.',
            job: 'Director',
            company: 'Company Name',
            school: 'University of Design',
            smoking: 'Doesn\'t smoke',
            lookingFor: 'Looking for long-term',
            location: 'Kerala, IN',
            interests: ['Single', 'Single', 'Single'],
            prompts: [
                { question: 'Most favourite AR Rahman track', answer: 'is hmmm, idk how does one choose?' }
            ],
            isMatch: false,
            maritalStatus: 'Single'
        },
        {
            id: 1,
            name: 'Jessica',
            age: 26,
            distance: '8 km away',
            images: [
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
            ],
            bio: 'Loves hiking and coffee. Looking for someone to explore the city with.',
            job: 'Graphic Designer',
            location: 'New York, NY',
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
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
            ],
            bio: 'Tech enthusiast and gamer. Always down for a co-op session.',
            job: 'Software Engineer',
            location: 'Brooklyn, NY',
            interests: ['Gaming', 'Tech', 'Sci-Fi', 'Coding', 'Pizza'],
            prompts: [
                { question: 'My simple pleasure', answer: 'Late night coding with lo-fi beats.' },
                { question: 'Best travel story', answer: 'Getting lost in Tokyo and finding the best ramen ever.' }
            ],
            isMatch: true,
            maritalStatus: 'Divorced'
        },
        {
            id: 3,
            name: 'Sarah',
            age: 24,
            distance: '5 km away',
            images: [
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
            ],
            bio: 'Art lover and foodie. Let\'s find the best sushi in town.',
            job: 'Student',
            location: 'Manhattan, NY',
            interests: ['Art', 'Food', 'Music', 'Museums', 'Sushi'],
            prompts: [
                { question: 'I take pride in', answer: 'My vinyl collection.' }
            ],
            isMatch: false,
            maritalStatus: 'Single'
        },
        {
            id: 4,
            name: 'Michael',
            age: 30,
            distance: '13 km away',
            images: [
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
            ],
            bio: 'Musician and traveler. Always looking for the next adventure.',
            job: 'Musician',
            location: 'Queens, NY',
            interests: ['Music', 'Travel', 'Adventure', 'Guitar', 'Concerts'],
            prompts: [],
            isMatch: false,
            maritalStatus: 'Separated'
        },
        {
            id: 5,
            name: 'Emma',
            age: 27,
            distance: '3 km away',
            images: [
                'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
            ],
            bio: 'Yoga instructor and bookworm. I love quiet mornings and busy nights.',
            job: 'Yoga Instructor',
            location: 'Brooklyn, NY',
            interests: ['Yoga', 'Reading', 'Nature', 'Meditation', 'Tea'],
            prompts: [],
            isMatch: true,
            maritalStatus: 'Widowed'
        },
        {
            id: 6,
            name: 'James',
            age: 29,
            distance: '24 km away',
            images: [
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
            ],
            bio: 'Chef by day, food critic by night. Let me cook for you.',
            job: 'Head Chef',
            location: 'Manhattan, NY',
            interests: ['Cooking', 'Food', 'Wine', 'Dining', 'Travel'],
            prompts: [],
            isMatch: false,
            maritalStatus: 'Single'
        },
        {
            id: 7,
            name: 'Olivia',
            age: 25,
            distance: '10 km away',
            images: [
                'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
            ],
            bio: 'Photographer capturing moments. Nature lover.',
            job: 'Photographer',
            location: 'Jersey City, NJ',
            interests: ['Photography', 'Nature', 'Art', 'Fashion', 'Design'],
            prompts: [],
            isMatch: false,
            maritalStatus: 'Single'
        }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showMatch, setShowMatch] = useState(false);
    const [matchedProfile, setMatchedProfile] = useState(null);
    const [lastDirection, setLastDirection] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [swipeFeedback, setSwipeFeedback] = useState(null);

    // Filter State
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        maxDistance: 500,
        ageRange: [18, 60],
        maritalStatus: [] // Empty means all
    });

    // Load filters from localStorage on mount
    React.useEffect(() => {
        const savedFilters = localStorage.getItem('tinglee_filters');
        if (savedFilters) {
            setFilters(JSON.parse(savedFilters));
        }
    }, []);

    // Save filters to localStorage whenever they change
    React.useEffect(() => {
        localStorage.setItem('tinglee_filters', JSON.stringify(filters));
    }, [filters]);

    const filteredProfiles = profiles.filter(profile => {
        const distance = parseInt(profile.distance);
        const matchesDistance = distance <= filters.maxDistance;
        const matchesAge = profile.age >= filters.ageRange[0] && profile.age <= filters.ageRange[1];
        const matchesMarital = filters.maritalStatus.length === 0 || filters.maritalStatus.includes(profile.maritalStatus);

        return matchesDistance && matchesAge && matchesMarital;
    });

    const toggleMaritalStatus = (status) => {
        setFilters(prev => {
            const current = prev.maritalStatus;
            const updated = current.includes(status)
                ? current.filter(s => s !== status)
                : [...current, status];
            return { ...prev, maritalStatus: updated };
        });
    };

    const handleSwipe = (direction) => {
        setLastDirection(direction);
        setSwipeFeedback(direction);

        const currentProfile = filteredProfiles[currentIndex];

        if (direction === 'right' || direction === 'super') {
            if (currentProfile && currentProfile.isMatch) {
                setMatchedProfile(currentProfile);
                setTimeout(() => setShowMatch(true), 300);
            }
        }

        setTimeout(() => {
            setSwipeFeedback(null);
            if (currentIndex < filteredProfiles.length) {
                setCurrentIndex(prev => prev + 1);
                setShowDetails(false);
                setLastDirection(null);
            }
        }, 400);
    };

    const closeMatch = () => {
        setShowMatch(false);
        setMatchedProfile(null);
    };

    const currentProfile = filteredProfiles[currentIndex];

    return (
        <div className="discovery-container">
            {/* Header */}
            <header className="discovery-header">
                <div></div>
                <h1 className="app-title">Tinglee</h1>
                <div className="header-right">
                    <button className="icon-btn" onClick={() => navigate('/love-stories')} title="Love Stories">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </button>
                    <button className="icon-btn filter-icon" onClick={() => setShowFilters(true)}>
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
                    </button>
                    <button className="icon-btn chat-icon" onClick={() => navigate('/matches')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Main Content - Card Stack */}
            <main className="discovery-main">
                {currentProfile ? (
                    <div className={`profile-card ${lastDirection ? 'exiting ' + lastDirection : ''}`}>

                        {/* Swipe Feedback Stamps */}
                        {swipeFeedback === 'right' && (
                            <div className="swipe-stamp like-stamp">LIKE</div>
                        )}
                        {swipeFeedback === 'left' && (
                            <div className="swipe-stamp nope-stamp">NOPE</div>
                        )}
                        {swipeFeedback === 'super' && (
                            <div className="swipe-stamp super-stamp">SUPER</div>
                        )}

                        <div className="card-image-wrapper">
                            <img src={currentProfile.images[0]} alt={currentProfile.name} className="card-image" />
                            <div className="card-overlay"></div>

                            {/* Profile Info (Summary) */}
                            <div className="card-info">
                                <div className="card-text">
                                    <h2 className="profile-name-age">{currentProfile.name}, {currentProfile.age}</h2>
                                </div>
                                <button className="info-btn" onClick={() => setShowDetails(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="no-profiles">
                        <div className="pulse-circle"></div>
                        <p>Searching for more profiles...</p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="action-buttons">
                    <button className="action-btn pass" onClick={() => handleSwipe('left')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                    <button className="action-btn like" onClick={() => handleSwipe('right')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button className="action-btn super-like" onClick={() => handleSwipe('super')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </button>
                </div>
            </main>

            {/* Profile Details Overlay */}
            {showDetails && currentProfile && (
                <div className="profile-details-overlay">
                    <div className="details-scroll-container">
                        {/* Header Image with Floating Buttons */}
                        <div className="details-image-header">
                            <img src={currentProfile.images[0]} alt={currentProfile.name} />

                            {/* Floating Action Buttons on Image */}
                            <div className="floating-actions">
                                <button className="float-btn pass" onClick={() => handleSwipe('left')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <button className="float-btn like" onClick={() => handleSwipe('right')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                            </div>

                            <button className="close-details-btn" onClick={() => setShowDetails(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                        </div>

                        <div className="details-content">
                            {/* Name & Location Section */}
                            <div className="details-section no-border">
                                <h1 className="details-name-large">{currentProfile.name}, {currentProfile.age}</h1>
                                <p className="details-distance">{currentProfile.distance}</p>

                                <div className="details-location-block">
                                    <span className="label-small">Location</span>
                                    <p className="value-text">{currentProfile.location}</p>
                                </div>

                                {/* New Fields: Job, School, etc. */}
                                <div className="details-info-grid">
                                    {currentProfile.job && currentProfile.company && (
                                        <div className="info-row">
                                            <span className="info-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                            </span>
                                            <span className="info-text">{currentProfile.job} at {currentProfile.company}</span>
                                        </div>
                                    )}
                                    {currentProfile.school && (
                                        <div className="info-row">
                                            <span className="info-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                                            </span>
                                            <span className="info-text">{currentProfile.school}</span>
                                        </div>
                                    )}
                                    {currentProfile.smoking && (
                                        <div className="info-row">
                                            <span className="info-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                            </span>
                                            <span className="info-text">{currentProfile.smoking}</span>
                                        </div>
                                    )}
                                    {currentProfile.lookingFor && (
                                        <div className="info-row">
                                            <span className="info-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            </span>
                                            <span className="info-text">{currentProfile.lookingFor}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Prompts Section */}
                            {currentProfile.prompts && currentProfile.prompts.map((prompt, index) => (
                                <div key={index} className="details-section prompt-card">
                                    <span className="label-small">{prompt.question}</span>
                                    <h3 className="prompt-answer">{prompt.answer}</h3>
                                </div>
                            ))}

                            {/* Interests */}
                            <div className="details-section">
                                <div className="interests-tags">
                                    {currentProfile.interests.map((interest, index) => (
                                        <span key={index} className="interest-tag-outline">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Instagram Section (Mock) */}
                            <div className="details-section">
                                <span className="label-small">Instagram</span>
                                <div className="insta-grid">
                                    <div className="insta-item">
                                        <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=400&auto=format&fit=crop&q=60" alt="Insta 1" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }} />
                                    </div>
                                    <div className="insta-item">
                                        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop&q=60" alt="Insta 2" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }} />
                                    </div>
                                    <div className="insta-item">
                                        <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&auto=format&fit=crop&q=60" alt="Insta 3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }} />
                                    </div>
                                    <div className="insta-item">
                                        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&auto=format&fit=crop&q=60" alt="Insta 4" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 4 }} />
                                    </div>
                                </div>
                            </div>

                            {/* Like Profile Button */}
                            <div className="details-section" style={{ marginTop: 40, textAlign: 'center' }}>
                                <button className="like-profile-btn" onClick={() => handleSwipe('right')}>
                                    Like Profile
                                </button>
                            </div>

                            <div style={{ height: 60 }}></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mutual Match Notification Overlay */}
            {showMatch && matchedProfile && (
                <div className="match-overlay">
                    <div className="match-content">
                        <h1 className="match-title">It's a Match!</h1>
                        <p className="match-subtitle">You and {matchedProfile.name} liked each other.</p>

                        <div className="match-avatars">
                            <div className="avatar-wrapper user">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60" alt="You" />
                            </div>
                            <div className="avatar-wrapper match">
                                <img src={matchedProfile.images[0]} alt={matchedProfile.name} />
                            </div>
                            <div className="match-icon-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="match-actions">
                            <button className="match-btn primary">Send a Message</button>
                            <button className="match-btn secondary" onClick={closeMatch}>Keep Swiping</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Filter Modal */}
            {showFilters && (
                <div className="filter-overlay">
                    <div className="filter-content">
                        <div className="filter-header">
                            <h2>Filters</h2>
                            <button className="close-filter-btn" onClick={() => setShowFilters(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <div className="filter-section">
                            <div className="filter-label-row">
                                <label>Maximum Distance</label>
                                <span className="filter-value">{filters.maxDistance} km</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="500"
                                value={filters.maxDistance}
                                onChange={(e) => setFilters({ ...filters, maxDistance: parseInt(e.target.value) })}
                                className="filter-slider"
                                style={{ backgroundSize: `${(filters.maxDistance - 1) * 100 / 499}% 100%` }}
                            />
                        </div>

                        <div className="filter-section">
                            <div className="filter-label-row">
                                <label>Age Range</label>
                                <span className="filter-value">{filters.ageRange[0]} - {filters.ageRange[1]}</span>
                            </div>
                            <div className="age-inputs">
                                <input
                                    type="number"
                                    min="10"
                                    max="60"
                                    value={filters.ageRange[0]}
                                    onChange={(e) => setFilters({ ...filters, ageRange: [parseInt(e.target.value), filters.ageRange[1]] })}
                                    className="age-input"
                                />
                                <span>-</span>
                                <input
                                    type="number"
                                    min="10"
                                    max="60"
                                    value={filters.ageRange[1]}
                                    onChange={(e) => setFilters({ ...filters, ageRange: [filters.ageRange[0], parseInt(e.target.value)] })}
                                    className="age-input"
                                />
                            </div>
                        </div>

                        <div className="filter-section">
                            <div className="filter-label-row">
                                <label>Marital Status</label>
                            </div>
                            <div className="marital-status-options">
                                {['Single', 'Divorced', 'Widowed', 'Separated'].map(status => (
                                    <button
                                        key={status}
                                        className={`marital-chip ${filters.maritalStatus.includes(status) ? 'active' : ''}`}
                                        onClick={() => toggleMaritalStatus(status)}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="apply-filters-btn" onClick={() => setShowFilters(false)}>Apply Filters</button>
                    </div>
                </div>
            )}

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                <button className="nav-item active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                    </svg>
                    <span>Discover</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/likes')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default Discovery;
