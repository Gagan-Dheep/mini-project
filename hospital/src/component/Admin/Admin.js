import React, { useEffect, useState } from "react";
import "./admin.css";
import AdmNav from "./AdmNav";
const Admin = () => {
  const [patients, setPatients] = useState([
    // "John Doe",
    // "Jane Smith",
    // "Michael Johnson",
  ]);
  const [doctors, setDoctors] = useState([
    // { name: "Dr. Smith", specialization: "Cardiologist" },
    // { name: "Dr. Johnson", specialization: "Pediatrician" },
    // { name: "Dr. Brown", specialization: "Orthopedic Surgeon" },
  ]);
  const [newPatientName, setNewPatientName] = useState("");
  const [newDoctorName, setNewDoctorName] = useState("");
  const [newDoctorSpecialization, setNewDoctorSpecialization] = useState("");

  useEffect(() => {
      const fetchPatientsData = async() => {
      try{
        const response1 = await fetch('http://localhost:3002/api/get-all-patients', {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })
        if (!response1.ok) {
          throw new Error("some error");
        }
        const patdata = await response1.json();
        console.log(patdata.patients);
        setPatients(patdata.patients)
      }
      catch(err) {
        console.log(err);
        throw err;
      }
    }
    const fetchDoctorData = async () => {
      try{
        const response2 = await fetch('http://localhost:3002/api/get-all-doctors', {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include'
        })
        if (!response2.ok) {
          throw new Error("some error");
        }
        const docdata = await response2.json();
        console.log(docdata.doctors);
        setDoctors(docdata.doctors)
      }
      catch(err) {
        console.log(err);
        throw err;
      }
    }
    fetchPatientsData();
    fetchDoctorData();
  }, [])

  const backendRemoveDoctor = async() => {
    try {
      const response = await fetch('http://localhost:3002/api/remove/doctor', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
    }
    catch(err) {
      throw err;
    }
  }

  const backendPatientAdd = async () => {
    if (newPatientName.trim() === "") {
      alert("Please enter a patient name.");
      return;
    }
    else{
      try{
        let date = new Date();
        const response = await fetch('http://localhost:3002/api/add/patients', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({newPatientName, date}),
          credentials: 'include'
        })
        if (response.ok){
          console.log("its working");
        }
      }
      catch(err) {
        console.log(err);
        throw new err;
      }
    }
  }

  const backendDoctorAdd = async () => {
    if (newDoctorName.trim() === "") {
      alert("Please enter a doctors name.");
      return;
    }
    else{
      try{
        let date = new Date();
        const response = await fetch('http://localhost:3002/api/add/doctors', {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({newDoctorName, newDoctorSpecialization, date}),
          credentials: 'include'
        })
        if (response.ok){
          console.log("its working");
        }
      }
      catch(err) {
        console.log(err);
        throw new err;
      }
    }
  }


  const addPatient = (name) => {
    if (name.trim() === "") {
      alert("Please enter a patient name.");
      return;
    }
    setPatients([...patients, name]);
    setNewPatientName("");
  };

  const removePatient = (index) => {
    const newPatients = [...patients];
    newPatients.splice(index, 1);
    setPatients(newPatients);
  };

  const addDoctor = () => {
    if (newDoctorName.trim() === "" || newDoctorSpecialization.trim() === "") {
      alert("Please enter both doctor name and specialization.");
      return;
    }
    const newDoctor = {
      name: newDoctorName,
      specialization: newDoctorSpecialization,
    };
    setDoctors([...doctors, newDoctor]);
    setNewDoctorName("");
    setNewDoctorSpecialization("");
  };

  const removeDoctor = (index) => {
    const newDoctors = [...doctors];
    newDoctors.splice(index, 1);
    setDoctors(newDoctors);
  };

  return (
    <>
    <AdmNav/>

    <div className="admin-panel">
      <div className="patients">
        <h2>Patients</h2>
        <input
          type="text"
          placeholder="Enter patient name"
          value={newPatientName}
          onChange={(e) => setNewPatientName(e.target.value)}
        />
        <button className="adminbtn" onClick={() => backendPatientAdd() && addPatient(newPatientName)}>Add Patient</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.patname}</td>
                <td>
                  <button className="adminrem" onClick={() => removePatient(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="doctors">
        <h2>Doctors</h2>
        <div>
          <input
            type="text"
            placeholder="Enter doctor name"
            value={newDoctorName}
            onChange={(e) => setNewDoctorName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter doctor specialization"
            value={newDoctorSpecialization}
            onChange={(e) => setNewDoctorSpecialization(e.target.value)}
          />
          <button className="adminbtn" onClick={() => backendDoctorAdd() && addDoctor}>Add Doctor</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.docname}</td>
                <td>{doctor.docspecialization}</td>
                <td>
                  <button className="adminrem" onClick={() => removeDoctor(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Admin;
