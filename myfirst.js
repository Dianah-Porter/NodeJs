//Creating a simple web server 

let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

console.log('Server is running on http://localhost:8080');