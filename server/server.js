var express = require('express')
var mysql = require('mysql')
var parser = require('body-parser')

// DATABASE
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'cows'
});

connection.connect(function (err) {
    console.log('Connected to cows!');
});

// SERVER SET UP
var app = express()
var port = 3000;

app.use('/', express.static(__dirname + '/../client/dist'))

app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json())

app.get('/api/cows', (req, res) => {
  connection.query('select * from herd', function(err, result) {
    console.log(req.body);
    // console.log(`inside get result =${JSON.stringify(result)}`);
    res.send(result)
  })
});

app.post('/api/cows', (req, res) => {
  // req.body = JSON.parse(req.body);
  // console.log(req.body)
  var param = [req.body.cowname, req.body.descript];
  // console.log(param);
  var queryString = 'INSERT INTO herd(cowname, descript) VALUES (?, ?)';
  // var queryString = 'INSERT INTO herd VALUES (default, "steve", "some other guy")';
  connection.query(queryString , param,
    function (err, result) {
      console.log('POST result =' + JSON.stringify(result));
      res.json(req.body)
      // res.send('Cow added to herd with: ' + JSON.stringify(req.body));
    })
  });

  app.listen(port, () =>
  console.log(`listening on port ${port}`));

