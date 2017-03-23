var EventEmitter = require('events').EventEmitter;

var getResource = function(c) {
  // Instantiate a new EventEmitter
  var e = new EventEmitter();
  // Run function on next tick of the event loop
  process.nextTick(function() {
    var count = 0;
    // emit 'start' event
    e.emit('start');
    // Every 10 milliseconds run annonymouse function to emit data
    var t = setInterval(function() {
      // emit a 'data' event
      e.emit('data', ++count);
      // if count is equal to c, the loop has completed c # of times
      if (count === c) {
        // emit 'end' event
        e.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
  return(e);
};

// Run getResource (5 times)
var r = getResource(5);

// When 'start' event is emitted, console.log
r.on('start', function() {
  console.log("I've started!");
});

// When 'data' event is emitted, console.log
r.on('data', function(d) {
  console.log("   I received data -> " + d);
});

// When 'end' event is emitted, console.log
r.on('end', function(t) {
  console.log("I'm done, with " + t + " data events.");
});