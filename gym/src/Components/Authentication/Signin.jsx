import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "../supabaseClient";
import "./Signing.css";


function Signin({setToken}) {
  const [passType, setPassType] = useState("password");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e){
    setFormData((prevFormData)=>{
      return{
      ...prevFormData,
      [e.target.name]: e.target.value.trim(),
      };
    });
  }

  async function handleSubmit(e){
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword(
        {
          email: formData.email,
          password: formData.password,
        }
      )
      if (error) throw error
      setToken(data)
      navigate('/home')
    } 
    catch (error) {
      alert(error)
    }
  }

  function handlePasswordClick(){
    if (passType === "password"){
      setPassType("text");
    }
    else{
      setPassType("password");
    }
  }

  return (
    <>
      <div className='sign'>
        <form className="signUpCard" onSubmit={handleSubmit}>
          <h1 className='signUpTitle'>Login</h1>
          <div className='textBoxSign'>
            <label>Email Address</label>
            <input 
            placeholder='Email'
            type="email"
            name="email"
            onChange={handleChange}
            />
          </div>
          <div className='textBoxSign'>
            <label>Password</label>
              <input 
              placeholder='Password'
              type={passType}
              name="password"
              onChange={handleChange}
              />
          </div>
          <div className='showPasswordDiv'>
            <label className='showPassword'>
              <input type="checkbox" onClick={handlePasswordClick}/>
              <div class="checkmark"></div>
            </label>
            <span className='passText'>Show Password</span>
          </div>
          <button type='submit' className='signUpButton'>Login</button>
        </form>
          <span className='signLink'>Don't have a account? <Link exact to="/signup">Sign Up</Link></span>
          <span className='signLink'><Link exact to="/forgot-password">Forgot Password?</Link></span>
      </div>
    </>
  )};

export default Signin;