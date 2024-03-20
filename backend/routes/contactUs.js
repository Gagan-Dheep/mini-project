const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.post('/', verifyToken, async(req, res) => {
    const {name, email, message} = req.body;
    // console.log(req.body)
    if (!email || !name || !message) {
      // console.log("uu");
      return res.status(500).json({error: "message", message:"The input field cannot be empty"});
    }
    else{
      connection.query('INSERT INTO contactus (name, email, message) VALUES (?, ?, ?)', [name, email, message], async(error, result) => {
        if (error) throw error;
        else{
          return res.status(200).json({ status: "success", success: "User logged in successfully"});
        }
      })
    }
  })

  module.exports = router;