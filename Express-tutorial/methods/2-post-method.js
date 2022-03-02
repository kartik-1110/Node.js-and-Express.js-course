const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./Express-tutorial/methods-public"));

// parsing form data
app.use(express.urlencoded({ extended: false }));

// using the get method to display the people array
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// POST method form sending the form data
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
  res.send("post");
});

app.listen(5000, () => {
  console.log("Listening on port 5000 ");
});
