const express = require("express");
const path = require("path");
const app = express();

// static setup and middleware
app.use(express.static("./public"));

// get files from index.html
app.get("/", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./Express-tutorial/navbar-app/index.html")
  );
});

// Error page or msg
app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

// setting up port
app.listen(5000, () => {
  console.log("listening on port 5000");
});
