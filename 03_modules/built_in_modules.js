var os = require('os');

// Converts memory to Mb
var toMb = function(f) {
  return(Math.round((f/1024/1024)*100)/100);
}

// Provides Hostname
console.log('Host: ' + os.hostname());
// Load average
console.log('15 min. load average: ' + os.loadavg()[2]);
// Free Memory/Total Memory
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()) + ' Mb free');