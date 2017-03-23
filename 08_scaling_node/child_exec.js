var exec = require('child_process').exec;

// exec executes a unix command. In this case it executes the uptime command as a child process
var child = exec('uptime', function(err, stdout, stderr) {
  if (err) {
    console.log('Error: ' + stderr);
  } else {
    console.log('Output is: ' + stdout);
  }
});

console.log("PID is " + child.pid);