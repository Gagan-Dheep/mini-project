import React from 'react'
import './forDoctor.css'
import Avatar from '@mui/material/Avatar';


export default function Doctor() {
  return (
    <>
    <div className='doctor'>
      <div className="container">
        <div className="avatar">
        <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 90, height: 90 }}/>
            <div className="avatar-details">
            <div className="avatar-name">Joyston</div>
            <div className="avatar-name">Specialization</div>
{/* 
            <div className="avatar-name">The Age</div>
            <div className="avatar-name">Years of experience</div>
            <div className="avatar-name">Hospital working in</div> */}
        </div>
        </div>
        <div className="inputs">
            <div className="Personal-details">
                <h2>Personal details</h2>
                {/* <input type="text" name="experience" id="experience" placeholder='Enter years of experience'/> */}
                <div className="usePer">
                <label htmlFor="age">Doctor's Age : </label>
                <input type="number" name="age" id="age" placeholder='Enter your age'/>
                </div>
                <div className="usePer">
                <label htmlFor="address">Doctor's Address: </label>
                <input type="text" name="address" id="address" placeholder='Enter your address'/>
                </div>
                <div className="usePer">
                    <label htmlFor="dealt">Doctor's overall Dealt Patients: </label>
                <input type="number" name="dealth" id="dealth" placeholder='Enter the number of patients you dealt with'/>
                </div>
                <div className="usePer">    
                <label htmlFor="number">Doctor's Number: </label>
                <input type="text" name="Number" id="Number" placeholder='Enter your Number'/>
                </div>
                <div className="usePer">
                <label htmlFor="number">Doctor's Email: </label>
                <input type="text" name="Email" id="Email" placeholder='Enter your Email'/>
                </div>
            </div>
            <br />
            <div className="Hospital-details">
                <h2>Hospital details</h2>
                <div className="usePer">
                    <label htmlFor="hospital">Doctors Hospital: </label>
                <input type="text" name="hospital" id="hospital" placeholder='Enter your Hospital Name'/>
                </div>
                <div className="usePer">
                    <label htmlFor="experience">Doctors Experience: </label>
                    <input type="number" name="experience" id="experience" placeholder='Enter your experience' />
                </div>
                <div className="usePer">
                    <label htmlFor="Something">Doctors Something: </label>
                    <input type="number" name="Something" id="Something" placeholder='Enter your Something' />
                </div>
            </div>
            <br />
            <div className="Patients-details">
                <h2>Patients Details</h2>
                <div className="usePer">
                    <label htmlFor="patient">Patients Details: </label>
                    <span> Rajesh</span>
                    <span> 20 years old</span>
                    <span> Diagnostic Report: Ongoing</span>
                </div>
                <div className="usePer">
                    <label htmlFor="patient">Patients Details: </label>
                    <span> Rajesh</span>
                    <span> 20 years old</span>
                    <span> Diagnostic Report: Recovered</span>
                </div>
                <div className="usePer">
                    <label htmlFor="patient">Patients Details: </label>
                    <span> Rajesh</span>
                    <span> 20 years old</span>
                    <span> Diagnostic Report: Dead</span>
                </div>
                <div className="usePer">
                    <label htmlFor="patient">Patients Details: </label>
                    <span> Rajesh</span>
                    <span> 20 years old</span>
                    <span> Diagnostic Report: Working</span>
                </div>
            </div>
            <br />
        </div>  
        <br />
        <br />
      </div> 
      </div>
    </>
  )
}
