import React from 'react';
import './Discovery.css';

const ProfileDetails = ({ profile, onClose, onLike, onPass }) => {
    if (!profile) return null;

    return (
        <div className="profile-details-overlay">
            <div className="details-scroll-container">
                {/* Header Image with Floating Buttons */}
                <div className="details-image-header">
                    <img src={profile.images ? profile.images[0] : profile.img} alt={profile.name} />

                    {/* Floating Action Buttons on Image */}
                    <div className="floating-actions">
                        <button className="float-btn pass" onClick={onPass}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <button className="float-btn like" onClick={onLike}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>

                    <button className="close-details-btn" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="details-content">
                    {/* Name & Location Section */}
                    <div className="details-section no-border">
                        <h1 className="details-name-large">{profile.name}, {profile.age}</h1>
                        <p className="details-distance">{profile.distance || 'Unknown distance'}</p>

                        <div className="details-location-block">
                            <span className="label-small">Location</span>
                            <p className="value-text">{profile.location || 'Unknown location'}</p>
                        </div>

                        {/* New Fields: Job, School, etc. */}
                        <div className="details-info-grid">
                            {profile.job && profile.company && (
                                <div className="info-row">
                                    <span className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                    </span>
                                    <span className="info-text">{profile.job} at {profile.company}</span>
                                </div>
                            )}
                            {profile.school && (
                                <div className="info-row">
                                    <span className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                                    </span>
                                    <span className="info-text">{profile.school}</span>
                                </div>
                            )}
                            {profile.smoking && (
                                <div className="info-row">
                                    <span className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                    </span>
                                    <span className="info-text">{profile.smoking}</span>
                                </div>
                            )}
                            {profile.lookingFor && (
                                <div className="info-row">
                                    <span className="info-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </span>
                                    <span className="info-text">{profile.lookingFor}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Prompts Section */}
                    {profile.prompts && profile.prompts.map((prompt, index) => (
                        <div key={index} className="details-section prompt-card">
                            <span className="label-small">{prompt.question}</span>
                            <h3 className="prompt-answer">{prompt.answer}</h3>
                        </div>
                    ))}

                    {/* Interests */}
                    <div className="details-section">
                        <div className="interests-tags">
                            {profile.interests && profile.interests.map((interest, index) => (
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
                        <button className="like-profile-btn" onClick={onLike}>
                            Like Profile
                        </button>
                    </div>

                    <div style={{ height: 60 }}></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
