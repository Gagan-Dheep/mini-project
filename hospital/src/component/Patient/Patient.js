// import React, { useState } from "react";
// import { CgProfile } from "react-icons/cg";
// import { FaRegEdit } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import "./patient.css";
// const Patient = () => {
//   const [close, setClose] = useState(false);
//   const view = () => {
//     setClose(true);
//   };
//   const [editMode, setEditMode] = useState(false);
//   const [patientData, setPatientData] = useState({
//     name: "",
//     age: "",
//     phoneNumber: "",
//     email: "",
//     guardian: {
//     name: "",
//       phoneNumber: "",
//     },
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPatientData({
//       ...patientData,
//       [name]: value,
//     });
//   };

//   const handleGuardianChange = (e) => {
//     const { name, value } = e.target;
//     setPatientData({
//       ...patientData,
//       guardian: {
//         ...patientData.guardian,
//         [name]: value,
//       },
//     });
//   };

//   const handleEdit = () => {
//     setEditMode(true);
//   };

//   const handleSave = () => {
//     console.log(patientData);
//     setEditMode(false);
//     setPatientData({
//       name: "",
//       age: "",
//       phoneNumber: "",
//       email: "",
//       guardian: {
//         name: "",
//         phoneNumber: "",
//       },
//     });
//   };

//   const doctors = [
//     {
//       name: "Dr. John Doe",
//       specification: "Cardiologist",
//       timing: "9:00 AM - 5:00 PM",
//     },
//     {
//       name: "Dr. Jane Smith",
//       specification: "Dermatologist",
//       timing: "10:00 AM - 6:00 PM",
//     },
//   ];
//   return (
//     <>
//       {close ? (
//         <div className="pcontainer">
//         <div className="patprofile">
//           {/* <button className="close-btn" onClick={() => setClose(false)}>Close</button> */}
//           <IoMdClose className="close-btn" onClick={() => setClose(false)}/> 
//           <label>
//             Patient Name:
//             {editMode ? (
//               <input type="text" name="name" value={patientData.name} onChange={handleChange}
//               />
//             ) : (
//               <span>{patientData.name}</span>
//             )}
//           </label>
//           <label>
//             Age:
//             {editMode ? (
//               <input type="number" name="age" value={patientData.age} onChange={handleChange}
//               />
//             ) : (
//               <span>{patientData.age}</span>
//             )}
//           </label>
//           <label>
//             Phone Number:
//             {editMode ? (
//               <input type="tel" name="phoneNumber" value={patientData.phoneNumber} onChange={handleChange}
//               />
//             ) : (
//               <span>{patientData.phoneNumber}</span>
//             )}
//           </label>
//           <label>
//             Email:
//             {editMode ? (
//               <input type="email" name="email" value={patientData.email} onChange={handleChange}
//               />
//             ) : (
//               <span>{patientData.email}</span>
//             )}
//           </label>
//           <label>
//             Guardian Name:
//             {editMode ? (
//               <input type="text" name="name" value={patientData.guardian.name} onChange={handleGuardianChange}
//               />
//             ) : (
//               <span>{patientData.guardian.name}</span>
//             )}
//           </label>
//           <label>
//             Guardian Phone Number:
//             {editMode ? (
//               <input type="tel" name="phoneNumber" value={patientData.guardian.phoneNumber} onChange={handleGuardianChange}
//               />
//             ) : (
//               <span>{patientData.guardian.phoneNumber}</span>
//             )}
//           </label>
//           {editMode ? (
//             <button onClick={handleSave} className="sbtn">Save</button>
//           ) : (
//             <FaRegEdit onClick={handleEdit} className="editbtn"/>
//           )}
//         </div>
//         </div>
//       ) : null}

//       {close ? (
//   <div className="apt_details">
//   <IoMdClose className="close-btn" onClick={() => setClose(false)}/> 
//     {doctors.map((doctor, index) => (
//       <div key={index} className="doctor">
//         <label>
//           Doctor Name:
//           <span>{doctor.name}</span>
//         </label>
//         <label>
//           Specification:
//           <span>{doctor.specification}</span>
//         </label>
//         <label>
//           Timing:
//           <span>{doctor.timing}</span>
//         </label>
//         <button className="appointment-btn" onClick={() => console.log("Appointment button clicked")}>
//           Make Appointment
//         </button>
//       </div>
//     ))}
//   </div>
// ) : null}

  
//       <div className="p_profile">
//         <p>
//           <CgProfile />
//         </p>
//         <button onClick={() => view()} >PROFILE</button>
//       </div>

//       <div className="p_appointment">
//       <p>
//           appointment
//         </p>
//         <button onClick={() => view()} >appointment</button>
//       </div>
//     </>
//   );
// };

// export default Patient;


import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import "./patient.css";
import PatNav from './PatNav'

const Patient = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    email: "",
    guardian: {
      name: "",
      phoneNumber: "",
    },
  });
   
  // useEffect(()=> {
     const DoctorDetails = async(e) => {
      // console.log("DoctorDetai");
      e.preventDefault();
    try{
      const response = await fetch('http://localhost:3002/patient/details', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
      
      if (!response.ok) {
        throw new Error("some error");
      }
      const data = await response.json();
      // console.log(data.data[0].username);
      setDoctors(data.data);
      // console.log(doctors);
      // console.log(doctors);
    //   .then((response) => {
    //     console.log(response.data);
    // })
    }
    catch(err) {
      console.log(err);
      throw err;
    }
  }
  // DoctorDetails();
  // }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  const handleGuardianChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      guardian: {
        ...patientData.guardian,
        [name]: value,
      },
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    console.log(patientData);
    setEditMode(false);
    setPatientData({
      name: "",
      age: "",
      phoneNumber: "",
      email: "",
      guardian: {
        name: "",
        phoneNumber: "",
      },
    });
  };

  // const DoctorDetails = async(e) => {
  //   try{
  //     const response = await fetch('http://localhost:3000/patient', {
  //       method: 'get',
  //       headers: { 'Content-Type': 'application/json' },
  //       credentials: 'include'
  //     })
  //     .then(data => {
  //       console.log(data, "aniur");
  //     })
  //   }
  //   catch(err) {
  //     console.log(err);
  //     throw err;
  //   }
  // }

  const handleSaveBackend = async(e) => {
    console.log("yeh");
    e.preventDefault();
    let pname = patientData.name;
    let page = patientData.age;
    let pphone = patientData.phoneNumber;
    let pemail = patientData.email;
    let pguardianName = patientData.guardian.name;
    let pguardianNumber = patientData.guardian.phoneNumber;

        try {
            const response = await fetch(`http://localhost:3002/api/patient/guardian`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pname,
                    page,
                    pphone,
                    pemail,
                    pguardianName,
                    pguardianNumber
                }),
                credentials: 'include'
            });

            if (response.ok){

            }
            else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }
        } catch (error) {
            console.error('Error during signup/login:', error);
            setErrorMessage('An error occurred, please try again.');
        }
  }

  // const doctors = [
  //   {
  //     name: "Dr. John Doe",
  //     specification: "Cardiologist",
  //     timing: "9:00 AM - 5:00 PM",
  //   },
  //   {
  //     name: "Dr. Jane Smith",
  //     specification: "Dermatologist",
  //     timing: "10:00 AM - 6:00 PM",
  //   },
  // ];

  return (
    <>
    <PatNav/>
      {profileOpen && (
        <div className="pcontainer">
          <div className="patprofile">
            <IoMdClose className="close-btn" onClick={() => setProfileOpen(false)} />
            <label>
              Patient Name:
              {editMode ? (
                <input type="text" name="name" value={patientData.name} onChange={handleChange} />
              ) : (
                <span>{patientData.name}</span>
              )}
            </label>
            <label>
              Age:
              {editMode ? (
                <input type="number" name="age" value={patientData.age} onChange={handleChange} />
              ) : (
                <span>{patientData.age}</span>
              )}
            </label>
            <label>
              Phone Number:
              {editMode ? (
                <input type="tel" name="phoneNumber" value={patientData.phoneNumber} onChange={handleChange} />
              ) : (
                <span>{patientData.phoneNumber}</span>
              )}
            </label>
            <label>
              Email:
              {editMode ? (
                <input type="email" name="email" value={patientData.email} onChange={handleChange} />
              ) : (
                <span>{patientData.email}</span>
              )}
            </label>
            <label>
              Guardian Name:
              {editMode ? (
                <input type="text" name="name" value={patientData.guardian.name} onChange={handleGuardianChange} />
              ) : (
                <span>{patientData.guardian.name}</span>
              )}
            </label>
            <label>
              Guardian Phone Number:
              {editMode ? (
                <input
                  type="tel"
                  name="phoneNumber"
                  value={patientData.guardian.phoneNumber}
                  onChange={handleGuardianChange}
                />
              ) : (
                <span>{patientData.guardian.phoneNumber}</span>
              )}
            </label>
            {editMode ? (
              <button onClick={handleSave && handleSaveBackend} className="sbtn">
                Save
              </button>
            ) : (
              <FaRegEdit onClick={handleEdit} className="editbtn" />
            )}
          </div>
        </div>
      )}

      {appointmentOpen && (
        <div className="apt_details">
          <IoMdClose className="close-btn" onClick={() => setAppointmentOpen(false)} />
          {/* {console.log(doctors)} */}
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor">
              <label>
                Doctor Name:
                <span>{doctor.slno}</span>
              </label>
              <label>
                Specification:
                <span>{doctor.username}</span>
              </label>
              <label>
                Timing:
                <span>{doctor.email}</span>
              </label>
              <button className="appointment-btn" onClick={() => console.log("Appointment button clicked")}>
                Make Appointment
              </button>
            </div>
          ))}
        </div>
      )}
<div className="pat_container">
<div className="p_profile">
        <p>
          <CgProfile />
        </p>
        <button className="patientbtn" onClick={() => setProfileOpen(true)}>PROFILE</button>
      </div>

      <div className="p_appointment">
       <p><FaAddressBook /></p>
      
        <button  className="patientbtn" onClick={(e) => DoctorDetails(e) && setAppointmentOpen(true)}>appointment</button>
      </div>
</div>
      
    </>
  );
};

export default Patient;


