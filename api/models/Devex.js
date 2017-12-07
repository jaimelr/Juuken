var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var devexSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  review: {
    type: Number
  }
  author: {
    type: String
  }
});
