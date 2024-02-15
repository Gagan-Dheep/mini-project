import React from 'react'
import {Link} from 'react-router-dom'
import './styles/home.css'
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
        <img src='./images/contact-us-illustration-scaled.png' alt='contact'/>
      </div>

        {/* <form className='form'>
                <div className="sec">
                    <input type="text" required placeholder="name"></input>
                </div>
                <div className="sec">
                    <input type="email"  required placeholder="Email"></input>
                </div>
                <div className="sec">
                    <input type="tel" required max="10" placeholder="Phone no."></input>
                </div>
                <div className="sec">
                    <textarea  rows="2" placeholder="enter text"></textarea>
                </div>
               <button className="submit"  type="submit">SUBMIT</button>
        </form> */}

      </div>
    </div>

    </>
  )
}

export default Home