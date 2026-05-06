import React from "react";
import "../css/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* 🌸 ABOUT */}
        <div className="footer-section">
          <h2>💖 MediCare</h2>
          <p>
            Your trusted health companion. Get access to medicines, 
            consultations, and wellness tips anytime, anywhere.
          </p>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Consult a Doctor</li>
            <li>Cart</li>
            <li>Login / Signup</li>
          </ul>
        </div>

        {/* 💊 SERVICES */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Order Medicine</li>
            <li>Health Tips</li>
            <li>24/7 Support</li>
            <li>Delivery Tracking</li>
            <li>Prescription Upload</li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Nairobi, Kenya</p>
          <p>📧 support@medicare.com</p>
          <p>📞 +254 700 000000</p>
        </div>

        {/* 💌 NEWSLETTER */}
        <div className="footer-section">
          <h3>Stay Updated 💌</h3>
          <p>Subscribe for health tips & offers</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* 🌸 SOCIALS */}
      <div className="footer-socials">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
      </div>

      {/* 💖 BOTTOM */}
      <div className="footer-bottom">
        <p>
          Made with <FaHeart className="heart" /> by MediCare © 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;