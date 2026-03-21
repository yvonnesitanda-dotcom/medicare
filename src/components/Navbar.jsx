import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="button-container">

        <h3 classname="text-align-left text-color-primary">MEDICare</h3>

      {/* HOME */}
      <button className="button" onClick={() => navigate("/")}>
        <svg viewBox="0 0 1024 1024" className="icon">
          <path d="M946.5 505L560.1 118.8c-12-12-32.4-12-44.4 0L77.5 505c-12 12-18.8 28.3-18.8 46 0 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8 12-12 18.7-28.3 18.7-45.3 0-17-6.7-33.1-18.8-45.2z" />
        </svg>
      </button>

      {/* SEARCH */}
      <button className="button" onClick={() => navigate("/addproducts")}>
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* PROFILE */}
      <button className="button" onClick={() => navigate("/signin")}>
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M12 2.5a5.5 5.5 0 013.1 10A9 9 0 0119 21H5a9 9 0 013.9-8.5A5.5 5.5 0 0112 2.5z" />
        </svg>
      </button>

      {/* CART */}
      <button className="button" onClick={() => navigate("/cart")}>
        <svg viewBox="0 0 24 24" className="icon">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
        </svg>
      </button>

      <Link to="/speaktoadr"  className='btn btn-white btn-sm m-1'> Speak to a doctor</Link>
      <Link to="/myhealthcenter" className='btn btn-white btn-sm m-1' >My Health center</Link>
         <Link to="" className='btn btn-white btn-sm m-1' >Signin</Link>
          <Link to="" className='btn btn-white btn-sm m-1' >Signup</Link>

    </div>
  );
};

export default Navbar;