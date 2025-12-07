import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Discovery/Discovery.css';
import './Messages.css';

const Messages = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const messages = [
        { id: 1, name: "Jessica", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", lastMessage: "Hey, how's your week going?", time: "10m ago", unread: 2, online: true },
        { id: 2, name: "Chloe", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", lastMessage: "I had a great time last night!", time: "1h ago", unread: 0, online: true },
        { id: 3, name: "Samantha", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", lastMessage: "Can't wait to see you again 😊", time: "4h ago", unread: 1, online: false },
        { id: 4, name: "Michael", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", lastMessage: "Are you free this weekend?", time: "Yesterday", unread: 0, online: false },
        { id: 5, name: "Alex", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", lastMessage: "You: Sounds great, let's do it!", time: "Tue", unread: 0, online: false },
    ];

    return (
        <div className="discovery-container messages-page">
            <header className="discovery-header">
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <h1 className="app-title">Messages</h1>
                <button className="icon-btn" onClick={() => navigate('/settings')}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                </button>
            </header>

            <div className="messages-search-container">
                <div className="search-bar">

                    <input
                        type="text"
                        placeholder="Search Matches"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="messages-list-container">
                {messages.filter(msg => msg.name.toLowerCase().includes(searchQuery.toLowerCase())).map(msg => (
                    <div key={msg.id} className="message-row" onClick={() => navigate(`/chat/${msg.id}`)}>
                        <div className="message-avatar-container">
                            <img src={msg.img} alt={msg.name} className="message-avatar-img" />
                            {msg.online && <div className="online-status"></div>}
                        </div>
                        <div className="message-details">
                            <div className="message-header-row">
                                <span className="message-name-text">{msg.name}</span>
                                <span className="message-time-text">{msg.time}</span>
                            </div>
                            <div className="message-preview-row">
                                <p className={`message-preview-text ${msg.unread > 0 ? 'unread' : ''}`}>
                                    {msg.lastMessage}
                                </p>
                                {msg.unread > 0 && (
                                    <div className="unread-badge">{msg.unread}</div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
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
                <button className="nav-item" onClick={() => navigate('/matches')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Matches</span>
                </button>
                <button className="nav-item active">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    <span>Messages</span>
                </button>
                <button className="nav-item" onClick={() => navigate('/love-stories')} title="Stories">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    <span>Stories</span>
                </button>
            </nav>
        </div>
    );
};

export default Messages;
