import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Home from "./Home";
// import Nav from "./component/Nav";
import Signup from "./component/Signup";
import Admin from './component/Admin/Admin'
import Doctor from "./component/Doctor/Doctor";
import Patient from "./component/Patient/Patient";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
    
  //   const token = localStorage.getItem('refreshToken');
  //   console.log(token, "wo");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
 
  return (
    <>
      <BrowserRouter>
      {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/admin" element={<Admin/>}></Route>
            <Route path="/doctor" element={<Doctor/>}></Route>
            <Route path="/patient" element={<Patient/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
