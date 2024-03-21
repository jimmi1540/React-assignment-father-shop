import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneField from "./component/PhoneField"

function SignupForm() {

  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  console.log('Full Name', password)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };

  return (
    <div className="centered-container">
      
      <form className="signup-form" onSubmit={handleSubmit}>
      <p style={{textAlign:'center'}}><b>Father</b>Shops</p>
      <h4 style={{textAlign:'center'}}>Sign Up</h4>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Full Name"
            required
          />
        <br />

          <PhoneField />
        <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
          />
        <br />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
          />
          <span
            style={{
              position: 'absolute',
              right: '10px',
              top: '30%',
              transform: 'translateY(-50%)',
              cursor: 'pointer'
            }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <br />
        <button type="submit" className='submitbuton'>Create Account</button>
        <p style={{ marginTop: '10px', textAlign: 'center', color: '#8c8c8c' }}>
        Already have an account? <a href="#" style={{color:'#303030'}}>Login</a>
        <br /><br />
        By Signing Up you agree to our <b>Terms and Conditions</b> <a href="#" style={{ textDecoration: 'none', color: '#ffffff' }}>Terms and Conditions</a>.
      </p>
      </form>
    </div>
  );
}

export default SignupForm;
