var Resource = require('./resource');

// Instantiating a new Resource object and getting it back as the variable r
var r = new Resource(7);

// When 'start' event is emitted, console.log
r.on('start', function () {
  console.log("I've started!");
});

// When 'data' event is emitted, console.log
r.on('data', function (d) {
  console.log("   I received data -> " + d);
});

// When 'end' event is emitted, console.log
r.on('end', function (t) {
  console.log("I'm done, with " + t + " data events.");
});