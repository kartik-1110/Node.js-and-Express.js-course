const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }

  if (req.url === "/about") {
    res.end("This is out about section.");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>Page not found</p>
    `);
  //   console.log(req);
});

server.listen(5000);
