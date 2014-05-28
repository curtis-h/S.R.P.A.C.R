var socket = io.connect('http://localhost:8000');
socket
    .on('start', function(data) {
        console.log(data);
    })
    .on('playerJoined', function(data) {
        alert('A new player has joined the game');
    })