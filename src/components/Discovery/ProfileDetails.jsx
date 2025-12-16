import React from 'react';
import './Discovery.css';

const ProfileDetails = ({ profile, onClose, onLike, onPass, isOwnProfile = false, onEdit }) => {
    if (!profile) return null;

    return (
        <div className="profile-details-overlay">
            <div className="details-scroll-container">
                {/* Header Image with Floating Buttons */}
                <div className="details-image-header">
                    <img src={profile.images ? profile.images[0] : profile.img} alt={profile.name} />

                    {/* Floating Action Buttons on Image - Hide for own profile */}
                    {!isOwnProfile && (
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
                    )}

                    <button className="close-details-btn" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="details-content">
                    {/* Name & Location Section */}
                    <div className="details-section no-border">
                        <h1 className="details-name-large">{profile.name || 'Your Name'}, {profile.age}</h1>
                        <p className="details-distance">{profile.distance || 'Unknown distance'}</p>

                        <div className="details-location-block">
                            <span className="label-small">Location</span>
                            <p className="value-text">{profile.location || 'Location not set'}</p>
                        </div>

                        {/* New Fields: Job, School, etc. */}
                        {/* About Me Section */}
                        {profile.bio && (
                            <div className="details-section" style={{ marginTop: '24px' }}>
                                <span className="label-small">About Me</span>
                                <p className="value-text" style={{ marginTop: '8px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                                    {profile.bio}
                                </p>
                            </div>
                        )}
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


                    {/* Like Profile Button - Hide for own profile */}
                    {!isOwnProfile && (
                        <div className="details-section" style={{ marginTop: 40, textAlign: 'center' }}>
                            <button className="like-profile-btn" onClick={onLike}>
                                Like Profile
                            </button>
                        </div>
                    )}

                    {/* Edit Profile Button - Show only for own profile */}
                    {isOwnProfile && onEdit && (
                        <div className="details-section" style={{ marginTop: 40, textAlign: 'center' }}>
                            <button className="like-profile-btn" onClick={onEdit} style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                                Edit Profile
                            </button>
                        </div>
                    )}

                    <div style={{ height: 60 }}></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
