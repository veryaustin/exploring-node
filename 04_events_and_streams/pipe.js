var request = require('request');

// var s = request('http://google.com');

// s.pipe(process.stdout);

request('http://google.com').pipe(process.stdout);