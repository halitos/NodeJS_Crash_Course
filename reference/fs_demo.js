const fs = require("fs");
const path = require("path");

// Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });

// Create and write file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "hello this is content",
//   (err) => {
//     if (err) throw err;
//     console.log("file created and written");

//     // file append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " for node.js",
//       (err) => {
//         if (err) throw err;
//         console.log("file created and written");
//       }
//     );
//   }
// );

//-----Read File-------
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//----Rename file---------
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hola.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed");
  }
);
