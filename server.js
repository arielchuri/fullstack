const express = require('express');
const app = express();
const db = require('./db.js');

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
});