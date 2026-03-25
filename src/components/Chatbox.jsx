import React, { useState, useEffect } from "react";
import "../css/Chatbox.css"; // style it with your light pink theme
import axios from "axios";

const ChatBox = ({ doctor, userId, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `https://yvonnesitanda/api/get_messages?user_id=${userId}&doctor_id=${doctor.id}`
      );
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // poll every 5 sec
    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    try {
      await axios.post("https://yvonnesitanda.alwaysdata.net.com/api/send_message", {
        sender_id: userId,
        receiver_id: doctor.id,
        message: input,
      });
      setInput("");
      fetchMessages(); // refresh
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox-header">
        <h4>Chat with {doctor.name}</h4>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="chatbox-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${
              msg.sender_id === userId ? "sent" : "received"
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;