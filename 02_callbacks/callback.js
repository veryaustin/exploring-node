var maxTime = 1000;

// If input is even, double it
// If input is odd, error
// call takes random amount of time
var evenDoubler = function(v, callback) {
  // Generate random wait time
  var waitTime = Math.floor(Math.random()*(maxTime+1));
  // If v is not even
  if (v%2) {
    setTimeout(function() {
      // Callback a new error
      callback(new Error("Odd input"));
    }, waitTime);
  } else {
    setTimeout(function() {
      // Callback has no error, multiplies v*2 and the waitTime
      callback(null, v*2, waitTime);
    },waitTime);
  }
};

var count = 0;

for (var i = 0; i<10; i++) {
  console.log("Calling evenDouble for value: " + i);
  // Call evenDoubler and pass in an annonymouse function
  evenDoubler(i, function(err, results, time) {
    if (err) {
      console.log("ERROR: " + err.message);
    } else {
      console.log("The results are: " + results + " (" + time + " ms)");
    }
    if (++count === 10) {
      console.log("Done!");
    }
  });
}