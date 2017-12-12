var Devex = require('../models/Devex.js');

exports.addDevex = function(req, res) {
  console.log("Add Developer Experience");

  var title = req.body.title;
  var image = req.body.image;
  var description = req.body.description;
  var review = req.body.review;
  var author = req.body.author;

  Devex.create({
      title: title,
      image: image,
      description: description,
      review: review,
      author: author
    }, function(err, devex) {

    if(err) {
      res.status(400).json(err);
    }

    console.log("Success!")
    console.log(devex);
    res.status(200).json(devex);
  });
};
