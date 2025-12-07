import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const BlockedUsers = () => {
    const navigate = useNavigate();

    return (
        <div className="settings-page premium-screen privacy-screen">
            <header className="settings-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Blocked Users</h1>
                <div style={{ width: 24 }}></div>
            </header>

            <div className="premium-content">
                <div className="glass-card">
                    <div className="empty-state-message" style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                        <p>No blocked users</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlockedUsers;
