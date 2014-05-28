var io = require('socket.io').listen(8000);

io.sockets.on('connection', function(socket) {
    // work out what room and assign
    var roomName = "room1";//+Object.keys(io.sockets.manager.rooms).length;

    // this should probably contain all info for creating controls too
    socket.emit('start', {room:roomName})
          .join(roomName)
          .broadcast.emit('playerJoined', {});
    
    
    socket.on('client_event', function(data) {
        console.log(data);
    });
});