const url = require("url");

const myUrl = new URL(
  "http://mywebsite.com:8080/hello.html?id=100&status=active"
);

//-----Serialised URL----
console.log(myUrl.href);
console.log(myUrl.toString()); //same

//-----Host (root domain)----
console.log(myUrl.host);

//-----Hostname-------
console.log(myUrl.hostname); //does not incl "port"

//-----port------
console.log(myUrl.port);

//-----Pathname-----
console.log(myUrl.pathname);

//----serialised Query---
console.log(myUrl.search);

//-----search Params Object------
console.log(myUrl.searchParams);

//----Add Param------
myUrl.searchParams.append("limit", 3);
console.log(myUrl.searchParams);

//----loop through Params----
myUrl.searchParams.forEach((value, name) => console.log(name, ":", value));
