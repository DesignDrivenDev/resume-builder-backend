const express = require("express");
const router = express.Router();
const resumeModel = require("../models/resumeModel");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await resumeModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific user
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

// Update a user
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.firstName != null) {
    res.user.firstName = req.body.firstName;
  }
  if (req.body.lastName != null) {
    res.user.lastName = req.body.lastName;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.address != null) {
    res.user.address = req.body.address;
  }
  if (req.body.mobileNumber != null) {
    res.user.mobileNumber = req.body.mobileNumber;
  }
  if (req.body.experiences != null) {
    res.user.experiences = req.body.experiences;
  }
  if (req.body.projects != null) {
    res.user.projects = req.body.projects;
  }
  if (req.body.descriptions != null) {
    res.user.projects = req.body.descriptions;
  }
  if (req.body.hobbies != null) {
    res.user.hobbies = req.body.hobbies;
  }
  if (req.body.socialMediaUrls != null) {
    res.user.socialMediaUrls = req.body.socialMediaUrls;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted User" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await resumeModel.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = router;
