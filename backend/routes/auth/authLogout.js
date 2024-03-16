const express = require('express');
const router = express.Router();
const verifyToken = require('../../middleware/verifytoken')

router.post('/', verifyToken, (req, res) => {
    res.cookie('refreshToken', '', { expires: new Date(0) });
    return  res.status(200).json({message: "logout succes"});
  })

  module.exports = router;