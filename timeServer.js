var net = require('net');


var date = new Date();

var server = net.createServer(function (socket){
  socket.write(date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + "\n");
  socket.end();
});

server.listen(process.argv[2]);
