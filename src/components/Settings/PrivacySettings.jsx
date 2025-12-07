import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const PrivacySettings = () => {
    const navigate = useNavigate();
    const [privacy, setPrivacy] = useState({
        hideAge: false,
        hideDistance: true,
        incognito: false
    });

    const togglePrivacy = (key) => {
        setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="settings-page premium-screen privacy-screen">
            <header className="settings-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Privacy</h1>
                <div style={{ width: 24 }}></div>
            </header>

            <div className="premium-content">
                <div className="glass-card">
                    <div className="setting-row">
                        <div className="setting-info">
                            <div className="icon-box glass-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                            <span>Hide my age</span>
                        </div>
                        <div className={`toggle-switch ${privacy.hideAge ? 'active' : ''}`} onClick={() => togglePrivacy('hideAge')}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <div className="icon-box glass-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </div>
                            <span>Hide my distance</span>
                        </div>
                        <div className={`toggle-switch ${privacy.hideDistance ? 'active' : ''}`} onClick={() => togglePrivacy('hideDistance')}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <div className="icon-box glass-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                            </div>
                            <span>Incognito Mode</span>
                        </div>
                        <div className={`toggle-switch ${privacy.incognito ? 'active' : ''}`} onClick={() => togglePrivacy('incognito')}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>
                </div>

                <div className="glass-card mt-4">
                    <div className="setting-row arrow-row" onClick={() => navigate('/settings/blocked-users')} style={{ cursor: 'pointer' }}>
                        <div className="setting-info">
                            <div className="icon-box glass-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                            </div>
                            <span>Blocked Users</span>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>

                    <div className="setting-row arrow-row" onClick={() => navigate('/settings/data-controls')} style={{ cursor: 'pointer' }}>
                        <div className="setting-info">
                            <div className="icon-box glass-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                            <span>Data Controls</span>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacySettings;
