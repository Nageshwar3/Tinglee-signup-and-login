import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoveStories.css';

const SubmitStory = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [formData, setFormData] = useState({
        couple: '',
        story: '',
        image: null
    });
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newStory = {
            id: Date.now(),
            ...formData,
            status: 'pending',
            date: new Date().toISOString().split('T')[0]
        };

        const existingStories = JSON.parse(localStorage.getItem('tinglee_stories_v2') || '[]');
        localStorage.setItem('tinglee_stories_v2', JSON.stringify([...existingStories, newStory]));

        alert('Story submitted successfully! It will be visible after admin approval.');
        navigate('/love-stories');
    };

    return (
        <div className="stories-container">
            <header className="stories-header">
                <button className="back-btn" onClick={() => navigate('/love-stories')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </button>
                <h1>Share Your Story</h1>
                <div style={{ width: 40 }}></div>
            </header>

            <form className="submit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Couple Names</label>
                    <input
                        type="text"
                        placeholder="e.g. Sarah & Mike"
                        value={formData.couple}
                        onChange={e => setFormData({ ...formData, couple: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Your Story</label>
                    <textarea
                        placeholder="Tell us how you met..."
                        rows="5"
                        value={formData.story}
                        onChange={e => setFormData({ ...formData, story: e.target.value })}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Photo</label>
                    <div className="image-upload-box" onClick={() => fileInputRef.current.click()}>
                        {preview ? (
                            <img src={preview} alt="Preview" className="upload-preview" />
                        ) : (
                            <div className="upload-placeholder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                <span>Click to upload photo</span>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>

                <button type="submit" className="primary-btn">Submit Story</button>
            </form>
        </div>
    );
};

export default SubmitStory;
