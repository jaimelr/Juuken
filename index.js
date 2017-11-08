// Get express dependecy
var express = require('express');
var app = express(); // Instantiate it

// Server configuration
app.set('port', 3000); // Set port number to listen to
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port' + server.address().port);
});
