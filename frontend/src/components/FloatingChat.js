import React, { useState } from "react";
import "./FloatingChat.css";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hi 👋 I'm your HealthAI assistant! How can I help today?" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "I'm just a demo AI! For real advice, consult a doctor 🏥" },
      ]);
    }, 1000);
  };

  return (
    <>
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header" onClick={() => setIsOpen(!isOpen)}>
          💬 Chat with HealthAI
        </div>
        {isOpen && (
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div className="chat-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingChat;
