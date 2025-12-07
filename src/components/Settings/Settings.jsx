import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const IconBack = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
);

const IconChevronRight = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const IconProfile = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const IconBell = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
);

const IconShield = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);

const IconCard = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
);

const IconHelp = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);

const Settings = () => {
    const navigate = useNavigate();
    const [distance, setDistance] = React.useState(50);
    const [ageRange, setAgeRange] = React.useState([18, 35]);
    const [showMe, setShowMe] = React.useState('women');
    const [maritalStatus, setMaritalStatus] = React.useState('single');

    return (
        <div className="settings-page">
            <header className="settings-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <IconBack />
                </button>
                <h1>Settings</h1>
                <div style={{ width: 24 }}></div>
            </header>

            <div className="settings-content">
                <div className="settings-section">
                    <h2 className="section-label">ACCOUNT</h2>
                    <div className="settings-group">
                        <div className="settings-item" onClick={() => navigate('/profile-wizard?view=profile')}>
                            <div className="settings-icon-wrapper pink">
                                <IconProfile />
                            </div>
                            <span className="settings-text">Profile Settings</span>
                            <IconChevronRight />
                        </div>
                        <div className="settings-item" onClick={() => navigate('/settings/notifications')}>
                            <div className="settings-icon-wrapper pink">
                                <IconBell />
                            </div>
                            <span className="settings-text">Notification Preferences</span>
                            <IconChevronRight />
                        </div>
                        <div className="settings-item" onClick={() => navigate('/settings/privacy')}>
                            <div className="settings-icon-wrapper pink">
                                <IconShield />
                            </div>
                            <span className="settings-text">Privacy Settings</span>
                            <IconChevronRight />
                        </div>
                    </div>
                </div>

                <div className="settings-section">
                    <h2 className="section-label">DISCOVERY SETTINGS</h2>
                    <div className="settings-group p-4">
                        <div className="setting-control">
                            <div className="control-header">
                                <span>Maximum Distance</span>
                                <span className="control-value">{distance}km</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="500"
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                                className="settings-slider"
                                style={{ '--val': `${(distance / 500) * 100}%` }}
                            />
                        </div>

                        <div className="setting-control mt-4">
                            <div className="control-header">
                                <span>Age Range</span>
                                <span className="control-value">{ageRange[0]} - {ageRange[1]}</span>
                            </div>
                            <div className="age-slider-container">
                                {/* Simplified Age Range UI for now */}
                                <div className="age-inputs-row">
                                    <input
                                        type="number"
                                        value={ageRange[0]}
                                        onChange={(e) => setAgeRange([parseInt(e.target.value), ageRange[1]])}
                                        className="age-input-box"
                                    />
                                    <span>-</span>
                                    <input
                                        type="number"
                                        value={ageRange[1]}
                                        onChange={(e) => setAgeRange([ageRange[0], parseInt(e.target.value)])}
                                        className="age-input-box"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="setting-control mt-4">
                            <div className="control-header">
                                <span>Show Me</span>
                            </div>
                            <div className="toggle-group">
                                {['Men', 'Women', 'Everyone'].map(option => (
                                    <button
                                        key={option}
                                        className={`toggle-btn ${showMe === option.toLowerCase() ? 'active' : ''}`}
                                        onClick={() => setShowMe(option.toLowerCase())}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="setting-control mt-4">
                            <div className="control-header">
                                <span>Marital Status</span>
                            </div>
                            <div className="toggle-group" style={{ flexWrap: 'wrap', gap: '8px', background: 'transparent', padding: 0 }}>
                                {['Single', 'Divorced', 'Widowed', 'Separated'].map(status => (
                                    <button
                                        key={status}
                                        className={`status-chip ${maritalStatus === status.toLowerCase() ? 'active' : ''}`}
                                        onClick={() => setMaritalStatus(status.toLowerCase())}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <button className="apply-btn-small" onClick={() => navigate('/discovery')}>
                            Apply Filters
                        </button>
                    </div>
                </div>

                <div className="settings-section">
                    <h2 className="section-label">SUPPORT & LEGAL</h2>
                    <div className="settings-group">
                        <div className="settings-item" onClick={() => navigate('/settings/help')}>
                            <div className="settings-icon-wrapper pink">
                                <IconHelp />
                            </div>
                            <span className="settings-text">Help & Support</span>
                            <IconChevronRight />
                        </div>
                    </div>
                </div>

                <button className="logout-btn" onClick={() => navigate('/')}>
                    Log Out
                </button>

                <div className="version-info">
                    <p>Version 1.0.0</p>
                </div>
            </div >
        </div >
    );
};

export default Settings;
