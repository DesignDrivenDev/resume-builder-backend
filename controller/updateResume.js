const express = require("express");
const router = express.Router();
const getUser = require("./getResume");
const resumeModel = require("../models/resumeModel");

// Update a user
// const updateUser = router.patch("/:id", getUser, async (req, res) => {
//   if (req.body.firstName != null) {
//     res.user.firstName = req.body.firstName;
//   }
//   if (req.body.lastName != null) {
//     res.user.lastName = req.body.lastName;
//   }
//   if (req.body.email != null) {
//     res.user.email = req.body.email;
//   }
//   if (req.body.address != null) {
//     res.user.address = req.body.address;
//   }
//   if (req.body.mobileNumber != null) {
//     res.user.mobileNumber = req.body.mobileNumber;
//   }
//   if (req.body.experiences != null) {
//     res.user.experiences = req.body.experiences;
//   }
//   if (req.body.projects != null) {
//     res.user.projects = req.body.projects;
//   }
//   if (req.body.descriptions != null) {
//     res.user.projects = req.body.descriptions;
//   }
//   if (req.body.hobbies != null) {
//     res.user.hobbies = req.body.hobbies;
//   }
//   if (req.body.socialMediaUrls != null) {
//     res.user.socialMediaUrls = req.body.socialMediaUrls;
//   }
//   try {
//     const updatedUser = await res.user.save();
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

const updateResume = router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await resumeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedUser) return res.status(404).send("User not found");
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = updateResume;
