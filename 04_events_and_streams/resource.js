var util = require('util');
var EventEmitter = require('events').EventEmitter;


function Resource (m) {

  // No longer instantiating a event emitter var e = new EventEmitter() but rather 
  // since Resources inherits from EventEmitter, it is doing the emitting of events using self = this.
  var maxEvents = m;
  var self = this;

  // Run function on next tick of the event loop
  process.nextTick(function () {
    var count = 0;
    // emit 'start' event
    self.emit('start');
    // Every 10 milliseconds run annonymouse function to emit data
    var t = setInterval(function () {
      // emit a 'data' event
      self.emit('data', ++count);
      // if count is equal to c, the loop has completed c # of times
      if (count === maxEvents) {
        // emit 'end' event
        self.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
};

util.inherits(Resource, EventEmitter);

module.exports = Resource;