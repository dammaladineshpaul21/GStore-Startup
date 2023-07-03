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
const createTableQuery = `CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  orderId VARCHAR(255) NOT NULL,
  customerId VARCHAR(255) NOT NULL,
  storeId VARCHAR(255) NOT NULL,
  orderDate DATE NOT NULL,
  totalAmount DECIMAL(10,2) NOT NULL
)`;

connection.query(createTableQuery, (error, result) => {
  if (error) {
    console.error('Error creating table:', error);
  } else {
    console.log('Table created successfully');
  }
});

// API route to create a new order
app.post('/api/orders', (req, res) => {
  const { orderId, customerId, storeId, orderDate, totalAmount } = req.body;

  // Insert the new order into the orders table
  const insertQuery = 'INSERT INTO orders (orderId, customerId, storeId, orderDate, totalAmount) VALUES (?, ?, ?, ?, ?)';
  const values = [orderId, customerId, storeId, orderDate, totalAmount];

  connection.query(insertQuery, values, (error, result) => {
    if (error) {
      console.error('Error creating new order:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'Order created successfully' });
    }
  });
});


// API route to fetch filtered orders
app.get('/api/ordersdata', (req, res) => {
  const { orderId, customerId, storeId, orderDate, totalAmount } = req.query;

  // Construct the SQL query based on the filter parameters
  let sql = 'SELECT * FROM orders WHERE 1=1';

  if (orderId) {
    sql += ` orderId = '${orderId}'`;
  } else if (customerId) {
    sql += ` customerId = '${customerId}'`;
  } else if (storeId) {
    sql += ` storeId = '${storeId}'`;
  } else if (orderDate) {
    sql += ` orderDate = '${orderDate}'`;
  } else if (totalAmount) {
    sql += ` totalAmount = '${totalAmount}'`;
  } else {
    res.status(400).json({ error: 'Invalid filter parameters' });
    return;
  }

  // Execute the SQL query
  connection.query(sql, (error, results) => {
    if (error) {
      console.log('Error fetching filtered orders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});
  
// Start the server

const port = 4000;

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});