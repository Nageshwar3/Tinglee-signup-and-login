import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Chat.css';

const Chat = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const messagesEndRef = useRef(null);

    // Mock user data (normally fetched by ID)
    const [user, setUser] = useState({
        id: id,
        name: "Emma",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        status: "Online"
    });

    const [messages, setMessages] = useState([
        { id: 1, sender: 'them', type: 'text', content: "Hey! How's your weekend going?", time: "10:30 AM" },
        { id: 2, sender: 'me', type: 'text', content: "It's going great! Just went for a hike.", time: "10:32 AM" },
        { id: 3, sender: 'them', type: 'text', content: "That sounds amazing! 🤩 Where did you go?", time: "10:33 AM" }
    ]);

    const [newMessage, setNewMessage] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (newMessage.trim() === "") return;

        const msg = {
            id: messages.length + 1,
            sender: 'me',
            type: 'text',
            content: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, msg]);
        setNewMessage("");
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const msg = {
                    id: messages.length + 1,
                    sender: 'me',
                    type: 'image',
                    content: reader.result,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                };
                setMessages([...messages, msg]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUnmatch = () => {
        if (window.confirm(`Are you sure you want to unmatch with ${user.name}? This cannot be undone.`)) {
            alert(`You have unmatched with ${user.name}.`);
            navigate('/matches');
        }
        setShowMenu(false);
    };

    const handleBlock = () => {
        if (window.confirm(`Are you sure you want to block ${user.name}? They won't be able to contact you again.`)) {
            alert(`${user.name} has been blocked.`);
            navigate('/matches');
        }
        setShowMenu(false);
    };

    return (
        <div className="chat-container">
            {/* Header */}
            <header className="chat-header">
                <button className="back-btn" onClick={() => navigate('/matches')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>

                <div className="chat-user-info">
                    <div className="chat-avatar">
                        <img src={user.avatar} alt={user.name} />
                        <div className="online-indicator"></div>
                    </div>
                    <div className="chat-user-details">
                        <h2 className="chat-username">{user.name}</h2>
                        <span className="chat-status">{user.status}</span>
                    </div>
                </div>

                <div className="chat-actions">
                    <button className="icon-btn" onClick={() => setShowMenu(!showMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </button>

                    {showMenu && (
                        <div className="chat-menu">
                            <button className="menu-item danger" onClick={handleUnmatch}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                Unmatch
                            </button>
                            <button className="menu-item danger" onClick={handleBlock}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                Block
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* Messages Area */}
            <div className="messages-area">
                <div className="messages-wrapper">
                    <div className="date-divider">Today</div>

                    {messages.map((msg) => (
                        <div key={msg.id} className={`message-bubble-wrapper ${msg.sender}`}>
                            {msg.sender === 'them' && (
                                <img src={user.avatar} alt={user.name} className="message-avatar-small" />
                            )}
                            <div className="message-content-group">
                                <div className="message-bubble">
                                    {msg.type === 'text' ? (
                                        <p>{msg.content}</p>
                                    ) : (
                                        <img src={msg.content} alt="Shared" className="shared-image" />
                                    )}
                                </div>
                                <span className="message-time">{msg.time}</span>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <div className="chat-input-area">
                <button className="attach-btn" onClick={() => fileInputRef.current.click()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleImageUpload}
                />

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>

                <button className={`send-btn ${newMessage.trim() ? 'active' : ''}`} onClick={handleSend}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Chat;
