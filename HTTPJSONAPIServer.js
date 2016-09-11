var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  var parsedURL = url.parse(request.url, true);
  var date = new Date(parsedURL.query.iso);

  if(parsedURL.pathname == '/api/parsetime'){

    response.write(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}));
    return response.end();
  }else if (parsedURL.pathname == '/api/unixtime') {

    response.write(JSON.stringify({unixtime: date.getTime()}));
    return response.end();
  }else{
    return response.end('invalid api endpoint');
  }
});

server.listen(process.argv[2]);
