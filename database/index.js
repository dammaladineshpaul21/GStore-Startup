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
const createTableQuery = `CREATE TABLE IF NOT EXISTS new_table (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
)`;

connection.query(createTableQuery, (error, result) => {
  if (error) {
    console.error('Error creating table: ', error);
  } else {
    console.log('Table created successfully');
  }
});

app.post('/api/data', (req, res) => {
  const { control1, control2 } = req.body;
  const values = [control1, control2];
  const insertQuery = 'INSERT INTO new_table (name, email) VALUES (?, ?)';
  
  connection.query(insertQuery, values, (error, result) => {
    if (error) {
      console.error('Error inserting data: ', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Data inserted successfully' });
    }
  });
});

const port = 3000; // Set the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});