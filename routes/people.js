const express = require("express");
const router = express.Router();

const {
  readPeople,
  readPostman,
  createPeople,
  createPostman,
  updatePostman,
  deletePostman,
} = require("../controllers/people");

router.get("/", readPeople);
router.post("/", createPeople);

// /api/postman/people

//get
router.get("/postman", readPostman);

//post
router.post("/postman", createPostman);

//put
router.put("/postman/:id", updatePostman);

//delete
router.delete("/postman/:id", deletePostman);

module.exports = router;
