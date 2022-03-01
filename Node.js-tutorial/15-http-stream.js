let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    const text = fs.readFileSync("./content/big.txt", "utf8");
    res.end(text);
  })
  .listen(5000);

// this is using fileStream
let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
