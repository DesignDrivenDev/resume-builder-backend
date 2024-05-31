// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoURI = process.env.MONGO_URI ?? "";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connection established");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectToMongo;
