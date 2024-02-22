import React from 'react'
import '../styles/nav.css'
// import {BsBagCheck} from 'react-icons/bs';
import {Link} from 'react-router-dom'
const Nav = () => {
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
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/admin' className='link'>Admin</Link>
                            </li>
                            <li>
                                <Link to='/doctor' className='link'>Doctor</Link>
                            </li>
                            <li>
                                <Link to='/patient' className='link'>Patient</Link>
                            </li>
                            <li>
                                <Link to='/register' className='link'>Sign-In/Up</Link>
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

export default Nav