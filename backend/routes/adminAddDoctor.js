const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')


router.post('/', verifyToken, (req, res) => {
    const docname = req.body.newDoctorName;
    const docspecialization = req.body.newDoctorSpecialization;
    // const date = req.body.date;
    let date = new Date()

    // console.log(req.body);
    if (!docname || !docspecialization) {
        throw new Error("cannot be empty");
    }
    connection.query('INSERT INTO adminaddeddoctors (docname, docspecialization, date) VALUES(?, ?, ?)', [docname, docspecialization, date], (err, result) => {
        if (err) throw err;
        return res.json({success: "insertion successfull"})
    })
})

module.exports = router;