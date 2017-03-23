// Spawning two child commands, one to get a list of processes and the other to look for 'node'
var spawn = require('child_process').spawn,
    ps    = spawn('ps', ['ax']),
    grep  = spawn('grep', ['node']);

// Take the standard out of ps and pipe it into stdin of grep
ps.stdout.pipe(grep.stdin);
// Take stdout of grep and pipe it into stdout
grep.stdout.pipe(process.stdout);

// Looking for an err event on ps and if it does console.log
ps.stderr.on('data', function(data) {
  console.log('ps stderr: ' + data);
});

// Looking for an err event on grep and if it does, console.log
grep.stderr.on('data', function(data) {
  console.log('grep stderr: ' + data);
});