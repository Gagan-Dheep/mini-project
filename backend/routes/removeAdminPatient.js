const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.post('/', verifyToken, (req, res) => {
    console.log(req.body);
    const tempname = req.body.name;

    connection.query('DELETE FROM adminaddedpatients WHERE patname = ?', [tempname], (err, result) => {
        if (err) {
            throw err;
        }
        else{
            return res.json({success: "successful"})
        }
    })
})

module.exports = router