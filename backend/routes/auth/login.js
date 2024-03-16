const connection = require('../../server')
const jwt = require('jsonwebtoken')  
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.userType;
    // console.log(role);
    if (!email || !password) {
      return res.status(500);
    }
    else{
    connection.query('SELECT * FROM login WHERE email = ?', [email], async(error, result) => {
      if (error) throw error;
      // console.log(result[0]);
      if (result.length > 0) {
        const user = result[0];
   
        if (password === user.password) {
          // connection.query('SELECT * FROM login WHERE email = ?', [email], async(err, resu) => {
            // const userRole = resu[0];
            // console.log(userRole[0]);
            // console.log(role);
            // if (userRole.role === role){ 
              // req.session.username = resu[0].username;
              // console.log(req.session.username);
              jwt.sign({Useremail: email}, 'gagan', (error, token) => {
                if (!error) { 
                  res.cookie("refreshToken",token,{
                    httpOnly:true,
                    maxAge:24*60*60*1000,
                    // secure:true
                    // sameSite:'None'
                })
                  return res.send({token: token, message: "login successful"});
                  // console.log(token);
                }
  
                else{
                  res.send({message: "some  error occured in signing in"});
                  // console.log("server issue happened");
                }
              })
              // return res.status(200).json({ login: true});}
            // else{
            //   return res.status(500).json({ status: "error", error: "Wrong credentials" })
            // }
          // })
          
        }}  
        else{
          return res.status(500).json({ status: "error", error: "Wrong email or password"});
        }
    })
  }
  }) 

  module.exports = router;