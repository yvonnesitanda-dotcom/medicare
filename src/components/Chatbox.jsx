import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import "../css/Chatbox.css";

const Chatbox = () => {
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  // 📥 LOAD CSV
  useEffect(() => {
    fetch("/medicare_data.csv") // IMPORTANT: must be in public folder
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data);
          }
        });
      });
  }, []);

  // 🤖 BOT LOGIC (FIXED)
  const getReply = (text) => {
    const userText = text.toLowerCase();

    for (let row of data) {
      if (!row.keyword || !row.response) continue;

      // split multiple keywords using |
      const keywords = row.keyword.split("|");

      for (let key of keywords) {
        const cleanKey = key.trim().toLowerCase();

        if (cleanKey && userText.includes(cleanKey)) {
          return row.response;
        }
      }
    }

    return "🤖 Sorry, I can only help with health-related topics like fever, headache, diet, stress, or sleep.";
  };

  // 📤 SEND MESSAGE
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };

    const botReply = getReply(input);
    const botMsg = { sender: "bot", text: botReply };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  // ⬇️ AUTO SCROLL
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">

      <h2>💙 Medicare Health Assistant</h2>

      {/* CHAT BOX */}
      <div className="chat-box">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? "user-msg" : "bot-msg"}
          >
            {msg.text}
          </div>
        ))}

        <div ref={chatEndRef} />

      </div>

      {/* INPUT */}
      <div className="input-box">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about fever, headache, stress..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
};

export default Chatbox;