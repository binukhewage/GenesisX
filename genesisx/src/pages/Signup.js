import React, { useState } from 'react';
import './Signup.css';
import signupimageone from '../images/simage.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4006/register', { name, email, password })
          .then(result => {
            console.log("User registered:", result);
            navigate('/login');
          })
          .catch(err => console.log(err));
      };
      


  return (
    <div className='signup-page'>
      <div className='scontainer'>
        <div className='image-section'>
          <img src={signupimageone} alt='signup' className='signup-image' />
          <div className='image-overlay'>
            <h2>GenesisX</h2>
            <p>Unlock premium features and personalized experiences</p>
          </div>
        </div>
        
        <form className='sform' onSubmit={handleSubmit}>
          <h1 className='form-title'>Create <span className='text-gradient'>Account</span></h1>
          <p className='form-subtitle'>Begin your premium experience</p>
          
          <div className='form-group'>
            <label className='input-label'>Full Name</label> 
            <input
              className='form-input'
              placeholder='John Doe'
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
          <div className='form-group'>
            <label className='input-label'>Email Address</label> 
            <input
              className='form-input'
              placeholder='johndoe@email.com'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className='form-group'>
            <label className='input-label'>Password</label> 
            <input
              className='form-input'
              placeholder='Your Password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type='submit' className='signup-button'>
            Sign Up
          </button>
          
          <p className='login-link'>
            Already a member? <a href='/login'>Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;