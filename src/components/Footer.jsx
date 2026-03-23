import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>MedConnect</h2>
          <p>Your health, our priority.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@medconnect.com</p>
          <p>Phone: +254 700 123 456</p>
          <p>Address: Nairobi, Kenya</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MedConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;