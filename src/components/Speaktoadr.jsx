import React, { useState } from "react";
import ChatBox from "./Chatbox";
import "../css/Doctor.css";

const doctors = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", image: "https://randomuser.me/api/portraits/men/1.jpg", online: true },
  { id: 2, name: "Dr. Mary Jane", specialty: "Dermatologist", image: "https://randomuser.me/api/portraits/women/2.jpg", online: false },
  { id: 3, name: "Dr. Alex Kim", specialty: "Pediatrician", image: "https://randomuser.me/api/portraits/men/3.jpg", online: true },
  { id: 4, name: "Dr. Sarah Lee", specialty: "Neurologist", image: "https://randomuser.me/api/portraits/women/4.jpg", online: true },
  { id: 5, name: "Dr. James Bond", specialty: "Surgeon", image: "https://randomuser.me/api/portraits/men/5.jpg", online: false },
  { id: 6, name: "Dr. Grace Kelly", specialty: "Gynecologist", image: "https://randomuser.me/api/portraits/women/6.jpg", online: true },
  { id: 7, name: "Dr. Peter Parker", specialty: "Orthopedic", image: "https://randomuser.me/api/portraits/men/7.jpg", online: false },
  { id: 8, name: "Dr. Bruce Wayne", specialty: "Psychiatrist", image: "https://randomuser.me/api/portraits/men/8.jpg", online: true },
  { id: 9, name: "Dr. Diana Prince", specialty: "Oncologist", image: "https://randomuser.me/api/portraits/women/9.jpg", online: true },
  { id: 10, name: "Dr. Clark Kent", specialty: "General Doctor", image: "https://randomuser.me/api/portraits/men/10.jpg", online: false },
  { id: 11, name: "Dr. Natasha Romanoff", specialty: "Nurse Practitioner", image: "https://randomuser.me/api/portraits/women/11.jpg", online: true },
  { id: 12, name: "Dr. Steve Rogers", specialty: "Physician", image: "https://randomuser.me/api/portraits/men/12.jpg", online: true },
  { id: 13, name: "Dr. Wanda Maximoff", specialty: "Therapist", image: "https://randomuser.me/api/portraits/women/13.jpg", online: false },
  { id: 14, name: "Dr. Strange", specialty: "Neurosurgeon", image: "https://randomuser.me/api/portraits/men/14.jpg", online: true },
  { id: 15, name: "Dr. Banner", specialty: "Scientist Doctor", image: "https://randomuser.me/api/portraits/men/15.jpg", online: false },
  { id: 16, name: "Dr. Shuri", specialty: "Medical Tech", image: "https://randomuser.me/api/portraits/women/16.jpg", online: true },
  { id: 17, name: "Dr. Okoye", specialty: "Emergency", image: "https://randomuser.me/api/portraits/women/17.jpg", online: true },
  { id: 18, name: "Dr. T'Challa", specialty: "Consultant", image: "https://randomuser.me/api/portraits/men/18.jpg", online: false },
  { id: 19, name: "Dr. Vision", specialty: "AI Medicine", image: "https://randomuser.me/api/portraits/men/19.jpg", online: true },
  { id: 20, name: "Dr. Loki", specialty: "Psychology", image: "https://randomuser.me/api/portraits/men/20.jpg", online: true }
];


const SpeakToDoctor = () => {
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [chatDoctor, setChatDoctor] = useState(null);

  const filtered = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const saveAppointment = () => {
  const date = document.querySelector("#app-date").value;
  const time = document.querySelector("#app-time").value;

  const newAppointment = {
    id: Date.now(),
    doctor: selectedDoctor.name,
    specialty: selectedDoctor.specialty,
    date,
    time
  };

  const existing = JSON.parse(localStorage.getItem("appointments")) || [];

  const updated = [...existing, newAppointment];

  localStorage.setItem("appointments", JSON.stringify(updated));

  // 🔔 trigger notification storage flag
  localStorage.setItem("hasNewAppointment", "true");

  alert("📅 Appointment booked successfully!");

  setSelectedDoctor(null);
};
  

  return (
    <div className="page">

      <input
        className="search"
        placeholder="Search doctor..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="doctor-container">
        {filtered.map((doc) => (
          <div className="card" key={doc.id}>
            <img src={doc.image} className="doctor-img" />
            <h4>{doc.name}</h4>
            <p>{doc.specialty}</p>

            <button onClick={() => setSelectedDoctor(doc)}>
              📅 Book
            </button>

            <button
              onClick={() => {
                window.open(
                  `https://wa.me/254700000000?text=Hello Dr. ${doc.name}, I would like consultation.`,
                  "_blank"
                );
              }}
            >
              💬 Talk
            </button>
          </div>
        ))}
      </div>

      {/* BOOKING MODAL */}
      {selectedDoctor && (
        <div className="modal">
          <div className="modal-content">
            <h3>Book Appointment</h3>
            <p>{selectedDoctor.name}</p>

            <input type="date" id="app-date" />
            <input type="time" id="app-time" />

            <button onClick={saveAppointment}>Confirm</button>
            <button onClick={() => setSelectedDoctor(null)}>Close</button>
          </div>
        </div>
      )}

      {chatDoctor && (
        <ChatBox doctor={chatDoctor} onClose={() => setChatDoctor(null)} />
      )}

    </div>
  );
};

export default SpeakToDoctor;