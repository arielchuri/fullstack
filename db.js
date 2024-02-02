const sqlite3 = require('sqlite3').verbose();

// Open a new SQLite database connection
const db = new sqlite3.Database('mydatabase.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database');
  }
});

// Close the database connection when the Node.js process exits
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Closed the SQLite database connection');
    }
  });
});

// Function to insert user-entered text into the userData table
function insertUserText(userText, callback) {
  const sql = 'INSERT INTO userData (udata) VALUES (?)';
  db.run(sql, [userText], function(err) {
    if (err) {
      console.error('Error inserting user text:', err);
      callback(err, null);
    } else {
      console.log('User text inserted with ID:', this.lastID);
      callback(null, { id: this.lastID });
    }
  });
}

// Function to retrieve data from the database
function getData(callback) {
  const sql = 'SELECT * FROM userData';
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error retrieving data:', err);
      callback(err, null);
    } else {
      callback(null, rows);
    }
  });
}

module.exports = {
  db,
  insertUserText,
  getData // Include the getData function in the module exports
};