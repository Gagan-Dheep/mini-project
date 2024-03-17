const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.post('/', (req, res) => {
    const patientname = req.body.patname;
    // console.log(patientname);
    if (!patientname) throw new Error("No Patient Name Provided");
    else {
        connection.query('UPDATE roomallotment set patientname = ? and occupiedstatus = ? where occupiedstatus = ?', [patientname, '1', '0'], (err, result) => {
            // console.log(result);
            if (err) { 
                console.log("error while executing");
                throw err; 
            } 
            return res.json({success: "succesfull"}) 
        })
    }
})

module.exports = router;