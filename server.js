const express = require('express');
const app = express();
const db = require('./db.js');
const cors = require('cors');

// Enable CORS middleware
app.use(cors());  

// Body parser middleware to parse incoming request bodies
app.use(express.json());

// Define a route to handle the POST request from the frontend
app.post('/submit-data', (req, res) => {
  const postData = req.body; // Assuming the data is sent in the request body
  // Process the submitted data, e.g., add it to the database
  console.log('Data received from the frontend:', postData);
  res.send('Data received and processed');
});

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the Express server
const PORT = 3000; // Replace with your desired port
app.listen(PORT, () => {
  console.log(`Express server is listening on port ${PORT}`);
});