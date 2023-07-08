const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'groceryapplication'
};


const connection = mysql.createConnection(dbConfig);

// Create a new table
const createTableQuery = `CREATE TABLE IF NOT EXISTS dairybreakfast (
  itemname VARCHAR(255),
  Quality VARCHAR(255),
  Brand VARCHAR(255),
  Environmental VARCHAR(255),
  expire DATE,
  Price DECIMAL(10, 2)
  )`;

connection.query(createTableQuery, (error, result) => {
  if (error) {
    console.error('Error creating table:', error);
  } else {
    console.log('Table created successfully');
  }
});


// Start the server

const port = 5000;

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});