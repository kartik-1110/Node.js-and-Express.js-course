const { createReadStream } = require("fs");

const stream = createReadStream("./content/first.txt", {
  highWaterMark: 200,
  encoding: "utf8",
});

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));

// it reads file in chucks of 64kb
// last buffer will be remainder
// highWatermark controls the size of buffer
