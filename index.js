// Get express dependecy
var express = require('express');
var path = require('path');
var app = express(); // Instantiate it

var indexEP = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

// Browser routes
app.use('/', indexEP);

// Server configuration
app.set('port', 3000); // Set port number to listen to
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port' + server.address().port);
});
