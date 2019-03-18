var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cows'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected!');
  }
});

module.exports = dbConnection;