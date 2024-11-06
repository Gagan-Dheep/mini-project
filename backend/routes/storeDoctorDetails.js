const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.post('/', verifyToken,  (req, res) => {
    // console.log(req.body);
    const date = new Date();
    const {dname, dage, dphone, demail, dspecification} = req.body;
    if (!dname || !dage || !dphone || !demail || !dspecification) {
      // console.log("inside if");
      return res.status(500).json({error: "message", message:"The input field cannot be empty"});
    }
    else{
      connection.query('INSERT INTO doctordetails (name, age, phone, email, specification, date) VALUES (?, ?, ?, ?, ?, ?)', [dname, dage, dphone, demail, dspecification, date], async(error, result) => {
        // console.log("inside query");
        if (error) {
          throw error; 
        }
        else{
          return res.status(200).json({ status: "success", success: "Data udated successfully" });
        }
      })
    }
  }) 

  module.exports = router;