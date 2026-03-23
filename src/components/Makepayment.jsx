import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Makepayment.css';

const Makepayment = () => {
  const { product } = useLocation().state || {};
  const navigate = useNavigate();
  const img_url = "https://yvonnesitanda.alwaysdata.net/static/images/";

  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Auto-format phone number
  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (val.startsWith("0")) val = "254" + val.slice(1);
    setNumber(val);
  };

  // Handle Buy Click (prompt if phone empty)
  const handleCartClick = () => {
    if (!number) {
      const phone = prompt("Enter your phone number (07XXXXXXXX or 254XXXXXXXXX):");
      if (phone) {
        let formatted = phone.startsWith("0") ? "254" + phone.slice(1) : phone;
        setNumber(formatted);
        alert(`Phone number ${formatted} received. Proceed to payment!`);
      }
    }
  };

  // Handle Payment Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!number) return alert("Please enter your phone number!");

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("phone", number);
      formdata.append("amount", product.product_cost);

      const response = await axios.post(
        "https://yvonnesitanda.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setLoading(false);
      setSuccess(response.data.message || "Payment initiated successfully!");
      alert(`✅ Payment initiated! Check your phone to complete the transaction.`);
    } catch (err) {
      setLoading(false);
      setError(err.message || "Payment failed. Try again.");
    }
  };

  return (
    <div className='payment-page row justify-content-center'>
      <h1 className="text-success text-center">Make Payment - Lipa na M-Pesa</h1>

      {/* Back Button */}
      <div className="col-md-1 mb-3">
        <button className="btn back-btn" onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>

      {/* Payment Card */}
      <div className="col-md-6 payment-card">
        <div className="payment-card-header">
          <img
            src={img_url + product.product_photo}
            alt={product.product_name}
            className="payment-img"
          />
        </div>

        <div className="payment-card-body">
          <h2 className="product-title">{product.product_name}</h2>
          <p className="product-desc">{product.product_description}</p>
          <h3 className="product-price">KES {product.product_cost}</h3>

          {/* Buy Button */}
          <button className="btn buy-btn" onClick={handleCartClick}>
            🛒 Confirm Phone
          </button>

          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            {success && <p className="text-success">{success}</p>}
            {error && <p className="text-danger">{error}</p>}

            <input
              type="tel"
              className="form-control"
              placeholder="Enter phone number 254XXXXXXXXX"
              value={number}
              onChange={handlePhoneChange}
              required
            />

            <button
              type="submit"
              className="btn pay-btn"
              disabled={loading || !number}
            >
              {loading ? "Processing..." : "Make Payment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Makepayment;