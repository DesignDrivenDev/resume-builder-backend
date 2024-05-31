const express = require("express");
const router = express.Router();
const getUser = require("./getResume");
const resumeModel = require("../models/resumeModel");

const deleteResume = router.delete("/:id", getUser, async (req, res) => {
  try {
    const user = await resumeModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.json({ message: "Deleted User" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = deleteResume;
