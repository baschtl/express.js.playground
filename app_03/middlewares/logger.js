module.exports = function (request, response, next) {
  var startTime = +new Date();
  var url       = request.url;
  var method    = request.method;
  var stream    = process.stdout;
  var duration  = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    stream.write(method + " " + url + " took " + duration + " ms\n");
  });

  next();
};
