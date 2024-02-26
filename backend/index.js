const express = require('express');
// const connection = require('./server')
const mysql = require('mysql')
const cors = require('cors')
 
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


app.post('/api/signup', (req, res) => { 
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (!username || !email || !password) {
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
    connection.query('INSERT INTO login (username, email, password) VALUES (?, ?, ?)', [username, email, password], async(error, result) => {
      if (error) 
        throw error;
      
    
      else{
        return res.status(200).json({ status: "success", error: "Username have successfully signed up" });
      }
    })
  }
    })
  
  }
})

app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  if (!email || !password) {
    return res.status(500);
  }
  else{
  connection.query('SELECT * FROM login WHERE email = ?', [email], async(error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      const user = result[0];

      if (password === user.password) {
        return res.status(200).json({ status: "success", success: "User logged in successfully"});
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