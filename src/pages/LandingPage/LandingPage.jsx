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
                    <a href="#about">About</a>
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
                        <button className="cta-primary" onClick={() => navigate('/register')}>Get Started</button>
                    </div>
                </div>
            </header>

            {/* About / Mission Section */}
            <section className="section-about" id="about">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title-left">About Tinglee</h2>
                        <p className="about-description">
                            Tinglee is a modern dating platform designed to help people create meaningful connections in a fast, intuitive, and safe environment. Built with a user-first approach, we focus on real conversations, genuine interactions, and smarter matching powered by thoughtful design.
                        </p>

                        <div className="vm-wrapper">
                            <div className="vm-block">
                                <h3>Our Vision</h3>
                                <p>To redefine online dating by blending smart technology with human-centric design, enabling authentic relationships to form naturally and safely.</p>
                            </div>
                            <div className="vm-block">
                                <h3>Our Mission</h3>
                                <p>To build a platform where every interaction feels real, respectful, and engaging—empowering users to discover connections that inspire lasting relationships.</p>
                            </div>
                        </div>

                        <div className="why-built-block">
                            <h3>Why We Built Tinglee</h3>
                            <p>Dating today can feel overwhelming—too many choices, low-quality matches, and confusing interfaces. Tinglee was created to solve these problems by valuing transparency, genuine connections, and effortless usability.</p>
                            <ul className="principles-list">
                                <li>Meeting people shouldn’t be complicated.</li>
                                <li>Profiles should reflect real personalities.</li>
                                <li>Matching should feel natural, not forced.</li>
                                <li>Safety should never be optional.</li>
                            </ul>
                        </div>

                        <div className="future-block">
                            <h3>The Future of Tinglee</h3>
                            <p>We are expanding with innovative features like advanced compatibility scoring, real-time recommendations, enhanced safety verification, AI-powered conversation starters, and event-based meetups.</p>
                            <p className="future-goal">Our long-term goal is to make Tinglee the most trusted platform for building meaningful relationships globally.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Tinglee Different Section */}
            <section className="section-why-tinglee">
                <div className="why-content">
                    <div className="why-text">
                        <h2 className="section-title">What Makes Tinglee Different</h2>
                        <ul className="why-list">
                            <li>
                                <span className="why-icon">❤️</span>
                                <div>
                                    <h4>Designed for Real Connections</h4>
                                    <p>Tinglee goes beyond simple swipes. Every profile highlights personality, interests, prompts, and photos.</p>
                                </div>
                            </li>
                            <li>
                                <span className="why-icon">🎯</span>
                                <div>
                                    <h4>Smart & Relevant Matching</h4>
                                    <p>Our algorithm focuses on compatibility, shared interests, and vibe, improving the quality of every interaction.</p>
                                </div>
                            </li>
                            <li>
                                <span className="why-icon">✨</span>
                                <div>
                                    <h4>Clean, Modern & Easy-to-Use</h4>
                                    <p>A fresh, minimal design where every screen is optimized for speed, clarity, and smooth interactions.</p>
                                </div>
                            </li>
                            <li>
                                <span className="why-icon">🛡️</span>
                                <div>
                                    <h4>Safety First</h4>
                                    <p>We prioritize trust through profile verification, reporting tools, and privacy-focused data handling.</p>
                                </div>
                            </li>
                            <li>
                                <span className="why-icon">🚀</span>
                                <div>
                                    <h4>Engaging Features</h4>
                                    <p>From Discovery Cards and Profile Prompts to our distraction-free Chat System.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Our Promise to Users Section */}
            <section className="section-community">
                <div className="community-header">
                    <h2 className="section-title">Our Promise to Users</h2>
                    <p className="section-subtitle">Tinglee is committed to delivering:</p>
                </div>
                <div className="community-grid">
                    <div className="community-card">
                        <div className="community-icon-wrapper">
                            <span className="community-icon">🤝</span>
                        </div>
                        <h3>Respectful Environment</h3>
                        <p>A respectful and inclusive space for everyone.</p>
                    </div>
                    <div className="community-card">
                        <div className="community-icon-wrapper">
                            <span className="community-icon">✨</span>
                        </div>
                        <h3>Authentic Profiles</h3>
                        <p>High-quality, verified profiles you can trust.</p>
                    </div>
                    <div className="community-card">
                        <div className="community-icon-wrapper">
                            <span className="community-icon">🔒</span>
                        </div>
                        <h3>Privacy Protection</h3>
                        <p>Strong privacy and safety measures for your peace of mind.</p>
                    </div>
                    <div className="community-card">
                        <div className="community-icon-wrapper">
                            <span className="community-icon">📈</span>
                        </div>
                        <h3>Continual Improvement</h3>
                        <p>We evolve based on your feedback. Every update is designed with you in mind.</p>
                    </div>
                </div>
            </section>

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
