var mongoose = require('mongoose');
var dbUrl = 'mongodb://localhost/personalsite' || process.env.MONGODB_URI; 

mongoose.connect(dbUrl, {
  useMongoClient: true
});

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});
mongoose.connection.on('err', function(err) {
  console.log('Mongoose connection error: ' + err);
})
