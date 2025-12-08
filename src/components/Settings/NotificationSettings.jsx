import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const NotificationSettings = () => {
    const navigate = useNavigate();
    const [settings, setSettings] = useState({
        newMatches: true,
        messages: true,
        profileLikes: false,
        appUpdates: true
    });

    const toggleSetting = (key) => {
        setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="settings-page premium-screen notifications-screen">
            <header className="settings-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Notifications</h1>
                <div style={{ width: 24 }}></div>
            </header>

            <div className="premium-content">
                <div className="premium-card glow-card">
                    <div className="setting-row">
                        <div className="setting-info">
                            <div className="icon-box neon-pink">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <span>New Matches</span>
                        </div>
                        <div className={`toggle-switch ${settings.newMatches ? 'active' : ''}`} onClick={() => toggleSetting('newMatches')}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <div className="icon-box neon-blue">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <span>Messages</span>
                        </div>
                        <div className={`toggle-switch ${settings.messages ? 'active' : ''}`} onClick={() => toggleSetting('messages')}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>

                    <div className="setting-row">
                        <div className="setting-info">
                            <div className="icon-box neon-purple">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </div>
                            <span>Profile Likes</span>
                        </div>
                        <div className={`toggle-switch ${settings.profileLikes ? 'active' : ''}`} onClick={() => toggleSetting('profileLikes')}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>



                    <div className="setting-row">
                        <div className="setting-info">
                            <div className="icon-box neon-green">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </div>
                            <span>App Updates</span>
                        </div>
                        <div className={`toggle-switch ${settings.appUpdates ? 'active' : ''}`} onClick={() => toggleSetting('appUpdates')}>
                            <div className="toggle-thumb"></div>
                        </div>
                    </div>
                </div>

                <button className="save-btn glow-btn" onClick={() => navigate(-1)}>
                    Save Preferences
                </button>
            </div>
        </div>
    );
};

export default NotificationSettings;
