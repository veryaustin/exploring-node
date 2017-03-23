// Require http module
var http = require('http');

// Create a new server
http.createServer(function(req, res) {
  // Set the response header to 200 with the Content-Type as plain-text
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // Ends the response with 'Hello World'
  res.end('Hello World\n');
  // Listen on port 1337
}).listen(1337);
// console.log that the http server is running
console.log('server running!');