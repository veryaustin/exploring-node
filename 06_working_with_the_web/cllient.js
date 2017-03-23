var http = require('http');

var options = {
  host: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

console.log("Making a request...");

// var req = http.request('http://www.google.com/', function(response) {
//   console.log(response.statusCode);
//   response.pipe(process.stdout);
// });


// Using Options Object
// var req = http.request(options, function(response) {
//   console.log(response.statusCode);
//   response.pipe(process.stdout);
// });

// req.end();


// Using Get
// Get doesn't automatically follow redirects
http.get(options, function(response) {
  console.log(response.statusCode);
  response.pipe(process.stdout);
});
