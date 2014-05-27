var fs   = require('fs');

module.exports = function(path, response) {
    console.log("Routing "+path);
    
    var filename = false;
    var filetype = "html";
    switch(path) {
        case '/': 
            filename = "index.html";
            break;
            
        case "/game":
            filename = "game.html";
            break;
        case "/game.js":
            filename = "game.js";
            filetype = "javascript";
            break;
        case "/socket.io":
            filename = "../node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js";
            filetype = "javascript";
            break;
            
        case "/favicon.ico":
        default:
            filename = false;
            break;
    }
    
    if(filename) {
        response.writeHead('200', {"Content-Type": "text/"+filetype});
        fs.createReadStream("public/"+filename)
          .on('end', function() {
              console.log('end stream');
              response.end();
          })
          .pipe(response);
    }
    else {
        response.writeHead('404', {"Content-Type": "text/html"});
        response.end();
    }
    
    return;
}