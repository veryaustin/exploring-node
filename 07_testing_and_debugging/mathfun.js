var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// call takes random amount of time
var evenDoubler = function (v, callback) {
  // Generate random wait time
  var waitTime = Math.floor(Math.random() * (maxTime + 1));
  // If v is not even
  if (v % 2) {
    setTimeout(function () {
      // Callback a new error
      callback(new Error("Odd input"));
    }, waitTime);
  } else {
    setTimeout(function () {
      // Callback has no error, multiplies v*2 and the waitTime
      callback(null, v * 2, waitTime);
    }, waitTime);
  }
};

var evenDoublerSync = function(v) {
  if (v%2) {
    throw(new Error("Odd input"));
  } else {
    return(v*2);
  }
};


module.exports.evenDoubler = evenDoubler;
module.exports.evenDoublerSync = evenDoublerSync;

module.exports.foo = "bar";

