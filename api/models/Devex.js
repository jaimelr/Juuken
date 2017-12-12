var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var devexSchema = Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  review: {
    type: Number
  },
  author: {
    type: String
  }
});

module.exports = mongoose.model('Devex', devexSchema);
