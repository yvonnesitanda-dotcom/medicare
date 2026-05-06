import React from "react";

const ChatToggleButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="shadow"
      style={{
        position: "fixed",
        bottom: 25,
        right: 25,
        width: 65,
        height: 65,
        borderRadius: "50%",
        zIndex: 9998,

        // 🌸 Pink theme
        background: "linear-gradient(135deg, #ff4d88, #ff99bb)",
        color: "#fff",
        border: "none",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        fontSize: 24,
        cursor: "pointer",
        transition: "0.3s ease",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.transform = "scale(1.1)")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.transform = "scale(1)")
      }
      aria-label="Open chat"
    >
      💬
    </button>
  );
};

export default ChatToggleButton;