import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Signin.css'
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait while we authenticate your account...");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post("https://yvonnesitanda.alwaysdata.net/api/signin", formdata);
      setLoading("");

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError("Login Failed. Please try again...");
      }
    } catch (error) {
      setLoading("");
      setError("Oops, something went wrong. Try again...");
    }
  };

  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4 bg-dark">
         <b><h1 className='text-white '>Sign In</h1></b>
        <h5 className="text-info"> {loading} </h5>
        <h3 className="text-success"> {success} </h3>
        <h4 className="text-danger"> {error} </h4>

        {/* Uiverse form adapted to React */}
        <div className="signin-form-container">
        <form className="form" onSubmit={handlesubmit}>
          <span className="input-span">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </span>

          <span className="input-span">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </span>

          <span className="span"><a href="#">Forgot password?</a></span>

          <input className="submit" type="submit" value="Log in" />

          <span className="span">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </span>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;