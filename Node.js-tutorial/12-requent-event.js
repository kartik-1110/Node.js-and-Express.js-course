const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end('Welcome')
// })

// Event emitter API
const server = http.createServer();
// this emits request event
// listen to event/ subscribe to it/ respond to it

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
