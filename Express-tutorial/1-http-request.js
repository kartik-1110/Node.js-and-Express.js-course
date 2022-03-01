const http = require("http");

// the 1st parameter in the writeHead is status code.
// in content-type we send the MIME type ('text/html')
const server = http.createServer((req, res) => {
  //   console.log(req.method);
  //   console.log(req.url);

  const url = req.url;
  // Home page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>Home page</h1>");
    res.end();
  }
  // About page
  else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About page</h1>");
    res.end();
  }
  // 404 error page
  //   status code for error is 404
  else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.write("<h1>Page not found!</h1>");
    res.end();
  }
});

server.listen(5000);
