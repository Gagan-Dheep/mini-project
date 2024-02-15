// Signup.js
import React, { useState } from 'react';
import '../styles/Signup.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function Signup() {
  const [action, setAction] = useState('Login');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('Password');
  const [username, setUsername] = useState('Username');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          username, // Include username for signup
        }),
      });

      if (response.ok) {
        // Handle successful signup/login (e.g., redirect, set authentication state)
        console.log('User signed up/logged in successfully!');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error during signup/login:', error);
      setErrorMessage('An error occurred, please try again.');
    }
  };

  return (
    <div className="signup-container"> {/* Updated class name */}
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
          <div className="input">
            <FaRegUserCircle />
            <input type="text" placeholder={username} />
          </div>
        )}
        <div className="input">
          <MdEmail />
          <input type="email" placeholder={email} />
        </div>
        <div className="input">
          <RiLockPasswordFill />
          <input type="password" placeholder={password} />
        </div>
        {action === 'Sign Up' ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost password? <span>Click here</span>
          </div>
        )}
        <div className="submit-container">
          <div
            className={action === 'Login' ? 'submit gray' : 'submit'}
            onClick={() => setAction('Sign Up')}
          >
            Sign Up
          </div>
          <div
            className={action === 'Sign Up' ? 'submit gray' : 'submit'}
            onClick={() => setAction('Login')}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}
