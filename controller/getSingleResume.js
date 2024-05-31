const express = require("express");
const router = express.Router();
const getUser = require("./getResume");

// Get a specific user
const getSingleResume = router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

module.exports = getSingleResume;
