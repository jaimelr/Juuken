// Get express dependecy
var express = require('express');
var path = require('path');

var app = express(); // Instantiate it
var PORT = process.env.PORT || 3000;

var indexEP = require('./routes/index');
var devexEP = require('./routes/devex');
var devcheatEP = require('./routes/devcheat');
var microblogEP = require('./routes/microblog');
var opinionEP = require('./routes/opinion');
var bioEP = require('./routes/bio');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

// Browser routes
app.use('/', indexEP);
app.use('/devex', devexEP);
app.use('/devcheat', devcheatEP);
app.use('/microblog', microblogEP);
app.use('/opinion', opinionEP);
app.use('/bio', bioEP);

// Server configuration
app.set('port', PORT); // Set port number to listen to
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});
