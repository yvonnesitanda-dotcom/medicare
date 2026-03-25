import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Signin.css";

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading("Logging you in...");
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "https://yvonnesitanda.alwaysdata.net/api/signin",
        formdata
      );

      setLoading("");

      if (response.data.user) {
        // ✅ save user (you can also use token later)
        localStorage.setItem("user", JSON.stringify(response.data.user));

        alert("Login successful ✅");

        // redirect
        navigate("/");
      } else {
        setError(response.data.message);
      }

    } catch (err) {
      setLoading("");
      setError(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-card">
        
        <h1 className="logo">🌸 MEDICare</h1>
        <p className="subtitle">Sign in to continue</p>

        {/* STATUS */}
        {loading && <p className="text-warning">{loading}</p>}
        {error && <p className="text-danger">{error}</p>}

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input 
              type="email"
              placeholder=" "
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input 
              type="password"
              placeholder=" "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <input className="signin-btn" type="submit" value="Log in" />

        </form>

        <span className="span">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>

      </div>
    </div>
  );
};

export default Signin;