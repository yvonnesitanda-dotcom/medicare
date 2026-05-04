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

  const handlePhoneChange = (e) => {
    let val = e.target.value;
    if (val.startsWith("0")) val = "254" + val.slice(1);
    setNumber(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!number) return alert("Please enter phone number");

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

      setSuccess(response.data.message || "Payment initiated!");
      alert("📲 Check your phone to complete payment");
    } catch (err) {
      setError(err.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="payment-page">
        <h2>No product selected</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="payment-page">

      {/* LEFT PRODUCT CARD */}
      <div className="product-card">

        <div className="image-wrapper">
          <img src={img_url + product.product_photo} alt="" />
        </div>

        <div className="product-info">
          <h2>{product.product_name}</h2>
          <p>{product.product_description}</p>

          <div className="price-tag">
            KES {product.product_cost}
          </div>
        </div>

      </div>

      {/* RIGHT PAYMENT CARD */}
      <div className="payment-card">

        <h2 className="title">Lipa na M-Pesa</h2>

        <p className="subtitle">
          Secure checkout powered by Safaricom
        </p>

        <form onSubmit={handleSubmit}>

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="254XXXXXXXXX"
            value={number}
            onChange={handlePhoneChange}
          />

          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}

          <button disabled={loading || !number}>
            {loading ? "Processing..." : `Pay KES ${product.product_cost}`}
          </button>

        </form>

        <button className="back" onClick={() => navigate(-1)}>
          ← Back
        </button>

      </div>

    </div>
  );
};

export default Makepayment;