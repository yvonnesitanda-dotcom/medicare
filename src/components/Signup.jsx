import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../css/Signup.css"; // Make sure this CSS is updated with Medicare styles

const Signup = () => {

  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
 const [phone,setPhone]=useState("");
 
 

  const [loading,setLoading] = useState("");
  const [success,setSuccess] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault()
    setLoading("Please wait to be registered, in a moment...")
    setError("")
    setSuccess("")

    try{
      const formdata = new FormData();
      formdata.append("username",username);
      formdata.append("email",email);
      formdata.append("password",password);
      formdata.append("phone",phone);

      
      const response = await axios.post("https://yvonnesitanda.alwaysdata.net/api/signup",formdata)

      setLoading("");
      setSuccess(response.data.message);
      console.log("The content of the response is:",response.data.message)

      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("")

      setTimeout(() => {
        setSuccess("");
      }, 5000);

    } catch(error){
      setLoading("");
      setError(error.message);
    }
  }

  return (
    <div className='row justify-content-center mt-5 signup-bg'>
      <div className="card col-md-6 shadow p-4 signup-card">

        <h1 className='text-center mb-4'>MEDICare Sign Up 🌸</h1>

        {loading && <h5 className='text-warning text-center'>{loading}</h5>}
        {success && <h5 className='text-success text-center'>{success}</h5>}
        {error && <h5 className='text-danger text-center'>{error}</h5>}

        <form onSubmit={handleSubmit}>

          <input type="text" 
            placeholder='Enter the username'
            className='form-control mb-3'
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            required/>

          <input type="email" 
            placeholder='Enter the email address'
            className='form-control mb-3'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required/>

        

          <input type="password" 
            placeholder='Enter the password'
            className='form-control mb-3'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required/>

            <input type="tel" 
            placeholder='Enter the telephone number'
            className='form-control mb-3'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required/>


          <label className="terms mb-3">
            <input type="checkbox" required/>
            I agree to the Terms & Conditions
          </label>

          <div className="text-center">
            <input type="submit" value="Join Now" className='btn signup-btn mb-3'/>
          </div>

          <div className="text-center">
            Already have an account? <Link to= {'/signin'}> Sign In</Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup;