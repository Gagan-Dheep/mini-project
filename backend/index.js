const express = require('express');
const storePatientGuardian = require('./routes/storePatientGuardian')
const authLogin = require('./routes/auth/login')
const authRegister = require('./routes/auth/register')
const displayDoctorsInPatient = require('./routes/displayDoctorInPatients')
const storeDoctorDetails = require('./routes/storeDoctorDetails')
const displayAppointments = require('./routes/displayAppointments')
const adminAddPatient = require('./routes/adminAddPatient')
const adminAddDoctor = require('./routes/adminAddDoctor')
const displayAdminDoctors = require('./routes/displayAdminDoctor')
const displayAdminPatients = require('./routes/displayAdminPatient')
const roommoallotment = require('./routes/roomnoallotment')
const removeDoctor = require('./routes/removeDoctor')
const removePatient = require('./routes/removePatient')
const contactUs = require('./routes/contactUs')
const authLogout = require('./routes/auth/authLogout')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express(); 
const port = 3002;

app.use(cors({
  origin:"http://localhost:3000",
  credentials:true, 
}))
app.use(express.json());
app.use(cookieParser("gagan", { httpOnly: true, signed: true }));
app.use(bodyParser.json())
  
app.use('/api/login', authLogin)
app.use('/api/signup', authRegister)
app.use('/api/patient/guardian', storePatientGuardian)
app.use('/api/contactus', contactUs)
app.use('/patient/details', displayDoctorsInPatient)
app.use('/api/appointments/doctors', displayAppointments)
app.use('/api/doctors/details', storeDoctorDetails)
app.use('/api/add/patients', adminAddPatient)
app.use('/api/add/doctors', adminAddDoctor)
app.use('/api/get-all-doctors', displayAdminDoctors)
app.use('/api/get-all-patients', displayAdminPatients)
// app.use('/api/roomallot', roommoallotment)
app.use('/api/remove/doctor', removeDoctor)
app.use('/api/remove/patient', removePatient)
app.use('/api/logout', authLogout)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})