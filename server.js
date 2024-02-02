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
  const userText = req.body.userInput; // Extract the user-entered text from the request body
  // Add the user-entered text to the database
  db.insertUserText(userText, (err, result) => {
    if (err) {
      console.error('Error adding user text to the database:', err);
      res.status(500).send('Error adding user text to the database');
    } else {
      console.log('User text added to the database:', result);
      res.status(200).send('User text added to the database');
    }
  });
});

// Define a route to handle the GET request for /api/data
app.get('/api/data', (req, res) => {
  // Retrieve data from the database and send it as the response
  db.getData((err, data) => {
    if (err) {
      console.error('Error fetching data from the database:', err);
      res.status(500).send('Error fetching data from the database');
    } else {
      res.status(200).json(data);
    }
  });
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