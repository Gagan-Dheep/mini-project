const jwt = require('jsonwebtoken')  

function verifyToken(req, res, next) { 
    // let token = req.headers.authorization.split(" ")[1];
    // console.log(req.headers.authorization.split(" ")[1]);
    // console.log("hhh");
    let token = req.cookies.refreshToken;
    // console.log(token);
    jwt.verify(token, "gagan", (err, data) => {
      if (!err) {
        next(); 
      } 
      else {
        return res.status(401).send({message: "Invalid Token"});
  
      }
    })
    // console.log("coming from midd"); 
  }

  module.exports = verifyToken;