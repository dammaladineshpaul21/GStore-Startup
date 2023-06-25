const express = require('express');
const bodyparser =  require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.listen(3000, ()=>{
    console.log("server is runing on 3000 port, tastycodeiz");
})

const dbConfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dammala#4091',
    // database: '' // Replace with your actual database name
  });

const createDatabaseQuery = "CREATE DATABASE groceryapplication"; // Replace with your desired database name

dbConfig.query(createDatabaseQuery, (error, results) => {
    if (error) {
      console.error("Error creating database: ", error);
    } else {
      console.log("Database created successfully");
    }
    dbConfig.end(); // Close the connection pool
  });