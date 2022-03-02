const express = require("express");
const app = express();
let { people } = require("./data");

// using the get method to display the people array
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log("Listening on port 5000 ");
});
