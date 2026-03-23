import React, { useState } from 'react';
import "../css/Signin.css";
import { Link, useNavigate } from 'react-router-dom';


const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-card">
        
        <h1 className="logo">🌸 MEDICare</h1>
        <p className="subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input 
              type="email"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input 
              type="password"
              placeholder=" "
              required
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