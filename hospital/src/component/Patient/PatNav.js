import React from 'react'
// import '../styles/nav.css'
// import {BsBagCheck} from 'react-icons/bs';
import {Link} from 'react-router-dom'
const PatNav = () => {
    const Logout = async () => {
    const response = await fetch(`http://localhost:3002/api/logout`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({
                //     email,
                //     password,
                //     username, 
                //     userType
                // }),
                credentials: 'include'
            });
        }
  return (
    <>
    <div className='main-header'>
        <div className='container'>
            <div className='logo'>
                <img src='./images/logo.png' alt='logo' ></img>
                <p className='logo-header'>HEAL EAZY</p>
            </div>

            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/pathome' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/patient' className='link'>Patient</Link>
                            </li>
                            <li>
                                <button onClick={() => Logout()} className='logoutbtn'>logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>       
        </div>
    </div>
    </>
  )
}

export default PatNav