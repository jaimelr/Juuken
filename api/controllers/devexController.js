var Devex = require('../models/Devex.js');

exports.getAllDevex = function(req, res) {
  console.log("Getting All Developer Experiences");

  Devex.find( function(err, devexsList) {

    if (err) {
      console.log("Ups! Something went wrong while searching on DB");
      res.status(500).json(err);
    }
    res.status(200).json(devexsList);
  });
};

exports.getOneDevex = function(req, res) {
  console.log("Getting one Developer Experience");

  var id = req.params.id;

  Devex.findById(id, function(err, devex) {

    if(err) {
      console.log("Ups! Something went wrong while searching on DB");
      res.status(500).json(err.message);
    }
    res.status(200).json(devex);
  });
};

exports.addDevex = function(req, res) {
  console.log("Adding Developer Experience");

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
