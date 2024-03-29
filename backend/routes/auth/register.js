const express = require('express');
const router = express.Router();
const connection = require('../../server')

router.post('/', (req, res) => { 
    // console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.userType;
    const date = new Date();
    if (!username || !email || !password) {
      return res.status(500).json({error: "message", message:"The input field cannot be empty"});
    }
    else{ 
      connection.query('SELECT * FROM login WHERE username = ? OR email = ?', [username, email], async (err, result) => {
        if (err) {
            throw err; 
        }
        if (result[0])
        return res.status(500).json({ status: "error", error: "Username or email already present" })
      else{
      connection.query('INSERT INTO login (username, email, password, role, date) VALUES (?, ?, ?, ?, ?)', [username, email, password, role, date], async(error, result) => {
        if (error) 
          throw error;
        
      
        else{
          return res.status(200).json({ status: "success", success: "Username have successfully signed up" });
        }
      })
    }
      })
    
    }
  })

  module.exports = router;