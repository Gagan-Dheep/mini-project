import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dochome.css";
import DocNav from "./DocNav";
import Footer from "../Footer";
const DocHome = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   try {
  //     const response = fetch('http://localhost:3002', {

  //       headers: { 'Content-Type': 'application/json' }
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //     })

  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // })

  const clearInput = async (e) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
  };

  const handleContactUs = async (e) => {
    e.preventDefault();
    try {
      console.log(name, email, message);
      const response = await fetch("http://localhost:3002/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        credentials: "include",
      });

      if (response.ok) {
      } else if (response.ok) {
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error during signup/login:", error);
      setErrorMessage("An error occurred, please try again.");
    }
  };
  return (
    <>
      <DocNav />
      <div className="home">
        <div className="container">
          <div className="content">
            <h3>
              Our solution simplifies hospital operations <br></br> and enhances
              patient care.
            </h3>
            <p>
              Our intuitive software streamlines patient management, appointment
              scheduling, medical records, billing, inventory, and reporting.
              With robust security and compliance features, we ensure the
              confidentiality of patient data.
            </p>
            <div className="button">
              <Link to="/product" className="Shop-link">
                EXPLORE NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <h2 className="heading">ABOUT HEAL EAZY</h2>
        <div className="container">
          <div className="image">
            <img src='https://thumbnails.yayimages.com/1600/1/7f7/17f724e.jpg' height="400"></img>
          </div>
          <div className="content">
            <p>
              Welcome to heal eazy, where we revolutionize healthcare management
              with our innovative system. Our streamlined operations empower
              providers to focus on exceptional patient care. Backed by
              expertise and driven by passion, we continuously enhance our
              system to meet the evolving needs of modern healthcare. Join us in
              revolutionizing healthcare management for better patient outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="contact">
        <h2 className="heading">Contact Us</h2>
        <div className="container">
          <div className="image">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-doctorsdoctorsdoctors-and-nursesa-qualified-practitioner-of-medicine-aclinicianmedical-practitionermale-doctornotepad-1421526856940m4nhi.png"
              alt="contact"
            />
          </div>

          <div class="contact-form">
            <form method="post">
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  onClick={(e) => handleContactUs(e) && clearInput(e)}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DocHome;
