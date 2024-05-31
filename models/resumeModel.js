const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  descriptions: [{ type: String }],
});

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    experiences: [{ type: String }],
    projects: [projectSchema],
    hobbies: [{ type: String }],
    socialMediaUrls: [{ type: String }],
    role: { type: String },
  },
  {
    timestamps: true,
  }
);

const resumeModel = mongoose.model("resume", userSchema);

module.exports = resumeModel;
