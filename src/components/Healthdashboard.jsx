import React, { useState, useEffect } from "react";
import "../css/Healthdashboard.css";

const HealthDashboard = () => {

  const today = new Date().toDateString();

  const quotes = [
    "Your health is your wealth 🌸",
    "Small steps every day lead to big results 💪",
    "Drink water and glow ✨",
    "Take care of your body, it's your only home 💖",
    "Discipline creates beauty inside and out 🌷"
  ];

  // 💧 STATES (ORIGINAL + ADDITIONS)
  const [water, setWater] = useState(0);
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState("");

  // 📊 BMI STATES
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  // 🌸 HEALTH TIPS
  const tips = [
    "Drink at least 2L of water daily 💧",
    "Sleep 7–8 hours 😴",
    "Eat fruits and vegetables 🥗",
    "Walk daily 🚶",
    "Avoid sugary drinks 🧃",
    "Exercise 30 mins 🏃",
    "Stretch daily 🧘",
    "Maintain posture 🪑",
    "Limit junk food 🍔",
    "Stay hydrated 💧",
    "Wash hands 🧼",
    "Take breaks 📚",
    "Deep breathing 🫁",
    "Eat slowly 🍽️",
    "Reduce stress 💆",
    "Drink herbal tea 🌿",
    "Walk after meals 🚶‍♀️",
    "Stay consistent 🌸",
    "Avoid screen overuse 📱",
    "Rest well 😴"
  ];

  // 📅 LOAD DAILY DATA
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("waterData"));

    if (savedData && savedData.date === today) {
      setWater(savedData.count);
    } else {
      localStorage.setItem(
        "waterData",
        JSON.stringify({ count: 0, date: today })
      );
    }

    const dayIndex = new Date().getDate() % quotes.length;
    setQuote(quotes[dayIndex]);

  }, []);

  // 💧 ADD WATER FUNCTION (UNCHANGED LOGIC)
  const addWater = () => {
    let newCount = water + 1;
    setWater(newCount);

    let msg = "";

    if (newCount < 8) {
      msg = "💖 Good job! Keep going, you're doing amazing!";
    }

    if (newCount === 8) {
      msg = "🎉 Congratulations! You completed 8 glasses today!";
    }

    setMessage(msg);

    localStorage.setItem(
      "waterData",
      JSON.stringify({ count: newCount, date: today })
    );
  };

  // 🔄 RESET WATER
  const resetWater = () => {
    setWater(0);
    setMessage("");

    localStorage.setItem(
      "waterData",
      JSON.stringify({ count: 0, date: today })
    );
  };

  // 📊 BMI CALCULATOR
  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);

    setBmi(result);
  };

  return (
    <div className="dashboard">

      <h2>🌸 Health Dashboard</h2>

      {/* 💧 WATER CARD */}
      <div className="card">
        <h3>💧 Water Intake Tracker</h3>

        <p className="water-count">{water} / 8 glasses</p>

        <button onClick={addWater}>+ Add Water</button>
        <button onClick={resetWater}>Reset</button>

        <p className="message">{message}</p>

        {water === 8 && (
          <p className="success">🏆 You reached your daily hydration goal!</p>
        )}
      </div>

      {/* 💬 QUOTE */}
      <div className="card">
        <h3>💬 Daily Motivation</h3>
        <p className="quote">"{quote}"</p>
      </div>

      {/* 📊 BMI */}
      <div className="card">
        <h3>📊 BMI Calculator</h3>

        <input
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <p className="bmi-result">Your BMI is: {bmi}</p>
        )}
      </div>

      {/* 🌸 HEALTH TIPS */}
      <div className="card">
        <h3>🌸 Health Tips</h3>

        <div className="tips-grid">
          {tips.map((tip, i) => (
            <div className="tip-card" key={i}>
              {tip}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HealthDashboard;