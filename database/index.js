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
  password: 'Dammala#4091',
  database: 'groceryapplication'
};

const connection = mysql.createConnection(dbConfig);

// Create a new table
const createTableQuery = `CREATE TABLE IF NOT EXISTS customer_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customerId VARCHAR(255) NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
)`;

connection.query(createTableQuery, (error, result) => {
  if (error) {
    console.error('Error creating table: ', error);
  } else {
    console.log('Table created successfully');
  }
});

app.post('/api/data', (req, res) => {
  const { customerId, firstName, lastName, email, phoneNumber, address } = req.body;
  const values = [customerId, firstName, lastName, email, phoneNumber, address];
  const selectQuery = 'SELECT * FROM customer_data WHERE email = ? OR phoneNumber = ? OR customerId = ?';
  const insertQuery = 'INSERT INTO customer_data (customerId, firstName, lastName, email, phoneNumber, address) VALUES (?, ?, ?, ?, ?, ?)';

  // Check if email, phone number, or customer ID already exists
  connection.query(selectQuery, [email, phoneNumber, customerId], (error, results) => {
    if (error) {
      console.error('Error executing select query: ', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length > 0) {
      res.status(400).json({ error: 'Email, phone number, or customer ID already exists' });
      return;
    }

    // Insert the data if it does not already exist
    connection.query(insertQuery, values, (error, result) => {
      if (error) {
        console.error('Error inserting data: ', error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(201).json({ message: 'Data inserted successfully' });
      }
    });
  });
});

const port = 3000; // Set the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});