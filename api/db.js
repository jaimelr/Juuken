var mongoose = require('mongoose');
var dbUri = process.env.MONGODB_URI || 'mongodb://localhost/personalsite';

mongoose.connect(dbUri, {
  useMongoClient: true
});

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbUri);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});
mongoose.connection.on('err', function(err) {
  console.log('Mongoose connection error: ' + err);
})
