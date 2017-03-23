// Set the value of buffer to Hello
var b = new Buffer('Hello');

// console.log the string contained in the the b buffer
console.log(b.toString());

// console.log the string converted to base64 encoding located in the b buffer
console.log(b.toString('base64'));

// Create new buffer with 'World' and convert it to base64 encoding
var v = new Buffer('World').toString('base64');

// Pull out the first few characters of the buffer
console.log(b.toString('utf-8',0,2));