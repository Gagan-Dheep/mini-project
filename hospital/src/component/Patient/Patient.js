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


import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./patient.css";

const Patient = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
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

  const doctors = [
    {
      name: "Dr. John Doe",
      specification: "Cardiologist",
      timing: "9:00 AM - 5:00 PM",
    },
    {
      name: "Dr. Jane Smith",
      specification: "Dermatologist",
      timing: "10:00 AM - 6:00 PM",
    },
  ];

  return (
    <>
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
              <button onClick={handleSave} className="sbtn">
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
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor">
              <label>
                Doctor Name:
                <span>{doctor.name}</span>
              </label>
              <label>
                Specification:
                <span>{doctor.specification}</span>
              </label>
              <label>
                Timing:
                <span>{doctor.timing}</span>
              </label>
              <button className="appointment-btn" onClick={() => console.log("Appointment button clicked")}>
                Make Appointment
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="p_profile">
        <p>
          <CgProfile />
        </p>
        <button onClick={() => setProfileOpen(true)}>PROFILE</button>
      </div>

      <div className="p_appointment">
        <p>appointment</p>
        <button onClick={() => setAppointmentOpen(true)}>appointment</button>
      </div>
    </>
  );
};

export default Patient;


