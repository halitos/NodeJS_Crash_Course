const http = require("http");
const path = require("path");
const fs = require("fs");
const { error } = require("console");

// not efficient way of serving with css and images like that....
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "public", "index.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   }

//   if (req.url === "/api/users") {
//     const users = [
//       { name: "Bob", age: 40 },
//       { name: "Mike", age: 65 },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
// });

const server = http.createServer((req, res) => {
  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // Extension of file
  let extname = path.extname(filePath);

  //Initial content
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        // Some other server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
