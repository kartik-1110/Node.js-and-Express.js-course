const express = require("express");
const app = express();
const people = require("./Express-tutorial/routes/people");
const auth = require("./Express-tutorial/routes/auth");

// app.use ==> middleware
// static assets
app.use(express.static("./Express-tutorial/methods-public"));

// parsing form data
app.use(express.urlencoded({ extended: false }));

// router
app.use("/api/people", people);

// login router
app.use("/login", auth);

app.listen(5000, () => {
  console.log("Listening on port 5000 ");
});
