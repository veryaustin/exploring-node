// Require one.js

var one = require('./one');

one.doIt(23, function (err, result) {
  console.log(result);
});

// Variable Foo is available since it was exported in one.js
console.log(one.foo);

// Variable Count is not available since it was not exported in one.js
console.log(one.count);

