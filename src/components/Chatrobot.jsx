import React, { useEffect, useRef, useState } from "react";
import { rules } from "./Chatrules";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! Welcome to Medicare Assistant. How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");
  const boxRef = useRef(null);

  // Get bot response
  const getBotResponse = (text) => {
    const lower = text.toLowerCase();

    for (let rule of rules) {
      if (rule.pattern.test(lower)) {
        const responses = rule.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }

    return "🤔 Sorry, I didn't understand that. Please try asking about symptoms, medicine, or health advice.";
  };

  // Auto scroll
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input.trim();

    const userMessage = { sender: "user", text: userText };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot reply delay (more realistic)
    setTimeout(() => {
      const reply = getBotResponse(userText);
      const botMessage = { sender: "bot", text: reply };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 90,
        right: 20,
        width: 340,
        maxWidth: "calc(100% - 40px)",
        zIndex: 9999
      }}
    >
      <div className="card shadow" style={{ borderRadius: 14 }}>
        
        {/* HEADER */}
        <div
          className="card-header d-flex justify-content-between align-items-center"
          style={{
            background: "#ff4d88",
            color: "white",
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14
          }}
        >
          <div>
            <strong>🩺 Medicare Assistant</strong>
            <div style={{ fontSize: 12, opacity: 0.9 }}>
              Health support chatbot
            </div>
          </div>

          <button
            className="btn btn-sm btn-light"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div
          className="card-body p-2"
          style={{
            height: 300,
            display: "flex",
            flexDirection: "column"
          }}
        >
          {/* CHAT BOX */}
          <div
            ref={boxRef}
            style={{
              overflowY: "auto",
              flex: 1,
              padding: 8
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex mb-2 ${
                  msg.sender === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  style={{
                    padding: "8px 12px",
                    borderRadius: 12,
                    maxWidth: "75%",
                    fontSize: 14,
                    background:
                      msg.sender === "user" ? "#ff4d88" : "#f1f1f1",
                    color: msg.sender === "user" ? "#fff" : "#000"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* INPUT AREA */}
          <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Ask about symptoms, medicine..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={{ borderRadius: 10 }}
            />

            <button
              className="btn btn-success ms-2"
              onClick={sendMessage}
              style={{ borderRadius: 10 }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;