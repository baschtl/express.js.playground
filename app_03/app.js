var express = require('express');
var app     = express();

var http_get_only = require('./middlewares/http_get_only');
var logger        = require('./middlewares/logger');

app.use(http_get_only);
app.use(logger);

app.use(express.static('public'));

app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);
