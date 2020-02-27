/* -------------- Initialization -------------- */

// Load dependencies
var express = require('express');
var path = require('path');

// Global scope
const listenPort = 8888;
const guests = [ "carmen", "david", "hector", "jose", "juan", "martin", "miguelangel" ];

const capitalize = (text) => {
  if (typeof text !== 'string') return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/* -------------- Main program -------------- */

// Create and initialize http server
var server = express();
server.use(express.static(__dirname + "/app")); // Set public root directory

// Requests
server.get('/', function (request, response) {
  response.send('Hello World!');
});

server.get('/mantra/home', function (request, response) {
  response.sendFile(path.join(__dirname + '/app/index.html'));
});

// Start server
server.listen(listenPort, function () {
  console.log('Server started listening on ' + listenPort);
});