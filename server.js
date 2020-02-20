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
var server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Super Server 3000</h1>');
    res.write('<h2>Saludador personalizado</h2>');
    res.write('<p>Escribe tu nombre sin apellidos y en min&uacute;sculas en la barra de direcciones.</p>');
    res.write('<p>Por ejemplo, si te llamas "HAL9000", escribe:</p>');
    res.write('<p><code>http://&lt;yourServerDomainOrIP:8888&gt;/hal9000</code></p>');
    res.write('<h2>Visite nuestro bar</h2>');
    res.write('<p><a href="/mantra/home">Entrar</a></p>');
    res.end();
  }
  else if (guests.includes(req.url.substr(1))) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<p>Hola, ' + capitalize(guests[guests.indexOf(req.url.substr(1))]) + '</p>');
    res.write('<p><a href="/">Volver</a></p>');
    res.end();
  }
  else if (req.url === '/mantra/home') {
    fs.readFile("./app/index.html", function (error, fileResp) {
      if (!error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileResp);
      }
      else {
        res.writeHead(404);
        res.write('<h1>Estos no son los androides que buscas</h1>');
        res.write('<p><a href="/">Volver</a></p>');
      }
      res.end();
    });
  }
  else {
    res.writeHead(404);
    res.write('<h1>Estos no son los androides que buscas</h1>');
    res.write('<p><a href="/">Volver</a></p>');
    res.end();
  }
});

// Start server
server.listen(listenPort);
console.log('Server started listening on ' + listenPort);