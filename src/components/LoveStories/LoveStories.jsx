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
                    story: "We met on Tinglee 2 years ago and just got engaged! It was love at first swipe.",
                    status: 'approved',
                    date: '2023-11-15'
                },
                {
                    id: 2,
                    couple: "Jessica & Tom",
                    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60",
                    story: "Never thought I'd find my soulmate online, but here we are. Thanks Tinglee!",
                    status: 'approved',
                    date: '2023-10-20'
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
                    <div key={story.id} className="story-card" onClick={() => openStory(story)} style={{ cursor: 'pointer' }}>
                        <div className="story-image">
                            <img src={story.image} alt={story.couple} />
                        </div>
                        <div className="story-content">
                            <h3>{story.couple}</h3>
                            <p className="story-date">{story.date}</p>
                            <p className="story-text">"{story.story}"</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedStory && (
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
            )}

            <div className="admin-link-container">
                <button className="text-link" onClick={() => navigate('/admin')}>Admin Panel (Demo)</button>
            </div>
        </div>
    );
};

export default LoveStories;
