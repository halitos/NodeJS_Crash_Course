const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });

// Create and write file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello this is content",
  (err) => {
    if (err) throw err;
    console.log("file created and written");
  }
);
