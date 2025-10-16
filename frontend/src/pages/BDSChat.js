import React, { useState } from "react";
import "./ChatThemes.css";

const BDSChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { sender: "user", text: input }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, type: "BDS" }),
      });
      const data = await res.json();
      setMessages([...newMsgs, { sender: "ai", text: data.reply }]);
    } catch {
      setMessages([
        ...newMsgs,
        { sender: "ai", text: "⚠️ Server Error. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-page bds-theme">
      <div className="chat-window">
        <h2 className="chat-title">🦷 Dental Health Assistant</h2>

        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}

          {/* 💫 Typing Glow Animation */}
          {loading && (
            <div className="typing">
              <span>AI is thinking</span>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          )}
        </div>

        <div className="input-area">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your symptom..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default BDSChat;
