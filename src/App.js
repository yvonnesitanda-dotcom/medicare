import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Signin from './components/Signin';
import Signup from './components/Signup';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Addproducts from './components/Addproducts';
import Navbar from "./components/Navbar";
import SpeakToDoctor from './components/Speaktoadr';
import Myhealthcenter from './components/Myhealthcenter';
import Footer from "./components/Footer";
import Account from './components/Account';
import HealthDashboard from './components/Healthdashboard';
import Cart from './components/Cart';
import Aboutus from './components/Aboutus';
import Chatbot from './components/Chatrobot';
import ChatToggleButton from './components/ChatToggle';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Navbar />

      {/* CHAT BUTTON (NOW PROPERLY INSIDE APP) */}
      <ChatToggleButton onClick={() => setOpen(true)} />
      {open && <Chatbot onClose={() => setOpen(false)} />}

      {/* Toast */}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        closeOnClick
      />

      <div className="App">
        <header className="App-header">
          <h5>Welcome to MEDIcare - Your health is our priority</h5>
        </header>

        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/makepayment' element={<Makepayment />} />
          <Route path='/addproducts' element={<Addproducts />} />
          <Route path='/speaktoadr' element={<SpeakToDoctor />} />
          <Route path='/myhealthcenter' element={<Myhealthcenter />} />
          <Route path='/account' element={<Account />} />
          <Route path='/chatrobot' element={<Chatbot />} />
          <Route path='/healthdashboard' element={<HealthDashboard />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/aboutus' element={<Aboutus />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;