// Get express dependecy
var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');
var indexEP = require('./routes/index');
var devexEP = require('./routes/devex');
var devcheatEP = require('./routes/devcheat');
var microblogEP = require('./routes/microblog');
var opinionEP = require('./routes/opinion');
var bioEP = require('./routes/bio');

var devexCtrl = require('./api/controllers/devexController');

// Connection to database
require('./api/db.js');

var app = express(); // Instantiate it

// Serve files from public folder
app.use(express.static(path.join(__dirname, 'public')));
// Serve npm dependencies to front-end
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));
// Read data from POST, PUT methods.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//_________________________________________________Browser routes
app.use('/', indexEP);
app.use('/devex', devexEP);
app.use('/devcheat', devcheatEP);
app.use('/microblog', microblogEP);
app.use('/opinion', opinionEP);
app.use('/bio', bioEP);

//_________________________________________________API Routes
app.get('/api/devex', devexCtrl.getAllDevex);
app.post('/api/devex/new', devexCtrl.addDevex);

//_________________________________________________Server configuration
var PORT = process.env.PORT || 3000;
app.set('port', PORT); // Set port number to listen to
var server = app.listen(app.get('port'), function() {
  console.log('Server listening on port ' + server.address().port);
});
