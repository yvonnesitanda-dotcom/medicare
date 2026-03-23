import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Signup.css";

const Signup = () => {

  const [Username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading("Please wait as we register you...");
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();

      formdata.append("username", Username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      const response = await axios.post(
        "https://kbenkamotho.alwaysdata.net/api/signup",
        formdata
      );

      setLoading("");
      setSuccess(response.data.message);

      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

    } catch (err) {
      setLoading("");
      setError(err.message);
    }
  };

  return (
    <div className='row justify-content-center mt-4 signup-bg'>
      <div className="card col-md-6 shadow p-4 signup-card">

        <h1 className='text-center'>Sign Up 🌸</h1>

        <h5 className="text-warning text-center">{loading}</h5>
        <h5 className="text-success text-center">{success}</h5>
        <h5 className="text-danger text-center">{error}</h5>

        <form onSubmit={handlesubmit}>

          <input 
            type="text" 
            placeholder='Enter Username'
            className='form-control mb-3' 
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input 
            type="email"
            placeholder='Enter Email'
            className='form-control mb-3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            type="password"
            placeholder='Enter Password'
            className='form-control mb-3'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input 
            type="tel"
            placeholder='Enter Phone Number'
            className='form-control mb-3'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="text-center">
            <button type='submit' className='btn signup-btn'>
              Sign Up
            </button>
          </div>

          <div className="text-center mt-3">
            Already have an account?{" "}
            <Link to={'/signin'}>Sign In</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;