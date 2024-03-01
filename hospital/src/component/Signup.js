import React, { useState } from 'react';
import '../styles/Signup.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [userType, setUserType] = useState('patient'); 
    const [errorMessage, setErrorMessage] = useState('');
    const [value, setValue] = useState('');

    let navigate = useNavigate();
    const [action, setAction] = useState('signup');

    const clearInput = async (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setUsername('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3002/api/${action}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password,
                    username, 
                    userType
                }),
            });

            if (response.ok && action === 'signup') {
                // Handle successful signup/login (e.g., redirect, set authentication state)
                // console.log('User signed up/logged in successfully!');
                // setTimeout(() => navigate('/signup'), 1000);
                setAction('login'); 
            } else if (response.ok && action === 'login') {
                // Handle successful signup/login (e.g., redirect, set authentication state)
                // console.log('User signed up/logged in successfully!');
                // setTimeout(() => navigate('/'), 1000);
                // setAction('login')
                sessionStorage.setItem('userEmail',email)
                sessionStorage.setItem('userType',userType)

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
        <div className="signup-container">
            <div className="header">
                <div className="text">{action === 'signup' ? 'Sign Up' : 'Login'}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'signup' && (
                    <div className="input">
                        <FaRegUserCircle />
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                )}
                <div className="input">
                    <MdEmail />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <RiLockPasswordFill />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="select">
                <label for='role'>Role :</label>
                    <select value={userType} id='role' onChange={(e) => setUserType(e.target.value)}>
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <div className="submit-container">
                    <div className={action === 'signup' ? 'submit' : 'submit gray'} onClick={(e) => action === 'signup' ? handleSubmit(e) && clearInput(e) : setAction('signup') && clearInput(e)}>Signup</div>
                    <div className={action === 'login' ? 'submit' : 'submit gray'} onClick={(e) => action === 'login' ? handleSubmit(e) && clearInput(e) : setAction('login') && clearInput(e)}>Login</div>
                </div>
            </div>
        </div>
    );
}
