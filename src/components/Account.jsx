import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Account.css";

const Account = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [appointments, setAppointments] = useState([]);
  // 💧 WATER STATES
  const [water, setWater] = useState(0);
  const [, setWeeklyWater] = useState([]);

  // 🔥 STREAK
  const [streak, setStreak] = useState(0);

  const navigate = useNavigate();
  const today = new Date().toDateString();

  // 💖 DAILY QUOTES
  const quotes = [
    "Your health is your wealth 🌸",
    "Small steps create big change 💪",
    "Drink water, glow naturally ✨",
    "Discipline builds beauty 💖",
    "Take care of your body 🌷"
  ];

  const dailyQuote = quotes[new Date().getDate() % quotes.length];

  // 🏋️ EXERCISES (20 GLASS CARDS)
  const exercises = [
    { icon: "🧘", name: "Stretching", desc: "Relieves tension", benefit: "Flexibility" },
    { icon: "🏃", name: "Jogging", desc: "Light running", benefit: "Heart health" },
    { icon: "🧎", name: "Squats", desc: "Lower body workout", benefit: "Leg strength" },
    { icon: "🤸", name: "Jumping Jacks", desc: "Full body movement", benefit: "Fat burn" },
    { icon: "🧍", name: "Plank", desc: "Core strength", benefit: "Abs" },
    { icon: "🚶", name: "Walking", desc: "Light activity", benefit: "Circulation" },
    { icon: "🏋️", name: "Weights", desc: "Resistance training", benefit: "Muscle gain" },
    { icon: "🫀", name: "Cardio", desc: "Heart workout", benefit: "Endurance" },
    { icon: "🧎‍♀️", name: "Yoga", desc: "Mind + body", benefit: "Relaxation" },
    { icon: "🦵", name: "Lunges", desc: "Leg strength", benefit: "Balance" },
    { icon: "🤲", name: "Push-ups", desc: "Upper body", benefit: "Strength" },
    { icon: "🪑", name: "Chair Squats", desc: "Beginner friendly", benefit: "Stability" },
    { icon: "🫁", name: "Breathing", desc: "Deep breathing", benefit: "Calmness" },
    { icon: "🏃‍♀️", name: "Sprint", desc: "Fast running", benefit: "Speed" },
    { icon: "🧍‍♀️", name: "Standing Stretch", desc: "Flexibility", benefit: "Mobility" },
    { icon: "🧎‍♂️", name: "Child Pose", desc: "Relaxation pose", benefit: "Peace" },
    { icon: "🏋️‍♀️", name: "Dumbbells", desc: "Strength training", benefit: "Muscles" },
    { icon: "🦶", name: "Heel Raises", desc: "Calf workout", benefit: "Legs" },
    { icon: "🧘‍♂️", name: "Meditation", desc: "Mind calm", benefit: "Focus" },
    { icon: "🤸‍♀️", name: "Body Rolls", desc: "Warm-up", benefit: "Mobility" }
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/signin");
    } else {
      setUser(storedUser);

      if (storedUser.profilePic) {
        setProfilePic(storedUser.profilePic);
      }
    }

    const waterData = JSON.parse(localStorage.getItem("waterData"));
    if (waterData && waterData.date === today) {
      setWater(waterData.count);
    }

    setWeeklyWater(JSON.parse(localStorage.getItem("waterHistory")) || []);
    setStreak(JSON.parse(localStorage.getItem("streak")) || 0);

  }, [navigate, today]);

  // 📸 PROFILE PICTURE UPLOAD
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;

      setProfilePic(imageUrl);

      const updatedUser = { ...user, profilePic: imageUrl };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
    };

    reader.readAsDataURL(file);
  };

  // 💧 WATER + 🔥 STREAK
  const addWater = () => {
    const newCount = water + 1;
    setWater(newCount);

    let history = JSON.parse(localStorage.getItem("waterHistory")) || [];
    history = history.filter(h => h.date !== today);
    history.push({ date: today, count: newCount });

    localStorage.setItem("waterHistory", JSON.stringify(history));
    localStorage.setItem("waterData", JSON.stringify({ count: newCount, date: today }));

    setWeeklyWater(history);

    let newStreak = streak;
    if (newCount === 1) newStreak += 1;

    setStreak(newStreak);
    localStorage.setItem("streak", JSON.stringify(newStreak));

    if (newCount === 10) {
      alert("🎉 You completed 10 glasses today!");
    }
  };

 useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    navigate("/signin");
  } else {
    setUser(storedUser);

    if (storedUser.profilePic) {
      setProfilePic(storedUser.profilePic);
    }
  }

  const waterData = JSON.parse(localStorage.getItem("waterData"));
  if (waterData && waterData.date === today) {
    setWater(waterData.count);
  }

  setWeeklyWater(JSON.parse(localStorage.getItem("waterHistory")) || []);
  setStreak(JSON.parse(localStorage.getItem("streak")) || 0);

  // ✅ APPOINTMENTS (FIXED)
  const savedAppointments =
    JSON.parse(localStorage.getItem("appointments")) || [];

  setAppointments(savedAppointments);

  // 🔔 ONLY RUN ONCE (NO LOOP)
  const hasNew = localStorage.getItem("hasNewAppointment");

  if (hasNew === "true" && savedAppointments.length > 0) {
    const latest = savedAppointments[savedAppointments.length - 1];

    alert(
      `🔔 Appointment Reminder:\n\nDr ${latest.doctor}\n${latest.date} at ${latest.time}`
    );

    localStorage.setItem("hasNewAppointment", "false");
  }
}, [navigate, today]);

  const resetWater = () => {
    setWater(0);
    localStorage.setItem("waterData", JSON.stringify({ count: 0, date: today }));
  };

  const logout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  if (!user) return null;

  return (
    <div className="account-page">

      {/* 🌸 HEADER */}
      <div className="profile-header">

        {/* PROFILE PIC */}
        <div className="avatar-wrapper">
          <img
            src={profilePic || "https://via.placeholder.com/120"}
            className="avatar"
            alt="profile"
          />

          {/* EDIT ICON */}
          <label className="edit-avatar">
            ✏️
            <input type="file" onChange={handleImageChange} hidden />
          </label>
        </div>

        {/* USER INFO */}
        <div className="user-info">
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>

        {/* STATS */}
        <div className="stats">
          <div><strong>{water}</strong><p>Water 💧</p></div>
          <div><strong>{streak}</strong><p>Streak 🔥</p></div>
        </div>
      </div>

      {/* 🌸 TABS */}
      <div className="tabs">
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("exercise")}>Exercise</button>
      </div>

      {/* 👤 PROFILE */}
      {activeTab === "profile" && (
        <>
          <div className="card">
            <h3>👤 Profile</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>

          <div className="card">
            <h3>💧 Water Tracker</h3>
            <p>{water} / 8 glasses</p>
            <button onClick={addWater}>+ Add Water</button>
            <button onClick={resetWater}>Reset</button>
          </div>

          <div className="card">
  <h3>📅 My Appointments</h3>

  {appointments.length === 0 ? (
    <p>No appointments booked yet</p>
  ) : (
    appointments.map((a, i) => (
      <div key={i} className="glass-appointment">
        <p>👨‍⚕️ {a.doctor}</p>
        <p>🩺 {a.specialty}</p>
        <p>📅 {a.date}</p>
        <p>⏰ {a.time}</p>
      </div>
    ))
  )}
</div>

          <div className="card">
            <h3>💖 Daily Motivation</h3>
            <p>{dailyQuote}</p>
          </div>
        </>
      )}

      {/* 🏋️ EXERCISES */}
      {activeTab === "exercise" && (
        <div className="exercise-grid">
          {exercises.map((ex, i) => (
            <div className="glass-card" key={i}>
              <div className="icon">{ex.icon}</div>
              <h3>{ex.name}</h3>
              <p>{ex.desc}</p>
              <small>💖 {ex.benefit}</small>
            </div>
          ))}
        </div>
      )}

      {/* 🚪 LOGOUT */}
      <button className="logout" onClick={logout}>
        Logout
      </button>

    </div>
  );
};

export default Account;