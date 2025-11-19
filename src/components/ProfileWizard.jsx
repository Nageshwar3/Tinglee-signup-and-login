  import React, { useEffect, useState, useRef } from "react";
import "./ProfileWizard.css";

const SAVE_KEY = "profile_v1";

export default function ProfileWizard() {
  const [step, setStep] = useState(1);

  // Profile data
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState([]); // {id, file, url, isMain}
  const [bio, setBio] = useState("");
  const [interests, setInterests] = useState([]);
  const [interestInput, setInterestInput] = useState("");
  const [prompts, setPrompts] = useState({ lifeGoal: "", perfectDay: "" });

  // Location
  const [locationLabel, setLocationLabel] = useState("");
  const [hideLocation, setHideLocation] = useState(false);
  const [latLng, setLatLng] = useState(null);

  const fileRef = useRef();

  // Load saved if exists
  useEffect(() => {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setName(data.name || "");
        setPhotos((data.photos || []).map((p) => ({ ...p })));
        setBio(data.bio || "");
        setInterests(data.interests || []);
        setPrompts(data.prompts || { lifeGoal: "", perfectDay: "" });
        setLocationLabel(data.locationLabel || "");
        setHideLocation(Boolean(data.hideLocation));
        setLatLng(data.latLng || null);
      } catch (e) {
        // ignore invalid data
      }
    }
  }, []);

  // Auto-detect GPS when on Step 1 and hideLocation=false and location empty
  useEffect(() => {
    if (step === 1 && !hideLocation && !locationLabel) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            setLatLng({ latitude, longitude });
            setLocationLabel('Lat: ${latitude.toFixed(3)}, Lng: ${longitude.toFixed(3)}');
          },
          () => {
            setLocationLabel("");
          },
          { enableHighAccuracy: false, timeout: 8000 }
        );
      }
    }
  }, [step, hideLocation, locationLabel]);

  // Helpers
  const makeId = () => Math.random().toString(36).slice(2, 9);

  function handleFilesSelected(e) {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newPhotos = files.map((f, idx) => ({
      id: makeId(),
      file: f,
      url: URL.createObjectURL(f),
      isMain: photos.length === 0 && idx === 0,
    }));
    const hasMain = photos.some((p) => p.isMain) || newPhotos.some((p) => p.isMain);
    const normalized = [...photos.map((p) => ({ ...p })), ...newPhotos].map((p, i) => ({
      ...p,
      isMain: hasMain ? p.isMain : i === 0,
    }));
    setPhotos(normalized);
    if (fileRef.current) fileRef.current.value = "";
  }

  function setMainPhoto(id) {
    setPhotos((prev) => prev.map((p) => ({ ...p, isMain: p.id === id })));
  }

  function removePhoto(id) {
    setPhotos((prev) => {
      const remaining = prev.filter((p) => p.id !== id);
      if (!remaining.some((r) => r.isMain) && remaining.length) remaining[0].isMain = true;
      return remaining;
    });
  }

  function addInterest() {
    const val = interestInput.trim();
    if (!val) return;
    if (!interests.includes(val)) setInterests((prev) => [...prev, val]);
    setInterestInput("");
  }

  function removeInterest(i) {
    setInterests((prev) => prev.filter((_, idx) => idx !== i));
  }

  function canContinueFromStep1() {
    return name.trim() !== "" && photos.length > 0 && (hideLocation || locationLabel.trim() !== "");
  }

  function saveToStorage() {
    const payload = {
      name,
      photos: photos.map((p) => ({ id: p.id, url: p.url, isMain: p.isMain })),
      bio,
      interests,
      prompts,
      locationLabel,
      hideLocation,
      latLng,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
  }

  function handleCompleteProfile() {
    if (!canContinueFromStep1()) {
      alert("Please fill name, add at least one photo and set location before continuing.");
      return;
    }
    saveToStorage();
    setStep(2);
  }

  function handleFinish() {
    saveToStorage();
    setStep(3);
    alert("Profile saved. You can edit anytime from the Edit Profile step.");
  }

  function handleEditSave() {
    saveToStorage();
    alert("Profile updated.");
  }

  function getPhotoUrl(p) {
    return p && (p.url || (p.file ? URL.createObjectURL(p.file) : ""));
  }

  function onInterestKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addInterest();
    }
  }

  return (
    <div className="profile-wizard outer dark-skin">
      {/* Header */}
      <div className="wizard-header">
        <button className="back-btn" onClick={() => setStep((prev) => Math.max(1, prev - 1))}>
          ←
        </button>
        <h1>{step === 1 ? "Let's set up your profile" : step === 2 ? "Details" : "Edit Profile"}</h1>
        <div className="header-spacer" />
      </div>

      {/* Progress */}
      <div className="progress-row">
        <div className={'prog prog-1 ${step >= 1 ? "active" : ""}'} />
        <div className={'prog prog-2 ${step >= 2 ? "active" : ""}'} />
        <div className={'prog prog-3 ${step >= 3 ? "active" : ""}'} />
      </div>

      <div className="wizard-body">
        {/* STEP 1 */}
        {step === 1 && (
          <section className="step step-1">
            <h2 className="section-title">Add Your Photos</h2>

            {/* Single main photo box */}
            <div className="photo-grid single">
              <div className="photo-box main single-main">
                {photos.length > 0 ? (
                  <div className="photo-wrap">
                    <img src={getPhotoUrl(photos[0])} alt="main" />
                    <button className="remove small" onClick={() => setPhotos([])}>
                      Remove
                    </button>
                  </div>
                ) : (
                  <label className="add-placeholder">
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          setPhotos([{ id: makeId(), file, url: URL.createObjectURL(file), isMain: true }]);
                        }
                      }}
                    />
                    <div className="plus">+</div>
                    <div className="hint">Add main photo</div>
                  </label>
                )}
              </div>
            </div>

            {/* Name */}
            <label className="label">Full Name</label>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Jane Doe" />

            {/* Location */}
            <label className="label">Your Location</label>
            <div className="location-row">
              <input
                className="input"
                value={hideLocation ? "Hidden" : locationLabel}
                onChange={(e) => setLocationLabel(e.target.value)}
                placeholder="e.g., San Francisco, CA or leave blank for GPS"
              />
            </div>

            <div className="location-controls">
              <label className="toggle">
                <input type="checkbox" checked={hideLocation} onChange={() => setHideLocation((v) => !v)} />
                <span>Hide my location</span>
              </label>

              <button
                className="detect"
                onClick={() => {
                  if ("geolocation" in navigator) {
                    navigator.geolocation.getCurrentPosition(
                      (pos) => {
                        const { latitude, longitude } = pos.coords;
                        setLatLng({ latitude, longitude });
                        setLocationLabel('Lat: ${latitude.toFixed(3)}, Lng: ${longitude.toFixed(3)}');
                        setHideLocation(false);
                      },
                      () => alert("Unable to detect location")
                    );
                  } else {
                    alert("Geolocation not available");
                  }
                }}
              >
                Detect
              </button>
            </div>

            <div className="step-actions">
              <button className="btn primary" onClick={handleCompleteProfile} disabled={!canContinueFromStep1()}>
                Continue
              </button>
            </div>
          </section>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <section className="step step-2">
            <h2 className="section-title">Details</h2>

            <div className="strip-photos">
              <div className="photos-scroll">
                {photos.map((p, i) => (
                  <div key={p.id} className={'thumb ${p.isMain ? "main" : ""}'}>
                    <img src={'getPhotoUrl(p)} alt={thumb-${i}'} />
                    <div className="thumb-actions">
                      {!p.isMain && <button onClick={() => setMainPhoto(p.id)}>Set main</button>}
                      <button onClick={() => removePhoto(p.id)}>Remove</button>
                    </div>
                  </div>
                ))}
                <label className="thumb add-thumb">
                  <input type="file" accept="image/*" multiple onChange={handleFilesSelected} />
                  <div className="plus">+</div>
                </label>
              </div>
            </div>

            <label className="label">Bio</label>
            <textarea className="textarea" placeholder="Write a short bio..." value={bio} onChange={(e) => setBio(e.target.value)} />

            <label className="label">Interests</label>
            <div className="interests-row">
              {interests.map((it, i) => (
                <div key={i} className="chip">
                  {it}
                  <button onClick={() => removeInterest(i)}>✕</button>
                </div>
              ))}
              <div className="chip add-chip">
                <input placeholder="+ Add interest" value={interestInput} onChange={(e) => setInterestInput(e.target.value)} onKeyDown={onInterestKey} />
                <button onClick={addInterest}>Add</button>
              </div>
            </div>

            <label className="label">Prompts</label>
            <div className="prompts">
              <input className="input" placeholder="My life goal is..." value={prompts.lifeGoal} onChange={(e) => setPrompts((p) => ({ ...p, lifeGoal: e.target.value }))} />
              <input className="input" placeholder="A perfect day for me involves..." value={prompts.perfectDay} onChange={(e) => setPrompts((p) => ({ ...p, perfectDay: e.target.value }))} />
            </div>

            <div className="step-actions">
              <button className="btn secondary" onClick={() => setStep(1)}>
                Back
              </button>
              <button className="btn primary" onClick={handleFinish}>
                Finish
              </button>
            </div>
          </section>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <section className="step step-3">
            <h2 className="section-title">Edit Profile</h2>

            <div className="photo-grid edit">
              {photos.map((p) => (
                <div key={p.id} className="edit-photo">
                  <img src={getPhotoUrl(p)} alt="edit" />
                  <div className="edit-actions">
                    {!p.isMain && <button onClick={() => setMainPhoto(p.id)}>Make main</button>}
                    <button onClick={() => removePhoto(p.id)}>Remove</button>
                  </div>
                </div>
              ))}
              <label className="add-thumb small-edit">
                <input type="file" accept="image/*" multiple onChange={handleFilesSelected} />
                <div className="plus small">+</div>
              </label>
            </div>

            <label className="label">Name</label>
            <input className="input" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="label">Bio</label>
            <textarea className="textarea" value={bio} onChange={(e) => setBio(e.target.value)} />

            <label className="label">Interests</label>
            <div className="interests-row">
              {interests.map((it, i) => (
                <div key={i} className="chip">
                  {it}
                  <button onClick={() => removeInterest(i)}>✕</button>
                </div>
              ))}
              <div className="chip add-chip">
                <input placeholder="+ Add interest" value={interestInput} onChange={(e) => setInterestInput(e.target.value)} onKeyDown={onInterestKey} />
                <button onClick={addInterest}>Add</button>
              </div>
            </div>

            <label className="label">Profile Settings</label>
            <div className="settings-row">
              <label className="toggle">
                <input type="checkbox" checked={!hideLocation} onChange={() => setHideLocation((v) => !v)} />
                <span>Show Location on Profile</span>
              </label>
            </div>

            <div className="step-actions">
              <button className="btn secondary" onClick={() => setStep(2)}>
                Back
              </button>
              <button className="btn primary" onClick={handleEditSave}>
                Save
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}