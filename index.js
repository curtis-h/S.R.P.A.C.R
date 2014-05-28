var server = require("./server");
var router = require("./routes");
server(router);

require('./sockets');
