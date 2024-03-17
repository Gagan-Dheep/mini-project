const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')

router.get('/', verifyToken, (req, res) => {
    connection.query('SELECT patname FROM adminaddedpatients', (err, result) => {
        if(err) throw err;
        // console.log(result);
        return  res.json({patients:result});
    })
})

module.exports = router;