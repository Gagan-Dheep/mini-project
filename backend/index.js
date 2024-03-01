const express = require('express');
// const connection = require('./server')
const mysql = require('mysql')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
 
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

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(session({
  secret: 'my secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  }
}))

app.get('/', (req, res) => {
  console.log(req.session.username);
  if (req.session.username) {
    return res.json({ valid: true, username: req.session.username});
  }
  else{
    return res.json({ valid: false})
  }
})

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
        connection.query('SELECT * FROM login WHERE email = ?', [email], async(err, resu) => {
          const userRole = resu[0];
          // console.log(userRole[0]);
          // console.log(role);
          if (userRole.role === role){
            req.session.username = resu[0].username;
            console.log(req.session.username);
            return res.status(200).json({ login: true});}
          else{
            return res.status(500).json({ status: "error", error: "Wrong credentials" })
          }
        })
        
      }}  
      else{
        return res.status(500).json({ status: "error", error: "Wrong email or password"});
      }
  })
}
}) 

app.post('/api/contactus', async(req, res) => {
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