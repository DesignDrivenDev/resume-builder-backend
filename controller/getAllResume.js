const express = require("express");
const router = express.Router();
const resumeModel = require("../models/resumeModel");

// Get all users
const getAllResume = router.get("/", async (req, res) => {
  try {
    const users = await resumeModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = getAllResume;
