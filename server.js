var http = require('http');
var url  = require('url');

module.exports = function(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+pathname+" received");
        
        route(pathname, response);
    }
    
    http.createServer(onRequest).listen("8080");
    console.log("Server Start");
}