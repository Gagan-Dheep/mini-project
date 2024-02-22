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


app.post('/api/signup', (res, req) => { 
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  if (!username || !email || !password) {
    return res.statusCode(500);
  }
  else{
    connection.query('INSERT INTO login (username, email, password) VALUES (?, ?, ?)', [username, email, password], async(error, result) => {
      if (error) 
        throw error;
      
      else{
        return res.statusCode(201);
      }
   
    })
  }
})
app.listen(port, ()=> {
    console.log(`http://localhost:${port}`);
})