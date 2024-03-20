const verifyToken = require('../middleware/verifytoken')
const connection = require('../server')
const express = require('express');
const router = express.Router();

router.post('/', verifyToken, (req, res) => {
    const {pname, page, pphone, pemail, pguardianName, pguardianNumber} = req.body;
    // console.log(req.body);
    if (!pname || !page || !pphone || !pemail || !pguardianName || !pguardianNumber) {
      return res.status(500).json({error: "message", message:"The input field cannot be empty"});
    }
    else{
      // console.log("yeah");
      connection.query('INSERT INTO patientdetails (name, age, phone, email, guardian_name, g_phone) VALUES (?, ?, ?, ?, ?, ?)', [pname, page, pphone, pemail, pguardianName, pguardianNumber], async(error, result) => {
        // console.log("yeah");
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