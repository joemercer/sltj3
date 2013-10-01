// Load Expressjs.
var express = require('express');

// Initialize Expressjs.
var app = express();

// Serve up static files from the app directory.
app.use(express.static(__dirname + '/app'));

// Start the server.
app.listen(8080, function() {
  console.log('Server running on port 8080...');
});