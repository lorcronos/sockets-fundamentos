const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app); // Para que http use express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Iniciamos el socket
// io = conexión del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


// Para que escuche el servidor de http con los datos de express
server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);

});