console.log("stdout is writable?" + process.stdout.writable);

// stdout is a writeable stream
process.stdout.write("Hello");
process.stdout.write("World");