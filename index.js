const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pdf = require("html-pdf");
const ejs = require("ejs");
const path = require("path");
const User = require("./models/resumeModel");
const dotenv = require("dotenv");
dotenv.config();
const connectToMongo = require("./config/db");

const getAllResume = require("./controller/getAllResume");
const getSingleResume = require("./controller/getSingleResume");
const deleteResume = require("./controller/deleteResume");
const updateResume = require("./controller/updateResume");

const userSignup = require("./controller/userSignUp");
const userSignIn = require("./controller/userSignIn");

const app = express();

app.use(express.json());
app.use(cors());

// Generate PDF
const generatePDF = (user, callback) => {
  ejs.renderFile(
    path.join(__dirname, "views", "resumeTemplate.ejs"),
    { user },
    (err, data) => {
      if (err) {
        return callback(err);
      }
      pdf
        .create(data)
        .toFile(
          `./pdfs/${user.firstName}_${user.lastName}_Resume.pdf`,
          callback
        );
    }
  );
};

// Create new user and generate PDF
app.post("/resumes", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    generatePDF(user, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({
        message: "User created and PDF generated successfully",
        pdfUrl: `http://localhost:8080/pdf/${user.firstName}_${user.lastName}_Resume.pdf`,
      });
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

// Serve PDFs
app.use("/pdf", express.static(path.join(__dirname, "pdfs")));
// user other routes
app.use("/resumes", getAllResume);
app.use("/resume", getSingleResume);
app.use("/delete-resume", deleteResume);
app.use("/update-resume", updateResume);

// user login and signup
app.use("/user-signup", userSignup);
app.use("/user-signin", userSignIn);

const PORT = process.env.PORT || 8080;
async function bootstrap() {
  await connectToMongo();
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}

bootstrap();
