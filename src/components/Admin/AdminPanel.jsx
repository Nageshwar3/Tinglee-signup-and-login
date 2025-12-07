import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoveStories/LoveStories.css';

const AdminPanel = () => {
    const navigate = useNavigate();
    const [pendingStories, setPendingStories] = useState([]);

    useEffect(() => {
        loadStories();
    }, []);

    const loadStories = () => {
        const allStories = JSON.parse(localStorage.getItem('tinglee_stories_v2') || '[]');
        setPendingStories(allStories.filter(story => story.status === 'pending'));
    };

    const handleAction = (id, action) => {
        const allStories = JSON.parse(localStorage.getItem('tinglee_stories_v2') || '[]');
        const updatedStories = allStories.map(story => {
            if (story.id === id) {
                return { ...story, status: action }; // action is 'approved' or 'rejected'
            }
            return story;
        });

        localStorage.setItem('tinglee_stories_v2', JSON.stringify(updatedStories));
        loadStories();
    };

    return (
        <div className="stories-container love-stories-page">
            <header className="stories-header">
                <button className="back-btn" onClick={() => navigate('/love-stories')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <h1>Admin Panel</h1>
                <div style={{ width: 40 }}></div>
            </header>

            <div className="admin-content">
                <h2>Pending Approvals ({pendingStories.length})</h2>

                {pendingStories.length === 0 ? (
                    <p className="no-pending">No pending stories to review.</p>
                ) : (
                    <div className="pending-list">
                        {pendingStories.map(story => (
                            <div key={story.id} className="admin-story-card">
                                <div className="admin-story-image">
                                    <img src={story.image} alt={story.couple} />
                                </div>
                                <div className="admin-story-details">
                                    <h3>{story.couple}</h3>
                                    <p>{story.story}</p>
                                    <div className="admin-actions">
                                        <button
                                            className="admin-action-btn approve"
                                            onClick={() => handleAction(story.id, 'approved')}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="admin-action-btn reject"
                                            onClick={() => handleAction(story.id, 'rejected')}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
