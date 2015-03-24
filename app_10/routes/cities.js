var express = require('express');

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

var cities = {
  'Berlin': 'Best city'
};

var router = express.Router();

router.route('/')
  .get(function (request, response) {
    response.json(cities);
  })
  .post(parseUrlencoded, function (request, response) {
    if (request.body.description.length > 4) {
      var city = createCity(request.body.name, request.body.description);
      response.status(201).json(city);
    } else {
      response.status(400).json('Invalid City');
    }
  });

var createCity = function(name, description){
  cities[name] = description;
  return name;
};

module.exports = router;
