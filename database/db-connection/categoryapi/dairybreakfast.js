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
  id INT AUTO_INCREMENT PRIMARY KEY,
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


// Define the API endpoint for inserting data into "dairybreakfast" table
app.post('/api/dairy-breakfast-order', (req, res) => {
  const { itemname, quality, brand, environmental, expire, price } = req.body;
  const insertQuery = `INSERT INTO dairybreakfast (itemname, Quality, Brand, Environmental, expire, Price) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [itemname, quality, brand, environmental, expire, price];
 
  connection.query(insertQuery, values, (error, result) => {
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Error inserting data' });
    } else {
      console.log('Data inserted successfully');
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});

// GET method to retrieve data from "dairybreakfast" table
app.get('/api/dairy-breakfast-order', (req, res) => {
  const selectQuery = `SELECT * FROM dairybreakfast`;

  connection.query(selectQuery, (error, results) => {
    if (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ message: 'Error retrieving data' });
    } else {
      console.log('Data retrieved successfully');
      res.status(200).json(results);
    }
  });
});




// Start the server
const port = 5000;

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});