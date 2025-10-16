import React, { useState } from "react";
import "./ChatTemplate.css";

const ChatTemplate = ({ speciality, color, icon, label }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { sender: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("http://localhost:4000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ speciality, question: input }),
      });

      const data = await res.json();

      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: data.answer || "No response from AI." },
        ]);
      }, 1500);
    } catch (err) {
      console.error("Chat error:", err);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Server not responding." },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header" style={{ backgroundColor: color }}>
        <span className="chat-icon">{icon}</span>
        <h2>{label}</h2>
      </div>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`msg ${msg.sender}`}>
            {msg.text}
          </div>
        ))}

        {typing && (
          <div className="msg ai typing">
            <span>💬 AI is typing...</span>
          </div>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button style={{ backgroundColor: color }} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatTemplate;
