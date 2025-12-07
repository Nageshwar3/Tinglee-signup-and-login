import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

const DataControls = () => {
    const navigate = useNavigate();

    return (
        <div className="settings-page premium-screen privacy-screen">
            <header className="settings-header">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
                <h1>Data Controls</h1>
                <div style={{ width: 24 }}></div>
            </header>

            <div className="premium-content">
                <div className="glass-card">
                    <div className="setting-row">
                        <div className="setting-info">
                            <span>Export My Data</span>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                    <div className="setting-row">
                        <div className="setting-info">
                            <span style={{ color: 'var(--danger)' }}>Delete Account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataControls;
