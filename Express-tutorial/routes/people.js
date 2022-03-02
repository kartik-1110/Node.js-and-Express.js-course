const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  deletePerson,
  createPersonPostman,
  updatePerson,
} = require("../controllers/people");

// using the get method to display the people array
router.get("/", getPeople);

// POST method
router.post("/", createPerson);

// POST method ===> postman
router.post("/postman", createPersonPostman);

// put method
router.put("/:id", updatePerson);

// delete method
router.delete("/:id", deletePerson);

// Another method for setting up the routes

// router.route("/").get(getPeople).post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
