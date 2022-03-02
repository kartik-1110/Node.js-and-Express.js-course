const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req ==> middleware ==> res

// method to use logger function in all of the routes
app.use([logger, authorize]);

// Home Page
app.get("/", (req, res) => {
  res.send("Home");
});

//About Page
app.get("/about", (req, res) => {
  res.send("About");
});

// Products page
app.get("/products", (req, res) => {
  res.send("Products");
});

app.listen(5000, () => {
  console.log("Listening on port 5000 ");
});
