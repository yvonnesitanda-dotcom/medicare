import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "../css/Chatbox.css";

const Chatbox = () => {
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // LOAD CSV
  useEffect(() => {
    fetch("medicare_data.csv")
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data);
          }
        });
      });
  }, []);

  // BOT LOGIC
  const getReply = (text) => {
    const userText = text.toLowerCase();

    for (let row of data) {
      if (row.keyword && userText.includes(row.keyword.toLowerCase())) {
        return row.response;
      }
    }

    return "Sorry, I can only help with health-related questions like fever, stress, diet, or exercise.";
  };

  // SEND MESSAGE
  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="chat-container">

      <h2>💬 Health Chatbot </h2>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your health..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

    </div>
  );
};

export default Chatbox;