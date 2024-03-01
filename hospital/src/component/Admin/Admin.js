import React, { useState } from "react";
import "./admin.css";

const Admin = () => {
  const [patients, setPatients] = useState([
    "John Doe",
    "Jane Smith",
    "Michael Johnson",
  ]);
  const [doctors, setDoctors] = useState([
    { name: "Dr. Smith", specialization: "Cardiologist" },
    { name: "Dr. Johnson", specialization: "Pediatrician" },
    { name: "Dr. Brown", specialization: "Orthopedic Surgeon" },
  ]);
  const [newPatientName, setNewPatientName] = useState("");
  const [newDoctorName, setNewDoctorName] = useState("");
  const [newDoctorSpecialization, setNewDoctorSpecialization] = useState("");

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
    <div className="admin-panel">
      <div className="patients">
        <h2>Patients</h2>
        <input
          type="text"
          placeholder="Enter patient name"
          value={newPatientName}
          onChange={(e) => setNewPatientName(e.target.value)}
        />
        <button onClick={() => addPatient(newPatientName)}>Add Patient</button>
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
                <td>{patient}</td>
                <td>
                  <button onClick={() => removePatient(index)}>Remove</button>
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
          <button onClick={addDoctor}>Add Doctor</button>
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
                <td>{doctor.name}</td>
                <td>{doctor.specialization}</td>
                <td>
                  <button onClick={() => removeDoctor(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
