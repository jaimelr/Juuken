// Get express dependecy
var express = require('express');
var path = require('path');

var app = express(); // Instantiate it
var PORT = process.env.PORT || 3000;

var indexEP = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

// Browser routes
app.use('/', indexEP);

// Server configuration
app.set('port', PORT); // Set port number to listen to
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});
