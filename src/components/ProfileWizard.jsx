import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import './ProfileWizard.css';

// Icons
// ... (icons remain unchanged, I will submit a targeted replacement for the imports and the useEffect logic)

const IconBack = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const IconCamera = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const IconMapPin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconEdit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const IconPencil = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconEllipsis = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SAVE_KEY = "profile_wizard_data_v2";

export default function ProfileWizard() {
  const navigate = useNavigate();
  const locationState = useLocation();
  const [searchParams] = useSearchParams();

  // View State: 1 = Create, 2 = Profile View, 3 = Location Settings
  const [view, setView] = useState(() => {
    // Check query params first (highest priority for deep links)
    if (searchParams.get('view') === 'profile') {
      return 2;
    }
    // Then check location state (legacy/internal nav)
    if (locationState.state && locationState.state.view) {
      return locationState.state.view;
    }
    return localStorage.getItem(SAVE_KEY) ? 2 : 1;
  });
  const [isEditing, setIsEditing] = useState(false);

  // Force view update if query param or state changes
  useEffect(() => {
    if (searchParams.get('view') === 'profile') {
      setView(2);
    } else if (locationState.state && locationState.state.view) {
      setView(locationState.state.view);
    }
  }, [locationState, searchParams]);

  // Data State
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState([]);
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("Passionate about creating unique and expressive styles. Believer in the power of a great outfit. Coffee enthusiast and lover of vintage films. Let's create something beautiful together.");
  const [role, setRole] = useState("Fashion Stylist");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("28");
  const [interests, setInterests] = useState(["Fashion", "Art", "Photography", "Travel", "Vintage"]);
  const [newInterest, setNewInterest] = useState("");
  const [prompts, setPrompts] = useState({
    truthLie: "I've styled a runway show, I speak fluent French, I've never had a cup of coffee.",
    pleasures: "Finding the perfect vintage jacket, the smell of old books, and a perfectly crafted espresso."
  });

  // Photo Editing State
  const fileInputRef = useRef(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(null);

  // Load saved data
  useEffect(() => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setName(data.name || "");
        setPhotos(data.photos || []);
        setLocation(data.location || "");
        if (data.bio) setBio(data.bio);
        if (data.role) setRole(data.role);
        if (data.dob) setDob(data.dob);
        // Age will be calculated by effect
        if (data.interests) setInterests(data.interests);
        if (data.prompts) setPrompts(data.prompts);
      } catch (e) { console.error(e); }
    }
  }, []);

  // Calculate Age
  useEffect(() => {
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      setAge(calculatedAge.toString());
    }
  }, [dob]);

  // Save data
  const saveData = () => {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ name, photos, location, bio, role, interests, prompts, dob }));
  };

  // Photo Handling (Step 1)
  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setPhotos(prev => [...prev, { id: Date.now(), url: ev.target.result }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (id) => {
    setPhotos(prev => prev.filter(p => p.id !== id));
  };

  // Photo Handling (Step 2 - Profile View)
  const handleProfilePhotoClick = (index) => {
    setActivePhotoIdx(index);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleProfileFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const newUrl = ev.target.result;
        setPhotos(prev => {
          const newPhotos = [...prev];
          if (activePhotoIdx !== null && activePhotoIdx < newPhotos.length) {
            // Replace existing photo
            newPhotos[activePhotoIdx] = { ...newPhotos[activePhotoIdx], url: newUrl };
          } else {
            // Add new photo (append)
            newPhotos.push({ id: Date.now(), url: newUrl });
          }
          return newPhotos;
        });
      };
      reader.readAsDataURL(file);
    }
    e.target.value = ''; // Reset input
  };

  // Navigation
  const goNext = () => {
    saveData();
    setView(2); // Go to Profile View
  };

  const goLocation = () => {
    setView(3);
  };

  // Edit Logic
  const toggleEdit = () => {
    if (isEditing) {
      saveData();
    }
    setIsEditing(!isEditing);
  };

  const addInterest = () => {
    if (newInterest && !interests.includes(newInterest)) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  const removeInterest = (tag) => {
    setInterests(interests.filter(t => t !== tag));
  };

  // --- RENDERERS ---

  // View 1: Create Profile
  const renderCreateProfile = () => (
    <div className="wizard-container">
      <div className="wizard-header">
        <button className="back-btn" onClick={() => navigate('/discovery')}><IconBack /></button>
        <span className="header-title">Create Your Profile</span>
        <div style={{ width: 24 }} /> {/* Spacer */}
      </div>

      <div className="wizard-content">
        <p className="section-description">
          Let's set up your professional profile to attract.
        </p>

        {/* Photos */}
        <div className="form-group">
          <label className="form-label">Showcase Your Work</label>
          <p className="photo-upload-desc">Add a profile picture and photos of your best work (up to 6).</p>

          <div className="photo-grid-row">
            {/* Add Button */}
            <div className="photo-circle-wrapper">
              <label className="photo-circle add">
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAddPhoto} />
                <IconCamera />
                <span className="add-photo-text">Add Photo</span>
              </label>
            </div>

            {/* Photo Previews */}
            {photos.map((photo) => (
              <div key={photo.id} className="photo-circle-wrapper">
                <div className="photo-circle filled">
                  <img src={photo.url} alt="Upload" />
                </div>
                <button className="remove-photo-btn" onClick={() => removePhoto(photo.id)}>
                  <IconX />
                </button>
              </div>
            ))}

            {/* Placeholders to fill space if needed */}
            {[...Array(Math.max(0, 2 - photos.length))].map((_, i) => (
              <div key={`placeholder-${i}`} className="photo-circle-wrapper">
                <div className="photo-circle add" style={{ opacity: 0.3, borderStyle: 'solid' }}>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Name Input */}
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g., Alex Johnson"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* DOB & Age */}
        <div className="form-group" style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 2 }}>
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-input"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{ colorScheme: 'dark' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-input"
              value={age}
              readOnly
              style={{ opacity: 0.7, cursor: 'not-allowed' }}
            />
          </div>
        </div>

        {/* Location */}
        <div className="form-group">
          <label className="form-label">Your Location</label>
          <div className="location-input-wrapper" onClick={goLocation}>
            <IconMapPin className="location-icon" />
            <input
              type="text"
              className="form-input with-icon"
              placeholder="City, State"
              value={location}
              readOnly
            />
          </div>
          <p className="helper-text">This helps clients find you.</p>
        </div>
      </div>

      <div className="bottom-bar">
        <button onClick={goNext}>Save & Continue</button>
      </div>
    </div>
  );

  // View 2: Profile View
  const renderProfileView = () => (
    <div className="wizard-container profile-view-container">
      <div className="wizard-header">
        <button className="back-btn" onClick={() => setView(1)}><IconBack /></button>
        <span className="header-title">Profile</span>
        <button className="back-btn" onClick={toggleEdit} style={{ color: isEditing ? 'var(--primary)' : 'inherit' }}>
          {isEditing ? <span style={{ fontSize: '14px', fontWeight: 600 }}>Save</span> : <IconPencil />}
        </button>
      </div>

      {/* Photos Grid */}
      <div className="profile-photos-grid">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="photo-slot"
            onClick={() => handleProfilePhotoClick(index)}
          >
            {photos[index] ? (
              <>
                <img src={photos[index].url} alt={`Photo ${index + 1}`} />
                {isEditing ? (
                  <button
                    className="remove-photo-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      removePhoto(photos[index].id);
                    }}
                    style={{ top: '8px', right: '8px', width: '28px', height: '28px', background: 'rgba(239, 68, 68, 1)' }}
                  >
                    <IconX />
                  </button>
                ) : (
                  <div className="photo-overlay"><IconCamera /></div>
                )}
              </>
            ) : (
              <div className="empty-slot-content">
                <IconCamera />
                {index === 0 && <span style={{ marginTop: 8, fontSize: 12 }}>Add Photo</span>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Hidden Input for Profile Photos */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleProfileFileChange}
      />

      {/* Info */}
      <div className="profile-info">
        {isEditing ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginBottom: '16px' }}>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            />
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="date"
                className="form-input"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="Date of Birth"
                style={{ flex: 1, colorScheme: 'dark' }}
              />
              <input
                type="text"
                className="form-input"
                value={age}
                readOnly
                placeholder="Age"
                style={{ width: '100px', textAlign: 'center', opacity: 0.7, cursor: 'not-allowed' }}
              />
            </div>
            <input
              type="text"
              className="form-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, State"
            />
          </div>
        ) : (
          <>
            <h1 className="profile-name">{name || "Alexandra Chen"}{age ? `, ${age}` : ""}</h1>
            <p className="profile-role">{location || "New York, NY"}</p>
          </>
        )}
      </div>

      {/* About Me */}
      <div className="content-section">
        <div className="section-header">
          <h3 className="section-title">About Me</h3>
          <button className="edit-icon-btn" onClick={toggleEdit}><IconPencil /></button>
        </div>
        {isEditing ? (
          <textarea
            className="form-textarea"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        ) : (
          <p className="section-text">{bio}</p>
        )}
      </div>

      {/* Interests */}
      <div className="content-section">
        <div className="section-header">
          <h3 className="section-title">Interests</h3>
          <button className="edit-icon-btn" onClick={toggleEdit}><IconPencil /></button>
        </div>
        <div className="tags-container">
          {interests.map((tag, i) => (
            <span
              key={i}
              className={`tag-pill ${['Fashion', 'Travel'].includes(tag) ? 'highlight' : ''}`}
              onClick={() => isEditing && removeInterest(tag)}
              style={isEditing ? { cursor: 'pointer', paddingRight: 24, position: 'relative' } : {}}
            >
              {tag}
              {isEditing && <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', fontSize: 10 }}>✕</span>}
            </span>
          ))}
        </div>
        {isEditing && (
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <input
              className="form-input"
              style={{ padding: '8px 16px', height: 40 }}
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              placeholder="Add interest..."
              onKeyDown={(e) => e.key === 'Enter' && addInterest()}
            />
            <button
              onClick={addInterest}
              style={{
                background: 'var(--primary)',
                border: 'none',
                color: 'white',
                width: 40,
                height: 40,
                borderRadius: '50%',
                fontSize: 20,
                cursor: 'pointer'
              }}
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* Prompts */}
      <div className="content-section">
        <div className="section-header">
          <h3 className="section-title">My Prompts</h3>
          <button className="edit-icon-btn" onClick={toggleEdit}><IconPencil /></button>
        </div>

        <div className="prompts-card">
          <h4 className="prompt-title">Two truths and a lie...</h4>
          {isEditing ? (
            <textarea
              className="form-textarea"
              style={{ minHeight: 60, marginTop: 8 }}
              value={prompts.truthLie}
              onChange={(e) => setPrompts({ ...prompts, truthLie: e.target.value })}
            />
          ) : (
            <p className="prompt-answer">{prompts.truthLie}</p>
          )}
        </div>

        <div className="prompts-card">
          <h4 className="prompt-title">My simple pleasures</h4>
          {isEditing ? (
            <textarea
              className="form-textarea"
              style={{ minHeight: 60, marginTop: 8 }}
              value={prompts.pleasures}
              onChange={(e) => setPrompts({ ...prompts, pleasures: e.target.value })}
            />
          ) : (
            <p className="prompt-answer">{prompts.pleasures}</p>
          )}
        </div>
      </div>

      <div className="bottom-bar">
        {isEditing ? (
          <button onClick={toggleEdit}>Save Changes</button>
        ) : (
          <button onClick={() => {
            saveData();
            navigate('/discovery');
          }}>
            Save Profile <span style={{ marginLeft: 8, display: 'inline-flex' }}><IconArrowRight /></span>
          </button>
        )}
      </div>
    </div>
  );

  // View 3: Location Settings
  const renderLocationSettings = () => (
    <div className="wizard-container location-settings-view">
      <div className="wizard-header">
        <button className="back-btn" onClick={() => setView(1)}><IconBack /></button>
        <span className="header-title">Location Settings</span>
        <div style={{ width: 24 }} />
      </div>

      {/* Map Preview */}
      <div className="map-preview">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--bg-input)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--primary)',
            boxShadow: 'none'
          }}>
            <IconMapPin />
          </div>
          <span style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>
            Interactive Map Preview
          </span>
        </div>
      </div>

      <div className="location-options">
        {/* Use Current Location */}
        <div className="setting-card">
          <div className="setting-info">
            <h3>Use Current Location</h3>
            <p>Automatically update your location using your device's GPS.</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="slider"></span>
          </label>
        </div>

        {/* Hide Exact Location */}
        <div className="setting-card">
          <div className="setting-info">
            <h3>Hide my exact location</h3>
            <p>Your general area will still be shown to clients.</p>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>

        <div className="divider-text">OR</div>

        <div className="form-group">
          <label className="form-label">Set a Preferred Service Area</label>
          <div className="search-input-wrapper">
            <IconSearch className="search-icon" />
            <input
              type="text"
              className="form-input"
              placeholder="Enter City, Address, or Zip Code"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <button onClick={() => setView(1)}>Save Changes</button>
      </div>
    </div>
  );

  return (
    <div className="profile-wizard">
      {view === 1 && renderCreateProfile()}
      {view === 2 && renderProfileView()}
      {view === 3 && renderLocationSettings()}
    </div>
  );
}