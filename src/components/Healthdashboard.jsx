import React, { useState, useEffect } from "react";
import "../css/Healthdashboard.css";

const quotes = [
  "Your health is your wealth 🌸",
  "Small steps every day lead to big results 💪",
  "Drink water and glow ✨",
  "Take care of your body, it's your only home 💖",
  "Discipline creates beauty inside and out 🌷"
];

const HealthDashboard = () => {

  const today = new Date().toDateString();

  // 👤 USER
  const user = localStorage.getItem("userName") || "Guest";

  // 💧 WATER
  const [water, setWater] = useState(0);
  const [message, setMessage] = useState("");

  // 😴 SLEEP
  const [sleep, setSleep] = useState(0);

  // 💬 QUOTE
  const [quote, setQuote] = useState("");

  // 📊 BMI
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const tips = [
    "Drink at least 2L of water daily 💧",
    "Sleep 7–8 hours 😴",
    "Eat fruits and vegetables 🥗",
    "Walk daily 🚶",
    "Avoid sugary drinks 🧃",
    "Exercise 30 mins 🏃"
  ];

  // 📥 LOAD DATA (WATER + SLEEP)
  useEffect(() => {
    const waterData = JSON.parse(localStorage.getItem("waterData"));
    const sleepData = JSON.parse(localStorage.getItem("sleepData"));

    // WATER
    if (waterData && waterData.date === today) {
      setWater(waterData.count);
    } else {
      localStorage.setItem(
        "waterData",
        JSON.stringify({ count: 0, date: today })
      );
    }

    // SLEEP
    if (sleepData && sleepData.date === today) {
      setSleep(sleepData.hours);
    } else {
      localStorage.setItem(
        "sleepData",
        JSON.stringify({ hours: 0, date: today })
      );
    }

    const dayIndex = new Date().getDate() % quotes.length;
    setQuote(quotes[dayIndex]);

  }, [today]);

  // 💧 ADD WATER
  const addWater = () => {
    let newCount = water + 1;
    setWater(newCount);

    let msg = "";

    if (newCount < 20) {
      msg = "💖 Keep going! Stay hydrated!";
    }

    if (newCount === 20) {
      msg = "🎉 Amazing! You reached your water goal!";
    }

    setMessage(msg);

    localStorage.setItem(
      "waterData",
      JSON.stringify({ count: newCount, date: today })
    );
  };

  const resetWater = () => {
    setWater(0);
    setMessage("");

    localStorage.setItem(
      "waterData",
      JSON.stringify({ count: 0, date: today })
    );
  };

  // 😴 SAVE SLEEP
  const handleSleep = (value) => {
    setSleep(value);

    localStorage.setItem(
      "sleepData",
      JSON.stringify({ hours: value, date: today })
    );
  };

  // 📊 BMI
  const calculateBMI = () => {
    if (!height || !weight) return;

    const h = height / 100;
    const result = (weight / (h * h)).toFixed(1);

    setBmi(result);
  };

  return (
    <div className="dashboard">

      <h2>🌸 Health Dashboard</h2>

      {/* 👋 WELCOME */}
      <h4>👋 Welcome back, {user}</h4>
      <p>Today is {today}</p>

      {/* 💧 WATER */}
      <div className="card">
        <h3>💧 Water Intake Tracker</h3>

        <p className="water-count">{water} / 20 glasses</p>

        {/* PROGRESS BAR WATER */}
        <div style={{ background: "#eee", borderRadius: 10 }}>
          <div
            style={{
              width: `${(water / 20) * 100}%`,
              height: 10,
              background: "#4dd0e1",
              borderRadius: 10
            }}
          />
        </div>

        <button onClick={addWater}>+ Add Water</button>
        <button onClick={resetWater}>Reset</button>

        <p className="message">{message}</p>
      </div>

      {/* 😴 SLEEP */}
      <div className="card">
        <h3>😴 Sleep Tracker</h3>

        <input
          type="number"
          placeholder="Hours slept today"
          value={sleep}
          onChange={(e) => handleSleep(e.target.value)}
        />

        <p>{sleep >= 7 ? "🌙 Great sleep!" : "⚠️ Try sleeping more (7–8 hrs)"}</p>

        {/* PROGRESS BAR SLEEP */}
        <div style={{ background: "#eee", borderRadius: 10 }}>
          <div
            style={{
              width: `${(sleep / 8) * 100}%`,
              height: 10,
              background: "#9575cd",
              borderRadius: 10
            }}
          />
        </div>
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

        {bmi && <p>Your BMI is: {bmi}</p>}
      </div>

      {/* 🌸 TIPS */}
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