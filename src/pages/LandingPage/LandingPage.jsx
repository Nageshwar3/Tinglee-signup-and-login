import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            {/* Navbar */}
            <nav className="landing-nav">
                <div className="nav-logo">
                    Tinglee<span className="heart-icon">❤️</span>
                </div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#download">Download App</a>
                </div>
                <div className="nav-auth">
                    <button className="nav-btn log-in" onClick={() => navigate('/login')}>Login</button>
                    <button className="nav-btn sign-up" onClick={() => navigate('/register')}>Sign Up</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="landing-hero" id="home">
                <div className="hero-content">
                    <h1 className="hero-title">Find Your Perfect Match with Tinglee</h1>
                    <p className="hero-description">
                        Connect with like-minded individuals and discover meaningful relationships in a safe, engaging environment.
                    </p>
                    <div className="hero-ctas">
                        <button className="cta-primary" onClick={() => navigate('/register')}>Create Account</button>
                    </div>
                </div>
            </header>

            {/* How It Works Section */}
            <section className="section-how-it-works" id="how-it-works">
                <h2 className="section-title">How Tinglee Works</h2>
                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-number">1</div>
                        <h3>Create Profile</h3>
                        <p>Set up your profile with your interests and preferences.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">2</div>
                        <h3>Discover</h3>
                        <p>Browse verified profiles nearby that match your vibe.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">3</div>
                        <h3>Swipe & Match</h3>
                        <p>Swipe right to match and start chatting instantly.</p>
                    </div>
                    <div className="step-card">
                        <div className="step-number">4</div>
                        <h3>AI Suggestions</h3>
                        <p>Let our AI suggest the best compatible matches for you.</p>
                    </div>
                </div>
            </section>

            {/* Feature Highlights Section */}
            <section className="section-features" id="features">
                <h2 className="section-title">Feature Highlights</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <span className="feature-icon">🧠</span>
                        <h3>Smart Match Algorithm</h3>
                        <p>Intelligent matching based on your behavior.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🎨</span>
                        <h3>Profile Customization</h3>
                        <p>Express yourself with images and bio.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">📍</span>
                        <h3>Location-Based</h3>
                        <p>Find matches in your area.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">💬</span>
                        <h3>Instant Messaging</h3>
                        <p>Chat with emojis and reactions.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🚀</span>
                        <h3>Premium Boost</h3>
                        <p>Get more visibility with Spotlight.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">🛡️</span>
                        <h3>Safety Tools</h3>
                        <p>Block and report for a safe experience.</p>
                    </div>
                </div>
            </section>

            {/* Security & Trust Section */}
            <section className="section-security">
                <div className="security-badge">
                    <span className="shield-icon">🛡️</span>
                    <h3>Verified & Secure</h3>
                </div>
                <p>Your privacy is our priority. We use end-to-end encryption and offer full profile control settings to keep your data safe.</p>
            </section>

            {/* Download App Section */}
            <section className="section-download" id="download">
                <div className="download-content">
                    <h2>Get the App</h2>
                    <p>Experience Tinglee on the go. Download now for iOS and Android.</p>
                    <div className="app-buttons">
                        <button className="app-store-btn">App Store</button>
                        <button className="play-store-btn">Google Play</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="landing-footer">
                <div className="footer-links">
                    <a href="#terms">Terms & Policy</a>
                    <a href="#help">Help</a>
                    <a href="#contact">Contact</a>
                    <a href="#support">Support</a>
                    <a href="#careers">Careers</a>
                </div>
                <div className="social-icons">
                    <span>Instagram</span>
                    <span>X</span>
                    <span>LinkedIn</span>
                </div>
                <p className="copyright">@2024 Tinglee❤️ All rights reserved</p>
            </footer>
        </div>
    );
};

export default LandingPage;
