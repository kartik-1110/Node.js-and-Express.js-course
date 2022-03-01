const express = require("express");
const app = express();

// Home Page
app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});
// About Page
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

// error page
// Gets all the requests and if not found return a error
app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});

// listen method
app.listen(5000, () => {
  console.log("server is litening on port 5000");
});
