const express = require('express');
// const connection = require('./server')
const mysql = require('mysql')
const cors = require('cors')
// const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken') 

const app = express();
const port = 3002;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miniproject'
  });
  

  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error(err); 
      process.exit(1);
    }
  
    console.log('Connected to database');
  }); 

// app.use(cors());
app.use(cors({
  origin:"http://localhost:3000",
  credentials:true, 
}))
app.use(express.json());
app.use(cookieParser("gagan", { httpOnly: true, signed: true }));
app.use(bodyParser.json())
// app.use(session({
//   secret: 'my secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60 * 60 * 24
//   }
// }))

// app.get('/', (req, res) => {
//   console.log(req.session.username);
//   if (req.session.username) {
//     return res.json({ valid: true, username: req.session.username});
//   }
//   else{
//     return res.json({ valid: false})
//   }
// })

app.get('/', verifyToken, (req, res) => {
  console.log("all goodd");
  res.send({message: "good"});
})

function verifyToken(req, res, next) { 
  // let token = req.headers.authorization.split(" ")[1];
  // console.log(req.headers.authorization.split(" ")[1]);
  console.log("hhh");
  let token = req.signedCookies.jwt;
  console.log(token);
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

app.post('/api/signup', (req, res) => { 
  // console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.userType;
  if (!username || !email || !password || !role) {
    return res.status(500);
  }
  else{ 
    connection.query('SELECT * FROM login WHERE username = ? OR email = ?', [username, email], async (err, result) => {
      if (err) {
          throw err;
      }
      if (result[0])
      return res.status(500).json({ status: "error", error: "Username or email already present" })
    else{
    connection.query('INSERT INTO login (username, email, password, role) VALUES (?, ?, ?, ?)', [username, email, password, role], async(error, result) => {
      if (error) 
        throw error;
      
    
      else{
        return res.status(200).json({ status: "success", success: "Username have successfully signed up" });
      }
    })
  }
    })
  
  }
})

app.post('/api/logout', (req, res) => {
  res.cookie('refreshToken', '', { expires: new Date(0) });
  return  res.status(200).json({message: "logout succes"});
})

app.post('/api/login', (req, res) => {
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

app.post('/api/contactus', verifyToken, async(req, res) => {
  const {name, email, message} = req.body;
  console.log(req.body)
  if (!email || !name || !message) {
    return res.status(500);
  }
  else{
    connection.query('INSERT INTO contactus (name, email, message) VALUES (?, ?, ?)', [name, email, message], async(error, result) => {
      if (error) throw error;
      else{
        return res.status(200).json({ status: "success", success: "User logged in successfully"});
      }
    })
  }
})

app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})