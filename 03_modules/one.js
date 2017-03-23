// Variables are marked for export via "module.exports"

var count = 2;

var doIt = function(i, callback) {
  // do something, invoke callback
}

// Export the variable doIt with the value of the local variable doIt
module.exports.doIt = doIt;
// Export the variable foo with the value of 'bar'
module.exports.foo = "bar";