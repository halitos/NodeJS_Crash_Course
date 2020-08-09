const http = require("http");

//-------Create server object---
http
  .createServer((req, res) => {
    //write response
    res.write("hello http");
    res.end();
  })
  .listen(5000, () => console.log("server running..."));
