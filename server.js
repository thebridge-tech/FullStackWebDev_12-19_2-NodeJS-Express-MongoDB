/* -------------- Initialization -------------- */

// Load dependencies
var http = require('http');
var fs = require('fs');

// Global scope
const listenPort = 8888;
const guests = [ "carmen", "david", "hector", "jose", "juan", "martin", "miguelangel" ];

const capitalize = (text) => {
  if (typeof text !== 'string') return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/* -------------- Main program -------------- */

// Create http server
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>Super Server 3000</h1>');
    response.write('<h2>Saludador personalizado</h2>');
    response.write('<p>Escribe tu nombre sin apellidos y en min&uacute;sculas en la barra de direcciones.</p>');
    response.write('<p>Por ejemplo, si te llamas "HAL9000", escribe:</p>');
    response.write('<p><code>http://&lt;yourServerDomainOrIP:8888&gt;/hal9000</code></p>');
    response.write('<h2>Visite nuestro bar</h2>');
    response.write('<p><a href="/mantra/home">Entrar</a></p>');
    response.end();
  }
  else if (guests.includes(request.url.substr(1))) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<p>Hola, ' + capitalize(guests[guests.indexOf(request.url.substr(1))]) + '</p>');
    response.write('<p><a href="/">Volver</a></p>');
    response.end();
  }
  else if (request.url === '/mantra/home') {
    fs.readFile("./app/index.html", function (error, fileResp) {
      if (!error) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(fileResp);
      }
      else {
        response.writeHead(404);
        response.write('<h1>Estos no son los androides que buscas</h1>');
        response.write('<p><a href="/">Volver</a></p>');
      }
      response.end();
    });
  }
  else {
    response.writeHead(404);
    response.write('<h1>Estos no son los androides que buscas</h1>');
    response.write('<p><a href="/">Volver</a></p>');
    response.end();
  }
});

// Start server
server.listen(listenPort);
console.log('Server started listening on ' + listenPort);