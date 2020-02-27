// -------------- Frontend --------------

fetch('http://localhost:3000/todolist', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    hora: document.getElementById("laHora").value,
    texto: document.getElementById("elTexto").value
  }),
  callback: function(response) {
    // Procesar la respuesta del servidor...
    // Si me doy error se lo digo al usuario
    // Y si no, vuelvo a peticionar los datos
    fetch('http://localhost:3000/todolist', function(response) {
      // Proceso los datos que me llegan para pintar en pantalla
    });
});

// -------------- Backend --------------

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/todolist', function (request, response) {
  // ---------- Enviar los datos que tiene que pintar ----------
  
  // 1) Pedir los datos a la BD
  // 2) Crear el array de JSONs (tal y como los necesita cliente)
  // 3) Enviar ese array (con .send())
});

server.post('/todolist', function (request, response) {
  // ---------- Procesar el json que me envian ----------

  // 1) Recoger el JSON que me envian
  // 2) Validar esos datos y procesar respuesta
    // 2.1) Comprobar que no existe ya en la BD
    // 2.2) En función de eso...
      // 2.2.1) Si hay error --> Enviar mensaje de error
      // 2.2.2) Si no hay error...
        // --> Escribir los datos en la BD
        //      (y si todo ha ido bien en la escritura, devolver OK)
});
