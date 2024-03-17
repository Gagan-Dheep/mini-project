const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.get('/', verifyToken, (req, res) => {
    // console.log("yeah doc");
    connection.query('SELECT docname, docspecialization FROM adminaddeddoctors', (err, result) => {
        // console.log("yeah doc");
        if(err) throw err;
        // console.log("yeah doc");
        // console.log(result);
        return res.json({doctors:result});
    })
}) 

module.exports = router; 