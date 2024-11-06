const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.post('/', verifyToken, (req, res) => {
    console.log("something");
    const patname = req.body.newPatientName;
    // const date = req.body.date;
    let date = new Date()
    // console.log(req.body);
    if (!patname) {
        throw new Error("cannot be empty");
    }
    connection.query('INSERT INTO adminaddedpatients (patname, date) VALUES(?, ?)', [patname, date], (err, result) => {
        if (err) throw err;
        return res.json({success: "insertion successfull"})
    })
})

module.exports = router;