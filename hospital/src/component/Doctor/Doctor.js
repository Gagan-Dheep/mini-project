
// import React, { useState, useEffect } from "react";
// import { CgProfile } from "react-icons/cg";
// import { FaRegEdit } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { FaAddressBook } from "react-icons/fa";
// import "../Patient/patient.css";
// import DocNav from "./DocNav";

// const Doctor = () => {
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [appointmentOpen, setAppointmentOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [doctors, setDoctors] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [DoctorData, setDoctorData] = useState({
//     name: "",
//     age: "",
//     phoneNumber: "",
//     email: "",
//     specification: "",
//   });

//   // useEffect(() => {
//   // const fetchDoctors = async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:3002/doctors");
//   //     if (!response.ok) {
//   //       throw new Error("Failed to fetch doctors");
//   //     }
//   //     const data = await response.json();
//   //     setDoctors(data);
//   //   } catch (error) {
//   //     console.error("Error fetching doctors:", error);
//   //   }
//   // };
//   // fetchDoctors();
//   // }, []);

//   const fetchAppointments = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "http://localhost:3002/api/appointments/doctors",
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//           credentials: "include",
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch appointments");
//       }
//       const data = await response.json();
//       // console.log(data);
//       setDoctors(data.data);
//       // console.log(appointments);
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDoctorData({
//       ...DoctorData,
//       [name]: value,
//     });
//   };

//   const clearInput = async () => {
//     // e.preventDefault();
//     // console.log("ggan");
//     setDoctorData({
//       name: "",
//       age: "",
//       phoneNumber: "",
//       email: "",
//       specification: ""
//     });
//     // setPatientData.name('');
//     // setPatientData.age('');
//     // setPatientData.phoneNumber('');
//     // setPatientData.email('');
//     // setDoctors.guardian.name('');
//     // setDoctors.guardian.phoneNumber('');
// };

//   const handleSave = async (e) => {
//     // console.log(DoctorData);
//     setEditMode(false);
//     // Code for saving doctor data goes here
//     e.preventDefault();

//     let date = new Date();
//     try {
//       let dname = DoctorData.name;
//       let dage = DoctorData.age;
//       let dphone = DoctorData.phoneNumber;
//       let demail = DoctorData.email;
//       let dspecification = DoctorData.specification;
//       const response = await fetch(
//         "http://localhost:3002/api/doctors/details",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             dname,
//             dage,
//             dphone,
//             demail,
//             dspecification,
//             date,
//           }),
//           credentials: "include",
        
//         })
//        const data = await response.json();

//        if (!response.ok) {
//         alert(data.message)
//       }else{
//         if (response.ok){
//           alert("successFully data has been Updated");
//           // setTimeout(() => navigate('/patient'), 1000);
//           clearInput();
//           setDoctors(data);
//       }}
//     } catch (error) {
//       console.error("Error fetching doctors:", error);
//     }
//   };

//   // const [doctorList, setDoctorList] = useState([
//   //   {
//   //     name: "h",
//   //     email: "abc@gmail.com",
//   //   },
//   //   {
//   //     name: "q",
//   //     email: "aec@gmail.com",
//   //   },
//   // ]);
//   // const [isAppointmentOpen, setIsAppointmentOpen] = useState(true);
//   return (
//     <>
//       <DocNav />
//       {profileOpen && (
//         <div className="pcontainer">
//           <div className="patprofile">
//             <IoMdClose
//               className="close-btn"
//               onClick={() => setProfileOpen(false)}
//             />
//             <label>
//               Doctor Name:
//               {editMode ? (
//                 <input
//                   type="text"
//                   name="name"
//                   value={DoctorData.name}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{DoctorData.name}</span>
//               )}
//             </label>
//             <label>
//               Age:
//               {editMode ? (
//                 <input
//                   type="number"
//                   name="age"
//                   value={DoctorData.age}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{DoctorData.age}</span>
//               )}
//             </label>
//             <label>
//               Phone Number:
//               {editMode ? (
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   value={DoctorData.phoneNumber}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{DoctorData.phoneNumber}</span>
//               )}
//             </label>
//             <label>
//               Email:
//               {editMode ? (
//                 <input
//                   type="email"
//                   name="email"
//                   value={DoctorData.email}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{DoctorData.email}</span>
//               )}
//             </label>
//             <label>
//               Specification:
//               {editMode ? (
//                 <input
//                   type="text"
//                   name="specification"
//                   value={DoctorData.specification}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <span>{DoctorData.specification}</span>
//               )}
//             </label>
//             {editMode ? (
//               <button onClick={(e) => handleSave(e)}>Save</button>
//             ) : (
//               <FaRegEdit
//                 onClick={() => setEditMode(true)}
//                 className="editbtn"
//               />

//               /* <button onClick={() => setEditMode(true)}>Edit</button> */
//             )}
//           </div>
//         </div>
//       )}

//       {/* {appointmentOpen && (
//         <div className="apt_details">
//           <IoMdClose
//             className="close-btn"
//             onClick={() => setAppointmentOpen(false)}
//           />
//           {/* Display appointments */}
//           {/* {doctors.map((appointment, index) => (
//             <div key={index} className="appointment">
//               <label>
//                 Patient Name:
//                 <span>{appointment.username} </span>
//               </label>
//               <label>
//                 Patient Email:
//                 <span>{appointment.email}</span>
//               </label> */}
//               {/* Add more fields if needed */}
//             {/* </div>
//           ))}
//         </div>
//       )} */} 

//       {appointmentOpen && (
//         <div className="apt_details">
//           <IoMdClose
//             className="close-btn"
//             onClick={() => setAppointmentOpen(false)}
//           />
//           {/* Display appointments in a table */}
//           <table>
//             <thead>
//               <tr>
//                 <th>Patient Name</th>
//                 <th>Patient Email</th>
//                 {/* Add more table headers if needed */}
//               </tr>
//             </thead>
//             <tbody>
//               {doctors.map((appointment, index) => (
//                 <tr key={index}>
//                   <td>{appointment.username}</td>
//                   <td>{appointment.email}</td>
//                   {/* Add more table cells if needed */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       <div className="pat_container">
//         <div className="p_profile">
//           <p>
//             <CgProfile />
//           </p>
//           <button className="patientbtn" onClick={() => setProfileOpen(true)}>
//             PROFILE
//           </button>
//         </div>

//         <div className="p_appointment">
//           <p>
//             <FaAddressBook />
//           </p>
//           {/* <button
//             className="patientbtn"
//             onClick={(e) => fetchAppointments(e) && setAppointmentOpen(true)}
//           >
//             Appointments
//           </button> */}

//           <button
//             className="patientbtn"
//             onClick={(e) => fetchAppointments(e) && setAppointmentOpen(true)}
//           >
//             Appointments
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Doctor;

import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";
import "../Patient/patient.css";
import DocNav from "./DocNav";

const Doctor = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([
    {
      username: "John Doe",
      email: "john@example.com",
      appointmentDate: "2023-11-10",
      status: "Pending",
    },
    {
      username: "Jane Smith",
      email: "jane@example.com",
      appointmentDate: "2023-11-11",
      status: "Pending",
    },
    {
      username: "Alice Brown",
      email: "alice@example.com",
      appointmentDate: "2023-11-12",
      status: "Pending",
    },
  ]);
  const [DoctorData, setDoctorData] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    email: "",
    specification: "",
  });
  const [rescheduleDate, setRescheduleDate] = useState("");
  const [rescheduleIndex, setRescheduleIndex] = useState(null);

  const handleReschedule = (index) => {
    setRescheduleIndex(index);
  };

  const handleSaveReschedule = () => {
    if (rescheduleIndex !== null) {
      const updatedAppointments = appointments.map((appointment, index) => {
        if (index === rescheduleIndex) {
          return { ...appointment, appointmentDate: rescheduleDate, status: "Rescheduled" };
        }
        return appointment;
      });
      setAppointments(updatedAppointments);
      setRescheduleDate("");
      setRescheduleIndex(null);
    }
  };

  const handleAccept = (index) => {
    const updatedAppointments = appointments.map((appointment, idx) =>
      idx === index ? { ...appointment, status: "Accepted" } : appointment
    );
    setAppointments(updatedAppointments);
  };

  const handleReject = (index) => {
    const updatedAppointments = appointments.map((appointment, idx) =>
      idx === index ? { ...appointment, status: "Rejected" } : appointment
    );
    setAppointments(updatedAppointments);
  };

  return (
    <>
      <DocNav />
      {profileOpen && (
        <div className="pcontainer">
          <div className="patprofile">
            <IoMdClose className="close-btn" onClick={() => setProfileOpen(false)} />
            <label>
              Doctor Name:
              {editMode ? (
                <input type="text" name="name" value={DoctorData.name} onChange={(e) => setDoctorData({ ...DoctorData, name: e.target.value })} />
              ) : (
                <span>{DoctorData.name}</span>
              )}
            </label>
            <label>
              Age:
              {editMode ? (
                <input type="number" name="age" value={DoctorData.age} onChange={(e) => setDoctorData({ ...DoctorData, age: e.target.value })} />
              ) : (
                <span>{DoctorData.age}</span>
              )}
            </label>
            <label>
              Phone Number:
              {editMode ? (
                <input type="tel" name="phoneNumber" value={DoctorData.phoneNumber} onChange={(e) => setDoctorData({ ...DoctorData, phoneNumber: e.target.value })} />
              ) : (
                <span>{DoctorData.phoneNumber}</span>
              )}
            </label>
            <label>
              Email:
              {editMode ? (
                <input type="email" name="email" value={DoctorData.email} onChange={(e) => setDoctorData({ ...DoctorData, email: e.target.value })} />
              ) : (
                <span>{DoctorData.email}</span>
              )}
            </label>
            <label>
              Specification:
              {editMode ? (
                <input type="text" name="specification" value={DoctorData.specification} onChange={(e) => setDoctorData({ ...DoctorData, specification: e.target.value })} />
              ) : (
                <span>{DoctorData.specification}</span>
              )}
            </label>
            {editMode ? (
              <button onClick={() => setEditMode(false)}>Save</button>
            ) : (
              <FaRegEdit onClick={() => setEditMode(true)} className="editbtn" />
            )}
          </div>
        </div>
      )}

      {appointmentOpen && (
        <div className="apt_details">
          <IoMdClose className="close-btn" onClick={() => setAppointmentOpen(false)} />
          <table>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Patient Email</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.username}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.status}</td>
                  <td>
                    <button onClick={() => handleAccept(index)}>Accept</button>
                    <button onClick={() => handleReject(index)}>Reject</button>
                    <button onClick={() => handleReschedule(index)}>Reschedule</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {rescheduleIndex !== null && (
            <div className="reschedule-popup">
              <label>
                New Date:
                <input
                  type="date"
                  value={rescheduleDate}
                  onChange={(e) => setRescheduleDate(e.target.value)}
                />
              </label>
              <button onClick={handleSaveReschedule}>Save Reschedule</button>
            </div>
          )}
        </div>
      )}
      
      <div className="pat_container">
        <div className="p_profile">
          <p>
            <CgProfile />
          </p>
          <button className="patientbtn" onClick={() => setProfileOpen(true)}>
            PROFILE
          </button>
        </div>
        <div className="p_appointment">
          <p>
            <FaAddressBook />
          </p>
          <button className="patientbtn" onClick={() => setAppointmentOpen(true)}>
            Appointments
          </button>
        </div>
      </div>
    </>
  );
};

export default Doctor;
