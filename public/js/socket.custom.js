var socket = io();

// Escuchar
socket.on('connect', function() {

    console.log('Conectado con el servidor.')

});

socket.on('disconnect', function() {
    console.log('Perdimos la conexión con el servidor.')
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta del servidor: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});