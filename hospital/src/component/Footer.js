import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
const Footer = () => {
  return (
   <>
      <div className='footer'>
        <div className='container'>
          <div className='box'>
            <h3 className='foottext'>About us</h3>
            <p className='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eaque aperiam adipisci nesciun</p>
          </div>

          <div className='box'>
            <h3 className='foottext'>quick link</h3>
            <Link to='/' className='link'>Home</Link>
            <Link to='/admin' className='link'>Admin</Link>
            <Link to='/doctor' className='link'>Doctor</Link>
            <Link to='/patient' className='link'>Patient</Link>
            <Link to='/register' className='link'>Sign-In/Up</Link>
          </div>

          <div className='box'>
          <h3 className='foottext'>Follow us on</h3>
                <a href="#" className='text1'>Facebook</a>
                <a href="#" className='text1'>Instagram</a>
                <a href="#" className='text1'>Twitter</a>
                <a href="#" className='text1'>LinkedIn</a>
          </div>

        <div className='box'>
          <h3 className='foottext'>contact info</h3>
          <p className='text1'>Phone no. : 765-213-1234</p>
          <p className='text1'>Email : test1@gamail.com</p>
        </div>
        
        </div>
        <h1 className="copyright">
            &copy; copyright @ 2024|HEAL EAZY
        </h1>
      </div>
   </>
  )
}

export default Footer