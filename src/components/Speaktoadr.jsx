import React, { useState } from "react";
import "../css/Doctor.css";

// FULL DOCTOR LIST (20 total)
const doctors = [
  { name: "Dr. John Doe", specialty: "Cardiologist", image: "https://randomuser.me/api/portraits/men/1.jpg", online: true },
  { name: "Dr. Mary Jane", specialty: "Dermatologist", image: "https://randomuser.me/api/portraits/women/2.jpg", online: false },
  { name: "Dr. Alex Kim", specialty: "Pediatrician", image: "https://randomuser.me/api/portraits/men/3.jpg", online: true },
  { name: "Dr. Sarah Lee", specialty: "Neurologist", image: "https://randomuser.me/api/portraits/women/4.jpg", online: true },
  { name: "Dr. James Bond", specialty: "Surgeon", image: "https://randomuser.me/api/portraits/men/5.jpg", online: false },
  { name: "Dr. Grace Kelly", specialty: "Gynecologist", image: "https://randomuser.me/api/portraits/women/6.jpg", online: true },
  { name: "Dr. Peter Parker", specialty: "Orthopedic", image: "https://randomuser.me/api/portraits/men/7.jpg", online: false },
  { name: "Dr. Bruce Wayne", specialty: "Psychiatrist", image: "https://randomuser.me/api/portraits/men/8.jpg", online: true },
  { name: "Dr. Diana Prince", specialty: "Oncologist", image: "https://randomuser.me/api/portraits/women/9.jpg", online: true },
  { name: "Dr. Clark Kent", specialty: "General Doctor", image: "https://randomuser.me/api/portraits/men/10.jpg", online: false },

  { name: "Dr. Natasha Romanoff", specialty: "Nurse Practitioner", image: "https://randomuser.me/api/portraits/women/11.jpg", online: true },
  { name: "Dr. Steve Rogers", specialty: "Physician", image: "https://randomuser.me/api/portraits/men/12.jpg", online: true },
  { name: "Dr. Wanda Maximoff", specialty: "Therapist", image: "https://randomuser.me/api/portraits/women/13.jpg", online: false },
  { name: "Dr. Strange", specialty: "Neurosurgeon", image: "https://randomuser.me/api/portraits/men/14.jpg", online: true },
  { name: "Dr. Banner", specialty: "Scientist Doctor", image: "https://randomuser.me/api/portraits/men/15.jpg", online: false },
  { name: "Dr. Shuri", specialty: "Medical Tech", image: "https://randomuser.me/api/portraits/women/16.jpg", online: true },
  { name: "Dr. Okoye", specialty: "Emergency", image: "https://randomuser.me/api/portraits/women/17.jpg", online: true },
  { name: "Dr. T'Challa", specialty: "Consultant", image: "https://randomuser.me/api/portraits/men/18.jpg", online: false },
  { name: "Dr. Vision", specialty: "AI Medicine", image: "https://randomuser.me/api/portraits/men/19.jpg", online: true },
  { name: "Dr. Loki", specialty: "Psychology", image: "https://randomuser.me/api/portraits/men/20.jpg", online: true }
];

const SpeakToDoctor = () => {
    const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  //  FILTER
  const filtered = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  //  SPLIT INTO ROWS
  const firstRow = filtered.slice(0, 10);
  const secondRow = filtered.slice(10, 20);
  const available = doctors.filter((doc) => doc.online);

  return (
    
   <div className="page">

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search doctor..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ===== ROW 1 (10) ===== */}
      <h2 className="row-title">Top Doctors</h2>
      <div className="doctor-container">
        {firstRow.map((doc, i) => (
          <div className="card" key={i}>
            <div className="img-wrapper">
              <img src={doc.image} className="doctor-img" />
              {doc.online && <span className="online-dot"></span>}
            </div>

            <div className="card__title">{doc.name}</div>
            <div className="card__subtitle">{doc.specialty}</div>

            <div className="card__wrapper">
              <button onClick={() => setSelectedDoctor(doc)}>📅 Book</button>
              <button onClick={() => alert(`Chat with ${doc.name}`)}>💬 Talk</button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== ROW 2 (10) ===== */}
      <h2 className="row-title">More Doctors</h2>
      <div className="doctor-container">
        {secondRow.map((doc, i) => (
          <div className="card" key={i}>
            <div className="img-wrapper">
              <img src={doc.image} className="doctor-img" />
              {doc.online && <span className="online-dot"></span>}
            </div>

            <div className="card__title">{doc.name}</div>
            <div className="card__subtitle">{doc.specialty}</div>

            <div className="card__wrapper">
              <button onClick={() => setSelectedDoctor(doc)}>📅 Book</button>
              <button onClick={() => alert(`Chat with ${doc.name}`)}>💬 Talk</button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== ROW 3 (AVAILABLE) ===== */}
      <h2 className="row-title">Available Now</h2>
      <div className="doctor-container">
        {available.map((doc, i) => (
          <div className="card" key={i}>
            <div className="img-wrapper">
              <img src={doc.image} className="doctor-img" />
              <span className="online-dot"></span>
            </div>

            <div className="card__title">{doc.name}</div>
            <div className="card__subtitle">{doc.specialty}</div>

            <div className="card__wrapper">
              <button onClick={() => setSelectedDoctor(doc)}>Book</button>
              <button>Talk</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedDoctor && (
        <div className="modal">
          <div className="modal-content">
            <h3>Book Appointment</h3>
            <p>{selectedDoctor.name}</p>

            <input type="date" />
            <input type="time" />

            <button
              onClick={() => {
                alert("Booked!");
                setSelectedDoctor(null);
              }}
            >
              Confirm
            </button>

            <button onClick={() => setSelectedDoctor(null)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default SpeakToDoctor;