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

module.exports = db;