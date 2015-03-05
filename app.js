var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.write('Hello world!\n');
  response.end();
});

app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  response.send(blocks);
  // or
  // response.json(blocks);
});

// redirect
app.get('/block', function(request, response) {
  response.redirect('/parts');
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
