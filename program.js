var net = require('net');
var strftime = require('strftime');

var port = 8888;

if (process.argv.length > 2) {
    port = process.argv[2];
}

var server = net.createServer(function (socket) {

    socket.write(strftime('%Y-%m-%d %H:%M'));

    socket.end('\n');
});
server.listen(port);
