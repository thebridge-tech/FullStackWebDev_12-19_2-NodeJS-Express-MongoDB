/* -------------- Initialization -------------- */

// Load dependencies
var express = require('express');
var path = require('path');
var capitalize = require('./lib/capitalize.js');

// Global scope
const listenPort = 8080;
const guests = [ "carmen", "david", "hector", "jose", "juan", "martin", "miguelangel" ];
const error404Message = `
  <h1>Estos no son los androides que buscas</h1>
  <p><a href="/">Volver</a></p>
`;

/* -------------- Main program -------------- */

// Create and initialize http server
var server = express();
server.use(express.static(__dirname + "/app")); // Set public root directory

// Requests handlers
server.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/app/index.html'));
});

server.get('/:guest', function (request, response) {
  if (guests.includes(request.params.guest)) {
    response.send(`
      <p>Hola, ${capitalize(guests[guests.indexOf(request.params.guest)])}</p>
      <p><a href="/">Volver</a></p>
    `);
  }
  else {
    response.status(404);
    response.send(error404Message);
  }
});

server.get('/mantra/home', function (request, response) {
  response.sendFile(path.join(__dirname + '/app/mantra.html'));
});

server.get('*', function (request, response) {
  response.status(404);
  response.send(error404Message);
});

// Start server
server.listen(listenPort, function () {
  console.log('Server started listening on ' + listenPort);
});
