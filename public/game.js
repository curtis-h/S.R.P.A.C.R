
var socket = io.connect('http://localhost:8000');
socket.on('news', function(data) {
    console.log(data);
});