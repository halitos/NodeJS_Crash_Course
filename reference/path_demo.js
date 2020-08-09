const path = require("path");

//-------Path (core module) methods

// Base file name
console.log(path.basename(__filename));

// Directoty name
console.log(path.dirname(__filename));
console.log(__dirname); //same but not in path module...

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
