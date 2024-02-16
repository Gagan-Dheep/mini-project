import React from 'react'
import {Link} from 'react-router-dom'
import './styles/home.css'
import Footer from './component/Footer'
const Home = () => {
  return (
    <>
   <div className='home'>
      <div className='container'>
        <div className='content'>
            <h3>Our solution simplifies hospital operations <br></br>  and enhances patient care.</h3>
            <p>Our intuitive software streamlines patient management, appointment scheduling, medical records, billing, inventory, and reporting. With robust security and compliance features, we ensure the confidentiality of patient data.</p>
            <div className='button'>
              <Link to='/product' className='Shop-link'>EXPLORE NOW</Link>
            </div>
        </div>

      </div>
   </div>

   <div className='about'>
   <h2 className='heading'>ABOUT HEAL EAZY</h2>
    <div className='container'>
        <div className='image'>
            <img src='https://www.iselectmd.com/wp-content/uploads/2018/10/healthcare-system-graphic.png' alt='watch'></img>
        </div>
        <div className='content'>
          <p>Welcome to heal eazy, where we revolutionize healthcare management with our innovative system. Our streamlined operations empower providers to focus on exceptional patient care. Backed by expertise and driven by passion, we continuously enhance our system to meet the evolving needs of modern healthcare. Join us in revolutionizing healthcare management for better patient outcomes.</p>
        </div>
    </div>
   </div>

   
   <div className='contact'>
   <h2 className='heading'>Contact Us</h2>
    <div className='container'>
      <div className='image'>
        <img src='https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856940m4nhi.png' alt='contact'/>
      </div>

      <div class='contact-form'>
          <form action='#' method='post'>
            <div class='form-group'>
              <label for='name'>Name:</label>
              <input type='text' id='name' name='name' required></input>
            </div>
            <div class='form-group'>
              <label for='email'>Email:</label>
              <input type='email' id='email' name='email' required></input>
            </div>
            <div class='form-group'>
              <label for='message'>Message:</label>
              <textarea id='message' name='message' rows='4' required></textarea>
            </div>
            <div class='form-group'>
              <button type='submit'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>

<Footer/>
    </>
  )
}

export default Home