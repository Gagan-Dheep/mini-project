const express = require('express');
const router = express.Router();
const connection = require('../server')
const verifyToken = require('../middleware/verifytoken')


router.post('/', verifyToken, (req, res) => {

})

module.exports = router;