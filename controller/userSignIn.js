const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const router = express.Router();

const userSignIn = router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found. Please register." });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password." });
    }

    // Passwords match, send user data
    res.status(200).json(user);
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = userSignIn;
