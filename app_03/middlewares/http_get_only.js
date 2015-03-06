module.exports = function(request, response, next) {
  if (request.method === 'GET') {
    next();
  } else {
    response.status(405).send('Method not allowed.');
  }
};
