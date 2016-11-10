// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies

// routes will go here

// ===============================
// Josie's tests with GET and POST
// see file simpleLoop.js to see
// how server.js is accessed
// ===============================

// http://localhost:8080/simpleLoop
app.get('/simpleLoop', function(req, res) {

  var myArray = 
  [ 
    { firstName : "josie", lastName : "barth"},
    { firstName : "jane", lastName : "smith"}
  ]

      // Allow cross-origin resource sharing
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");


  res.send(myArray);

});

// http://localhost:8080/
app.post('/', function(req, res) {

    // Step 0: Allow cross-origin resource sharing
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    // Step 1: Process the data
    theMessage = req.body.firstName;
    console.log("Someone sent a message: " + theMessage);

    var theMessage = "This is a message from server.js.  I received your post request.\n";
    theMessage += "Check your terminal where you ran $ node server.js\n";
    theMessage += "You should see, 'Someone sent a message: josie'\n";
    theMessage += "This is how the client: simpleLoop.js talks to the server: server.js";


    // Step 2: Send a confirmation
    res.send(theMessage);

});

// ===============================
// Josie's tests with functions 
// on the server side
// this is probably bad practice? 
// ===============================

// http://localhost:8080/multiplication?x=4&y=2
app.get('/multiplication', function(req, res) {
  var x = req.param('x');
  var y = req.param('y');

  var mult = multiply(x, y);

  console.log(mult);

  res.send(mult + " josie's test");
});

function multiply(n, m) {
    return (n * m);
}

// ====================================
// URL PARAMETERS =====================
// ====================================
// http://localhost:8080/api/users?id=4&token=sadsf4&geo=us
app.get('/api/users', function(req, res) {
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});

// http://localhost:8080/api/1
app.get('/api/:version', function(req, res) {
	res.send(req.params.version);
});

// parameter middleware that will run before the next routes
app.param('name', function(req, res, next, name) {

	// check if the user with that name exists
	// do some validations
	// add -dude to the name
	var modified = name + '-dude';

	// save name to the request
	req.name = modified;

	next();
});

// http://localhost:8080/api/users/chris
app.get('/api/users/:name', function(req, res) {
	// the user was found and is available in req.user
	res.send('What is up ' + req.name + '!');
});

// ====================================
// POST PARAMETERS ====================
// ====================================

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/api/users', function(req, res) {
	var user_id = req.body.id;
	var token = req.body.token;
	var geo = req.body.geo;

	res.send(user_id + ' ' + token + ' ' + geo);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);