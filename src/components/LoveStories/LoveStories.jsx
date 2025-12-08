import React, { useState, useEffect } from 'react';
// Force git update
import { useNavigate } from 'react-router-dom';
import './LoveStories.css';

const LoveStories = () => {
    const navigate = useNavigate();
    const [stories, setStories] = useState([]);
    const [selectedStory, setSelectedStory] = useState(null);

    useEffect(() => {
        // Load stories from localStorage
        const allStories = JSON.parse(localStorage.getItem('tinglee_stories_v2') || '[]');
        // Filter only approved stories
        const approvedStories = allStories.filter(story => story.status === 'approved');

        // If no stories exist, add some mock data for demonstration
        if (approvedStories.length === 0 && allStories.length === 0) {
            const mockStories = [
                {
                    id: 1,
                    couple: "Sarah & Mike",
                    image: "https://images.unsplash.com/photo-1621621667797-e06afc217fb0?w=800&auto=format&fit=crop&q=60",
                    story: "We met on a rainy Tuesday and bonded over our shared love for hiking...",
                    status: 'approved',
                    date: '2 DAYS AGO',
                    readTime: '3 min read'
                },
                {
                    id: 2,
                    couple: "Coffee Shop Love",
                    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60",
                    story: "Our first date lasted six hours because we just couldn't stop talking. Th...",
                    status: 'approved',
                    date: '1 WEEK AGO',
                    readTime: '5 min read'
                }
            ];
            localStorage.setItem('tinglee_stories_v2', JSON.stringify(mockStories));
            setStories(mockStories);
        } else {
            setStories(approvedStories);
        }
    }, []);

    const openStory = (story) => {
        setSelectedStory(story);
    };

    const closeStory = () => {
        setSelectedStory(null);
    };

    const toggleLike = (storyId) => {
        const updatedStories = stories.map(story => {
            if (story.id === storyId) {
                return { ...story, isLiked: !story.isLiked };
            }
            return story;
        });

        setStories(updatedStories);

        // Update localStorage
        // We need to merge with all stories in case we are only showing approved ones
        const allStories = JSON.parse(localStorage.getItem('tinglee_stories_v2') || '[]');
        const updatedAllStories = allStories.map(story => {
            const updatedStory = updatedStories.find(s => s.id === story.id);
            return updatedStory ? updatedStory : story;
        });

        localStorage.setItem('tinglee_stories_v2', JSON.stringify(updatedAllStories));
    };

    return (
        <div className="stories-container love-stories-page">
            <header className="stories-header">
                <button className="back-btn" onClick={() => navigate('/discovery')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <h1>Love Stories</h1>
                <button className="submit-btn-header" onClick={() => navigate('/submit-story')}>
                    Share Yours
                </button>
            </header>

            <div className="stories-grid">
                {stories.map(story => (
                    <div key={story.id} className="story-card" onClick={() => openStory(story)}>
                        <div className="story-image">
                            <img src={story.image} alt={story.couple} />
                            <button
                                className={`card-like-btn ${story.isLiked ? 'liked' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleLike(story.id);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={story.isLiked ? "currentColor" : "none"} stroke={story.isLiked ? "none" : "currentColor"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </button>
                        </div>
                        <div className="story-content">
                            <h3>{story.couple}</h3>
                            <p className="story-date">{story.date}</p>
                            <p className="story-text">{story.story}</p>
                            {/* Card Footer Removed */}
                        </div>
                    </div>

                ))}
            </div>

            {
                selectedStory && (
                    <div className="story-modal-overlay" onClick={closeStory}>
                        <div className="story-modal-content" onClick={e => e.stopPropagation()}>
                            <button className="close-modal-btn" onClick={closeStory}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                            <div className="modal-image">
                                <img src={selectedStory.image} alt={selectedStory.couple} />
                            </div>
                            <div className="modal-details">
                                <h2>{selectedStory.couple}</h2>
                                <p className="modal-date">{selectedStory.date}</p>
                                <p className="modal-text">{selectedStory.story}</p>
                            </div>
                        </div>
                    </div>
                )
            }

            <div className="admin-link-container">
                <button className="text-link" onClick={() => navigate('/admin')}>Admin Panel (Demo)</button>
            </div>

            {/* Bottom Navigation */}
            <nav className="bottom-nav">
                <button className="nav-item" onClick={() => navigate('/discovery')} title="Discover">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                    </svg>
                    <span>Discover</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/likes')} title="Likes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>Likes</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/matches')} title="Matches">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <button className="nav-item active" onClick={() => navigate('/love-stories')} title="Stories">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    <span>Stories</span>
                </button>
            </nav>
        </div >
    );
};

export default LoveStories;
