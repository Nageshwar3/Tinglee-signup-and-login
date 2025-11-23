import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Discovery/Discovery.css';
import './Matches.css';

const Matches = () => {
    const navigate = useNavigate();

    const newMatches = [
        { id: 1, name: "Chloe", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
        { id: 2, name: "Bella", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" },
        { id: 3, name: "Lily", img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" },
        { id: 4, name: "Zoe", img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
    ];

    const messages = [
        { id: 1, name: "Emma", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", lastMessage: "Hey! How's your weekend going?", time: "2m ago", unread: true },
        { id: 2, name: "Mia", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", lastMessage: "That sounds amazing! 🤩", time: "1h ago", unread: false },
        { id: 3, name: "Charlotte", img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80", lastMessage: "Let's meet up for coffee?", time: "Yesterday", unread: false },
        { id: 4, name: "Amelia", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", lastMessage: "Haha, you're funny!", time: "2d ago", unread: false },
    ];

    return (
        <div className="discovery-container">
            <header className="discovery-header">
                <h1 className="app-title">Matches</h1>
                <div className="header-right">
                    <button className="icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
            </header>

            <div className="matches-container">
                <div className="section-title">New Matches <span>{newMatches.length}</span></div>
                <div className="new-matches-scroll">
                    {newMatches.map(match => (
                        <div key={match.id} className="new-match-item">
                            <div className="match-avatar-large">
                                <img src={match.img} alt={match.name} />
                            </div>
                            <span className="match-name-small">{match.name}</span>
                        </div>
                    ))}
                </div>

                <div className="section-title">Messages</div>
                <div className="messages-list">
                    {messages.map(msg => (
                        <div key={msg.id} className="message-item">
                            <div className="message-avatar">
                                <img src={msg.img} alt={msg.name} />
                            </div>
                            <div className="message-content">
                                <div className="message-header">
                                    <span className="message-name">{msg.name}</span>
                                    <span className="message-time">{msg.time}</span>
                                </div>
                                <p className="message-preview" style={{ fontWeight: msg.unread ? '700' : '400', color: msg.unread ? 'white' : 'var(--text-secondary)' }}>
                                    {msg.lastMessage}
                                </p>
                            </div>
                            {msg.unread && <div className="unread-dot"></div>}
                        </div>
                    ))}
                </div>
            </div>

            <nav className="bottom-nav">
                <button className="nav-item" onClick={() => navigate('/discovery')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                        <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    </svg>
                    <span>Discover</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/likes')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>Likes</span>
                </button>
                <button className="nav-item active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Matches</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/profile-wizard')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Profile</span>
                </button>
            </nav>
        </div>
    );
};

export default Matches;
