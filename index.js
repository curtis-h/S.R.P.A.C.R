var server = require("./server");
var router = require("./routes");

server(router);

var io = require('socket.io').listen(8000);
io.sockets.on('connection', function(socket) {
    socket.emit('news', {hello:'world'});
    socket.on('client_event', function(data) {
        console.log(data);
    });
});