const { readFile } = require("fs");

console.log("started the first task");
// checking the file path
readFile("./content/first.text", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");
