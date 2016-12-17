
var express = require('express'); // import express library
var socket = require('socket.io');

var config = require('./config');

var app = express();
var server = app.listen(config.port);

app.use(express.static('public'));

console.log('[*] info: server running');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('[*] info: new connection ' + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data) {
        if (data.thickness < 50) {
            socket.broadcast.emit('mouse', data);
        }
    }
}

