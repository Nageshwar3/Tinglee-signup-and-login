import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const HelpSupport = () => {
    const navigate = useNavigate();

    return (
        <div className="settings-page premium-screen help-screen">
            <header className="settings-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Help & Support</h1>
                <div style={{ width: 24 }}></div>
            </header>

            <div className="premium-content">
                <div className="help-card-grid">
                    <div className="help-card">
                        <div className="help-icon-large neon-pink">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </div>
                        <h3>FAQ</h3>
                        <p>Common questions</p>
                    </div>

                    <div className="help-card">
                        <div className="help-icon-large neon-blue">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </div>
                        <h3>Contact</h3>
                        <p>Get in touch</p>
                    </div>

                    <div className="help-card">
                        <div className="help-icon-large neon-yellow">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </div>
                        <h3>Report</h3>
                        <p>Report a problem</p>
                    </div>

                    <div className="help-card">
                        <div className="help-icon-large neon-green">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h3>Safety</h3>
                        <p>Safety tips</p>
                    </div>
                </div>

                <div className="support-footer">
                    <p>Need more help?</p>
                    <button className="chat-support-btn">
                        Chat with Support
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
