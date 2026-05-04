import React, { useEffect, useState } from "react";
import "../css/Doctor.css";

const doctorsBase = [
  { id: 1, name: "Dr. John Doe", specialty: "Cardiologist" },
  { id: 2, name: "Dr. Mary Jane", specialty: "Dermatologist" },
  { id: 3, name: "Dr. Alex Kim", specialty: "Pediatrician" },
  { id: 4, name: "Dr. Sarah Lee", specialty: "Neurologist" },
  { id: 5, name: "Dr. James Bond", specialty: "Surgeon" },
  { id: 6, name: "Dr. Grace Kelly", specialty: "Gynecologist" },
  { id: 7, name: "Dr. Peter Parker", specialty: "Orthopedic" },
  { id: 8, name: "Dr. Bruce Wayne", specialty: "Psychiatrist" },
  { id: 9, name: "Dr. Diana Prince", specialty: "Oncologist" },
  { id: 10, name: "Dr. Clark Kent", specialty: "General Doctor" },
  { id: 11, name: "Dr. Natasha Romanoff", specialty: "Nurse Practitioner" },
  { id: 12, name: "Dr. Steve Rogers", specialty: "Physician" },
  { id: 13, name: "Dr. Wanda Maximoff", specialty: "Therapist" },
  { id: 14, name: "Dr. Strange", specialty: "Neurosurgeon" },
  { id: 15, name: "Dr. Banner", specialty: "Scientist Doctor" },
  { id: 16, name: "Dr. Shuri", specialty: "Medical Tech" },
  { id: 17, name: "Dr. Okoye", specialty: "Emergency" },
  { id: 18, name: "Dr. T'Challa", specialty: "Consultant" },
  { id: 19, name: "Dr. Vision", specialty: "AI Medicine" },
  { id: 20, name: "Dr. Loki", specialty: "Psychology" },
  { id: 21, name: "Dr. Messi", specialty: "Sports Medicine" },
  { id: 22, name: "Dr. Taylor", specialty: "ENT Specialist" },
  { id: 23, name: "Dr. Serena", specialty: "Rehab" },
  { id: 24, name: "Dr. Elon", specialty: "Neuro Tech" },
  { id: 25, name: "Dr. Einstein", specialty: "Research" },
  { id: 26, name: "Dr. Ada", specialty: "Digital Health" },
  { id: 27, name: "Dr. Jordan", specialty: "Orthopedic Surgery" },
  { id: 28, name: "Dr. Oprah", specialty: "Mental Wellness" },
  { id: 29, name: "Dr. Tony Stark", specialty: "Advanced Surgery" },
  { id: 30, name: "Dr. House", specialty: "Diagnostics" }
];

const SpeakToDoctor = () => {
  const [search, setSearch] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [videoDoctor, setVideoDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // 🟢 LIVE ONLINE/OFFLINE SIMULATION
  const [onlineDoctors, setOnlineDoctors] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const status = {};
      doctorsBase.forEach(d => {
        status[d.id] = Math.random() > 0.4; // random online/offline
      });
      setOnlineDoctors(status);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const filtered = doctorsBase.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.specialty.toLowerCase().includes(search.toLowerCase())
  );

  // 📅 SAVE APPOINTMENT
  const bookAppointment = () => {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const newApp = {
      id: Date.now(),
      doctor: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      date,
      time,
      paid: false
    };

    const updated = [...appointments, newApp];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));

    alert("Appointment created. Proceed to payment.");
  };

  // 💳 PAYMENT (SIMULATED M-PESA)
  const payConsultation = (app) => {
    alert(`📲 M-Pesa STK Push sent to pay consultation with ${app.doctor}`);
  };

  return (
    <div className="doctor-page">

      <h2 className="title">👩‍⚕️ TeleMedicine Platform</h2>

      <input
        className="search"
        placeholder="Search doctor..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* DOCTOR CARDS */}
      <div className="doctor-scroll">

        {filtered.map(doc => (
          <div className="doctor-card" key={doc.id}>

            <div className="img-wrapper">
              <img src={`https://randomuser.me/api/portraits/men/${doc.id}.jpg`} />
              <span className={onlineDoctors[doc.id] ? "online" : "offline"} />
            </div>

            <h4>{doc.name}</h4>
            <p>{doc.specialty}</p>

            <div className="btn-group">

              <button onClick={() => setSelectedDoctor(doc)}>
                📅 Book
              </button>

              <button onClick={() =>
                window.open(
                  `https://wa.me/254700000000?text=Hi ${doc.name}, I need consultation`,
                  "_blank"
                )
              }>
                💬 WhatsApp
              </button>

              <button onClick={() => setVideoDoctor(doc)}>
                📹 Video
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* APPOINTMENT MODAL */}
      {selectedDoctor && (
        <div className="modal">
          <div className="modal-box">

            <h3>{selectedDoctor.name}</h3>

            <input type="date" id="date" />
            <input type="time" id="time" />

            <button onClick={bookAppointment}>Book Appointment</button>
            <button onClick={() => setSelectedDoctor(null)}>Close</button>

          </div>
        </div>
      )}

      {/* VIDEO CONSULTATION UI */}
      {videoDoctor && (
        <div className="modal">
          <div className="video-box">

            <h3>Video Call with {videoDoctor.name}</h3>

            <div className="video-grid">
              <div className="video local">You</div>
              <div className="video remote">{videoDoctor.name}</div>
            </div>

            <button onClick={() => setVideoDoctor(null)}>
              End Call
            </button>

          </div>
        </div>
      )}

      {/* APPOINTMENT LIST */}
      <div className="appointments">
        <h3>My Appointments</h3>

        {appointments.map(app => (
          <div className="appointment-card" key={app.id}>
            <p>{app.doctor}</p>
            <p>{app.date} - {app.time}</p>

            <button onClick={() => payConsultation(app)}>
              Pay Consultation
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SpeakToDoctor;