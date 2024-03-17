const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.get('/', verifyToken, (req, res) => {
    // return res.send("hhhhh");
    const role = "doctor";
    connection.query('SELECT * FROM login where role = ?', [role], (err, result) => {
      if (err) { 
        throw err;
      }
      else{
        return res.json({data: result});
      }
    })
  })

  module.exports = router;